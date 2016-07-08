"use strict";

var res = {
    //Pause_png: "res/pause.png",
    StartMenu_png: "res/startmenu.png",
    Ball_png: "res/ball.png",
    Paddle_png: "res/paddle.png",
    Button1_png: "res/button1.png",
    Button2_png: "res/button2.png"
};

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