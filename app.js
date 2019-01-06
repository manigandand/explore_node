var counter = require("./count")
var stuff = require("./stuff")

console.log('----------------------------------------------------------------');
console.log("Exploring the power of nodejs");
console.log(__dirname);
console.log(__filename);


// setInterval
var time = 0;
var timer = setInterval(function () {
    time += 2;
    if (time > 5) {
        clearInterval(timer)
    }
    console.log(time + 'sec');
}, 2000);

console.log('----------------------------------------------------------------');

// setTimeout
setTimeout(function () {
    console.log("it prints after %v sec", 3)
}, 3000);

console.log('----------------------------------------------------------------');

// function
function func(f) {
    console.log("Hi");
    f();
}

// annoymous function
var f = function () {
    console.log("Bye");
};

func(f);

console.log('----------------------------------------------------------------');

// modules
console.log(counter(['golang', 'nodejs', 'javascript', 'reactjs', 'mongodb']));

console.log(stuff.counter(['golang', 'nodejs', 'javascript', 'reactjs']));
console.log(stuff.sum(5, 3));
console.log(stuff.pi);

console.log('----------------------------------------------------------------');

// Event emitter

var events = require("events")
var util = require("util")

var Person = function (name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var manigandan = new Person('manigandan');

var people = [james, manigandan];

people.forEach(function (person) {
    person.on('speak', function (msg) {
        console.log(person.name + ' said: ' + msg);
    });
});

// emit events
james.emit('speak', 'hi, i am james.');
manigandan.emit('seapk', 'hi dude, how are you');