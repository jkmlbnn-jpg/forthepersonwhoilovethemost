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