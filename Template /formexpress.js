//=-----------------------------------Setup------------------------------------

//Bringing in the express framework and storing it as a variable
const express = require('express')
// initialiing the express framework and storing it as a variable 
const app = express();

//assigning the port number for our server 
const PORT = 3000;

app.use(express.json())

