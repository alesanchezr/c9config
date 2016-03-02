/// <reference path="../ts/typings/main.d.ts" />
var c9config = require("../dist/index.js");

describe("c9config",function(){
    describe(".print()",function(){
        it("should print the environment",function(){
            c9config.print();
        });
    })
});