/// <reference path="./typings/tsd.d.ts" />
var plugins = {
    beautylog: require("beautylog")("os")
}

var c9workspace = {
    name: "undefined",
    owner:  "undefined",
    ideUrl: "undefined",
    serveUrl: "undefined"
};
var c9config = {
    report: function() {
        var reportTable = plugins.beautylog.table.new("custom",["c9 propertyName".cyan,"c9 value".cyan]);
        for (var key in c9workspace){
            reportTable.push([key,c9workspace[key]]);
        }
        reportTable.print();
    }
};

module.exports = c9config;