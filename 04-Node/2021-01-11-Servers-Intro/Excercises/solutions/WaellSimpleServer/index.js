const fs = require("fs");

fs.readFile("./keyboard.txt", "utf8", function(err, data) {
    if (err) throw err;
    console.log(data);
});
