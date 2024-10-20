const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;
let Quizscore = 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    Quizscore = 0;
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) { 
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true");
    });
    
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    
    if (correct) {
        Quizscore++;
    }

    document.getElementById('score').innerHTML = `Score: ${Quizscore}`;
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}


const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Paris', correct: true },
            { text: 'Rome', correct: false },
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false },
            { text: 'Venus', correct: false }
        ]
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        answers: [
            { text: 'William Shakespeare', correct: true },
            { text: 'Charles Dickens', correct: false },
            { text: 'Jane Austen', correct: false },
            { text: 'Mark Twain', correct: false }
        ]
    },
    {
        question: 'What is 10 / 2?',
        answers: [
            { text: '5', correct: true },
            { text: '2', correct: false },
            { text: '10', correct: false },
            { text: '20', correct: false }
        ]
    },
    {
        question: 'Which language is used for web development?',
        answers: [
            { text: 'Python', correct: true },
            { text: 'Java', correct: false },
            { text: 'C++', correct: false },
            { text: 'Swift', correct: false }
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: [
            { text: 'Vincent van Gogh', correct: false },
            { text: 'Pablo Picasso', correct: false },
            { text: 'Leonardo da Vinci', correct: true },
            { text: 'Claude Monet', correct: false }
        ]
    },
    {
        question: 'Which is the largest ocean on Earth?',
        answers: [
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: false },
            { text: 'Pacific Ocean', correct: true },
            { text: 'Arctic Ocean', correct: false }
        ]
    },
    {
        question: 'What is 15 + 25?',
        answers: [
            { text: '35', correct: false },
            { text: '40', correct: false },
            { text: '50', correct: true },
            { text: '55', correct: false }
        ]
    },
    {
        question: 'What year did the Titanic sink?',
        answers: [
            { text: '1910', correct: false },
            { text: '1912', correct: true },
            { text: '1920', correct: false },
            { text: '1905', correct: false }
        ]
    },
    {
        question: 'Which element has the chemical symbol "O"?',
        answers: [
            { text: 'Oxygen', correct: true },
            { text: 'Osmium', correct: false },
            { text: 'Oganesson', correct: false },
            { text: 'Obsidian', correct: false }
        ]
    },
    {
        question: 'What is the square root of 64?',
        answers: [
            { text: '6', correct: false },
            { text: '8', correct: true },
            { text: '9', correct: false },
            { text: '7', correct: false }
        ]
    },
    {
        question: 'Which country is known as the Land of the Rising Sun?',
        answers: [
            { text: 'China', correct: false },
            { text: 'South Korea', correct: false },
            { text: 'Japan', correct: true },
            { text: 'Thailand', correct: false }
        ]
    },
    {
        question: 'Who was the first man to walk on the moon?',
        answers: [
            { text: 'Yuri Gagarin', correct: false },
            { text: 'Neil Armstrong', correct: true },
            { text: 'Buzz Aldrin', correct: false },
            { text: 'Michael Collins', correct: false }
        ]
    },
    {
        question: 'What is the largest mammal on Earth?',
        answers: [
            { text: 'Elephant', correct: false },
            { text: 'Blue Whale', correct: true },
            { text: 'Giraffe', correct: false },
            { text: 'Great White Shark', correct: false }
        ]
    },
    {
        question: 'What is the chemical formula for water?',
        answers: [
            { text: 'H2O', correct: true },
            { text: 'CO2', correct: false },
            { text: 'O2', correct: false },
            { text: 'NaCl', correct: false }
        ]
    },
    {
        question: 'Who discovered gravity?',
        answers: [
            { text: 'Albert Einstein', correct: false },
            { text: 'Isaac Newton', correct: true },
            { text: 'Galileo Galilei', correct: false },
            { text: 'Nikola Tesla', correct: false }
        ]
    },
    {
        question: 'What is the boiling point of water?',
        answers: [
            { text: '90°C', correct: false },
            { text: '100°C', correct: true },
            { text: '110°C', correct: false },
            { text: '80°C', correct: false }
        ]
    },
    {
        question: 'Which programming language is primarily used for iOS development?',
        answers: [
            { text: 'Swift', correct: true },
            { text: 'Kotlin', correct: false },
            { text: 'Python', correct: false },
            { text: 'JavaScript', correct: false }
        ]
    },
    {
        question: 'What is the capital of Japan?',
        answers: [
            { text: 'Seoul', correct: false },
            { text: 'Beijing', correct: false },
            { text: 'Tokyo', correct: true },
            { text: 'Bangkok', correct: false }
        ]
    },
    {
        question: 'What is the smallest prime number?',
        answers: [
            { text: '1', correct: false },
            { text: '2', correct: true },
            { text: '3', correct: false },
            { text: '5', correct: false }
        ]
    },
    {
        question: 'Who was the first President of the United States?',
        answers: [
            { text: 'Abraham Lincoln', correct: false },
            { text: 'George Washington', correct: true },
            { text: 'Thomas Jefferson', correct: false },
            { text: 'John Adams', correct: false }
        ]
    },
    {
        question: 'Which continent is the Sahara Desert located on?',
        answers: [
            { text: 'Asia', correct: false },
            { text: 'Africa', correct: true },
            { text: 'Australia', correct: false },
            { text: 'South America', correct: false }
        ]
    },
    {
        question: 'What is the hardest natural substance on Earth?',
        answers: [
            { text: 'Gold', correct: false },
            { text: 'Iron', correct: false },
            { text: 'Diamond', correct: true },
            { text: 'Graphite', correct: false }
        ]
    },
    {
        question: 'Which country hosted the 2016 Summer Olympics?',
        answers: [
            { text: 'China', correct: false },
            { text: 'Brazil', correct: true },
            { text: 'Japan', correct: false },
            { text: 'Russia', correct: false }
        ]
    },
    {
        question: 'How many continents are there in the world?',
        answers: [
            { text: '5', correct: false },
            { text: '6', correct: false },
            { text: '7', correct: true },
            { text: '8', correct: false }
        ]
    },
    {
        question: 'What is the freezing point of water in Celsius?',
        answers: [
            { text: '0°C', correct: true },
            { text: '100°C', correct: false },
            { text: '-10°C', correct: false },
            { text: '50°C', correct: false }
        ]
    },
    {
        question: 'Who invented the telephone?',
        answers: [
            { text: 'Thomas Edison', correct: false },
            { text: 'Alexander Graham Bell', correct: true },
            { text: 'Nikola Tesla', correct: false },
            { text: 'Benjamin Franklin', correct: false }
        ]
    },
    {
        question: 'Which country is famous for the Eiffel Tower?',
        answers: [
            { text: 'Italy', correct: false },
            { text: 'France', correct: true },
            { text: 'Germany', correct: false },
            { text: 'Spain', correct: false }
        ]
    },
    {
        question: 'Which is the longest river in the world?',
        answers: [
            { text: 'Amazon', correct: false },
            { text: 'Nile', correct: true },
            { text: 'Yangtze', correct: false },
            { text: 'Mississippi', correct: false }
        ]
    },
    {
        question: 'Which country is known for pizza and pasta?',
        answers: [
            { text: 'France', correct: false },
            { text: 'Italy', correct: true },
            { text: 'Spain', correct: false },
            { text: 'Greece', correct: false }
        ]
    }
];
