# Interactive Productivity Dashboard
This project is a web-based dashboard built for WEB-115 to demonstrate and practice with interactive JavaScript features.

## TO DO: Future Enhancements
- [x] Add a metric conversion tool.
- [x] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.

## Imperial/Metric Converter
The Imperial/Metric Converter allows users to enter a numeric value and convert it between Imperial and metric units. It converts inches, feet, yards, miles, centimeters, meters, and kilometers.

## Logic and Psuedocode
BEGIN
    DISPLAY "Metric Converter"
    DISPLAY "Select a conversion:"
    DISPLAY "1. Inches to centimeters"
    DISPLAY "2. Feet to centimeters"
    DISPLAY "3. Yards to meters"
    DISPLAY "4. Miles to kilometers"
    DISPLAY "5. Centimeters to inches"
    DISPLAY "6. Centimeters to feet"
    DISPLAY "7. Meters to yards"
    DISPLAY "8. Kilometers to miles"

    INPUT conversionChoice
    DISPLAY "Enter a numeric value:"
    INPUT number

    IF conversionChoice = 1 THEN
        SET result = number * 2.54
        DISPLAY result + " centimeters"
    ELSE IF conversionChoice = 2 THEN
        SET result = number * 30.48
        DISPLAY result + " centimeters"
    ELSE IF conversionChoice = 3 THEN
        SET result = number * 0.91
        DISPLAY result + " meters"
    ELSE IF conversionChoice = 4 THEN
        SET result = number * 1.61
        DISPLAY result + " kilometers"
    ELSE IF conversionChoice = 5 THEN
        SET result = number * 0.39
        DISPLAY result + " inches"
    ELSE IF conversionChoice = 6 THEN
        SET result = number * 0.0328
        DISPLAY result + " feet"
    ELSE IF conversionChoice = 7 THEN
        SET result = number * 1.09
        DISPLAY result + " yards"
    ELSE IF conversionChoice = 8 THEN
        SET result = number * 0.62
        DISPLAY result + " miles"
    ELSE
        DISPLAY "Invalid conversion choice"
    END IF
END

## Magic Eight Ball
The Magic Eight Ball is an interactive application that allows the user to type a yes/no question and click the Magic Eight Ball to receive a random response. The application uses JavaScript event listeners, conditional statements, an array of possible answers and the Math.random() method to select and display a response. The reset button allows the user to clear the current question and ask another one.


## Task Manager
The Task Manager allows users to add, edit, and delete tasks, choose a priority, and mark tasks as important or complete. Important tasks appear in red, and completed tasks have a strikethrough. The application uses JavaScript DOM elements and an array of objects to manage tasks, and logs each change to the console using JSON.stringify(). The Delete List button clears all tasks.