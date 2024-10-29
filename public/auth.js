import { postData } from "../utils/httpReq.js"
import { setCookie } from "../utils/cookie.js"
import { authHandeler } from "../utils/authorization.js"
import { removeNotations ,validation } from "../utils/validation.js"


const inputs=document.querySelectorAll(".input")
const loginButton=document.querySelector(".login")

const submitHandler=async(event)=>{

    event.preventDefault()

    const username=inputs[0].value
    const password=inputs[1].value
    
    try{

        const validate=validation(username,password)
        if(validate){

            const response=await postData("auth/login",{
                username,
                password
            })
            setCookie(response.token)
            removeNotations()
            location.assign("../index.html")
        }
        else{
            return
        }
    }
    catch(error){
        console.log(error);
    }

}


loginButton.addEventListener("click",submitHandler)
window.addEventListener("DOMContentLoaded",authHandeler)