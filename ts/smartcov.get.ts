import plugins = require("./smartcov.plugins");

export let percentage = (filePathArg: string, roundedTo: number, format?: string) => {
    let done = plugins.q.defer();
    let report: String;
    let covParseActive: boolean = true;
    try {
        report = plugins.fs.readFileSync(filePathArg, 'utf8');
    }
    catch (err) {
        plugins.beautylog.warn("no file found at " + filePathArg.blue);
        covParseActive = false;
        done.reject("error");
    }

    if (covParseActive && report === "") covParseActive = false;

    if (covParseActive) {
        let coveragePercentage: number;
        let finalCoverage: number;
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
                    };
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
