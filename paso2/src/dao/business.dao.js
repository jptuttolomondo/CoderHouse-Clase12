import { businessModel } from "../models/business.model.js"


export default class Business{
    
    getbusiness=async ()=>{
    try{ 
    let result= await businessModel.find()
    return result
    }
    catch(error){
    console.log(error)
    return null
    }
    }
    
    getBusinessById=async (bid)=>{
        try{
        let result= await businessModel.findOne({_id:bid})
        return result
        }
        catch(error){
        console.log(error)
        return null
        }
        }
    
    
        createBusiness =async (business)=>{
            try{
            let result= await businessModel.create(business)
            return result
            }
            catch(error){
            console.log(error)
            return null
            }
            }
    
        updateBusiness=async (bid,business)=>{
                try{
                let result= await businessModel.updateOne({_id:bid}, {$set:business})
                return result
                }
                catch(error){
                console.log(error)
                return null
                }
                }
    }