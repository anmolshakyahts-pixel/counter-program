//      Counter Program

let count = 0;
const countElement = document.getElementById("count1");
const incButton = document.getElementById("inc");
const decButton = document.getElementById("dec");
const resButton = document.getElementById("res");

incButton.onclick = function() {
    count++;
    countElement.textContent = count;
}
decButton.onclick = function() {
    count--;
    countElement.textContent = count;
}
resButton.onclick = function() {
    count=0;
    countElement.textContent = count;
}