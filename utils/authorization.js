import { getCookie } from "./cookie.js"

const authHandeler=()=>{

    const cookie=getCookie()
    const url=location.href

    if(cookie && url.includes("auth")){
        location.assign("./notfound.html")
        return false
    }else if(!cookie && url.includes("dashboard")){
        location.assign("./auth.html")
        return false

    }
   
}

export {authHandeler}