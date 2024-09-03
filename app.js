var fs = require("fs");

//To create a files
fs.writeFile("calc1.js", 'console.log("done")', function (err) {
  console.log("Data Saved");
});

fs.writeFile("calc2.js", 'console.log("Done")', function (err2) {
  console.log("Data Stored");
});

fs.writeFile("calc3.js", 'document.write("Hello World")', function (demo) {
  console.log("Stored");
});

fs.writeFile(
  "calc5.js",
  "function replicate(){var a = 10; var b = 20; var c = a + b; }",
  function (err3) {
    console.log("Replicate Function");
  }
);


// To remove a file
fs.unlink("calc1.js", function (err) {
  console.log("Deleted");
});
