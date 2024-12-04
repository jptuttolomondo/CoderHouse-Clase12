import { userModel } from "../models/users.model.js"

export default class User{
getUsers=async ()=>{
try{
let result= await userModel.find()
return result
}
catch(error){
console.log(error)
return null
}
}

getUserById=async (uid)=>{
    try{
    let result= await userModel.findOne({_id:uid})
    return result
    }
    catch(error){
    console.log(error)
    return null
    }
    }


    saveUser=async (user)=>{
        try{
            console.log(user);
        let result= await userModel.create(user)
    
         return result
        }
        catch(error){
        console.log(error)
        return null
        }
        }

    UpdateUser=async (uid,user)=>{
            try{
            let result= await userModel.updateOne({_id:uid}, {$set:user})
            return result
            }
            catch(error){
            console.log(error)
            return null
            }
            }
}