import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = 'mongodb://jayant1234:jayant1234@ac-b1hvnkf-shard-00-00.gfxjtot.mongodb.net:27017,ac-b1hvnkf-shard-00-01.gfxjtot.mongodb.net:27017,ac-b1hvnkf-shard-00-02.gfxjtot.mongodb.net:27017/?ssl=true&replicaSet=atlas-13h41w-shard-0&authSource=admin&retryWrites=true&w=majority';
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;