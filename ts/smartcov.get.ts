/// <reference path="./typings/main.d.ts" />
import plugins = require("./smartcov.plugins");
export let percentage = function(filePathArg:string, format?:string):number {
    let done = plugins.Q.defer();
    let report = plugins.fs.readFileSync(filePathArg, 'utf8');
    let coveragePercentage:number;
    format = format || 'jscoverage';
    switch(format) {
        case 'lcov':
        default:
            plugins.lcovParse(report, function(err, data) {
                if(err){
                    console.log(err);
                };
                var hit = 0;
                var found = 0;
                for(var i = 0; i < data.length; i++) {
                    hit += data[i].lines.hit;
                    found += data[i].lines.found;
                }
                coveragePercentage = (hit / found) * 100;
                done.resolve(coveragePercentage);
            });
            break;
    }
    return done.promise;
};