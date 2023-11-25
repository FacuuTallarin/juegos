let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").innerText = currentQuestion.question;

  for (let i = 1; i <= 4; i++) {
    document.getElementById(`option${i}`).innerText =
      currentQuestion.options[i - 1];
  }
}

function checkAnswer(selectedOption) {
  const selectedAnswer = selectedOption.innerText;
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;

  if (selectedAnswer === correctAnswer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  alert(`Juego terminado. Puntaje: ${score}/${questions.length}`);
  // Puedes agregar más acciones al final del juego si lo deseas
}

// Iniciar el juego cargando la primera pregunta
loadQuestion();
// Iniciar el juego cargando la primera pregunta
loadQuestion();
