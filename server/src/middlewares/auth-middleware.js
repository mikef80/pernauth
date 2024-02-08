const passport = require("passport");

exports.userAuth = passport.authenticate("jwt", { session: false });
/* exports.userAuth = () => {
  console.log('here');
  return passport.authenticate("jwt", { session: false });
}; */