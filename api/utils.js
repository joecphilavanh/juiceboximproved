function requireUser(req, res, next) {
  try{
  if (!req.user) {
    return res.status(401).send("Please log in");
  }
  next();


}catch (err) {
  console.error(err);
  res.status(500).send({ error: 'An error occurred in requireUser middleware' });}

}


module.exports = {
  requireUser
}