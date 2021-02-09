/// TK In express, you have pass "next" as an argument to each middleware
// inorder to run the next command in the server
const sup = (req, res, next) => {
    console.log(req.method);
    console.log("I am middleware");
    next();
}


const another = (req,res,next) => {
    console.log("Yet another middleware");
    next();
}

module.exports = { sup, another }