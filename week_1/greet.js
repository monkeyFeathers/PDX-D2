

var Greet = {

  sayName: function(name){
  return "Hello, my name is " + name;
  },

  doSomething: {
    something: "We just did something"
  }
};



module.exports = Greet;

if (process.argv.length === 3) {console.log(Greet.sayName(process.argv[2]))}
