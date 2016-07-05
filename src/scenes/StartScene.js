"use strict";

var Listener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    onTouchBegan: function () {
        alert("Entering GameScene...");
        cc.director.runScene(new GameScene());
    }
});

var StartLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        var size = cc.winSize;

        cc.eventManager.addListener(Listener, this);

        return true;
    }
});

var StartScene = cc.Scene.extend({
    onEnter: function () {
        this._super();

        var layer = new StartLayer();
        this.addChild(layer);
    }
});