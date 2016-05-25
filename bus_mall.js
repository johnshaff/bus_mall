var showResults = document.getElementById('showResults');
var resultsSection = document.getElementById('resultsSection');
var ps1 = document.getElementById('ps1');
var ps2 = document.getElementById('ps2');
var ps3 = document.getElementById('ps3');
var rp1 = document.getElementById('rp1');
var rp2 = document.getElementById('rp2');
var rp3 = document.getElementById('rp3');
var instance1 = 0;
var instance2 = 0;
var instance3 = 0;
var totalClicks = 0;
var objectList = [];
var clickArray = [];
var titleArray = [];

function hotornot (imageName, filePath) {
  this.imageName = imageName;
  this.filePath = filePath;
  this.tallyShown = 0;
  this.tallyClick = 0;
  objectList.push(this);
};

//EVENT LISTENERS
ps1.addEventListener('click', p1clickHandler);
ps2.addEventListener('click', p2clickHandler);
ps3.addEventListener('click', p3clickHandler);
document.getElementById('results').addEventListener('click', function(){
  drawChart();
});

//creates new instances
function createNewInstances() {
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
};
createNewInstances();

//Updates titles array
function updateTitleArray() {
  for (var i = 0; i < objectList.length; i++) {
    titleArray[i] = objectList[i].imageName;
    clickArray[i] = objectList[i].tallyClick;
  }
}
updateTitleArray();

//creates a random number
var randomator = function () {
  return Math.floor(Math.random() * objectList.length);
};

//Clears global instance vars
var clearInstances = function () {
  instance1 = 0;
  instance2 = 0;
  instance3 = 0;
};

//grabs an instance based on that random number
var surveySubmit = function () {
  clearInstances();
  while (instance1 === instance2 || instance2 === instance3 || instance1 === instance3) {
    instance1 = objectList[randomator()]; //May be able to do .filePath
    instance2 = objectList[randomator()];
    instance3 = objectList[randomator()];
    console.log(instance1, instance2, instance3);
  }
  //Populate choices with the pics from the 3 different objects
  var voterRefresh = function () {
    rp1.src = instance1.filePath;
    rp2.src = instance2.filePath;
    rp3.src = instance3.filePath;
    ++instance1.tallyShown;
    ++instance2.tallyShown;
    ++instance3.tallyShown;
  };
  voterRefresh();
};
surveySubmit();

//CHARTS
// Creates a single object that contains my chart data
var data = {
  labels: titleArray, // Title array
  datasets: [
    {
      label: "Heyooooo. Checkout all these bars.",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
      data: clickArray, // Vote array
    }]
};

//Creating the function that will draw the chart
function drawChart() {
  updateTitleArray();
  var ctx = document.getElementById('resultsChart').getContext('2d');
  console.log(data);
  Chart = new Chart(ctx,{
    type: 'bar',
    data: data,
    options: {
      responsive: false
    }
  });
  chartDrawn = true;
}

//EVENT HANDLERS
function p1clickHandler(event) {
  if (totalClicks > 24) {
    return;
  }
  ++totalClicks;
  ++instance1.tallyClick;
  surveySubmit();
};

function p2clickHandler(event) {
  if (totalClicks > 24) {
    return;
  }
  ++totalClicks;
  ++instance2.tallyClick;
  surveySubmit();
};

function p3clickHandler(event) {
  if (totalClicks > 24) {
    return;
  }
  ++totalClicks;
  ++instance3.tallyClick;
  surveySubmit();
};
