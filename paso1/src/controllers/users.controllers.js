

export const getUsers = async (req, res) => {


      res.send({ status: "success", payload:'getUsers'});
};

export const getUserById = async (req, res) => {

  res.send({ status: "success", payload: 'getUserById' });
};

export const saveUser = async (req, res) => {

  res.send({ status: "success", payload: 'saveUser' });
};
