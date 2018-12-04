const express = require('express');

//post gres connection library, (might replace with some GraphQL)
const pg = require('pg');
const router = express.Router();


const client = new pg.Client({
    user: 'tjb295',
    host: 'office5',
    database: 'pinot',
    password: 'tjb295',
    port: 5432
})

//connect to database to access clean to ship data
//successful connection yay
client.connect();

// promise
client.query('SELECT * FROM application.cts_priority_rule' , (err, res) => {
    if(err){
        console.log(err.stack);
    }
    else {
        console.log(res);
    }
});

//what are the limitations of a rest api?
//what if we don't want content and creator information
//what if we just want our shit from 
 /* 
    get /post for a post gives us the etire thing
    hat if e dont want the whole thing
    then we'll end up having tons of different end points
    if we dont want that much data

    -we could use query parameters, and pass in data
        -then based on the parameter we could return data given
        to us.
        - we still have constant loop, less flexibility
    -we could try graphQL

    -graph Ql we get a back end that exposes endpoints
    is flexible regarding query sent to it

    custom written query language, which we can implement
    front end can send commands and fetch data that is requested

    graphQL can run on any server framework
    //limitations are not with react
    //typical graphQl query, we have operation type
    {
        query: {
            user {
                name
                age
            }
        }
    }

    everything is sent as a post request
    operation types are queries
    query => retrieve data("get")
    
    mutation is for changing data 
    mutation => manipulate data("post, "put". "Patch" "Delete")
    
    subscription for real time data 

    Resolvers, {contain your server-side logic}

    


 */

module.exports = router;



