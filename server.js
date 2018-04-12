const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//multer shiz
var multer = require("multer");
var fs = require("fs");
var storage = multer.memoryStorage()
var upload = multer({storage: storage});

//TextFunction module
const TextFunctions = require('./TextFunctions.js');

//define Object.entries
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
