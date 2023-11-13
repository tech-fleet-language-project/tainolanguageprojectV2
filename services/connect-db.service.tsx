import {MongoClient, Collection, Db} from 'mongodb';
import {config} from 'dotenv';
import { mongo } from 'mongoose';



export const collections: {
    [index: string]: any;collections?: Collection
} = {}


export async function connectToMongoDB (collection_name: string) {
    config();

    const client: MongoClient = new MongoClient(process.env.DB_CONN_STRING);

    await client.connect();

    const mongoDB: Db = client.db(process.env.DB_NAME);

    // TODO: add function for validator after being passed to this function 


    const collection = mongoDB.collection(collection_name);
    // may be able to replace with collection name from .env file
    // but will be contingent on database plan and how the collections
    // and database will be organized or can leave as is to allow for all options
    collections[collection.collectionName] = collection;

    console.log(`Successfully connected to database: ${mongoDB.databaseName} and collection: ${collection.collectionName}`);
}
