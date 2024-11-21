//connection.js
import mongoose from "mongoose";
const url= 'mongodb+srv://Prajeeta_10:ra958k2ubh@cluster0.d6zeyzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectdb=async()=>{
    try{
        await mongoose.connect(url)
        console.log("Connected to MongoDB")
    }
    catch(error){
        console.log("Error connecting to MongoDb: ",error)
    }
    
}

export default connectdb 

//to kill the already using port
/* netstat -ano | findstr :3006
   taskkill /PID 7048 /F
*/
