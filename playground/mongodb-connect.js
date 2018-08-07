const MongoClient = require('mongodb').MongoClient;


/*
// How to make new variables from object props
let user = {name: 'bogdan', age: '20'};
let {name} = user;
console.log(name)
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err) {
        console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB servers.");

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log("Unable to insert todo.", err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: 'Bogdan',
        age: 20,
        location: 'Snoqualmie'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    });

    db.close();
});