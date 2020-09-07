'use strict'
alert('Welcome User! Page Under developement');
console.log('Here\'a hidden message');

let today = new Date ();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

function hide() {
    document.getElementById("demo").style.display="none";
}

function show() {
    document.getElementById("demo").style.display="block";
}

function printp() {
    print();
}