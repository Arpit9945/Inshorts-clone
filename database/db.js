import mongoose from "mongoose";



const Connection = async () => {
    const URL = `mongodb://Clone1:clone123@ac-qcvcyfc-shard-00-00.nwgazja.mongodb.net:27017,ac-qcvcyfc-shard-00-01.nwgazja.mongodb.net:27017,ac-qcvcyfc-shard-00-02.nwgazja.mongodb.net:27017/?ssl=true&replicaSet=atlas-nrpz5h-shard-0&authSource=admin&retryWrites=true&w=majority&appName=AtlasApp`;
    try{
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("database connectedddd successfullyyy!!");
    }catch(error){
        console.log("error while connecting with database!!", error);
    }
}

export default Connection;