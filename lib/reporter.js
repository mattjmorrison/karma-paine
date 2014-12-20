var PaineReporter = function(baseReporterDecorator, config){
    baseReporterDecorator(this);

    function specSkipped(browser, result){
        console.log(this.testName(result).yellow + " Skipped");
    }

    this.specSuccess = function(browser, result){
        console.log('.');
    }

    this.specFailure = function(browser, result){
        var out = result.log[0].split('at http://');
        console.log(this.testName(result).red + ' ' + "Failed!");
        console.log(out[0]);
    };

    this.onRunComplete = function(browsers, results) {
        console.log("ALL DONE!");
    };

    this.onBrowserLog = function(browser, log, type) {
        console.log(log);
        // if (this._browsers && this._browsers.length === 1) {
        //   console.log(log);
        // } else {
        //     consol
        //   this.writeCommonMsg(util.format(this.LOG_MULTI_BROWSER, browser, type.toUpperCase(), log));
        // }
    };

    this.testName = function(result){
        return result.suite.join(' ') + ' ' + result.description;
    };
};

PaineReporter.$inject = ['baseReporterDecorator', 'config'];

module.exports = PaineReporter;
