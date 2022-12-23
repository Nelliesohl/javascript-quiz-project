// DOM variables
const info = document.getElementById("info")
const quiz = document.getElementById("quiz")
const result = document.getElementById("result");

const infoBtn = document.getElementById("info-btn")
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");

const radioButtons = document.getElementsByName("answer");
const labels = document.getElementsByClassName("label");

const quizContainer = document.getElementById("container");


// Global variables used to track the number of correct answers and the current question
let correctAnswers = 0;
let currentQuestion = 0;

// Event listeners
infoBtn.addEventListener("click", displayQuiz);
submitBtn.addEventListener("click", handleChoice);

// Functions
function displayQuiz() {
  info.classList.add("hidden"); // Hides info section
  quiz.classList.remove("hidden"); // Shows quiz section 

  // Function that displays question and options
  displayQuizData();
}

function displayQuizData() {
  // Get the current question object
  const question = quizData[currentQuestion];

  // Update question 
  const questionElement = document.getElementById("question");
  questionElement.innerHTML = question.question;

  // Update labels and values
  for (let i = 0; i < labels.length; i++) {
    labels[i].innerHTML = question.choices[i];
    radioButtons[i].value = question.choices[i];
  }
}

function checkSelectedRadioButton() {
  const selectedRadioButton = document.querySelector('input[name="answer"]:checked');
  if (!selectedRadioButton) {
    // Displays error message if no radio button is selected
    alert("Please select an answer to continue.");
  }
}

function checkAnswer() {
  // Gets value of selected radio button
  const choice = document.querySelector('input[name="answer"]:checked').value;

  // Checks if it is the correct answer
  if (choice === quizData[currentQuestion].answer) {
    correctAnswers++;
    // Correct answer adds green border
    quizContainer.classList.add("green");
  } else {
    // Incorrect answer adds red border
    quizContainer.classList.add("red");
	}

  // Removes border after 750 milliseconds
  setTimeout(function() {
  quizContainer.classList.remove("green");
  quizContainer.classList.remove("red");
}, 750);
}

function handleChoice() {
  checkSelectedRadioButton();
  checkAnswer();
  
  // Iterate to the next question
  currentQuestion++;

  // Checks if there are more questions
  if (currentQuestion === quizData.length) {
    // Displays final score 
    quiz.classList.add("hidden"); // Hides HTML quiz section
    result.classList.remove("hidden"); // Shows HTML result sectiion
    const score = document.getElementById("score");
    score.textContent = `You got ${correctAnswers} / ${quizData.length} answers correct`;
  } else {
    // Clears selected answers
    clearQuiz();
    // Displays next question
    displayQuizData();
  }
}

function clearQuiz() {
  // Clears selected answers
  for (var radioButton of radioButtons) {
    radioButton.checked = false;
  }
}

// Array of questions
const quizData = [
  {
    question: "Which of the following is correct about JavaScript?",
    choices: ["JavaScript is a lightweight, interpreted programming language", "JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages", "The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which of the following type of variable is visible everywhere in your JavaScript code?",
    choices: ["Global variable", "Local variable", "Both of the above", "None of the above"],
    answer: "Global variable"
  },
  {
    question: "Which built-in method calls a function for each element in the array?",
    choices: ["while()", "loop()", "forEach()", "None of the above"],
    answer: "forEach()"
  },
  {
    question: "Which built-in method returns the calling string value converted to upper case?",
    choices: ["toUpperCase()", "toUpper()", "changeCase(case)", "None of the above"],
    answer: "toUpperCase()"
  },
  {
    question: "Which of the following function of Boolean object returns the primitive value of the Boolean object?",
    choices: ["toSource()", "valueOf()", "toString()", "None of the above"],
    answer: "valueOf()"
  },
  {
    question: "Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?",
    choices: ["slice()", "split()", "substr()", "search()"],
    answer: "substr()"
  },
  {
    question: "Which of the following function of String object returns a string representing the specified object?",
    choices: ["toLocaleUpperCase(), toUpperCase()", "toString()", "substring()"],
    answer: "toString()"
  },
  {
    question: "Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?",
    choices: ["sup()", "small()", "strike()", "sub()"],
    answer: "sub()"
  },
  {
    question: "Which of the following function of Array object joins all elements of an array into a string?",
    choices: ["concat()", "join()", "pop()", "map()"],
    answer: "join()"
  },
  {
    question: "Which of the following function of Array object returns a string representing the array and its elements?",
    choices: ["toSource()", "sort()", "splice()", "toString()"],
    answer: "toString()"
  },
];