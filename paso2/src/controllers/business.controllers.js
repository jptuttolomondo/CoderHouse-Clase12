import Business from "../dao/business.dao.js";

const businessService=new(Business)

export const getBusiness = async (_, res) => {
    let result= await businessService.getbusiness()
    if(!result) res.status(500).send ({status:'error',error :'error! reading database'})
  res.send({ status: "success", payload: result});
};

export const getBusinessById = async (req, res) => {

  let bid=req.params.bid
  //verificar que el id sea un objectId de mongo valido
//   if (!mongoose.Types.ObjectId.isValid(bid)) {
//     console.log("El ID proporcionado no es válido.");
//     return null;
// }
  let result= await businessService.getBusinessById(bid)
  if(!result) res.status(500).send ({status:'error',error :'error! reading database'})
  res.send({ status: "success", payload: "getBusinessById" });
};

export const saveBusiness = async (req, res) => {
let business=req.body
let result=await businessService.createBusiness(business)
if(!result) res.status(500).send ({status:'error',error :'error! reading database'})
  res.send({ status: "success", payload: result });
};


export const addProduct = async (req, res) => {
  let product=req.body
  let bid=req.params.bid
  //validar product

  let business=await businessService.getBusinessById(bid)
  business.products.push(product)
let result= await businessService.updateBusiness(bid,business)
if(!result) res.status(500).send ({status:'error',error :'error! reading database'})
  res.send({ status: "success", payload: result });
  };