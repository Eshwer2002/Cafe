// navbar
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = toggleMenu ;

function toggleMenu(){
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}

// search-form
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = toggleSearch ;

function toggleSearch(){
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  cartItem.classList.remove('active');
}

// cart-items
let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = toggleCart ;

function toggleCart(){
  cartItem.classList.toggle('active');
  searchForm.classList.remove('active');
  navbar.classList.remove('active');
}

window.onscroll = remove;

function remove(){
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');

}
