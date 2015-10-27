var expect = require("chai").expect;
var greet = require("./greet");
var exec = require("child_process").exec;

describe("greeter", function(){
  describe("#sayName", function(){
    it("should say name", function(done){
      expect(greet.sayName("Brian")).to.equal("Hello, my name is Brian");
      done();
    });
  });
  describe("#cli greeting", function(){
    it("should say name from the command line", function(done){
      exec("node ./week_1/greet/greet Javier", function(error,stdout,stderr){
        expect(stdout).to.eql("Hello, my name is Javier");
        done();
      });
    });
  });
});
