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

// setTimeout
setTimeout(function () {
    console.log("it prints after %v sec", 3)
}, 3000);

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