//=-----------------------------------Setup------------------------------------

//Bringing in the express framework and storing it as a variable
const express = require('express')
// initialiing the express framework and storing it as a variable 
const app = express();

//assigning the port number for our server 
const PORT = 3000;
 

//connecting user routes 
const userRouter = require('./routes/user.js');

//connecting post router 
const postRouter = require('./routes/post.js')


 
// the first argument '/' is the path or url. The second argument is the callback function (resquest and response )
app.use('/users', userRouter)

app.use('/posts', postRouter)


app.get('/', (req, res) => {
    res.send('We are up and Running ');
    console.log("test")
  }); // this request is made to the homepage 
  
app.get('/api',(req, res) => {
  res.send("[]");
}); // this is a request to show an array of data sent to this page 

// Get a specific user by ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);
  if (!user) {
      return res.status(404).send('User not found');
  }
  res.json(user);
})


app.get('/api/user/:id', (request, response) => {
  response.send(request.params.id)
}) //This request will show all user id's. Can use Query string parameters by request.query sortByName



//*----------------------------------------Middleware------------------------------ */
const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}
console.log(requestTime)

app.use((req, res, next) => {
  next(error(404, 'Resource Not Found'));
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });