const mongoose=require('mongoose')
const url = "mongodb+srv://viren:IIThyd07@virenmongodb.3ldg7nz.mongodb.net/"
mongoose.connect(url, {dbName: "LOGIN-SGNUP"})
.then(()=>{
    console.log("MongoDB Connected")
})
.catch(()=>{
    console.log("Failed")
})


const newSchema= new mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
}, {collection:'Login-SignUp'})



const collection = mongoose.model('Login-SignUp', newSchema); // Use the correct collection name

module.exports = collection;
