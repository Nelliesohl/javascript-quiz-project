// DOM variables
const info = document.getElementById("info")
const infoBtn = document.getElementById("info-btn")
const quiz = document.getElementById("quiz")


// Event listeners
infoBtn.addEventListener("click", displayQuiz);


// Functions
function displayQuiz() {
  info.classList.add("hidden"); // Hides HTML section 1
  quiz.classList.remove("hidden"); // Shows HTML section 2
}