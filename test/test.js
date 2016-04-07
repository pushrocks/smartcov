/// <reference path="../ts/typings/main.d.ts" />
var smartcov = require("../dist/index.js");
var should = require("should");
describe("smartcov", function () {
    describe(".get", function () {
        describe(".percentage", function () {
            it("should output a correct value for valid lcov.info file", function (done) {
                smartcov.get.percentage("./test/lcov.info")
                    .then(function (percentageArg) {
                    console.log(percentageArg);
                    done();
                });
            });
            it("should output 0 and warn when confronted with invalid input", function (done) {
                smartcov.get.percentage("./test/lcovNotThere.info")
                    .then(function (percentageArg) {
                    console.log(percentageArg);
                    done();
                });
            });
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBRWhELElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUUvQixRQUFRLENBQUMsVUFBVSxFQUFDO0lBQ2hCLFFBQVEsQ0FBQyxNQUFNLEVBQUM7UUFDWixRQUFRLENBQUMsYUFBYSxFQUFDO1lBQ25CLEVBQUUsQ0FBQyx3REFBd0QsRUFBQyxVQUFTLElBQUk7Z0JBQ3JFLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDO3FCQUN0QyxJQUFJLENBQUMsVUFBUyxhQUFhO29CQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUMzQixJQUFJLEVBQUUsQ0FBQztnQkFDWCxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDO1lBQ0gsRUFBRSxDQUFDLDZEQUE2RCxFQUFDLFVBQVMsSUFBSTtnQkFDMUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUM7cUJBQzlDLElBQUksQ0FBQyxVQUFTLGFBQWE7b0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzNCLElBQUksRUFBRSxDQUFDO2dCQUNYLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90cy90eXBpbmdzL21haW4uZC50c1wiIC8+XG5cbmxldCBzbWFydGNvdiA9IHJlcXVpcmUoXCIuLi9kaXN0L2luZGV4LmpzXCIpO1xubGV0IHNob3VsZCA9IHJlcXVpcmUoXCJzaG91bGRcIik7XG5cbmRlc2NyaWJlKFwic21hcnRjb3ZcIixmdW5jdGlvbigpe1xuICAgIGRlc2NyaWJlKFwiLmdldFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGRlc2NyaWJlKFwiLnBlcmNlbnRhZ2VcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgaXQoXCJzaG91bGQgb3V0cHV0IGEgY29ycmVjdCB2YWx1ZSBmb3IgdmFsaWQgbGNvdi5pbmZvIGZpbGVcIixmdW5jdGlvbihkb25lKXtcbiAgICAgICAgICAgICAgICBzbWFydGNvdi5nZXQucGVyY2VudGFnZShcIi4vdGVzdC9sY292LmluZm9cIilcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocGVyY2VudGFnZUFyZyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwZXJjZW50YWdlQXJnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGl0KFwic2hvdWxkIG91dHB1dCAwIGFuZCB3YXJuIHdoZW4gY29uZnJvbnRlZCB3aXRoIGludmFsaWQgaW5wdXRcIixmdW5jdGlvbihkb25lKXtcbiAgICAgICAgICAgICAgICBzbWFydGNvdi5nZXQucGVyY2VudGFnZShcIi4vdGVzdC9sY292Tm90VGhlcmUuaW5mb1wiKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihwZXJjZW50YWdlQXJnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBlcmNlbnRhZ2VBcmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
