// Import Area 
import { MongoClient } from "mongodb";
const uri = 'mongodb+srv://mdasadulgoni:oCDaguvaMjaQjTuk@cluster0.k3zlnc1.mong';
// const object = new classname(actualArgument)
const client = new MongoClient(process.env.MONGODB_URL)


//Define Area
async function connectToMongoDB() {
    try{
        await client.connect();
        console.log('Connect to MongoDB');
        return client.db();
    } catch(error){
        console.error('Error connecting to MongoDB'. error)
    }
}
// Export Area 
export {connectToMongoDB}