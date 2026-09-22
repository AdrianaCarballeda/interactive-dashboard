# Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.

## TODO: Future Enhancements
- [ ] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
## Imperial/Metric Converter

The Imperial/Metric Converter allows the user to enter a numeric value and select a conversion type. It converts inches, feet, yards, and miles into metric units. It can also convert centimeters, meters, and kilometers into Imperial units.

### Logic and Pseudocode

```text
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
```
