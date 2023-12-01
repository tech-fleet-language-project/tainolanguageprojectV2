// const { MongoClient, ServerApiVersion } = require('mongodb');
const {ServerApiVersion } = require('mongodb');


//  create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.DB_CONN_STRING, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
