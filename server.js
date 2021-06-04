const express = require('express');
const path = require('path');
const app = express();


const posts = require('./server/routes/posts');

app.use(express.static(path.join(__dirname, 'dist/secondproject')));


app.use('./posts', posts)


// catch all other routes request and return to the index 
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'dist/secondproject/index.html'))
});


const port = process.env.PORT || 4040;

app.listen(4040, (req,res)=>{

    console.log("app is running at port 4040...");

})