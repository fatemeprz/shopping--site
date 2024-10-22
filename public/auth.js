import { postData } from "../utils/httpReq.js"
import { setCookie } from "../utils/setCookie.js"

const inputs=document.querySelectorAll(".input")
const loginButton=document.querySelector(".login")

const submitHandler=async(event)=>{
    event.preventDefault()
    const username=inputs[0].value
    const password=inputs[1].value

    const response=await postData("auth/login",{
        username,
        password})
    console.log(response);
    setCookie(response.token)
}

loginButton.addEventListener("click",submitHandler)