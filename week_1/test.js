var expect = require("chai").expect;
var greet = require("./greet");
var exec = require("child_process").exec;

var str = "some string";
describe("chai examples", function(){
  describe("access string", function() {
    it("should return a string", function(done){
      expect(str).to.eql("some string");
      done()
    });
      it("should equal 'some string'", function(done){
      expect(str).to.eql("some string");
      done()
    });
  });
});

describe("greeter", function(){
  it("says its name", function(done){
    expect(greet.sayName("Brian")).to.equal("Hello, my name is Brian");
    done();
  });
  it("says its name from the command line", function(done){
    exec("node greet 'Javier'", function(error,stdout,stderr){
      expect(stdout).to.eql("Hello, my name is Javier");
      done();
    })
  })
});
