from flask import Flask, render_template
from pathlib import Path

app = Flask(__name__)


@app.route("/")
def index():

    # Récupération automatique des photos
    photos_folder = Path(
        app.static_folder
    ) / "photos"

    extensions = {
        ".jpg",
        ".jpeg",
        ".png",
        ".webp"
    }

    photos = sorted([
        photo.name
        for photo in photos_folder.iterdir()
        if photo.is_file()
        and photo.suffix.lower() in extensions
    ])

    return render_template(
        "index.html",
        photos=photos
    )


if __name__ == "__main__":

    app.run(
        debug=True,
        host="0.0.0.0",
        port=5000
    )