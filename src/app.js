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
    printFriends: function printFriends(){
        this._friends.forEach(f =>
            console.log(this._name + " conhece "+ f));
    }
}

bob.printFriends();

var color = () => {
    console.log("teste");
}

color();