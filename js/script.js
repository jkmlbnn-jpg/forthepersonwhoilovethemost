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
   CLICK HEART EFFECT
=========================================== */

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

