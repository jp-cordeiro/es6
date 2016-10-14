"use strict";

var bob = {
    _name: "Fulano",
    _friends: ["João", "Pedro", "José"],
    // printFriends: function printFriends() {
    //     var self = this;
    //     self._friends.forEach(function (f) {
    //         return console.log(self._name + " conhece " + f);
    //     })
    // }


    //Arrows Functions
    printFriends: function printFriends() {
        var _this = this;

        this._friends.forEach(function (f) {
            return console.log(_this._name + " conhece " + f);
        });
    }
};

bob.printFriends();

var color = function color() {
    console.log("teste");
};

color();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Color = function () {
    function Color(codeColor, nameColor) {
        _classCallCheck(this, Color);

        this.codeColor = codeColor;
        this.nameColor = nameColor;
    }

    _createClass(Color, [{
        key: "getColor",
        value: function getColor() {
            return { codeColor: this.codeColor, nameColor: this.nameColor };
        }
    }]);

    return Color;
}();

var red = new Color("#1234", "Red");
console.log(red.getColor());
