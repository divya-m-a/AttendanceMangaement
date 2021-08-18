
const mongoose = require("mongoose");
//const url =process.env.DB_URL;
const dotenv = require("dotenv");
dotenv.config();


const connection = async () =>{
    try{
        // eslint-disable-next-line no-undef
        mongoose.connect(process.env.DB_URL,{
            useNewUrlParser : true,
        });
        console.log("DB Connected");

    }catch(err){
        console.log(err);
        throw err;

    }
}
module.exports = connection;
 





