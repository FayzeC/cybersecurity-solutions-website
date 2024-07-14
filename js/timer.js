"use strict";
/* File name: timer.js
   Purpose: Generate day, date and timer
*/

/* Generate Day */
// get Date
var date = new Date();
// create array that stores 0 - 6 (Monday to Saturday)
var days = new Array(7);
days[0] = "Sunday";
days[1] = "Monday";
days[2] = "Tuesday";
days[3] = "Wednesday";
days[4] = "Thursday";
days[5] = "Friday";
days[6] = "Saturday";
// date.getDay() returns a value from 0 to 6
// pass it into the array so x will store the full name of the day specified
var x = days[date.getDay()];
// write the day into HTML
document.getElementById("day").innerHTML = x;


/* Generate Date */
// get Date
var today = new Date();
// store the date in variable d
var d = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
// write date into HTML
document.getElementById("date").innerHTML = d;


/* Generate Timer */
// get element with the id "minutes"
var minutes = document.getElementById("minutes");
// get element with the id "seconds"
var seconds = document.getElementById("seconds");
// initialise totalSeconds to 0 
var totalSeconds = 0;
// invoke setTime function every second
setInterval(setTime, 1000);

// function to increment seconds and write the time
function setTime() {
    ++totalSeconds;
    // write total of seconds into HTML
    seconds.innerHTML = addLeadingZero(totalSeconds%60);
    // write minutes into HTML
    minutes.innerHTML = addLeadingZero(parseInt(totalSeconds/60));
}

// function to add leading zeros if the values are less than 10
function addLeadingZero(val) {
    var valString = val + "";

    // if the length is smaller than 2 add 0 to the string
    if(valString.length < 2) {
        return "0" + valString;
    } else {
        // if not then return original string
        return valString;
    }
}