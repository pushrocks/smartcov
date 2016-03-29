/// <reference path="../ts/typings/main.d.ts" />

let smartcov = require("../dist/index.js");
let should = require("should");

describe("smartcov",function(){
    describe(".get",function(){
        describe(".percentage",function(){
            it("should",function(done){
                smartcov.get.percentage("./test/lcov.info")
                    .then(function(percentageArg){
                        console.log(percentageArg);
                        done();
                    });
            });
        });
    });
});