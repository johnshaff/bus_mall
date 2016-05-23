var imageArray = ['img/bag.png'];

var showResults = document.getElementById('showResults');
var resultsSection = document.getElementById('resultsSection');
var ps1 = document.getElementById('ps1');
var ps2 = document.getElementById('ps2');
var ps3 = document.getElementById('ps3');
var rp1 = getElementById('rp1');
var rp1 = getElementById('rp2');
var rp1 = getElementById('rp3');


var objectList = [];
var clickArray = [];
var shownArray = [];

function hotornot (imageName, filePath) {
  this.imageName = imageName;
  this.filePath = filePath;
  this.tallyShown = 0;
  this.tallyClick = 0;
};

// p1.addEventListener('click', clickHandler);
// p2.addEventListener('click', clickHandler);
// p3.addEventListener('click', clickHandler);
// showResults.addEventListener('click', resultsHandler);

//creates new instances
var bag = new hotornot ('bag', 'img/bag.png');
var banana = new hotornot ('banana', 'img/banana.png');
var bathroom = new hotornot ('bathroom', 'img/bathroom.png');
var boots = new hotornot ('boots', 'img/boots.png');
var breakfast = new hotornot ('breakfast', 'img/breakfast.png');
var boots = new hotornot ('boots', 'img/boots.png');
var bubblegum = new hotornot ('bubblegum', 'img/bubblegum.png');
var chair = new hotornot ('chair', 'img/chair.png');
var cthulhu = new hotornot ('cthulhu', 'img/cthulhu.png');
var dog_duck  = new hotornot ('dog_duck', 'img/dog_duck.png');
var dragon = new hotornot ('dragon', 'img/dragon.png');
var pen = new hotornot ('pen', 'img/pen.png');
var pet_sweep = new hotornot ('pet_sweep', 'img/pet_sweep.png');
var scissors = new hotornot ('scissors', 'img/scissors.png');
var shark = new hotornot ('shark', 'img/shark.png');
var sweep = new hotornot ('sweep', 'img/sweep.png');
var tauntaun = new hotornot ('tauntaun', 'img/tauntaun.png');
var unicorn = new hotornot ('unicorn', 'img/unicorn.png');
var usb = new hotornot ('usb', 'img/usb.png');
var water_can = new hotornot ('water_can', 'img/water_can.png');
var wine_glass = new hotornot ('wine_glass', 'img/wine_glass.png');

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
  rp1.src = instance1.filePath;
  rp2.src = instance2.filePath;
  rp3.src = instance3.filePath;
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
