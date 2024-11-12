import { getCookie } from "./utils/cookie.js";
import { getData } from "./utils/httpReq.js";
import shortString from "./utils/shortString.js";

const loader = document.querySelector(".loader");
const userButton = document.getElementById("user");
const carts = document.querySelector(".carts");
const searchInput = document.getElementById("search-button");
const categoryList = document.querySelectorAll(".categury");
let allProducts = null;
let searchValue = null;
let category = null;

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
  searchValue = event.target.value.trim().toLowerCase();
  searchByCategory();
};
const categoryHandeler = (event) => {
  category = event.target.innerText.toLowerCase();

  categoryList.forEach((item) => {
    if (item.innerText.toLowerCase() === category) {
      item.className = "categury-selected";
    } else {
      item.className = "categury";
    }
  });
  searchByCategory();
};
const searchByCategory = () => {
  if (searchValue) {
    const fillteredProducts = allProducts.filter((product) => {
      if (category === "all") {
        return product.title.toLowerCase().includes(searchValue);
      } else {
        return (
          product.title.toLowerCase().includes(searchValue) &&
          product.category.toLowerCase() === category
        );
      }
    });
    if (fillteredProducts.length) {
      showProducts(fillteredProducts);
    } else {
      notFoundProduct();
    }
  } else if (!searchValue) {
    const fillteredProducts = allProducts.filter((product) => {
      if (category === "all") return allProducts;
      else {
        return product.category.toLowerCase() === category;
      }
    });
    if (fillteredProducts.length) {
      showProducts(fillteredProducts);
    } else {
      notFoundProduct();
    }
  }
};
const notFoundProduct = () => {
  carts.innerHTML = `<div class="alert"> No product found !</div>`;
};

window.addEventListener("DOMContentLoaded", init);
searchInput.addEventListener("keyup", searchHandeler);
categoryList.forEach((item) =>
  item.addEventListener("click", categoryHandeler)
);
