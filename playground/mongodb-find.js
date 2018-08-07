const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB servers.");


    // db.collection('Todos').find({
    //         _id: new ObjectID('5b69eb19a4e47d3db47a7e7a')
    //     }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch tools', err);
    // })

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch tools', err);
    })


    //db.close();
});