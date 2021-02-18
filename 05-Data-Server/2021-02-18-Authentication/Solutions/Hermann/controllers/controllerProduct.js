const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const {check,validationResult} = require("express-validator")
const connectFunction = require("../models/connection")

const postUser = (req,res)=>{
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
    const user = new connectFunction.Users({
        name:req.body.name,
        email:req.body.email,
        password:hash
    });
    connectFunction.Users.findOne({email:req.body.email}).then(data =>{
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
    
}


const loginUser = (req,res)=>{ 
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
        connectFunction.Users.findOne({email}).then((data)=>{
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
    
}


const getProducts = (req,res)=>{
    connectFunction.ProductDb.find({}).then(data =>{
            jwt.verify(req.token,process.env.SECRET,(err, data)=>{
                if(err) res.send("Invalid token")
                else res.status(200)
            })
            res.json(data)
    }).catch(err => console.log(err)) 
}

const getProductsByArticleNo = (req,res)=>{
    const result = req.params.articleNo;
    connectFunction.ProductDb.findOne({articleNo:result}).then(data =>{
        jwt.verify(req.token,process.env.SECRET,(err,data)=>{
            if(err)res.send("Invalid token")
            else res.status(200)
        })
        if(!data) res.status(200).send("This article number does not exist")
        else res.status(200).json(data)
    }).catch(err => console.log(err))
}



const updateByArticleNo = (req,res)=>{
    const altOne = req.params.articleNo
    const newOne = req.body.articleNo
    connectFunction.ProductDb.findOneAndUpdate({articleNo:altOne},{articleNo:newOne},{new:true}).then(data =>{
        jwt.verify(req.token,process.env.SECRET,(err,data)=>{
            if(err)res.send("Invalid token")
            else res.status(200)
        })
        if(!data) res.status(200).send(`This article number: ${altOne} does not exist in your database`)
        else res.status(200).send(`You updated the article number ${altOne} to ${newOne}`)
    }).catch(err=> console.log(err))
}

const deleteByArticleNo = (req,res)=>{
    const toDelete = req.params.articleNo
    connectFunction.ProductDb.findOneAndRemove({articleNo:toDelete}).then(data =>{
        jwt.verify(req.token,process.env.SECRET,(err,data)=>{
            if(err)res.send("Invalid token")
            else res.status(200)
        })
        if(!data) res.status(200).send(`The article number: ${toDelete} that you entered does not exist `)
        else res.status(200).send(`You just deleted the ${toDelete} products`)
    }).catch(err => console.log(err))
}


module.exports = {
    postUser,
    loginUser,
    getProducts,
    getProductsByArticleNo,
    updateByArticleNo,
    deleteByArticleNo,
}