// middlewares/authMiddleware.js

function isAuthenticated(req, res, next) {
    if (req.session && req.session.userId) {
      return next();
    }
    return res.redirect("/login");
  }

  function isAdmin(req, res, next) {
    if (req.session && req.session.userId) {
      return next();
    }
    return res.redirect("/login");
  }
  

   
  module.exports = { isAuthenticated, isAdmin };
  