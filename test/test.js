"use strict";
require("typings-test");
const smartcov = require("../dist/index.js");
let should = require("should");
describe("smartcov", function () {
    describe(".get", function () {
        describe(".percentage", function () {
            it("should get resolved with correct value for valid lcov.info file", function (done) {
                smartcov.get.percentage("./test/lcov.info", 2)
                    .then(function (percentageArg) {
                    percentageArg.should.equal(63.64);
                    done();
                });
            });
            it("should get rejected for invalid file and warn", function (done) {
                smartcov.get.percentage("./test/lcovNotThere.info", 2)
                    .then(function (percentageArg) { }, function () {
                    done();
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FBYyxDQUFDLENBQUE7QUFFdEIsTUFBWSxRQUFRLFdBQU0sa0JBQWtCLENBQUMsQ0FBQTtBQUM3QyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFL0IsUUFBUSxDQUFDLFVBQVUsRUFBQztJQUNoQixRQUFRLENBQUMsTUFBTSxFQUFDO1FBQ1osUUFBUSxDQUFDLGFBQWEsRUFBQztZQUNuQixFQUFFLENBQUMsaUVBQWlFLEVBQUMsVUFBUyxJQUFJO2dCQUM5RSxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBQyxDQUFDLENBQUM7cUJBQ3hDLElBQUksQ0FBQyxVQUFTLGFBQWE7b0JBQ3hCLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsQyxJQUFJLEVBQUUsQ0FBQztnQkFDWCxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDO1lBQ0gsRUFBRSxDQUFDLCtDQUErQyxFQUFDLFVBQVMsSUFBSTtnQkFDNUQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLEVBQUMsQ0FBQyxDQUFDO3FCQUNoRCxJQUFJLENBQ0QsVUFBUyxhQUFhLElBQUUsQ0FBQyxFQUN6QjtvQkFDSSxJQUFJLEVBQUUsQ0FBQztnQkFDWCxDQUFDLENBQ0osQ0FBQztZQUNWLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=