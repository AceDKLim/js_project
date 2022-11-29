//using selectors inside the element
// traversing the dom

const Question = document.querySelectorAll('.question');
const QuestBtns = document.querySelectorAll(".question-btn");

Question.forEach(function (Q) {
    const QuestionBtn = Q.querySelector('.question-btn');
    QuestionBtn.addEventListener("click", function () {
        Question.forEach(function (i) {
            if (i != Q) {
                i.classList.remove('show-text');
            }
        });
        Q.classList.toggle("show-text");
    });
});

