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
"use strict";

var name = "Fulano";
var age = 20;
var textES5 = "name: " + name + " age: " + age;
console.log("\n" + textES5);
var textES6 = "\n        name: " + name + "\n        age: " + age + "\n";
console.log("\n" + textES6);
"use strict";

//Valor padrão no ES5
function testES5(valueA) {
    var valueB = arguments.length <= 1 || arguments[1] === undefined ? 4 : arguments[1];
    return valueA + valueB;
}

console.log(testES5(1));

//Valor padrão no ES6
function testES6(valueA) {
    var valueB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    return valueA + valueB;
}
console.log(testES6(3));
"use strict";

var lista = ["teste", 34, { name: "Fulano" }];

//ES5
// for(var i in lista){
//     console.log(lista[i]);
// }

//ES6
//O i passa a ser o valor do array e não mais o índice
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = lista[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;

        console.log(i);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
