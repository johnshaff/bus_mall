var showResults = document.getElementById('showResults');
var resultsSection = document.getElementById('resultsSection');
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');

var objectList = [];
var clickArray = [];
var shownArray = [];

function hotornot (imageName, filePath) {
  this.imageName = imageName;
  this.filePath = filePath;
  this.tallyShown = 0;
  this.tallyClick = 0;
};

p1.addEventListener('click', clickHandler);
p2.addEventListener('click', clickHandler);
p3.addEventListener('click', clickHandler);
showResults.addEventListener('click', resultsHandler);

// var zeroArrays = function() {
//   for (var i = 0; i < objectList.length; i++) {
//     clickArray.push(0);
//   }
//
//   for (var i = 0; i < objectList.length; i++) {
//     shownArray.push(0);
//   }
// };

//Conducts the customer survey
function clickHandler(event) {

}

//Creates the results of the customer survey
// function resultsHandler(event) {
//   resultsSection.appendChild();
// }
