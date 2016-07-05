"use strict";

var Listener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    onTouchBegan: function () {
    }
});

var StartLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        //var size = cc.winSize;

        return true;
    }
});

var GameLayer = cc.LayerColor.extend({
    ctor: function () {
        this._super(cc.color(41, 47, 55));
        var size = cc.visibleRect;
        //cc.eventManager.addListener(Listener, this);
        var topBakcground = new cc.DrawNode();
        this.addChild(topBakcground);
        topBakcground.drawRect(cc.p(0, size.height - 90), cc.p(size.width, size.height), cc.color(28, 28, 28), 0, cc.color(0, 0 ,0));

        return true;
    }
});

var GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();

        var layer = new GameLayer();
        this.addChild(layer);
    }
});