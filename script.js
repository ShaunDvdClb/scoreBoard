//set alpha +1
var buttonSetAlpha = document.getElementById("1pointalphaSet");
var alphaSetSpan = document.getElementById("setAlpha");
var alphaSetValue = 0;

buttonSetAlpha.addEventListener("click", function() {
    alphaSetValue += 1;
    alphaSetSpan.textContent = alphaSetValue.toFixed(0);

});

//score alpha +1
var buttonScoreAlpha = document.getElementById("1pointalphaScore");
var alphaScoreSpan = document.getElementById("scoreAlpha");
var alphaScoreValue = 0;

buttonScoreAlpha.addEventListener("click", function() {
    alphaScoreValue += 1;
    alphaScoreSpan.textContent = alphaScoreValue.toFixed(0);

});



// bravo
//set alpha +1
var buttonSetBravo = document.getElementById("1pointbravoSet");
var bravoSetSpan = document.getElementById("setBravo");
var bravoSetValue = 0;

buttonSetBravo.addEventListener("click", function() {
    bravoSetValue += 1;
    bravoSetSpan.textContent = bravoSetValue.toFixed(0);

});

//score alpha +1
var buttonScoreBravo = document.getElementById("1pointbravoScore");
var bravoScoreSpan = document.getElementById("scoreBravo");
var bravoScoreValue = 0;

buttonScoreBravo.addEventListener("click", function() {
    bravoScoreValue += 1;
    bravoScoreSpan.textContent = bravoScoreValue.toFixed(0);

});