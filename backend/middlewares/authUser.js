const passport = require("passport");

module.exports = {
  initialize: function () {
    return passport.initialize();
  },
  authenticate: function (req, res, next) {
    return passport.authenticate(
      "user",
      {
        session: false,
      },
      (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(401).json({ error: "Session Expired" });

        req.user = user;
        next();
      }
    )(req, res, next);
  },
};
