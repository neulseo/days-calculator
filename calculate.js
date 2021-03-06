/* calculate.js */
function process() {
    'use strict';

    // Get reference to the HTML elements:
    const start = document.querySelector('#start');
    const end = document.querySelector('#end');
    const output = document.querySelector('#output');
    const duration = document.querySelector('#duration');

    // Declare variables for the output:
    let message = '';
    let interval = '';
    let day = 1000 * 60 * 60 * 24; // one day in milliseconds

    
    // Create new Date() objects for starting and ending dates:
    const startDate = new Date(start.value);
    const endDate = new Date(end.value);
    
    let diff = endDate - startDate;
    if (diff <= day) { // ---> if the difference is less than or equal to a day
        interval = '1 day';
    } else {
        interval = Math.round(diff / day) + ' days'; // ---> if the difference is over a day
    }
    
    // Confirm that the input dates are valid:
    if (startDate.getTime() && endDate.getTime()) {
        // Make sure the start date comes first:
        if (startDate < endDate) { // ---> if the startDate is before endDate
            // let diff = endDate - startDate;
            // if (diff <= day) { // ---> if the difference is less than or equal to a day
            //     interval = '1 day';
            // } else {
            //     interval = Math.round(diff / day) + ' days'; // ---> if the difference is over a day
            // }
            message = `Start Date: ${startDate.toLocaleDateString()},\n`;
            message += `End Date: ${endDate.toLocaleDateString()},\n`;
            message += `Duration: ${interval}.`;
        } else {
            // message = `The start date must come before the end date!`;
            // window.alert(message);
            const text = interval.value;
            console.log(text);
        }
    } else {
        message = `Please enter valid start and end dates in the format MM/DD/YYYY`;
        window.alert(message);
    }

    // Update the page with the custom message:
    if (output.textContent !== undefined) {
        output.textContent = message;
    } else {
        output.innerText = message;
    }

    return false;
} // end of process()

function init() {
    'use strict';
    document.querySelector('#theForm').onsubmit = process;
} // end of init()
window.onload = init;