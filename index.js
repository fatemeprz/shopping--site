const cards=document.querySelector(".cards")
const loader=document.getElementById("loader")

const BASE_URL="https://fakestoreapi.com"

const getData=()=>{

    // try{

    //     fetch(`${BASE_URL}/products`)
    //         .then(res=>res.json())
    //         .then(data=>console.log(data))
    //     start()
        
        
    // }
    // catch{

    // }
    
    
}

const start=()=>{
    loader.style.display="none"
    
}


window.addEventListener("DOMContentLoaded",getData)
