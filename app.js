'use strict'
alert('Hello World');
console.log('Here\'a hidden message');

let today = new Date ();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;