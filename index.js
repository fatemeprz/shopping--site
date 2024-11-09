import { getCookie } from "./utils/cookie.js";
import { getData } from "./utils/httpReq.js";
import shortString from "./utils/shortString.js";

const loader = document.querySelector(".loader");
const userButton = document.getElementById("user");
const carts = document.querySelector(".carts");
const searchButton = document.getElementById("search-button");
const categoryList = document.querySelectorAll(".categury");
let allProducts = null;

const init = async () => {
  showUserButton();
  allProducts = await getData("products");
  console.log(allProducts);
  start();
  showProducts(allProducts);
};

const showProducts = async (data) => {
  carts.innerHTML = " ";

  const allProducts = await data.forEach((product) => {
    const {
      image,
      title,
      price,
      rating: { count, rate },
      cateqory,
      id,
      description,
    } = product;

    const productTitle = shortString(title);

    const cartJSX = `
    <div class="product">
        <img class="product-img" src=${image}>
        <div class="product-title">${productTitle}</div>
        <div class="buy-section">
            <div class="buy-section-right">$ ${price}</div>
            <div class="buy-section-left data-id=${id}">Buy <i class="fa-solid fa-cart-shopping icon"></i></div>
        </div>
        <div class="rating">
            <div class="rating-right"><i class="fa-solid fa-star icon"></i>${rate}</div>
            <div class="rating-left"><i class="fa-solid fa-user icon"></i>${count}</div>
        </div>

    </div>
    `;
    carts.innerHTML += cartJSX;
  });
};

const showUserButton = () => {
  const cookie = getCookie();

  if (cookie) {
    userButton.innerHTML = `
        <i class="fa-solid fa-house-chimney icon"></i>Dashboard
        `;
    userButton.href = "./public/dashboard.html";
  } else {
    userButton.innerHTML = `
        <i class="fa-solid fa-arrow-right-to-bracket icon"></i>Login
        `;
    userButton.href = "./public/auth.html";
  }
};

const start = () => {
  loader.style.display = "none";
};

const searchHandeler = (event) => {
  const query = event.target.value.trim().toLowerCase();
  const filteredProducts = allProducts.filter((product) => {
    const productName = shortString(product.title).toLowerCase();
    return productName.includes(query);
  });

  if (filteredProducts.length) {
    showProducts(filteredProducts);
  } else {
    carts.innerHTML = `<div class="alert"> No product found !</div>`;
  }
};
const categoryHandeler = (event) => {
  const category = event.target.innerText.toLowerCase();

  categoryList.forEach((item) => {
    if (item.innerText.toLowerCase() === category) {
      item.className = "categury-selected";
    } else {
      item.className = "categury";
    }
  });
  const filteredProducts = allProducts.filter((product) => {
    if (product.category.toLowerCase() === category) {
      return product;
    }
  });
  if (filteredProducts.length) {
    showProducts(filteredProducts);
  } else {
    showProducts(allProducts);
  }
};

window.addEventListener("DOMContentLoaded", init);
searchButton.addEventListener("keyup", searchHandeler);
categoryList.forEach((item) =>
  item.addEventListener("click", categoryHandeler)
);
