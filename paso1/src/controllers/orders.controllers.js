

export const getOrders = async (_, res) => {

  res.send({ status: "success", payload: 'getOrders' });
};

export const getOrderById = async (req, res) => {


  res.send({ status: "success", payload: 'getOrderById' });
};

export const createOrder = async (req, res) => {


  res.send({ status: "success", payload: 'createOrder' });
};


export const resolveOrder = async (req, res) => {

    res.send({ status: "success", payload: 'resolveOrder' })
  };
  