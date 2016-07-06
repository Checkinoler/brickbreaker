"use strict";

var Listener = {
    obj: null,
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    onTouchBegan: function () {
        return true;
    },
    onTouchMoved: function (touch) {
        var loc = touch.getLocation();
        this.obj.attr({
            x: loc.x,
            y: loc.y
        });
    }
};

var StartLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        var size = cc.visibleRect;

        var Background = new cc.LayerColor(cc.color(0, 0, 0, 0));
        this.addChild(Background, 0);
        var action = cc.fadeTo(0.3, 101);
        Background.runAction(action);

        var StartMenu = new cc.Node();
        this.addChild(StartMenu, 1);
        var Menu = new cc.Sprite(res.StartMenu_png);
        Menu.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: 0
        });
        Menu.runAction(cc.scaleTo(0.3, 1));
        StartMenu.addChild(Menu, 0);

        return true;
    }
});

var GameLayer = cc.LayerColor.extend({
    ctor: function () {
        this._super(cc.color(41, 46, 55));
        var size = cc.visibleRect;

        var topBakcground = new cc.DrawNode();
        this.addChild(topBakcground);
        topBakcground.drawRect(cc.p(0, size.height - 180), cc.p(size.width, size.height), cc.color(28, 28, 28), 0, cc.color(0, 0, 0));
        
        var Ball = new cc.Sprite(res.Ball_png);
        this.addChild(Ball);
        Ball.scale = 0.5;
        Listener.obj = Ball;

        cc.eventManager.addListener(Listener, this);

        return true;
    }
});

var GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();

        var startlayer = new StartLayer();
        this.addChild(startlayer, 1);

        var gamelayer = new GameLayer();
        this.addChild(gamelayer, 0);
    }
});