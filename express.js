//=-----------------------------------Setup------------------------------------

//Bringing in the express framework and storing it as a variable
const express = require('express')
// initialiing the express framework and storing it as a variable 
const app = express();

//assigning the port number for our server 
const PORT = 3000;

const userRouter = require('./routes/user')
// the first argument '/' is the path or url. The second argument is the callback function (resquest and response )
const postRouter = require('./routes/post')
app.get('/', (req, res) => {
    res.send('We are up and Running ');
  }); // this request is made to the homepage 
  
app.get('/api',(req, res) => {
  res.send("[]");
}); // this is a request to show an array of data sent to this page 



app.get('/api/user/:id', (request, response) => {
  response.send(request.params.id)
}) //This request will show all user id's. Can use Query string parameters by request.query sortByName

//*----------------------------------------Middleware------------------------------ */
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });