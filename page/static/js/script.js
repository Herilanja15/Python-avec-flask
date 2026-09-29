/*    ELEMENTS */

const photos =
    document.querySelectorAll(".photo");

const previousButton =
    document.querySelector("#previous");

const nextButton =
    document.querySelector("#next");

const counter =
    document.querySelector("#counter");


/*    VARIABLES */

let currentIndex = 0;

const totalPhotos =
    photos.length;


/*    AFFICHAGE */

function displayPhotos() {

    photos.forEach((photo, index) => {

        /* Réinitialisation */

        photo.classList.remove(
            "active",
            "previous",
            "next"
        );


        /*    PHOTO CEN */

        if (index === currentIndex) {

            photo.classList.add("active");

        }


        /*    PHOTO G */

        else if (
            index ===
            (currentIndex - 1 + totalPhotos)
            % totalPhotos
        ) {

            photo.classList.add(
                "previous"
            );

        }


        /*    PHOTO D */

        else if (
            index ===
            (currentIndex + 1)
            % totalPhotos
        ) {

            photo.classList.add(
                "next"
            );

        }

    });


    /* O */

    counter.textContent =
        `${currentIndex + 1} / ${totalPhotos}`;

}


/*    PHOTO SUIVANTE */

function nextPhoto() {

    currentIndex++;

    if (currentIndex >= totalPhotos) {

        currentIndex = 0;

    }

    displayPhotos();

}


/*    PHOTO PRECEDENTE */

function previousPhoto() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex =
            totalPhotos - 1;

    }

    displayPhotos();

}


/*    BOUTONS */

nextButton.addEventListener(
    "click",
    nextPhoto
);


previousButton.addEventListener(
    "click",
    previousPhoto
);


/*    CLAVIER */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "ArrowRight") {

            nextPhoto();

        }


        if (event.key === "ArrowLeft") {

            previousPhoto();

        }

    }
);


/*    INITIALISATION */

if (totalPhotos > 0) {

    displayPhotos();

}