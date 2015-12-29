var sorter = (function() {
  var module = {};
  var swapping = true;
  var swaps = 0;

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

  module.bubbleSort = function(array) {
    swapping = true;
    swaps = 0;
     window.setInterval( function () {
      while(swapping === true) {
       var moves = 0;
       for (var i = 0; i < array.length; i++) {
         if (array[i]> array[i+1]) {
           moves++;
           var a = array[i];
           var b = array[i + 1];
           array[i] = b;
           array[i+1] = a;
           window.setInterval(drawBars(array), 5000);
         }
       }
       swaps+= moves;
       if (moves === 0) {
         swapping = false;
       }
     }
     return array;
   }, 1200);
   };

  module.quickSort = function(array){
    var a = [];
    var b = [];
    if (array.length <= 1) {
      return array;
    }
    for (var k = 1; k < array.length; k++) {
      if (array[k] >= array[0]) {
        b.push(array[k]);
      } else {
        a.push(array[k]);
      }
    }
  return this.quickSort(a).concat(array[0], this.quickSort(b));
  };

  module.selectionSort = function(array){

  };

  module.getSwaps = function() {
    return swaps;
  };

  return module;
}());



console.log(sorter);

//  var tArray = [5, 1, 4, 2, 8, 10, 11, 3, 9];
// console.log(quickSort(tArray));
// var testArray = [5, 1, 4, 2, 8];
// var ter = sorter;
// console.log(sort.bubbleSort(tArray));
// console.log(sort.getSwaps());

// console.log(ter.bubbleSort(testArray));
// console.log(ter.getSwaps());
