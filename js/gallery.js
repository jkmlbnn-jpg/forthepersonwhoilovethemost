/* ===========================================
   IMAGE & VIDEO LIGHTBOX
=========================================== */

// Get every image and video inside galleries
const mediaItems = document.querySelectorAll(
".memory-card img, .app-card img, .date-card img, .gallery-grid img, .gallery-grid video"
);

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxVideo = document.getElementById("lightbox-video");
const mediaCounter = document.getElementById("media-counter");

const closeButton = document.getElementById("close-lightbox");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentMediaIndex = 0;

let counterTimeout;

function showMedia(index){

    const media = mediaItems[index];

    if(media.tagName === "IMG"){

        lightboxVideo.pause();
        lightboxVideo.style.display = "none";

        lightboxImage.style.display = "block";
        lightboxImage.src = media.src;

    }

    else{

        lightboxImage.style.display = "none";

        lightboxVideo.style.display = "block";
        lightboxVideo.src = media.querySelector("source").src;

        lightboxVideo.load();
    }

    if (mediaCounter) {

    mediaCounter.textContent =
        `${index + 1} / ${mediaItems.length}`;

    showCounter();

}

}

function showCounter() {

    if (!mediaCounter) return;

    mediaCounter.style.opacity = "1";

    clearTimeout(counterTimeout);

    counterTimeout = setTimeout(() => {

        mediaCounter.style.opacity = "0";

    }, 2000);

}

mediaItems.forEach((media, index) => {

    media.addEventListener("click", () => {

        currentMediaIndex = index;

        lightbox.classList.add("active");

        showMedia(currentMediaIndex);

    });

});

if (nextButton) {

    nextButton.addEventListener("click", () => {

        currentMediaIndex++;

        if (currentMediaIndex >= mediaItems.length) {

            currentMediaIndex = 0;

        }

        showMedia(currentMediaIndex);

    });

}

if (prevButton) {

    prevButton.addEventListener("click", () => {

        currentMediaIndex--;

        if (currentMediaIndex < 0) {

            currentMediaIndex = mediaItems.length - 1;

        }

        showMedia(currentMediaIndex);

    });

}

if(closeButton){

    closeButton.addEventListener("click",()=>{

        lightbox.classList.remove("active");

    });

}

if(lightbox){

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            lightbox.classList.remove("active");

        }

    });

}

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape" && lightbox){

        lightbox.classList.remove("active");

    }

});

/* ===========================================
   VIDEO PLAYBACK
=========================================== */

const videos = document.querySelectorAll(".gallery-video");

videos.forEach(video => {

    video.addEventListener("play",()=>{

        if(music){

            music.pause();

            localStorage.setItem(
                "musicPaused",
                "true"
            );

        }

    });

});