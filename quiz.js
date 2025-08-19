function checkAnswer(){
    let correctAnswer = "4";
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    let feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);