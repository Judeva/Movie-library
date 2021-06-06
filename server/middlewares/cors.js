const cors = (req, res, next)=>{
    res.setHeader('Access-Controll-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Controll-Allow-Methods', 'OPTIONS', 'GET','POST','PUT', 'PATCH','DELETE');
    res.setHeader('Access-Controll-Allow-Headers','Content-Type, Authorization');

    next();
}

module.exports = cors;