const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.evn2ej1.mongodb.net/?retryWrites=true&w=majority`;



const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    // console.log("database connect");
    const userCollection = client.db('e-commerce').collection('user');
    const productCollection = client.db('e-commerce').collection('products');
    const bookProductCollection = client
      .db('e-commerce')
      .collection('bookings');
    const buyProductCollection = client.db('e-commerce').collection('buys');
    const updateProductCollection = client
      .db('e-commerce')
      .collection('updateProducts');
    const reviewCollection = client
      .db('e-commerce')
      .collection('reviews');

    //   // // // // // // // // // // // //
    // // post User
    //create and update a user
    app.put('/create-user/:email', async (req, res) => {
      const email = req.params.email;
      const user = req.body;

      const filter = { email: email };
      const options = { upsert: true };

      const updatedDoc = {
        $set: user,
      };

      const result = await userCollection.updateOne(
        filter,
        updatedDoc,
        options
      );

      res.send(result);
    });

    // get all user
    app.get('/users', async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const newCollection = await cursor.toArray();
      res.send(newCollection);
    });
    // all User filter by email category
    app.get('/user/:email', async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const cursor = userCollection.find(query);
      const user = await cursor.toArray();
      res.send(user);
    });

    // // //                     product   //
    // // post product
    app.post('/products', async (req, res) => {
      const postResult = req.body;
      const result = await productCollection.insertOne(postResult);
      res.send(result);
    });
    // // get products
    app.get('/products', async (req, res) => {
      const query = {};
      const cursor = productCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });
    // all product filter by email category
    app.get('/productCategory/:category', async (req, res) => {
      const category = req.params.category;
      const query = { category };
      const cursor = productCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });
    // all product filter by email =
    app.get('/emailProduct/:email', async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const cursor = productCollection.find(query);
      const user = await cursor.toArray();
      res.send(user);
    });
    // // get product by id
    app.get('/product/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await productCollection.findOne(query);
      res.send(result);
    });
    // restock product item and update
    app.put('/productId/:id', async (req, res) => {
      const id = req.params.id;
      const updateQuantity = req.body;
      const query = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          quantity: updateQuantity.quantity,
        },
      };
      const result = await productCollection.updateOne(
        query,
        updateDoc,
        options
      );
      res.send(result);
    });
    // update product
    app.put('/updateProduct/:id', async (req, res) => {
      const productId = req.params.id;
      const updateProduct = req.body;

      const filter = { _id: ObjectId(productId) }; // Assuming you're using MongoDB ObjectId
      const options = { upsert: true };

      const updatedDoc = {
        $set: updateProduct,
      };

      try {
        const result = await productCollection.updateOne(
          filter,
          updatedDoc,
          options
        );
        res.json({
          success: true,
          message: 'Product updated successfully',
          data: result,
        });
      } catch (error) {
        console.error('Error updating Product:', error);
        res
          .status(500)
          .json({ success: false, message: 'Internal server error' });
      }
    });
    // // Delete one product
    app.delete('/product/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await productCollection.deleteOne(query);
      res.send(result);
    });
    // // get product by id
    app.get('/allProducts/:id', async (req, res) => {
      const id = req.params.id;
      const query = { pId: id };
      const result = await productCollection.findOne(query);
      res.send(result);
    });

    //           ********
    //          Buy Product
    //          ***********

    app.post('/buy', async (req, res) => {
      const postResult = req.body;
      const result = await buyProductCollection.insertOne(postResult);
      res.send(result);
    });
    // // get buy products
    app.get('/buy', async (req, res) => {
      const query = {};
      const cursor = buyProductCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });
    // update payment
    app.put('/buyPayment/:id', async (req, res) => {
      const id = req.params.id;
      const updatePayment = req.body;
      const result = await buyProductCollection.updateOne(
        { _id: ObjectId(id) },
        { $set: { payment: updatePayment.payment } },
        { upsert: true }
      );
      res.send(result);
    });
    // all product filter by email =
    app.get('/buyEmail/:email', async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const cursor = buyProductCollection.find(query);
      const user = await cursor.toArray();
      res.send(user);
    });
    // Delete one buy  Product
    app.delete('/buy/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await buyProductCollection.deleteOne(query);
      res.send(result);
    });


    // review
      app.post('/review', async (req, res) => {
      const postResult = req.body;
      const result = await reviewCollection.insertOne(postResult);
      res.send(result);
    });
  app.get('/reviews', async (req, res) => {
    const query = {};
    const cursor = reviewCollection.find(query);
    const result = await cursor.toArray();
    res.send(result);
  });
  
app.get('/review/:pid', async (req, res) => {
  const pid = req.params.pid;
  const reviews = await reviewCollection
    .find({ pid })
    .sort({ _id: -1 })
    .toArray();
  res.send(reviews);
});

    
  } finally {
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Running Wholesale');
});

app.listen(port, () => {
  console.log('Wholesale is running ');
});
