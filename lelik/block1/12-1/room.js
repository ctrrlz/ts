"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.room = void 0;
var room = /** @class */ (function () {
    function room(_ox, _oy, _oz) {
        if (_ox)
            this.ox = _ox;
        if (_oy)
            this.oy = _oy;
        if (_oz)
            this.oz = _oz;
    }
    Object.defineProperty(room.prototype, "oxx", {
        get: function () {
            return this.ox;
        },
        set: function (n) {
            if (n > 0)
                this.ox = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(room.prototype, "oyy", {
        get: function () {
            return this.oy;
        },
        set: function (n) {
            if (n > 0)
                this.oy = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(room.prototype, "ozz", {
        get: function () {
            return this.oz;
        },
        set: function (n) {
            if (n > 0)
                this.oz = n;
        },
        enumerable: false,
        configurable: true
    });
    room.prototype.squareWalls = function () {
        console.log("".concat(this.ox * this.oy * 2 + (this.oy * this.oz * 2)));
    };
    room.prototype.squareFloor = function () {
        console.log("".concat(this.ox * this.oy));
    };
    room.prototype.volume = function () {
        console.log("".concat(this.ox * this.oy * this.oz));
    };
    room.prototype.all = function () {
        console.log("".concat(this.ox));
        console.log("".concat(this.oy));
        console.log("".concat(this.oz));
        console.log("".concat(this.ox * this.oy * 2 + (this.oy * this.oz * 2)));
        console.log("".concat(this.ox * this.oy));
        console.log("".concat(this.ox * this.oy * this.oz));
    };
    return room;
}());
exports.room = room;
