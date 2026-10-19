var button = document.getElementById("convert-button");

button.addEventListener("click", function(event) {
    event.preventDefault();

    // Get the number
    var number = document.getElementById("input-value").value;
    number = parseFloat(number);

    // Get the selected conversion
    var selectList = document.getElementsByTagName("select")[0];
    var conversionChoice = selectList.selectedIndex + 1;

    var result;
    var message;

    if (isNaN(number)) {
        message = "Please enter a valid number.";
    } else if (conversionChoice === 1) {
        result = number * 2.54;
        message = number + " inches is " +
            result.toFixed(2) + " centimeters";
    } else if (conversionChoice === 2) {
        result = number * 30.48;
        message = number + " feet is " +
            result.toFixed(2) + " centimeters";
    } else if (conversionChoice === 3) {
        result = number * 0.91;
        message = number + " yards is " +
            result.toFixed(2) + " meters";
    } else if (conversionChoice === 4) {
        result = number * 1.61;
        message = number + " miles is " +
            result.toFixed(2) + " kilometers";
    } else if (conversionChoice === 5) {
        result = number * 0.39;
        message = number + " centimeters is " +
            result.toFixed(2) + " inches";
    } else if (conversionChoice === 6) {
        result = number * 0.0328;
        message = number + " centimeters is " +
            result.toFixed(2) + " feet";
    } else if (conversionChoice === 7) {
        result = number * 1.09;
        message = number + " meters is " +
            result.toFixed(2) + " yards";
    } else if (conversionChoice === 8) {
        result = number * 0.62;
        message = number + " kilometers is " +
            result.toFixed(2) + " miles";
    }

    document.getElementById("conversion-result").innerHTML = message;
});