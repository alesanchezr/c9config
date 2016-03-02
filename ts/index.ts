/// <reference path="./typings/main.d.ts" />
var plugins = {
    beautylog: require("beautylog")
}

let c9workspace = {
    isC9: false,
    name: "undefined",
    owner:  "undefined",
    ideUrl: "undefined",
    serveUrl: "undefined"
};

(function(){
    c9workspace.isC9 = (function(){if (process.env.C9_USER === undefined) {return false} else { return true}})();
    c9workspace.name = process.env.C9_PROJECT;
    c9workspace.owner = process.env.C9_USER;
    c9workspace.ideUrl = (function(){
        if(c9workspace.isC9){
            "https://ide.c9.io/" + process.env.C9_USER + "/" + c9workspace.name;
        } else {
            return undefined;
        }
    })();
    c9workspace.serveUrl = process.env.C9_HOSTNAME;
})();

var c9config = {
    isC9: c9workspace.isC9,
    print: function() {
        var reportTable = plugins.beautylog.table.new("custom",["c9 propertyName".cyan,"c9 value".cyan]);
        for (var key in c9workspace){
            reportTable.push([key,c9workspace[key]]);
        }
        reportTable.print();
    },
    workspace: c9workspace
};

module.exports = c9config;