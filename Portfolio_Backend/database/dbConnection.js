import mongoose from "mongoose";

const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "PORTFOLIO"
    }).then(()=>{
        console.log("connected to datatbase");
    }).catch((error)=>{
        console.log(`Some error occured while connecting to database: ${error}`);
    })
}

export default dbConnection;