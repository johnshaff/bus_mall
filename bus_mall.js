var showResults = document.getElementById('showResults');
var resultsSection = document.getElementById('resultsSection');
var ps1 = document.getElementById('ps1');
var ps2 = document.getElementById('ps2');
var ps3 = document.getElementById('ps3');
var rp1 = document.getElementById('rp1');
var rp2 = document.getElementById('rp2');
var rp3 = document.getElementById('rp3');

var objectList = [];
var clickArray = [];
var shownArray = [];

function hotornot (imageName, filePath) {
  this.imageName = imageName;
  this.filePath = filePath;
  this.tallyShown = 0;
  this.tallyClick = 0;
};

hotornot.prototype.updateObjectList = function () {
  objectList.push(this);
};

ps1.addEventListener('click', clickHandler);
ps2.addEventListener('click', clickHandler);
ps3.addEventListener('click', clickHandler);
// showResults.addEventListener('click', resultsHandler);

//creates new instances
function createNewInstances() {
  var bag = new hotornot ('bag', 'img/bag.png');
  bag.updateObjectList();
  var banana = new hotornot ('banana', 'img/banana.png');
  banana.updateObjectList();
  var bathroom = new hotornot ('bathroom', 'img/bathroom.png');
  bathroom.updateObjectList();
  var boots = new hotornot ('boots', 'img/boots.png');
  boots.updateObjectList();
  var breakfast = new hotornot ('breakfast', 'img/breakfast.png');
  breakfast.updateObjectList();
  var boots = new hotornot ('boots', 'img/boots.png');
  boots.updateObjectList();
  var bubblegum = new hotornot ('bubblegum', 'img/bubblegum.png');
  bubblegum.updateObjectList();
  var chair = new hotornot ('chair', 'img/chair.png');
  chair.updateObjectList();
  var cthulhu = new hotornot ('cthulhu', 'img/cthulhu.png');
  cthulhu.updateObjectList();
  var dog_duck  = new hotornot ('dog_duck', 'img/dog_duck.png');
  dog_duck.updateObjectList();
  var dragon = new hotornot ('dragon', 'img/dragon.png');
  dragon.updateObjectList();
  var pen = new hotornot ('pen', 'img/pen.png');
  pen.updateObjectList();
  var pet_sweep = new hotornot ('pet_sweep', 'img/pet_sweep.png');
  pet_sweep.updateObjectList();
  var scissors = new hotornot ('scissors', 'img/scissors.png');
  scissors.updateObjectList();
  var shark = new hotornot ('shark', 'img/shark.png');
  shark.updateObjectList();
  var sweep = new hotornot ('sweep', 'img/sweep.png');
  sweep.updateObjectList();
  var tauntaun = new hotornot ('tauntaun', 'img/tauntaun.png');
  tauntaun.updateObjectList();
  var unicorn = new hotornot ('unicorn', 'img/unicorn.png');
  unicorn.updateObjectList();
  var usb = new hotornot ('usb', 'img/usb.png');
  usb.updateObjectList();
  var water_can = new hotornot ('water_can', 'img/water_can.png');
  water_can.updateObjectList();
  var wine_glass = new hotornot ('wine_glass', 'img/wine_glass.png');
  wine_glass.updateObjectList();
};
createNewInstances();

//creates a random number
var randomator = function () {
  return Math.floor(Math.random() * objectList.length);
};

//grabs an instance based on that random number
var surveySubmit = function () {
  var getInstance = function () {
    instance1 = objectList[randomator()];
    instance2 = objectList[randomator()];
    instance3 = objectList[randomator()];
  };
  getInstance();

  //Store three different random numbers
  while (instance1 === instance2 || instance2 === instance3) {
    instance1 = objectList[randomator()]; //May be able to do .filePath
    instance2 = objectList[randomator()];
    instance3 = objectList[randomator()];
  }
  console.log(instance1);
  console.log(instance2);
  console.log(instance3);

  //Populate choices with the pics from the 3 different objects
  var voterRefresh = function () {
    rp1.src = instance1.filePath;
    rp2.src = instance2.filePath;
    rp3.src = instance3.filePath;
  };
  voterRefresh();
};
surveySubmit();

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
  console.log('in handler');
  surveySubmit();
  ++instance1.tallyShown;
  ++instance2.tallyShown;
  ++instance3.tallyShown;
  ++instance1.tallyClick;
  ++instance2.tallyClick;
  ++instance3.tallyClick;
  console.log(instance1.tallyShown);
};

//Creates the results of the customer survey
// function resultsHandler(event) {
//   resultsSection.appendChild();
// }
