let totalPriceEl = document.querySelector("#total"); //getting total or Sub total element
let discountEl = document.querySelector("#discount"); //getting discount element
let grandTotalEl = document.querySelector("#grand-total"); //getting grand total element
function addToCart(data) {
  let productCard = data; //getting product card
  let cartProducts = document.querySelector(".cart-items"); //getting shopping cart container
  let totalPriceString = totalPriceEl.innerText.split(" ")[0]; //getting total or Sub total as string
  let totalPriceFloat = parseFloat(totalPriceString); //getting total or Sub total as float
  let productPrice = productCard.querySelector(".product-price").innerText;
  let productName = productCard.querySelector(".product-name").innerText;



  //Creating li from product name
  let newCartItem = document.createElement("li");
  newCartItem.innerText = productName;

  //setting li to cart container
  cartProducts.appendChild(newCartItem);

  //setting total product price to sub total
  let finalTotal = parseFloat(totalPriceFloat + parseInt(productPrice)).toFixed(
    2
  );
  totalPriceString = finalTotal;
  totalPriceEl.innerText =
    finalTotal + " " + totalPriceEl.innerText.split(" ")[1];

  //Setting Grand Total
  setGrandTotal();


  //Logic for enable buttons
  if(finalTotal > 200){
    setAttribute("coupon-btn")
  }
  if(finalTotal > 0){
    setAttribute("buy-btn")
  }
}

function applyCoupon() {
  let couponValue = document.querySelector("#coupon-input").value;
  let totalPriceEl = document.querySelector("#total"); //getting total or Sub total element
  let totalPriceString = totalPriceEl.innerText.split(" ")[0]; //getting total or Sub total as string
  let totalPriceFloat = parseFloat(totalPriceString); //getting total or Sub total as float
  let discountEl = document.querySelector("#discount"); //getting discount element
  let discountAmount = (20 / 100) * totalPriceFloat;
  if (couponValue === "SELL200") {
    let discountResult = (discountEl.innerText =
      discountAmount.toFixed(2) + " " + "TK");
    discountEl.innerText = discountResult;
    document.querySelector("#coupon-input").value = "";
    setGrandTotal();
  }else{
    alert("Invalid Coupon Code")
  }
}

function setGrandTotal() {
  let totalPriceString = totalPriceEl.innerText.split(" ")[0]; //getting total or Sub total as string
  let totalPriceFloat = parseFloat(totalPriceString); //getting total or Sub total as float
  let discountAsFloat = parseFloat(discountEl.innerText.split(" ")[0]);
  let finalGrandTotal = totalPriceFloat - discountAsFloat;
  grandTotalEl.innerText = finalGrandTotal.toFixed(2) + " " + "TK";
}

function setAttribute(elementId) {
  document.getElementById(elementId).disabled = false;
}


function resetWebsite(){
   document.querySelector(".cart-items").innerHTML = "";
    grandTotalEl.innerText =  "00.00 TK";
    discountEl.innerText =  "00.00 TK";
    totalPriceEl.innerText =  "00.00 TK";
}