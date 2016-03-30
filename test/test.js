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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBRWhELElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUUvQixRQUFRLENBQUMsVUFBVSxFQUFDO0lBQ2hCLFFBQVEsQ0FBQyxNQUFNLEVBQUM7UUFDWixRQUFRLENBQUMsYUFBYSxFQUFDO1lBQ25CLEVBQUUsQ0FBQyxRQUFRLEVBQUMsVUFBUyxJQUFJO2dCQUNyQixRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztxQkFDdEMsSUFBSSxDQUFDLFVBQVMsYUFBYTtvQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxFQUFFLENBQUM7Z0JBQ1gsQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3RzL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cblxubGV0IHNtYXJ0Y292ID0gcmVxdWlyZShcIi4uL2Rpc3QvaW5kZXguanNcIik7XG5sZXQgc2hvdWxkID0gcmVxdWlyZShcInNob3VsZFwiKTtcblxuZGVzY3JpYmUoXCJzbWFydGNvdlwiLGZ1bmN0aW9uKCl7XG4gICAgZGVzY3JpYmUoXCIuZ2V0XCIsZnVuY3Rpb24oKXtcbiAgICAgICAgZGVzY3JpYmUoXCIucGVyY2VudGFnZVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpdChcInNob3VsZFwiLGZ1bmN0aW9uKGRvbmUpe1xuICAgICAgICAgICAgICAgIHNtYXJ0Y292LmdldC5wZXJjZW50YWdlKFwiLi90ZXN0L2xjb3YuaW5mb1wiKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihwZXJjZW50YWdlQXJnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBlcmNlbnRhZ2VBcmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
