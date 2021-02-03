



const login = (req,res) => {
    if(req.body.IBAN == "DE12345678" && req.body.PIC == "XX1234"){
        res.redirect("/balance")
        //res.status(200).send(" Identity verified!");
    }else{
        res.status(200).send("Access Denied You don't have permission to access !!!");
    }
}

module.exports = login