const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// MongoDB connection URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gxzx6qo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // await client.connect();

        const listingCollection = client.db('listingDB').collection('listing');
        const usersCollection = client.db('listingDB').collection('users');

        // 🔹 My Listings API
        app.get('/mylistings', async (req, res) => {
            try {
                const userEmail = req.query.email;
                if (!userEmail) {
                    return res.status(400).json({ error: 'Email parameter is required' });
                }

                const listings = await listingCollection
                    .find({ email: userEmail })
                    .toArray();

                res.json(listings);
            } catch (error) {
                res.status(500).json({ error: 'Server error' });
            }
        });

        // 🔹 All Listings
        app.get('/addlisting', async (req, res) => {
            const result = await listingCollection.find().toArray();
            res.send(result);
        });

        // 🔹 Single Listing
        app.get('/addlisting/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await listingCollection.findOne(query);
            res.send(result);
        });

        // 🔹 Create Listing
        app.post('/addlisting', async (req, res) => {
            const newListing = req.body;
            const result = await listingCollection.insertOne(newListing);
            res.send(result);
        });

        // 🔹 Update Listing
        app.put('/addlisting/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedListing = req.body;

            const updatedDoc = {
                $set: updatedListing
            };

            const result = await listingCollection.updateOne(filter, updatedDoc, options);
            res.send(result);
        });

        // 🔹 Delete Listing
        app.delete('/addlisting/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await listingCollection.deleteOne(query);
            res.send(result);
        });

       
        app.get('/featured-listings', async (req, res) => {
            try {
                const featured = await listingCollection
                    .find({ Availability: "Available" }) 
                    .limit(6)
                    .toArray();

                res.send(featured);
            } catch (error) {
                console.error("Failed to fetch featured listings:", error);
                res.status(500).send({ error: "Failed to fetch featured listings" });
            }
        });

        // 🔹 Get All Users
        app.get('/users', async (req, res) => {
            const result = await usersCollection.find().toArray();
            res.send(result);
        });

        // 🔹 Create User
        app.post('/users', async (req, res) => {
            const userProfile = req.body;
            const result = await usersCollection.insertOne(userProfile);
            res.send(result);
        });

        // 🔹 Update Last Sign-in
        app.patch('/users', async (req, res) => {
            const { email, lastSignInTime } = req.body;
            const filter = { email };
            const updatedDoc = {
                $set: { lastSignInTime }
            };
            const result = await usersCollection.updateOne(filter, updatedDoc);
            res.send(result);
        });

        // 🔹 Delete User
        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await usersCollection.deleteOne(query);
            res.send(result);
        });

        // Confirm DB connection
        await client.db("admin").command({ ping: 1 });
        console.log("✅ Successfully connected to MongoDB!");

    } finally {
        
    }
}
run().catch(console.dir);

// Root endpoint
app.get('/', (req, res) => {
    res.send('RoomMate server is getting hotter.');
});

// Start server
app.listen(port, () => {
    console.log(`🔥 RoomMate server is running on port ${port}`);
});
