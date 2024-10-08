const questions = [
    {
        question: "Which platform is known for sharing short, viral videos?",
        options: ["Twitter", "TikTok", "Facebook", "YouTube"],
        answer: 1
    },
    {
        question: "Which platform uses the term 'tweets' for posts?",
        options: ["Instagram", "LinkedIn", "Twitter", "Snapchat"],
        answer: 2
    },
    {
        question: "Which platform is best known for professional networking?",
        options: ["LinkedIn", "TikTok", "Facebook", "Reddit"],
        answer: 0
    },
    {
        question: "Which platform is the best place for sharing long-form video content?",
        options: ["Instagram", "Pinterest", "YouTube", "TikTok"],
        answer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('quiz');
    const questionData = questions[currentQuestionIndex];

    let questionHTML = <h2>${questionData.question}</h2>;
    questionData.options.forEach((option, index) => {
        questionHTML += `
            <div>
                <input type="radio" id="option${index}" name="option" value="${index}">
                <label for="option${index}">${option}</label>
            </div>
        `;
    });

    questionElement.innerHTML = questionHTML;
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = parseInt(selectedOption.value);
        if (answer === questions[currentQuestionIndex].answer) {
            score++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showScore();
        }
    } else {
        alert("Please select an answer!");
    }
}

function showScore() {
    const quizElement = document.getElementById('quiz');
    const scoreElement = document.getElementById('score');
    const nextBtn = document.getElementById('next-btn');

    quizElement.style.display = 'none';
    nextBtn.style.display = 'none';
    scoreElement.textContent = ${score}/${questions.length};
    document.getElementById('score-container').style.display = 'block';
}

// Load the first question when the page loads
window.onload = function() {
    loadQuestion();
    document.getElementById('score-container').style.display = 'none';
};