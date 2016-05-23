var imageArray = ['img/bag.png'];

var showResults = document.getElementById('showResults');
var resultsSection = document.getElementById('resultsSection');
var ps1 = document.getElementById('ps1');
var ps2 = document.getElementById('ps2');
var ps3 = document.getElementById('ps3');


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

//creates a random number
var randomator = function () {
  return Math.floor(Math.random() * objectList.length);
};

//grabs an instance based on that random number
var getInstance = function () {
  var instance = objectList[randomator()];
};

//Store three different random numbers
while (instance1 === instance2 === instance3) {
  instance1 = objectList[randomator()]; //May be able to do .filePath
  instance2 = objectList[randomator()];
  instance3 = objectList[randomator()];
}

//Populate choices with the pics from the 3 different objects
var voterRefresh = function () {
  var rp1 = getElementById('rp1');
  rp1.src = instance1.filePath;
};

// var zeroArrays = function() {
//   for (var i = 0; i < objectList.length; i++) {
//     clickArray.push(0);
//   }
//
//   for (var i = 0; i < objectList.length; i++) {
//     shownArray.push(0);
//   }
// };
//
// //Conducts the customer survey
// function clickHandler(event) {

  //This creates an image element, adds the file path and appends to section 1
    //
    // var rp1 = getElementById('rp1');
    // rp1.src = objectList[randomPick1].filePath;
    // ps1.appendChild(rp1)
    //
  // }

//Creates the results of the customer survey
// function resultsHandler(event) {
//   resultsSection.appendChild();
// }

// var allImages = [{}, {}, {}]; //allImages.length = 3
// var imgObj = {
//   name: 'unicorn',
//   path: 'img/unicorn.jpg',
//   clicks: 0,
//   timesShown: 0
// }
// // if we had a <div id="container-1">
// var container1 = document.getElementById('container-1');
// function getRand(placeHolder) {
//   return Math.floor(Math.random() * placeHolder.length);
//   //if someArray.length = 3, gives us a value 0 <= x <= 2
// }
//
// function getIndices() {
//   var index1 = getRand(allImages);
// }
// function addPicToDOM(pic) {
//
// }
// getIndices();
