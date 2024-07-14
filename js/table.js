"use strict";
/* File name: table.js
   Purpose: Generate a table from an array of data using javascript
*/

// Array that stores all data that will be assign to the table
let tableContent = [
    { Services: "Firewall Management", $150: "O", $250: "O", $400: "O"},
    { Services: "Intrusion Detection System", $150: "X", $250: "O", $400: "O"},
    { Services: "Data Loss Prevention", $150: "X", $250: "X", $400: "O"},
    { Services: "Disaster Recovery", $150: "X", $250: "X", $400: "O"},
    { Services: "Identity Access Management", $150: "O", $250: "O", $400: "O"},
    { Services: "Security Assessment", $150: "X", $250: "O", $400: "O"},
    { Services: "Threat Management", $150: "O", $250: "O", $400: "O"},
];

// function to generate and populate <th> 
function generateTableHead(table,data) {
    // creates an empty <thead> element and add it to the table
    let thead = table.createTHead();
    // create an empty <tr> element 
    let row = thead.insertRow();

    // for...of loop to loop through array that contains (string) of Services, $150, $250 and $400 
    for (let title of data) {
        // creates 4 <th> elements
        let th = document.createElement("th");
        // create a text node containing Services, $150, $250 and $400
        let text = document.createTextNode(title);
        // append the text into <th> tag
        th.appendChild(text);
        // append the th with text into a row
        row.appendChild(th);
    }
}

// function to populate the table row and cells
function generateTable(table,content) {
    // for...of loop to iterate through every object in the tableContent array and create a new row for every item
    for (let element of content) {
        // create new row using insertRow()
        let row = table.insertRow();

        // for...in loop to iterate over every key in the current object and generate table cells
        for (let key in element) {
            // create new cell
            let cell = row.insertCell();
            // create new text node
            let text = document.createTextNode(element[key]);
            // append text to cell
            cell.appendChild(text);
        }
    }
}

// get the table element with id "pricingTable"
let table = document.getElementById("pricingTable");
// Object.keys returns an array of enumerable properties of tableContent[0] which is Services, $150, $250 and $400 
let data = Object.keys(tableContent[0]); 
// invoke generateTable function
generateTable(table,tableContent);
// invoke generateTableHead function 
generateTableHead(table,data);
// generateTable function must be invoked first to prevent <tr> being appended to <th>
// <tbody> is not added because in an empty table insertRow() will create a <tbody> if none is present

