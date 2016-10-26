var _ = {
   map: function(list, callback) {
      var mapArray = [];

      for(var i = 0; i < list.length; i++){
        list[i] = callback(list[i]);
}
  return list;
   },


   reduce: function(array, callback) { 
     var sum = 0;

     for (var i = 0; i < array.length; i++){
        sum = callback(array[i], sum);
     }
     return sum;
   },


   find: function(array, callback) {   
     for (var i = 0; i < array.length; i++){
        var result = callback(array[i]);
        if (result == true) {
          console.log("Statement evaluates to True in the array at index of " + i);
          return true;
        }
     }
     console.log("all values evaluate to false");
     return false;
   },


   filter: function(array, callback) { 
     var myTruthfulArray = [];
     for (var i in array){
        var result = callback(array[i]);
        if (result == true){
          myTruthfulArray.push(array[i]);
        }
     }
     return myTruthfulArray;
   },


   reject: function(array, callback) { 
     var myArray = [];

     for (var i in array){
        var oddResult = callback(array[i]);
        if (oddResult == false){
          myArray.push(array[i]);
      }
     }
     return myArray;
   }
 }


// Callbacks

var timesThree = _.map([0, 4, 8, 2, 1, 5], function(num){
  return num * 3;
});

var sum = _.reduce([0, 4, 2, 1, 4, 3, 7], function(num, sum){
  return sum + num;
})

var modulaEven = _.find([1, 3, 5, 7, 4, 1], function(num){
  if (num % 2 == 0){
    return 0;
  }
  else{
    return 1;
  }
})

var Evens = _.filter([0, 2, 1, 3, 7, 6, 5, 4, 10, 9, 2], function(num){
  if (num % 2 == 0){
    return true;
  }
  else{
    return false;
  }
})

var Odds = _.reject([0, 2, 1, 3, 7, 6, 5, 4, 10, 9, 2], function(num){
  if (num % 2 == 0){
    return true;
  }
  else{
    return false;
  }
})

// Running Callback Functions

console.log(timesThree);
console.log(sum);
console.log(Evens);
console.log(Odds);