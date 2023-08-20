function addToCart(data){
let productCard = data; //getting product card
let cartProducts = document.querySelector(".cart-items");//getting shopping cart container
let totalPriceEl = document.querySelector("#total");//getting total element
let totalPriceString = totalPriceEl.innerText.split(" ")[0]
let totalPriceFloat = parseFloat(totalPriceString)
let discountEl = document.querySelector("#discount");//getting discount element
let grandTotalEl = document.querySelector("#grand-total");//getting grand total element
let productPrice = data.querySelector(".product-price").innerText;
let productName = data.querySelector(".product-name").innerText;

//Creating li from product name
let newCartItem = document.createElement("li")
newCartItem.innerText = productName;

//setting li to cart container
cartProducts.appendChild(newCartItem)

//setting total product price to sub total or total
let finalTotal = parseFloat(totalPriceFloat + parseInt(productPrice)).toFixed(2)
totalPriceString = finalTotal;
totalPriceEl.innerText = finalTotal +" "+ totalPriceEl.innerText.split(" ")[1];
console.log(finalTotal);
}