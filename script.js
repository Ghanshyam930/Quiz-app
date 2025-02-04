
const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const scoreCard = document.querySelector('.scoreCard');
const performanceBox = document.querySelector('.performance');
const alert = document.querySelector('.alert');
const startBtn = document.querySelector('.startBtn');
const timer = document.querySelector('.timer');
const restartBtn = document.querySelector('.restartBtn');

// High Score variable
let highScore = localStorage.getItem('highScore') || 0;

// Make an array of objects that stores question, choices of question and answer
const quiz = [
    // HTML Questions
    {
        question: "Q. Which of the following is a valid HTML tag?",
        choices: ["<container>", "<div>", "<block>", "<section>"],
        answer: "<div>"
    },
    {
        question: "Q. Which HTML element is used to display images?",
        choices: ["<img>", "<image>", "<src>", "<picture>"],
        answer: "<img>"
    },
    {
        question: "Q. What is the correct HTML tag for the largest heading?",
        choices: ["<head>", "<h1>", "<h6>", "<header>"],
        answer: "<h1>"
    },
    {
        question: "Q. Which of the following is the correct way to link a CSS file in HTML?",
        choices: ['<link href="styles.css" rel="stylesheet">', '<style href="styles.css">', '<script src="styles.css">', '<css src="styles.css">'],
        answer: '<link href="styles.css" rel="stylesheet">'
    },
    {
        question: "Q. What is the default value of the 'position' property in CSS?",
        choices: ["static", "relative", "absolute", "fixed"],
        answer: "static"
    },
    {
        question: "Q. Which HTML element is used to define a hyperlink?",
        choices: ["<link>", "<a>", "<url>", "<href>"],
        answer: "<a>"
    },
    {
        question: "Q. Which of the following HTML elements are used for creating lists?",
        choices: ["<ol> and <ul>", "<list>", "<dl> and <li>", "<ul> and <li>"],
        answer: "<ul> and <li>"
    },
    {
        question: "Q. What does the 'alt' attribute in an <img> tag do?",
        choices: ["Specifies an alternative image", "Provides alternative text", "Links to an alternative image", "Specifies an alternate file path"],
        answer: "Provides alternative text"
    },
    {
        question: "Q. Which of the following is not a valid input type for an <input> tag?",
        choices: ["text", "password", "checkbox", "text-field"],
        answer: "text-field"
    },
    {
        question: "Q. What does the <title> element do in HTML?",
        choices: ["Defines the title of the webpage", "Sets the background color of the page", "Creates a link to an external style", "Defines the header of the webpage"],
        answer: "Defines the title of the webpage"
    },
    {
        question: "Q. Which HTML tag is used for creating a dropdown list?",
        choices: ["<list>", "<input>", "<dropdown>", "<select>"],
        answer: "<select>"
    },

    // CSS Questions
    {
        question: "Q. What property is used to change the background color of an element in CSS?",
        choices: ["color", "background-color", "bg-color", "color-background"],
        answer: "background-color"
    },
    {
        question: "Q. Which property is used to change the font of an element?",
        choices: ["font-style", "font-family", "font-size", "font-type"],
        answer: "font-family"
    },
    {
        question: "Q. How do you select an element with the class 'example' in CSS?",
        choices: [".example", "#example", "example", "div.example"],
        answer: ".example"
    },
    {
        question: "Q. What does the 'padding' property do in CSS?",
        choices: ["Adds space inside an element", "Adds space outside an element", "Changes the background color", "Changes the font size"],
        answer: "Adds space inside an element"
    },
    {
        question: "Q. Which property is used to change the text color in CSS?",
        choices: ["text-color", "color", "font-color", "text-style"],
        answer: "color"
    },
    {
        question: "Q. What does the 'border' property in CSS do?",
        choices: ["Sets the border radius", "Adds a border around an element", "Changes the font style", "Adds a shadow to an element"],
        answer: "Adds a border around an element"
    },
    {
        question: "Q. How do you apply styles to multiple elements in CSS?",
        choices: [".element1, .element2", ".element1 .element2", "#element1, #element2", "element1 element2"],
        answer: ".element1, .element2"
    },
    {
        question: "Q. Which property is used to control the layout of an element in CSS?",
        choices: ["position", "align", "flex", "layout"],
        answer: "position"
    },
    {
        question: "Q. What is the default value of the 'display' property in CSS?",
        choices: ["block", "inline", "inline-block", "none"],
        answer: "block"
    },
    {
        question: "Q. Which CSS property is used to make text bold?",
        choices: ["font-weight", "font-size", "font-family", "font-style"],
        answer: "font-weight"
    },

    // JavaScript Questions
    {
        question: "Q. Which of the following is a valid variable declaration in JavaScript?",
        choices: ["var name;", "let name;", "const name;", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Q. What is the output of the following code: console.log(2 + '2');",
        choices: ["4", "22", "NaN", "undefined"],
        answer: "22"
    },
    {
        question: "Q. How do you create a function in JavaScript?",
        choices: ["function myFunction()", "function:myFunction()", "function = myFunction()", "All of the above"],
        answer: "function myFunction()"
    },
    {
        question: "Q. What does 'console.log()' do in JavaScript?",
        choices: ["Logs data to the console", "Creates a function", "Declares a variable", "Adds an event listener"],
        answer: "Logs data to the console"
    },
    {
        question: "Q. What is the difference between '==' and '===' in JavaScript?",
        choices: ["'==' compares values, '===' compares values and types", "'==' compares values and types, '===' compares values", "There is no difference", "None of the above"],
        answer: "'==' compares values, '===' compares values and types"
    },
    {
        question: "Q. How do you add a comment in JavaScript?",
        choices: ["// This is a comment", "/* This is a comment */", "/* This is a comment", "// This is a comment*/"],
        answer: "// This is a comment"
    },
    {
        question: "Q. How do you declare a constant in JavaScript?",
        choices: ["var", "let", "const", "final"],
        answer: "const"
    },
    {
        question: "Q. Which of the following is the correct way to call a function in JavaScript?",
        choices: ["function()", "call function()", "function call()", "All of the above"],
        answer: "function()"
    },
    {
        question: "Q. What does the 'return' statement do in a function?",
        choices: ["Exits the function", "Returns a value from the function", "Both of the above", "None of the above"],
        answer: "Both of the above"
    },
    {
        question: "Q. Which method is used to add an element at the end of an array in JavaScript?",
        choices: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
    },
];

let score = 0;
let currentQuestionIndex = 0;
let quizOver = false;
let timeLeft = 15;
let timerID;

const startGame = () => {
    startBtn.style.display = 'none';
    container.style.display = 'block';
    showQuestions();
    startTimer();
};

const startTimer = () => {
    timeLeft = 15; 
    timer.textContent = timeLeft; 
    clearInterval(timerID); 
    timerID = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerID);
            checkAnswer();
        }
    }, 1000);
};

const showQuestions = () => {
    const currentQuestion = quiz[currentQuestionIndex];
    questionBox.textContent = currentQuestion.question;
    choicesBox.innerHTML = '';
    currentQuestion.choices.forEach(choice => {
        const choiceElem = document.createElement('div');
        choiceElem.classList.add('choice');
        choiceElem.textContent = choice;
        choiceElem.addEventListener('click', () => {
            document.querySelectorAll('.choice').forEach(c => c.classList.remove('selected'));
            choiceElem.classList.add('selected');
        });
        choicesBox.appendChild(choiceElem);
    });
};

const checkAnswer = () => {
    const choices = document.querySelectorAll('.choice');
    const selectedChoice = [...choices].find(choice => choice.classList.contains('selected'));
    if (!selectedChoice) return;
    if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
        showQuestions();
        startTimer();
    } else {
        quizOver = true;
        clearInterval(timerID);
        scoreCard.textContent = `Final Score: ${score}`;
        performanceBox.textContent = `Your performance is: `;

        if (score === quiz.length) {
            performanceBox.textContent += "Very Good!";
        } else if (score >= 20) {
            performanceBox.textContent += "Good!";
        } else if (score >= 10) {
            performanceBox.textContent += "Average!";
        } else if (score >= 5) {
            performanceBox.textContent += "Slow!";
        }

        alert.style.display = 'block';
        alert.textContent = 'Quiz Over!';

        if (score > highScore) {
            highScore = score;
            localStorage.setItem('highScore', highScore);
            alert.textContent = `New High Score: ${highScore}!`;
        }
    }
};

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', checkAnswer);

restartBtn.addEventListener('click', () => {
    score = 0;
    currentQuestionIndex = 0;
    quizOver = false;
    alert.style.display = 'none';
    performanceBox.textContent = '';
    scoreCard.textContent = '';
    startGame();
});
