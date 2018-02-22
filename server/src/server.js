const express = require('express');//importing node module express
// const routes = require('./routes';
const routes = require('./routes');

const path = require('path'); //from the path module, lets only pull in "join".

let CLIENT_PATH = path.join(__dirname, '../../client');//only "join" since we imported in on line 1. This line finds the client folder for people to access.

let app = express();//creates express APP

app.use(express.static(CLIENT_PATH));//any requests that hit the server, express will check in the CLIENT folder for the file searched. Without this line, you wouldn't be able to see the website.

app.use(express.json());//turn on a json body parser, interpreting JSON data as it comes in

app.use('/api', routes);//for requests on the api. ie. if i wanted /api/people, this takes care of the people

console.log('what');
//sets variable for port
let port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});