/* ===========================================
   DISPLAY LETTERS
=========================================== */

const diaryList = document.getElementById("diary-list");

if (diaryList) {

    letters.forEach((letter) => {

        const diaryCard = document.createElement("div");

        diaryCard.classList.add("diary-card");

        diaryCard.innerHTML = `

            <div class="diary-card-content">

                <h3>${letter.title}</h3>

                <span>${letter.date}</span>

            </div>

            <div class="diary-card-arrow">
                →
            </div>

        `;


        /* ===========================================
           OPEN LETTER
        =========================================== */

        diaryCard.addEventListener("click", () => {

            const letterBox = document.createElement("div");

            letterBox.classList.add("letter-popup");

            letterBox.innerHTML = `

                <div class="letter-popup-content">

                    <button class="close-letter">
                        ✕
                    </button>

                    <h2>${letter.title}</h2>

                    <span>${letter.date}</span>

                    <div class="letter-text">
                        ${letter.content}
                    </div>

                </div>

            `;

            document.body.appendChild(letterBox);


            /* ===========================================
               CLOSE LETTER
            =========================================== */

            const closeButton =
                letterBox.querySelector(".close-letter");

            closeButton.addEventListener("click", () => {

                letterBox.remove();

            });

        });


        diaryList.appendChild(diaryCard);

    });

}