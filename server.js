const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
// const cors = require('cors');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//multer shiz
var multer = require("multer");
var fs = require("fs");
var storage = multer.memoryStorage()
var upload = multer({storage: storage});

//view test
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));

//TextFunction module
const TextFunctions = require('./TextFunctions.js');

//Object.entries polyfill
if (!Object.entries){
  Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", function(req, res, next){
  res.render("index", {
    fileArray: [],
    timeData: [],
    cleanArray: []
  });
});

app.post("/", upload.any("files"), function(req, res, next){
  //make sure to use REQ.FILES
  console.log("ahoy from the post matey!")

  console.log("~*~*~*~*~*files: ", req.files)
  console.log("body: ", req)
  // console.log("********req: ", req)

  const fileArray = [];
  const allFiles = req.files; //an array of file Objects if multiple uploaded
  const files = []; //all the .txtFiles
  let sortedFrequencyArray, cleanArray, timeData;

  //select only text files
  allFiles.forEach(function(file){
    if (file.mimetype === 'text/plain'){
      files.push(file);
    }
  });

  //declare this after cleaning out non-txt files
  const fileNameArray = TextFunctions.fileNameArray(files);

  if (files.length > 0){
    sortedFrequencyArray = TextFunctions.fileArrayToFrequencyArray(files); //raw not cleaned
    cleanArray = TextFunctions.cleanArray(sortedFrequencyArray); //filtered and cleaned, still has \'
    timeData = TextFunctions.extractTimeData(files.slice(0, (files.length)/2));

    // console.log(timeData);
  }

  res.json({
    foob: "going postal",
    fileArray: fileNameArray,
    timeData,
    cleanArray
  })
  // res.render("index", {
  //   fileArray: fileNameArray,
  //   //commented out for testing
  //   // timeData: [],
  //   // cleanArray: []
  //   timeData: timeData,
  //   cleanArray: cleanArray
  // });
})

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
