module.exports = (function() {
  var module = {};
  var swapping = true;
  var swaps = 0;

  module.bubbleSort = function(array) {
    swapping = true;
    swaps = 0;
     while(swapping === true) {
       var moves = 0;
       for (var i = 0; i < array.length; i++) {
         if (array[i]> array[i+1]) {
           moves++;
           var a = array[i];
           var b = array[i + 1];
           array[i] = b;
           array[i+1] = a;
         }
       }
       swaps+= moves;
       if (moves === 0) {
         swapping = false;
       }
     }
     return array;
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

  module.getSwaps = function() {
    return swaps;
  };

  return module;
}());





//  var tArray = [5, 1, 4, 2, 8, 10, 11, 3, 9];
// console.log(quickSort(tArray));
// var testArray = [5, 1, 4, 2, 8];
// var ter = sorter;
// console.log(sort.bubbleSort(tArray));
// console.log(sort.getSwaps());

// console.log(ter.bubbleSort(testArray));
// console.log(ter.getSwaps());
