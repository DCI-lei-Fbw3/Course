require("dotenv").config()
const cookieParser = require("cookie-parser")
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 3000
 require("./models/connection")
const productRouter = require("./routers/route")
app.use(cookieParser())

app.use(bodyParser.urlencoded({extended:true}))

app.use("/",productRouter())





app.listen(port,()=>{
    console.log("The server is running on port: "+ port)
})
















/* 


require("dotenv").config()
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const bcrypt = require("bcrypt")
const express = require("express")
const mongoose = require("mongoose")
const {check,validationResult} = require("express-validator")
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 3000
app.use(cookieParser())

app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect(process.env.URI, {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("You are now connecting to your dataBase"))
.catch(err => console.log(err))

const schemaUser = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});


const Users = mongoose.connection.model("users",schemaUser) 


const schemaProducts = new mongoose.Schema({
    articleNo:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});


const ProductDb = mongoose.connection.model("products",schemaProducts)

app.post("/user",[
    check("name").isLength({min:4}).withMessage("You have to write the Name"),
    check("email").isEmail().withMessage("You have to write the email"),
    check("password").exists().withMessage("You forgot entering  the password")
],(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        let array = errors.array();
        const result = []
       array.forEach(element => {
          result.push(element.msg) 
        })
        res.status(400).json(result)
    }else{
        const password = req.body.password
    const hash = bcrypt.hashSync(password + process.env.PEPPER, 12)
    const user = new Users({
        name:req.body.name,
        email:req.body.email,
        password:hash
    });
    Users.findOne({email:req.body.email}).then(data =>{
        if(!data) {
            user.save().then(()=>{
                res.status(200).send("Your data has been stored successfully")
                }).catch(err => console.log(err))
        }
        else{
         res.status(200).send("This email is already in used")
        }
    })
    }
    
})

app.post("/login",[
    check("email").isEmail().withMessage("You have to write the email"),
    check("password").exists().withMessage("You forgot entering  the password")
],(req,res)=>{ 
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        let array = errors.array();
        const result = []
       array.forEach(element => {
          result.push(element.msg) 
        })
        res.status(400).json(result)
    }
    else{
        const email = req.body.email
        Users.findOne({email}).then((data)=>{
        if(!data)res.send("This email does not exist: You first need to registrer")
        else{
        const password = req.body.password;
        const valid = bcrypt.compareSync(password + process.env.PEPPER, data.password) 
         if(req.body.email !== data.email)res.send("Your email is wrong")
        else if(valid === false)res.send("Your password is wrong")
        else {
            const token = jwt.sign({data},process.env.SECRET) 
            res.status(200).json({tokenValue:token})
        }
        } 
        
    }).catch(err => console.log(err))  
    }
    
})  
 

function authenticationUser(req,res,next){
    const bearerHeader = req.headers["authorization"]
    if( bearerHeader ){
        const bearer = bearerHeader.split(" ")
        const bearerToken = bearer[1]
        req.token = bearerToken;
        next()
    }
    else{
        res.status(403).send("You have no access ")
    }
}




app.get("/products",authenticationUser,(req,res)=>{
    ProductDb.find({}).then(data =>{
            jwt.verify(req.token,process.env.SECRET,(err, data)=>{
                if(err) res.send("Invalid token")
                else res.status(200)
            })
            res.json(data)
    }).catch(err => console.log(err)) 
})

app.get("/products/:articleNo",authenticationUser,(req,res)=>{
    const result = req.params.articleNo;
    ProductDb.findOne({articleNo:result}).then(data =>{
        jwt.verify(req.token,process.env.SECRET,(err,data)=>{
            if(err)res.send("Invalid token")
            else res.status(200)
        })
        if(!data) res.status(200).send("This article number does not exist")
        else res.status(200).json(data)
    }).catch(err => console.log(err))
}) 

app.put("/products/:articleNo",authenticationUser,(req,res)=>{
    const altOne = req.params.articleNo
    const newOne = req.body.articleNo
    ProductDb.findOneAndUpdate({articleNo:altOne},{articleNo:newOne},{new:true}).then(data =>{
        jwt.verify(req.token,process.env.SECRET,(err,data)=>{
            if(err)res.send("Invalid token")
            else res.status(200)
        })
        if(!data) res.status(200).send(`This article number: ${altOne} does not exist in your database`)
        else res.status(200).send(`You updated the article number ${altOne} to ${newOne}`)
    }).catch(err=> console.log(err))
})

app.delete("/products/:articleNo",authenticationUser,(req,res)=>{
    const toDelete = req.params.articleNo
    ProductDb.findOneAndRemove({articleNo:toDelete}).then(data =>{
        jwt.verify(req.token,process.env.SECRET,(err,data)=>{
            if(err)res.send("Invalid token")
            else res.status(200)
        })
        if(!data) res.status(200).send(`The article number: ${toDelete} that you entered does not exist `)
        else res.status(200).send(`You just deleted the ${toDelete} products`)
    }).catch(err => console.log(err))
})
*/


























































































// app.get("/api",(req,res)=>{
//     res.json({
//         message:"welcome to the Api"
//     })
// })


// // ce que je veux proteger

// app.post("/api/informationAProteger",vertoken,(req,res)=>{
//     ProductDb.find({}).then(data =>{
//         jwt.verify(req.token,"hermann")
//         res.status(200).json(data)
//     })
    
// })

// //verifier le token
// // authorization: bearer <token>

// function vertoken(req,res,next){
//     //get auth header value
//     const bearerHeader = req.headers["authorization"]
//     //check if bearer is undefined
//     if(typeof bearerHeader !=="undefined"){
//     // split at the space
//     const bearer = bearerHeader.split(" ")
//     // get token from array
//     const bearerToken = bearer[1]
//     req.token = bearerToken
//     next()
//     }else{
//         res.status(403).send("You have no access")
//     }
// }

// app.post("/api/login",(req,res)=>{
//     /* const user = {
//         id:1,
//         username:"Hermann",
//         email:"herm@gmail.com"
//     }
//     jwt.sign({user:user},"hermann",(err,token)=>{
//         res.json({
//             token:token
//         })
//     }) */
//     Users.findOne({email:req.body.email}).then(data =>{
//        const user = data
//         jwt.sign({user:user},"hermann",(err,token)=>{
//             res.json({
//                 token:token
//             })
//         })
//     })
// })







