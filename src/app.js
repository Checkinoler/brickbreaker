"use strict";

var MainLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        var size = cc.winSize;

        return true;
    }
});

var GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        
        var layer = new MainLayer();
        this.addChild(layer);
    }
});