// const sessionIdToUserMap = new Map();
const jwt = require("jsonwebtoken");
const secret = "hello$123@$";

const setUser = (user) => {
  // const setUser = (id, user) => {
  // sessionIdToUserMap.set(id, user);
  // const payLoad = {
  //   id,
  //   ...user,
  // };
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
    },
    secret
  );
  // return jwt.sign(payLoad, secret);
};

// const getUser = (id) => {
const getUser = (token) => {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
  // return sessionIdToUserMap.get(id);
};

module.exports = {
  setUser,
  getUser,
};