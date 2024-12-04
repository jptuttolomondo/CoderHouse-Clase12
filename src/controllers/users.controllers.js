import User from "../dao/users.dao.js";

const userService= new(User)

export const getUsers = async (req, res) => {

    const result=await userService.getUsers()
      res.send({ status: "success", payload:result});
};

export const getUserById = async (req, res) => {
let uid=req.params.uid

const result =await userService.getUserById(uid)

  res.send({ status: "success", payload: result });
};

export const saveUser = async (req, res) => {
  let user=req.body
let result=await userService.saveUser(user)
  res.send({ status: "success", payload: result });
};
