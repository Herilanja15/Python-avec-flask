from flask import Flask, render_template
from pathlib import Path

app = Flask(__name__)


@app.route("/")
def index():

    photos_folder = Path(app.static_folder) / "photos"

    extensions = {
        ".jpg",
        ".jpeg",
        ".png",
        ".webp"
    }

    photos = []

    if photos_folder.exists():
        photos = sorted(
            photo.name
            for photo in photos_folder.iterdir()
            if photo.is_file()
            and photo.suffix.lower() in extensions
        )

    return render_template(
        "index.html",
        photos=photos
    )


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000
    )