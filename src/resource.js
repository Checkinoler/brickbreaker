"use strict";

var res = {};

var g_resources = [
    {
        type: "font",
        name: "Avenir Next",
        srcs: ["res/font/aer.woff", "res/font/aer.eot", "res/font/aer.ttf"]
    }
];

for (var i in res) {
    g_resources.push(res[i]);
}