const mongoose  = require("mongoose");
const productSchema  = mongoose.Schema({

    name :{
        type : String ,
        required    : [true , "Please Enter prodcut name"],
        trim : true
    },
    description :{
        type : String ,
        required: [true, "Please Enter prodcut description"]
    },
    price:{
        type : Number ,
        required: [true, "Please Enter product Price"],
        maxLength: [8 , "Price cannot exceed 9 characters"]
    },
    ratings :{
        type : Number ,
          default : 0,
    },
    images : [
       { product_id: {
           type : String, 
           required : true

        },
        url :{
            type : String,
            required: true
        }
     }
    ],
    category :{
        type : String ,
        required : [true , "please Enter product stock"],
        maxLength : [4 , "Stock cannot exceed 4 characters"],
        default : 1,
    },
    numOfReviews:{
           type : Number ,
           default : 0,
    },
    reviews :[
        {
            // user :{
            //     type : String ,
            //     required :true
            // },
            name :{
                type : String ,
                required : true ,
            },
            ratings :{
                type : Number ,
                required : true
            },
     comment :{
        type : String ,
        required : true
     }
    }
    ],
    createdAt :{
         type : Date ,
         default : Date.now,
    }
})
const ProductModel  = mongoose.model("Product_Model" , productSchema);
module.exports =ProductModel