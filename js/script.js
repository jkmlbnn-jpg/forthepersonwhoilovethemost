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
   IMAGE LIGHTBOX
=========================================== */

const images = document.querySelectorAll(
".memory-card img, .app-card img, .date-card img, .gallery-grid img"
);

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

const closeButton = document.getElementById("close-lightbox");

images.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add("active");

        lightboxImage.src = image.src;

    });

});


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


if (music) {

    let savedTime = localStorage.getItem("musicTime");
    let musicPaused = localStorage.getItem("musicPaused");


    if(savedTime){

        music.currentTime = savedTime;

    }


    if(musicPaused !== "true"){

        music.play().catch(()=>{});

    }


    music.addEventListener("timeupdate",()=>{

        localStorage.setItem(
            "musicTime",
            music.currentTime
        );

    });


    if(musicButton){

        musicButton.addEventListener("click",()=>{


            if(music.paused){

                music.play();

                localStorage.setItem(
                    "musicPaused",
                    "false"
                );

                musicButton.textContent =
                "⏸ Pause Our Song";


            }else{

                music.pause();

                localStorage.setItem(
                    "musicPaused",
                    "true"
                );

                musicButton.textContent =
                "🎵 Play Our Song";

            }


        });

    }

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