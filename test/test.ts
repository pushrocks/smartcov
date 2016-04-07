/// <reference path="../ts/typings/main.d.ts" />

let smartcov = require("../dist/index.js");
let should = require("should");

describe("smartcov",function(){
    describe(".get",function(){
        describe(".percentage",function(){
            it("should output a correct value for valid lcov.info file",function(done){
                smartcov.get.percentage("./test/lcov.info")
                    .then(function(percentageArg){
                        console.log(percentageArg);
                        done();
                    });
            });
            it("should output 0 and warn when confronted with invalid input",function(done){
                smartcov.get.percentage("./test/lcovNotThere.info")
                    .then(function(percentageArg){
                        console.log(percentageArg);
                        done();
                    });
            });
        });
    });
});