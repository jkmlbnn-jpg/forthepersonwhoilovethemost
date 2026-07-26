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
".memory-card img, .app-card img, .date-card img"
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


closeButton.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});


lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});


document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

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

musicButton.addEventListener("click", () => {

    if (music.paused) {
        music.play();
        musicButton.textContent = "⏸ Pause Our Song";
    } else {
        music.pause();
        musicButton.textContent = "🎵 Play Our Song";
    }

});