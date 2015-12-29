window.onload = function() {

var sorter = require('/sort.js');
var htmlArray = [];
var randomArray = [5, 6, 8,10, 1, 5 , 3, 7, 4];

var visualDiv = document.createElement(div);
document.body.appendChild(visualDiv);

for (var i = 0; i < randomArray.length; i++){
  var bar = document.createElement('div');
  bar.className('bar');
  bar.styles.height = radomArray[1]*50;
  visualDiv.appendChild(bar);
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