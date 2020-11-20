const logger = (req,res,next) => {
    req.userID = "ADADMASD13124124";
    console.log(`${req.method}: ${req.protocol}://${req.host}${req.originalUrl}`)
    next();
}
module.exports = logger;