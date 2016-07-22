"use strict";
const plugins = require("./smartcov.plugins");
exports.percentage = (filePathArg, roundedTo, format) => {
    let done = plugins.q.defer();
    let report;
    let covParseActive = true;
    try {
        report = plugins.fs.readFileSync(filePathArg, 'utf8');
    }
    catch (err) {
        plugins.beautylog.warn("no file found at " + filePathArg.blue);
        covParseActive = false;
        done.reject("error");
    }
    if (covParseActive && report === "")
        covParseActive = false;
    if (covParseActive) {
        let coveragePercentage;
        let finalCoverage;
        format = format || 'lcov';
        switch (format) {
            case 'jscoverage':
                plugins.beautylog.warn("jscoverage not yet implemented");
                done.reject("error");
                break;
            case 'lcov':
            default:
                plugins.lcovParse(report, function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                    ;
                    var hit = 0;
                    var found = 0;
                    for (var i = 0; i < data.length; i++) {
                        hit += data[i].lines.hit;
                        found += data[i].lines.found;
                    }
                    coveragePercentage = (hit / found) * 100;
                    finalCoverage = plugins.mathjs.round(coveragePercentage, roundedTo);
                    done.resolve(finalCoverage);
                });
                break;
        }
    }
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRjb3YuZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRjb3YuZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFPLE9BQU8sV0FBVyxvQkFBb0IsQ0FBQyxDQUFDO0FBRXBDLGtCQUFVLEdBQUcsQ0FBQyxXQUFtQixFQUFFLFNBQWlCLEVBQUUsTUFBZTtJQUM1RSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLElBQUksTUFBYyxDQUFDO0lBQ25CLElBQUksY0FBYyxHQUFZLElBQUksQ0FBQztJQUNuQyxJQUFJLENBQUM7UUFDRCxNQUFNLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQ0E7SUFBQSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsRUFBRSxDQUFDLENBQUMsY0FBYyxJQUFJLE1BQU0sS0FBSyxFQUFFLENBQUM7UUFBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBRTVELEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDakIsSUFBSSxrQkFBMEIsQ0FBQztRQUMvQixJQUFJLGFBQXFCLENBQUM7UUFDMUIsTUFBTSxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUM7UUFDMUIsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNiLEtBQUssWUFBWTtnQkFDYixPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNyQixLQUFLLENBQUM7WUFDVixLQUFLLE1BQU0sQ0FBQztZQUNaO2dCQUNJLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFVBQVUsR0FBRyxFQUFFLElBQUk7b0JBQ3pDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDckIsQ0FBQztvQkFBQSxDQUFDO29CQUNGLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDWixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ2QsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQ25DLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzt3QkFDekIsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUNqQyxDQUFDO29CQUNELGtCQUFrQixHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDekMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hCLENBQUMsQ0FBQyJ9