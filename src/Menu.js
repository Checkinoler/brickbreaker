"use strict";

function roundedRect(width, height, radius, color) {
    var node = new cc.DrawNode();
    node.drawRect(cc.p(radius, radius), cc.p(width - radius, height - radius), color, 0, color);
    node.drawRect(cc.p(0, radius), cc.p(radius, height - radius), color, 0, color);
    node.drawRect(cc.p(width - radius, radius), cc.p(width, height - radius), color, 0, color);
    node.drawRect(cc.p(radius, 0), cc.p(width - radius, radius), color, 0, color);
    node.drawRect(cc.p(radius, height - radius), cc.p(width - radius, height), color, 0, color);
    node.drawDots([cc.p(radius, radius),
                   cc.p(width - radius, height - radius),
                   cc.p(width - radius, radius),
                   cc.p(radius, height - radius)], radius, color);
    node.drawCircle(cc.p(radius, radius), radius, 0, 1000, 0, 1, color);
    node.drawCircle(cc.p(width - radius, height - radius), radius, 0, 1000, 0, 1, color);
    node.drawCircle(cc.p(width - radius, radius), radius, 0, 1000, 0, 1, color);
    node.drawCircle(cc.p(radius, height - radius), radius, 0, 1000, 0, 1, color);

    return node;
}