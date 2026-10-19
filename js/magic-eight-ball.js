// Array of possible Magic Eight Ball answers
let answers = [
    "Yes",
    "No",
    "Maybe",
    "Definitely",
    "Ask again later",
    "I don't think so"
];

// Function to select and display a random answer
function displayAnswer() {

    // Generate a random index
    let index = Math.floor(Math.random() * answers.length);

    // Get the circle div
    let circle = document.getElementById("circle");

    // Display the selected answer
    circle.innerHTML = answers[index];

    // Make the circle visible
    circle.style.display = "block";
}

// Listen for a mousedown event on the Magic Eight Ball image
document.getElementById("ball").addEventListener("mousedown", function () {

    // Get the value typed in the question field
    let question = document.getElementById("question").value;

    // Check if the question field is empty
    if (question.trim() === "") {
        alert("Please enter a question.");
    } else {
        displayAnswer();
    }
});

// Hide the answer when the reset button is clicked
document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("circle").style.display = "none";
});

