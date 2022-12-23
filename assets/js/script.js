// DOM variables
const info = document.getElementById("info")
const infoBtn = document.getElementById("info-btn")
const quiz = document.getElementById("quiz")

// Global variables used to track the number of correct answers and the current question
let correctAnswers = 0;
let currentQuestion = 0;

// Event listeners
infoBtn.addEventListener("click", displayQuiz);

// Functions
function displayQuiz() {
  info.classList.add("hidden"); // Hides HTML section 1
  quiz.classList.remove("hidden"); // Shows HTML section 2
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