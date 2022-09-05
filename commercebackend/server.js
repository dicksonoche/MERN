import express from "express";
import data from "./data.js";

//To import js files here, we have to the include '.js'

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products)
});

//Define port that we would be able to respond from the backend, 
//convention to access to the free port, or then we set the default number: 5000

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
})

//I changed the quote '' to `` to access to variable inside your literal string

//I created a server that can be accessed at the localhost address for the API which then returns a list of products
//Install nodemon to update the server when I have a change in the server code.....npm install --save-dev for development, not production.
//Apply <"start": "nodemon server.js",> in the scripts of the package.json backend.