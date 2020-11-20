exports.getCategories = (req,res,next) => {
    res.status(200).json({
        method: "GET",
        sucees: true,
        message:"All categories", 
        userID: req.userID
    })
}
exports.oneGetCategory = (req,res,next) => {
    res.status(200).json({
        method: "GET",
        sucees: true,
        message:`${req.params.id} view!`, 
    })
}
exports.createCategory = (req,res,next) => {
    res.status(200).json({
        method: "POST",
        sucees: true,
        message:`${req.params.id} created!`, 
    })
}
exports.updateCategory = (req,res,next) => {
    res.status(200).json({
        method: "POST",
        sucees: true,
        message:`${req.params.id} updated!!`, 
    })
}
exports.deleteCategory = (req,res,next) => {
    res.status(200).json({
        method: "POST",
        sucees: true,
        message:`${req.params.id} deleted!!`, 
    })
}