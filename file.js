var fs = require("fs")

// read file, blocking call(sync call)
// var fileContent = fs.readFileSync("file.txt", "utf8");
// console.log(fileContent)

// async call
fs.readFile("file.txt", "utf8", function (err, data) {
    if (err) {
        console.log("Oops, something went wrong ", err);
        return;
    }
    console.log(data);

    // write file
    fs.writeFile('file_write.txt', data, function (err) {
        if (err) throw err;
        console.log('File Saved!');
    });
});

console.log('----------------------------------------------------------------');

// create dir

fs.mkdir('assets', function () {
    fs.readFile('file.txt', 'utf8', function (err, data) {
        if (err) {
            console.log("Oops, something went wrong ", err);
            return;
        }

        fs.writeFile('./assets/file_write.txt', data, function (err) {
            if (err) throw err;
            console.log('File Saved!');
        });
    });
});

fs.mkdir('stuff', function (err) {
    if (err) throw err;
});
setTimeout(function () {}, 2000);
fs.rmdir('stuff', function (err) {
    if (err) throw err;
});