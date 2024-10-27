import { postData } from "../utils/httpReq.js"
import { setCookie } from "../utils/cookie.js"
import { authHandeler } from "../utils/authorization.js"

const inputs=document.querySelectorAll(".input")
const loginButton=document.querySelector(".login")

const submitHandler=async(event)=>{

    event.preventDefault()

    const username=inputs[0].value
    const password=inputs[1].value
    
    try{

        const response=await postData("auth/login",{
            username,
            password
        })
    
    
        console.log(response);
        setCookie(response.token)
        location.assign("../index.html")
    }
    catch(error){
        console.log(error);
    }

}


loginButton.addEventListener("click",submitHandler)
window.addEventListener("DOMContentLoaded",authHandeler)