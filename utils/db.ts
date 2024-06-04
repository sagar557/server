import mongoose from "mongoose";
require ("dotenv").config();
const dbUrl:string = process.env.DB_URL || '';

const connectDB =async () => {
    try{
        await mongoose.connect(dbUrl).then((data:any)=>{
            console.log(`Database Connected Successfully with ${data.connection.host}`);
        });
    }   catch(error:any){
        console.log("Error while connecting to the database", error.message);
        setTimeout(connectDB, 5000); //try again after 5 seconds
    } 
}

export default  connectDB;
