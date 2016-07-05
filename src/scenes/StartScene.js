"use strict";

var StartLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        var size = cc.winSize;

        return true;
    }
});

var StartScene = cc.Scene.extend({
    onEnter: function () {
        this._super();

        var layer = new StartLayer();
        this.addChild(layer);
    },
    onTouchBegan: function (touch, event) {
        alert("Changing to GameScene...");
        cc.director.runScene(new GameScene());
    }
});