'use strict';
var expect = require('chai').expect;

describe("Array functions", function(){
  describe("#reverse", function(){
    it("should reverse an array",function(done){
      var testArray = [1,2,3,4,5];
      expect(reverse(testArray)).deep.equal([5,4,3,2,1])
      done();
    })
  })
  describe("#reverseNoLength", function(){
    it("should reverse an array",function(done){
      var testArray = [1,2,3,4,5];
      expect(reverseNoLength(testArray)).deep.equal([5,4,3,2,1])
      done();
    })
  })
})

function reverse(array) {
  var reversed = [];
  for (var i = 0; i = array.length; i++){
    reversed.push(array.pop());
  }
  return reversed;
}

function reverseNoLength(array){
  var reveresed = [];
  var popped;
  while (popped = array.pop()) {
    reveresed.push(popped);
  }
  return reveresed;
}
