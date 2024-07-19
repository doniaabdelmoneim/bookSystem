import mongoose from "mongoose";

const connectionDB = async () => {
    return await mongoose.connect('mongodb://localhost:27017/bookSystem')
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.log({msg:"fail to connect to database",err}))
}

export default connectionDB