import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-3cqpiou-shard-00-00.ixmmkpd.mongodb.net:27017,ac-3cqpiou-shard-00-01.ixmmkpd.mongodb.net:27017,ac-3cqpiou-shard-00-02.ixmmkpd.mongodb.net:27017/?replicaSet=atlas-l2lc73-shard-0&ssl=true&authSource=admin`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;