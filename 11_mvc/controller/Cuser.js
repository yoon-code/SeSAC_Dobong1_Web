const { render } = require("ejs");
const User = require("../model/User");
User.userInfo(); //{id:~,pw:~}

//GET /user
exports.user = (req, res) => {
  render("user", { userInfo: User.userInfo() });
};
