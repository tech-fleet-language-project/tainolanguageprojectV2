import { ObjectId } from "mongodb";



export default class UserMongoDb {
    constructor(
        public id: ObjectId,
        public user_id: string,
        public firebase_id: string,
        public first_name: string,
        public last_name: string,
        public email: string,
        public password: string,
        public admin: boolean,
        public user_agreement: boolean,
        public timestamp: boolean
    ) {
        this.id = id,
        this.user_id = user_id,
        this.firebase_id = first_name,
        this.first_name = first_name,
        this.last_name = last_name,
        this.email = email,
        this.password = password,
        this.admin = admin,
        this.user_agreement = user_agreement,
        this.timestamp = timestamp
    }
}




// schema validation on the database side
await db.command({
    'collMod': process.env.COLLECTION_NAME,
    'validator': {
        $jsonSchema: {
            bsonType: 'object',
            required: ['user_id', 'firebase_id', 'first_name', 'last_name', 'email', 'password'  ],
            additionalProperties: false,
            properties: {
                _id: {},
                first_name: {
                    bsonType: 'string',
                    description: "'first_name' is required and is a string"
                },
                last_name: {
                    bsonType: 'string',
                    description: "'last_name' is required and is a string"
                },
                email: {
                    bsonType: 'string',
                    description: "'email' is required and is a string"
                },
                password: {
                    bsonType: 'string',
                    description: "'password' is required and is a string"
                },

            }
        }
    }

})

// *** start of app.tsx for server-side *** //
// TODO: review again express documentation 
// https://expressjs.com/en/advanced/pm.html  -- process manager for production run scripts as daemons
// https://expressjs.com/en/advanced/best-practice-performance.html -- performance for post-production
// https://expressjs.com/en/advanced/best-practice-security.html -- security post-production
// https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html -- health check and server shutdown/restart post-production


// import express from "express";
// import { connectToMongoDB } from '../services/connect-db.service'
// all routers to follow 
// import { userRouter } from '../routes/user.router'
// *** Libraries To Consider *** //
    // http-errors
    // path
    // cookie-parser // will have to consider security for module or how it will coincide with express.cookie and express.cookieSession module
    // morgan
    // dotenv // config all 
    // express.urlencoded

// connectToMongoDB()
//     .then(() => {
//         app.use("/user", userRouter);

//         app.listen(port, () => {
//             console.log(`Server started at http://localhost:${port}`);
//         });
//     })
//     .catch((error: Error) => {
//         console.error("Database connection failed", error);
//         process.exit();
//     });