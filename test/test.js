/// <reference path="../ts/typings/main.d.ts" />
var smartcov = require("../dist/index.js");
var should = require("should");
describe("smartcov", function () {
    describe(".get", function () {
        describe(".percentage", function () {
            it("should", function (done) {
                smartcov.get.percentage("./test/lcov.info")
                    .then(function (percentageArg) {
                    console.log(percentageArg);
                    done();
                });
            });
        });
    });
});
//# sourceMappingURL=test.js.map