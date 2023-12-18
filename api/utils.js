function requireUser(req, res, next) {
  try{
  if (!req.user) {
    res.send("Please log in")
  }
  next();


}catch (err) {
  console.log(err)
}

}


module.exports = {
  requireUser
}