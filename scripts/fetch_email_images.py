import imaplib
import email
import os
import datetime
from pathlib import Path

# ── Config ────────────────────────────────────────────────────────────────────

IMAP_HOST = "imap.gmail.com"
IMAP_PORT = 993
EMAIL_ADDRESS = os.environ["PHOTO_BOT_EMAIL_ADDRESS"]
EMAIL_APP_PASSWORD = os.environ["EMAIL_APP_PASSWORD"]
ROOT_DIR = Path(__file__).parent.parent
MAIN_GALLERY_DIR: Path = ROOT_DIR / "src" / "Gallery" / "Gallery"
CAROUSEL_IMAGE_DIR: Path = ROOT_DIR / "src" / "Gallery" / "Carousel"
CAROUSEL_MAX_IMAGE_COUNT = 10  # Number of images to keep for the carousel

ALLOWED_EXTENSIONS = {
    "image/jpeg": ".jpg",
    "image/png": ".png"
}

# ── Setup ─────────────────────────────────────────────────────────────────────

os.makedirs(MAIN_GALLERY_DIR, exist_ok=True)
os.makedirs(CAROUSEL_IMAGE_DIR, exist_ok=True)


def safe_filename(name: str) -> str:
    """Strip characters that are unsafe in filenames."""
    keepchars = (" ", ".", "_", "-")
    return "".join(c for c in name if c.isalnum() or c in keepchars).rstrip()


def timestamp_prefix() -> str:
    return datetime.datetime.now().strftime("%Y%m%d_%H%M%S")

def prepare_carousel_images():
    """Clear the carousel and rebuild it with the latest CAROUSEL_MAX_IMAGE_COUNT images from the gallery."""
    # Clear existing carousel images
    for f in CAROUSEL_IMAGE_DIR.glob("*"):
        if f.suffix.lower() in (".jpg", ".png"):
            f.unlink()

    # Copy the latest N images from the gallery (sorted by filename = sorted by timestamp)
    recent_images = sorted(MAIN_GALLERY_DIR.glob("*"), reverse=True)[:CAROUSEL_MAX_IMAGE_COUNT]
    for img in recent_images:
        carousel_path = CAROUSEL_IMAGE_DIR / img.name
        with open(img, "rb") as src, open(carousel_path, "wb") as dst:
            dst.write(src.read())

    print(f"  ✓ Carousel rebuilt with {len(recent_images)} image(s).")

# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    print(f"Connecting to {IMAP_HOST}…")
    with imaplib.IMAP4_SSL(IMAP_HOST, IMAP_PORT) as mail:
        mail.login(EMAIL_ADDRESS, EMAIL_APP_PASSWORD)
        mail.select("inbox")

        # Search for unread emails only
        status, message_ids = mail.search(None, "UNSEEN")
        if status != "OK":
            print(f"Failed to search emails. Status: {status}")
            return

        if not message_ids[0]:
            print("No unread emails found.")
            return

        ids = message_ids[0].split()
        print(f"Found {len(ids)} unread email(s).")
        images_saved = 0

        for msg_id in ids:
            status, msg_data = mail.fetch(msg_id, "(RFC822)")
            if status != "OK":
                print(f"  ⚠ Could not fetch message {msg_id}, skipping.")
                continue

            raw_email = msg_data[0][1]
            msg = email.message_from_bytes(raw_email)
            subject = msg.get("Subject", "(no subject)")
            print(f"  Processing: {subject}")

            for part in msg.walk():
                content_type = part.get_content_type()

                # Skip non-image parts
                if content_type not in ALLOWED_EXTENSIONS:
                    print(f"    ⚠ Skipping part with content type '{content_type}' (not an allowed image type).")
                    continue

                # Grab filename from the attachment header if available,
                # otherwise fall back to a generated name
                filename = part.get_filename()
                ext = ALLOWED_EXTENSIONS[content_type]

                if filename:
                    filename = safe_filename(filename)
                    # Make sure the extension is correct
                    if not filename.lower().endswith(ext):
                        filename += ext
                else:
                    filename = f"image{ext}"

                # Prefix with timestamp to avoid collisions across emails
                unique_name = f"{timestamp_prefix()}_{images_saved:03d}_{filename}"
                out_path = MAIN_GALLERY_DIR / unique_name

                payload = part.get_payload(decode=True)
                if not payload:
                    print(f"    ⚠ Empty payload for {filename}, skipping.")
                    continue

                with open(out_path, "wb") as f:
                    f.write(payload)

                print(f"    ✓ Saved: {unique_name}")
                images_saved += 1

            # Mark email as read so it isn't processed again next run
            mail.store(msg_id, "+FLAGS", "\\Seen")

        # Rebuild carousel once after all emails have been processed
        prepare_carousel_images()

        print(f"\nDone. {images_saved} image(s) saved to '{MAIN_GALLERY_DIR}'.")


if __name__ == "__main__":
    main()