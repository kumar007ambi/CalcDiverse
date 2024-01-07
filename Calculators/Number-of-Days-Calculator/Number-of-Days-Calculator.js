// Declaring and initializing variables
let submit = document.getElementById("submit");
let output = document.getElementById("output");

submit.addEventListener("click", () => {
    // Create a Date object from input value
    let date1 = new Date(document.getElementById("date-1").value);
    let date2 = new Date(document.getElementById("date-2").value);

    // Check if the input dates are valid
    // If valid calculate the difference
    if (date1.getTime() && date2.getTime()) {
        // Calculate difference in time using getTime function
        // getTime calculates the number of milliseconds since January 1, 1970
        let timeDifference = date2.getTime() - date1.getTime();

        // Since this value is in milliseconds, we need to convert it into days
        // We want the difference to be a non-negative number. Hence we use Math.abs()
        let dayDifference = (Math.abs(timeDifference / (1000 * 3600 * 24))) - 1;
        let weekDifference = Math.floor(dayDifference / 7);
        let remainingDays = dayDifference % 7;
        let hourDifference = dayDifference * 24;
        let minuteDifference = dayDifference * 24 * 60;
        let secDifference = dayDifference * 24 * 60 * 60;
        let perc = (dayDifference / 3.65);
        
        output.innerHTML = `
        <span>Result: <b>${dayDifference.toFixed(2)} days</b></span><br><br>
        It is ${dayDifference.toFixed(0)} days from the start date to the end date, but not including both the start date and the end date.<br><br>
        <h4>Expressed in other units : </h4><br>
        ${weekDifference} week${weekDifference > 1 ? 's' : ''} and ${remainingDays} day${remainingDays > 1 ? 's' : ''}<br>
        ${perc.toFixed(2)}% of ${date2.getFullYear()}
        ${hourDifference.toFixed(0)} hours<br>
        ${minuteDifference.toFixed(0)} minutes<br>
        ${secDifference.toFixed(0)} seconds<br>`;
    }
    
    // Else display that the input is invalid
    else {
        output.innerHTML = "Please select a valid date";
    }
});
