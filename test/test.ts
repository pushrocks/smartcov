import "typings-test";

import * as smartcov from "../dist/index.js";
let should = require("should");

describe("smartcov",function(){
    describe(".get",function(){
        describe(".percentage",function(){
            it("should get resolved with correct value for valid lcov.info file",function(done){
                smartcov.get.percentage("./test/lcov.info",2)
                    .then(function(percentageArg){
                        percentageArg.should.equal(63.64);
                        done();
                    });
            });
            it("should get rejected for invalid file and warn",function(done){
                smartcov.get.percentage("./test/lcovNotThere.info",2)
                    .then(
                        function(percentageArg){},
                        function(){
                            done();
                        }
                    );
            });
        });
    });
});