import { getCookie } from "./utils/cookie.js"

const cards=document.querySelector(".cards")
const loader=document.querySelector(".loader")
const userButton=document.getElementById("user")
const carts=document.querySelector(".carts")

const BASE_URL="https://fakestoreapi.com"

const getData=async()=>{

    showUserButton()

    try{

        const res= await fetch(`${BASE_URL}/products`)
        const data=await res.json()
        console.log(data);
        start()
        showProducts(data)
    }
    catch{

    }
    
    
}

const showProducts=async(data)=>{

    // loader.style.display="none"
    console.dir(loader.style.display);
    const products=await data.forEach(item => {
        createCart(item)
         
    });
    
}
const createCart=(product)=>{
    // console.log(product)
    
    const {image,title,price,rating:{count,rate},cateqory,id,description}= product
    const productTitle=title.split(" ").slice(0,4).join(" ")
  
    const cartJSX=`
    <div class="product">
        <img class="product-img" src=${image}>
        <div class="product-title">${productTitle}</div>
        <div class="buy-section">
            <div class="buy-section-right">$ ${price}</div>
            <div class="buy-section-left">Buy <i class="fa-solid fa-cart-shopping icon"></i></div>
        </div>
        <div class="rating">
            <div class="rating-right"><i class="fa-solid fa-star icon"></i>${rate}</div>
            <div class="rating-left"><i class="fa-solid fa-user icon"></i>${count}</div>
        </div>

    </div>
    `
    carts.innerHTML+=cartJSX
    

}

const start=()=>{
    loader.style.display="none"
    
}

const showUserButton=()=>{
    const cookie=getCookie()

    if(cookie){
        userButton.innerHTML=`
        <i class="fa-solid fa-house-chimney icon"></i>Dashboard
        `
        userButton.href="./public/dashboard.html"
    }else{
        userButton.innerHTML=`
        <i class="fa-solid fa-arrow-right-to-bracket icon"></i>Login
        `
        userButton.href="./public/auth.html"
    }

}




window.addEventListener("DOMContentLoaded",getData)
