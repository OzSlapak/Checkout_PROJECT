// const plusBtn1 = document.getElementsByClassName("plus")[0];
// console.log(plusBtn1);
// function increaseCount() {
//   console.log("click me");
//   const countElement = document.getElementById("product-quantity");
//   console.log(countElement.textContent);
//   let count = +countElement.textContent + 1;
//   countElement.textContent = count;
// }
// plusBtn1.addEventListener("click", increaseCount);

const productsDiv = document.querySelector(".products");
function handleClick(e) {
  console.log(e.target);
  if (e.target.classList.contains("plus")) {
    // console.log(+"2.55" + 5);
    let count = +e.target.previousElementSibling.textContent + 1;
    e.target.previousElementSibling.textContent = count;
    // console.log(e.target.previousElementSibling);
    const parentDiv = e.target.parentElement.parentElement;
    const price = parentDiv.querySelector("strong").textContent;
    parentDiv.querySelector(".product-line-price").textContent = count * price;
    // console.log(parentDiv.querySelector(".product-line-price").textContent);
    calculate();
  }
  if (e.target.classList.contains("minus")) {
    // console.log(+"2.55" + 5);
    let count = +e.target.nextElementSibling.textContent - 1;
    if (count === 0) {
      if (confirm("Do you want to remove?"))
        e.target.parentElement.parentElement.parentElement.remove();
      // console.log(e.target.parentElement.parentElement.parentElement);
    } else {
      e.target.nextElementSibling.textContent = count;
      // console.log(e.target.previousElementSibling);
      const parentDiv = e.target.parentElement.parentElement;
      const price = parentDiv.querySelector("strong").textContent;
      parentDiv.querySelector(".product-line-price").textContent =
        count * price;
      // console.log(parentDiv.querySelector(".product-line-price").textContent);
    }
    calculate();
  }
  if (e.target.classList.contains("remove-product")) {
    if (confirm("Do you want to remove?")) {
      e.target.parentElement.parentElement.parentElement.remove();
      calculate;
    }
  }
}
productsDiv.addEventListener("click", handleClick);

function calculate() {
  const productTotalPriceElems =
    document.getElementsByClassName("product-line-price");
  console.log(productTotalPriceElems);
  let subTotal = 0;
  const arr = Array.from(productTotalPriceElems, (item) => item.textContent);
  subTotal = arr.reduce((acc, item) => acc + +item, 0);
  console.log(subTotal);
  const subTotalDiv = document.querySelector("#cart-subtotal").lastElementChild;
  subTotalDiv.textContent = subTotal.toFixed(2);
  console.log(subTotalDiv);
}
calculate();