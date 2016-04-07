/// <reference path="./typings/main.d.ts" />
import plugins = require("./smartcov.plugins");
export let percentage = function(filePathArg:string, format?:string):number {
    let done = plugins.Q.defer();
    let report:String;
    let covParseActive:boolean = true;
    try {
        report = plugins.fs.readFileSync(filePathArg, 'utf8');
    }
    catch(err){
        plugins.beautylog.warn("no file found at " + filePathArg.blue);
        covParseActive = false;
        done.resolve(0);
    }

    if(covParseActive && report === "") covParseActive = false;

    if(covParseActive){
        let coveragePercentage:number;
        let coveragePercentageRounded:number;
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
                    coveragePercentageRounded = plugins.mathjs.round(coveragePercentage);
                    done.resolve(coveragePercentageRounded);
                });
                break;
        }
    }

    return done.promise;
};