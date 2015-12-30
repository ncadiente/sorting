module.exports = (function() {
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

  function wait(flag) {
    if(!flag) {
      setTimeout(function() {
       wait(true);
      }, 5000);
    return;
    }
    drawBars(array);
  }

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
          setTimeout(drawBars(array), 1500);

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

  module.selectionSort = function(array){
    for(var x = 0; x < array.length; x++) {
      var lowest = array[x];
      for(var z = x + 1; z < array.length; z++) {
        if(array[z] < lowest){
          lowest = array[z];
        }
      }
      array.splice( x, 0, (array.splice(array.indexOf(lowest),1)[0]));
    }
    return array;
  };

  module.mergeSort = function(array) {
    function merge(a, b){
      var sorted = [];
      while (b.length !== 0 && a.length !==0){
        if (b[0] < a[0]) {
          sorted.push(b.shift());
        }
        if (b[0] > a[0]) {
          sorted.push(a.shift());
        }
      }
      while(a.length !== 0){
        sorted.push(a.shift());
      }
      while(b.length !==0){
        sorted.push(b.shift());
      }
      return sorted;
    }

    if (array.length <= 1) {
      return array;
    }
    var right = array.splice(Math.floor(array.length/2), array.length);
    var left = array;
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left,right);
  };

module.insertionSort = function(array) {
  for (var x = 1; x < array.length; x++) {
    for (var y = 0; y < x; y++) {
      if (array[x] <= array[0]) {
        array.unshift(array.splice(x,1)[0]);
        break;
      }
      if (array[x] >= array[y] && array[x] <= array[y+1]) {
        array.splice(y+1, 0, array.splice(x, 1)[0]);
        break;
      }
    }
  }
  return array;
};

  module.getSwaps = function() {
    return swaps;
  };

  return module;
}());

function mergeSort(array) {
    function merge(a, b){
      var sorted = [];
      while (b.length !== 0 && a.length !==0){
        if (b[0] < a[0]) {
          sorted.push(b.shift());
        }
        if (b[0] > a[0]) {
          sorted.push(a.shift());
        }
      }
      while(a.length !== 0){
        sorted.push(a.shift());
      }
      while(b.length !==0){
        sorted.push(b.shift());
      }
      return sorted;
    }

    if (array.length <= 1) {
      return array;
    }
    var right = array.splice(Math.floor(array.length/2), array.length);
    var left = array;
    left = mergeSort(left);
    right = mergeSort(right);
    merge(left,right);
  return merge(left,right);
}

// var tArray = [5, 1, 4, 2, 8, 10, 11, 3, 9];
// console.log(tArray);
// console.log(mergeSort(tArray));

// console.log(test[0]);
// var test =[];
// console.log(quickSort(tArray));
// var testArray = [5, 1, 4, 2, 8];
// var ter = sorter;
// console.log(sort.bubbleSort(tArray));
// console.log(sort.getSwaps());

// console.log(ter.bubbleSort(testArray));
// console.log(ter.getSwaps());

//saves the sorting methods before setting up for visualization