"use strict";
var Greet = {

  sayName: function(name){
  return "Hello, my name is " + name;
},
test: function(){
  return true;
}

};

module.exports = Greet;

if (process.argv.length === 3) {
  process.stdout.write(Greet.sayName(process.argv[2]));
}
