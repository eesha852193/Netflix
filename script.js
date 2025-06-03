document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".netflixdetails");
    const answers = document.querySelectorAll(".answer");

    questions.forEach((question, index) => {
        question.addEventListener("click", () => {
            const answer = answers[index];
            const icon = question.querySelector("i");

            answer.classList.toggle("show");

            // Toggle icon between plus and minus
            if (answer.classList.contains("show")) {
                icon.classList.replace("ri-add-large-fill", "ri-subtract-line");
            } else {
                icon.classList.replace("ri-subtract-line", "ri-add-large-fill");
            }

            // Optional: Close other answers when one is opened
            answers.forEach((otherAnswer, i) => {
                if (i !== index) {
                    otherAnswer.classList.remove("show");
                    questions[i].querySelector("i").classList.replace("ri-subtract-line", "ri-add-large-fill");
                }
            });
        });
    });
});
