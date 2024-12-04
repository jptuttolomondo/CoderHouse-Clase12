import Order from "../dao/orders.dao.js";
import Business from "../dao/business.dao.js";
import User from "../dao/users.dao.js";

const OrderService= new(Order)
const businessService=new(Business)
const UserService=new(User)

export const getOrders = async (_, res) => {
    let result= await OrderService.getOrders()
  res.send({ status: "success", payload: result });
};

export const getOrderById = async (req, res) => {
  let oid=req.params.oid
  let result= OrderService.getOrderById(oid)

  res.send({ status: "success", payload: result });
};

export const createOrder = async (req, res) => {
  const {user,business,products}=req.body
  const businessResult=await businessService.getBusinessById(business)
  const userResult=await UserService.getUserById(user)

  //del business resultante, traemos los productos que coinciden con la compra
  let actualOrder= businessResult.products.filter((product)=>products.includes(product.id))

  //sacamos el total del monto de la compra
  let total=actualOrder.reduce((actual, previo)=>{
    actual+=previo.price
    return actual
  },0)

//generamos un numero de orden de compra aleatorio, entre 1 y 10000 unico, para eso 
//esta date.now() esto es para darle un orden segun el momento de creacion

let orderNumber=Date.now()+Math.floor(Math.random()*10000+1)


//ahora creamos la orden para guardar

let order={
number:orderNumber,
business,
user,
status:"pendig",
products:actualOrder.map(product=>product.id), //listamos los productos filtrados
totalPrice:total

}

  let orderResult =await OrderService.createOrder(order)
  userResult.orders.push(orderResult._id) // el id de order guardado en mongo se lo pasamos a user
await UserService.UpdateUser(user,userResult)
  res.send({ status: "success", payload: orderResult });
};


export const resolveOrder = async (req, res) => {
const {resolve}=req.query
let oid= req.params.oid
let order= await OrderService.getOrderById(oid)
order.status=resolve //agrego un atributo status con un texto resuelto/ pendiente, etc
await OrderService.resolveOrder(order._id,order)
    res.send({ status: "success", payload: "Order resolved" });
  };
  