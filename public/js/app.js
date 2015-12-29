
window.onload = function() {

var sorter = require('./sort.js');
console.log('what');
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
  drawBars();
});

makeButton ("BubbleSort", function() {
  randomArray = sorter.bubbleSort(randomArray);
  drawBars();
});

makeButton ("QuickSort", function() {
  randomArray = sorter.quickSort(randomArray);
  drawBars();
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

function drawBars() {
document.getElementById('visualDiv').innerHTML = '';
  for (var i = 0; i < randomArray.length; i++){
    var bar = document.createElement('div');
    bar.className = 'bar';
    bar.innerHTML = randomArray[i];
    bar.style.height = (randomArray[i]* 25) + "px";
    visualDiv.appendChild(bar);
  }
}


};

// module.bubbleSort = function(array) {
//     swapping = true;
//     swaps = 0;
//      while(swapping === true) {
//        var moves = 0;
//        for (var i = 0; i < array.length; i++) {
//          if (array[i]> array[i+1]) {
//            moves++;
//            var a = array[i];
//            var b = array[i + 1];
//            array[i] = b;
//            array[i+1] = a;
//          }
//        }
//        swaps+= moves;
//        if (moves === 0) {
//          swapping = false;
//        }
//      }
//      return array;
//    };