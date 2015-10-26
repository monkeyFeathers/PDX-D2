 var Greet = {

  sayName: function(name){
  return "Hello, my name is " + name;
  },

  doSomething: {
    something: "We just did something"
  }
};

if (process.argv.length === 3) {console.log(Greet.sayName(process.argv[2]))}

module.exports = Greet;
