const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();



// get posts
router.get('/', async (req, res) =>{

    const posts = await loadpostscollection();
    res.send(await posts.find({}).toArray());
});

//add posts
router.post('/', async (req,res) =>{
    const posts = await loadpostscollection();

    await  posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();

});


//delete posts
router.delete('/:id', async (req, res) =>{

    const posts = await loadpostscollection();
    await  posts.deleteOne({_id: new mongodb.ObjectId(req.params.id)})

    res.status(200).send();
});

async  function loadpostscollection() {

    const client = await mongodb.MongoClient.connect(

        'mongodb://127.0.0.1:27017',

        {

            useNewUrlparser: true
        }
    );

    return client.db('test').collection('test');


}
module.exports = router;
