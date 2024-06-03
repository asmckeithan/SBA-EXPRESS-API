//=-----------------------------------Setup------------------------------------

//Bringing in the express framework and storing it as a variable
const express = require('express')
// initialiing the express framework and storing it as a variable 
const app = express();

//assigning the port number for our server 
const PORT = 3000;
 
// app.use(bodyParser.json());
//const bodyParser = require('body-parser');
const userRouter = require('./routes/user.js');

// 
// the first argument '/' is the path or url. The second argument is the callback function (resquest and response )
app.use('/users', userRouter)

// const postRouter = require('./routes/post')
app.get('/', (req, res) => {
    res.send('We are up and Running ');
    console.log("test")
  }); // this request is made to the homepage 
  
app.get('/api',(req, res) => {
  res.send("[]");
}); // this is a request to show an array of data sent to this page 



app.get('/api/user/:id', (request, response) => {
  response.send(request.params.id)
}) //This request will show all user id's. Can use Query string parameters by request.query sortByName
//*--------------------------------------User Routes ------------------------------ */

// app.use('api/users', userRouter)
// app.use('api/posts', postRouter)//connecting to postroutes



//*----------------------------------------Middleware------------------------------ */


  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });