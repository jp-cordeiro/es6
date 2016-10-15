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
"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pessoa = function () {
    function Pessoa(name, email, phone) {
        _classCallCheck(this, Pessoa);

        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    _createClass(Pessoa, [{
        key: "toString",
        value: function toString() {
            return "\n        Name: " + this.name + "\n        Email: " + this.email + "\n        Phone: " + this.phone + "\n        ";
        }
    }]);

    return Pessoa;
}();

var Client = function (_Pessoa) {
    _inherits(Client, _Pessoa);

    function Client(id, name, email, phone) {
        _classCallCheck(this, Client);

        var _this = _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this, name, email, phone));

        _this.id = id;
        return _this;
    }

    _createClass(Client, [{
        key: "toString",
        value: function toString() {
            return "\n        id: " + this.id + "\n        " + _get(Client.prototype.__proto__ || Object.getPrototypeOf(Client.prototype), "toString", this).call(this) + "\n        ";
        }
    }]);

    return Client;
}(Pessoa);

var client = new Client(1, "Fulano", "a@a.com", "1234-5678");
console.log(client.toString());
"use strict";

var color = new Set();
color.add("azul").add("verde").add("azul");

if (color.size === 2 && color.has("azul")) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = color.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            console.log(key);
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
}
