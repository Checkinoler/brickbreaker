"use strict";

function containsPoint(pPoint, pBox) {
    return (pPoint.x >= pBox.x && pPoint.x <= (pBox.x + pBox.width) && pPoint.y >= pBox.y && pPoint.y <= (pBox.y + pBox.height));
}

var ButtonListener = {
    obj: null,
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    isHovering: function (touch) {
        var size = cc.visibleRect;
        var box = {
            x: size.width / 2 - 190.5,
            y: size.height / 2 - 145,
            width: 381,
            height: 90
        };
        return containsPoint(touch.getLocation(), box);
    },
    onTouchBegan: function (touch) {
        if (this.isHovering(touch)) {
            this.obj.visible = false;
        }
        return true;
    },
    onTouchMoved: function (touch) {
        if (this.isHovering(touch) === this.obj.visible) {
            this.obj.visible = !this.obj.visible;
        }
    },
    onTouchEnded: function (touch) {
        if (this.isHovering(touch)) {
            this.obj.parent.parent.parent.parent.removeFromParent();
        }
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
        Menu.runAction(cc.scaleTo(0.3, 1).easing(cc.easeQuarticActionOut()));
        StartMenu.addChild(Menu, 0);

        var Title = new cc.LabelTTF("BrickBreaker", "Avenir Next", 72);
        Menu.addChild(Title, 0);
        Title.setFontFillColor(cc.color(0, 0, 0));
        Title.attr({
            x: Menu.width / 2,
            y: Menu.height - 128
        });

        var SubTitle = new cc.LabelTTF("Highscore: 0", "Avenir Next", 40);
        Menu.addChild(SubTitle, 0);
        SubTitle.setFontFillColor(cc.color(0, 0, 0));
        SubTitle.attr({
            x: Menu.width / 2,
            y: Menu.height - 240
        });

        var GameStartButton = new cc.Node();
        Menu.addChild(GameStartButton, 0);
        GameStartButton.attr({
            x: Menu.width / 2,
            y: Menu.height / 2 - 100 - 4
        });
        var Button1 = new cc.Sprite(res.Button1_png);
        GameStartButton.addChild(Button1, 1);
        GameStartButton.addChild(new cc.Sprite(res.Button2_png), 0);

        var GameStartLabel = new cc.LabelTTF("New Game", "Avenir Next", 40);
        Menu.addChild(GameStartLabel, 1);
        GameStartLabel.setFontFillColor(cc.color(0, 0, 0));
        GameStartLabel.attr({
            x: Menu.width / 2,
            y: Menu.height / 2 - 100
        });

        ButtonListener.obj = Button1;
        cc.eventManager.addListener(ButtonListener, GameStartButton);

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

            var Paddle = new cc.Sprite(res.Paddle_png);
            this.addChild(Paddle);
            Paddle.attr({
                x: size.width / 2,
                y: 140,
                scale: 0.7
            });

            return true;
        }
    })
    ;

var GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();

        var startlayer = new StartLayer();
        this.addChild(startlayer, 1);

        var gamelayer = new GameLayer();
        this.addChild(gamelayer, 0);
    }
});