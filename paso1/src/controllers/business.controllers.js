
export const getBusiness = async (_, res) => {
   
  
  res.send({ status: "success", payload: 'getBusiness'});
};

export const getBusinessById = async (req, res) => {


  res.send({ status: "success", payload: "getBusinessById" });
};


export const saveBusiness = async (req, res) => {

  res.send({ status: "success", payload: 'saveBusiness' });
};


export const addProduct = async (req, res) => {

  res.send({ status: "success", payload: 'addProduct' });
  };