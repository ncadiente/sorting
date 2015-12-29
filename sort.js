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

  module.getSwaps = function() {
    return swaps;
  };
  return module;
}());
// var tArray = [5, 1, 4, 2, 8, 10, 11, 3, 9];
// var sort = sorter;
// var testArray = [5, 1, 4, 2, 8];
// var ter = sorter;
// console.log(sort.bubbleSort(tArray));
// console.log(sort.getSwaps());

// console.log(ter.bubbleSort(testArray));
// console.log(ter.getSwaps());
