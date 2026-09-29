// Put your JavaScript code in this file
// Array of 6 answers for the Magic Eight Ball responses
let answers = ["Most likely", "Yes", "Ask again later", "Cannot predict now", "Very doubtful", "My reply is no"];

// Select and display a random answer for the Magic Eight Ball
function displayAnswer() {
    //Generate a random index
    let index = Math.floor(Math.random() * answers.length);
    //Get tge circle div
    let circle = document.getElementById("circle");
   // Display the selected answer in the circle
    circle.innerHTML = answers[index];
    //Makes the circle visible
    circle.style.display = "block";}
// End of displayAnswer function

//Listen for the mousedown event on the Magic Eight Ball
document.getElementById("ball").addEventListener("mousedown", function() {
    //Get the value of the question input field
    let question = document.getElementById("question").value;
    //Check if the question is empty
    if (question.trim() === "") {
       alert("Please ask a question!");
    } else {
       displayAnswer();
    }
});
// Hides the answer when the reset button is clicked
    document.getElementById("reset").addEventListener("click", function() {
        document.getElementById("circle").style.display = "none";});