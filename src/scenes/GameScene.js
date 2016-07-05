"use strict";

var GameLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        var size = cc.winSize;

        return true;
    }
});

var GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();

        alert("Now in GameScene!");

        var layer = new GameLayer();
        this.addChild(layer);
    }
});