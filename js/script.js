/* ===========================================
   SCROLL REVEAL
=========================================== */

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        if(revealTop < windowHeight - 120){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealSections);

revealSections();

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

const closeButton = document.getElementById("close-lightbox");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentMediaIndex = 0;

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

document.addEventListener("click", function (e) {

    for (let i = 0; i < 6; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.classList.add("click-heart");

        heart.style.left = e.clientX + "px";

        heart.style.top = e.clientY + "px";

        heart.style.fontSize = (12 + Math.random() * 18) + "px";

        heart.style.transform =
            `translate(${(Math.random()-0.5)*80}px, ${(Math.random()-0.5)*80}px)`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);

    }

});

/* ===========================================
   BACKGROUND MUSIC
=========================================== */

const music = document.getElementById("bg-music");
const musicButton = document.getElementById("music-toggle");

if (music && musicButton) {

    music.currentTime = 0;

    musicButton.addEventListener("click", () => {

        if (music.paused) {

            music.play();

            musicButton.textContent = "⏸ Pause Our Song";

        } else {

            music.pause();

            music.currentTime = 0;

            musicButton.textContent = "🎵 Play Our Song";

        }

    });

}

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