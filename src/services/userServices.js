import apiClient from '../utils/api-client'
import { jwtDecode } from 'jwt-decode'
  
const tokenName="token"

export async function signup (user,profile) {
    const body = new FormData()
    body.append("name",user.name)
    body.append("email",user.email)
    body.append("password",user.password)
    body.append("deliveryAddress",user.deliveryAddress)
    body.append("profilePic",profile)

     const {data} =await apiClient.post("/user/signup" ,body)
     localStorage.setItem(tokenName,data.token)
}

export async function login (user) {
    
       const {data}= await apiClient.post("/user/login" ,user)
       localStorage.setItem(tokenName,data.token)
}

export function logout(){
    localStorage.removeItem(tokenName)
}

export function getUser(){
    try {
        const jwt =localStorage.getItem(tokenName)
         return jwtDecode(jwt)  
    } catch (error) {
        return null
    }
    
}