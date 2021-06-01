function middlewareHuesped(req, res, next) {
  if (req.session.usuarioLogueado) {
    return res.redirect("users/userProfile");
  }
  next();
}

module.exports = middlewareHuesped;
