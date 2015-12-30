
window.onload = function() {

var sorter = require('./sort.js');
var buttonDiv = document.createElement('div');
buttonDiv.id = "buttonDiv";
document.body.appendChild(buttonDiv);
var visualDiv = document.createElement('div');
visualDiv.id = "visualDiv";
document.body.appendChild(visualDiv);

var randomArray = [];

function makeButton(name, callback){
var button = document.createElement('button');
button.innerHTML = name;
button.className = "button";
button.addEventListener('click',callback);
document.getElementById("buttonDiv").appendChild(button);
}

makeButton("Initialize", function(){
  randomGen(21);
  drawBars(randomArray);
});

makeButton ("BubbleSort", function() {
  sorter.bubbleSort(randomArray);
  //drawBars(randomArray);
});

makeButton ("QuickSort", function() {
  randomArray = sorter.quickSort(randomArray);
  drawBars(randomArray);
});

makeButton ("MergeSort", function() {
  randomArray = sorter.mergeSort(randomArray);
  drawBars(randomArray);
});

makeButton ("SelectionSort", function() {
  randomArray = sorter.selectionSort(randomArray);
  drawBars(randomArray);
});

makeButton ("InsertionSort", function() {
  randomArray = sorter.insertionSort(randomArray);
  drawBars(randomArray);
});

function randomGen(num) {
  randomArray =[];
  while (num !== 0){
    var random = Math.floor(Math.random()*25);
    if (randomArray.indexOf(random) === -1) {
      randomArray.push(random);
      num--;
    }
  }
}

function drawBars(array) {
document.getElementById('visualDiv').innerHTML = '';
  for (var i = 0; i < array.length; i++){
    var bar = document.createElement('div');
    bar.className = 'bar';
    bar.innerHTML = array[i];
    bar.style.height = (array[i]* 25) + "px";
    visualDiv.appendChild(bar);
  }
}

setTimeout(console.log(" 5 seconds"), 5000);

};