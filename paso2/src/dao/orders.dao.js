import { orderModel } from "../models/orders.model.js"

export default class Order{
    getOrders=async ()=>{
    try{ 
    let result= await orderModel.find()
    return result
    }
    catch(error){
    console.log(error)
    return null
    }
    }
    
    getOrderById=async (oid)=>{
        try{
        let result= await orderModel.findOne({_id:oid})
        return result
        }
        catch(error){
        console.log(error)
        return null
        }
        }
    
    
        createOrder=async (order)=>{
            try{
            let result= await orderModel.create(order)
            return result
            }
            catch(error){
            console.log(error)
            return null
            }
            }
    
        resolveOrder=async (oid,order)=>{
                try{
                let result= await orderModel.updateOne({_id:oid}, {$set:order})
                return result
                }
                catch(error){
                console.log(error)
                return null
                }
                }
    }