const data = [
    {
      id: 100,
      name: "Vintage Backbag",
      image: "img/photo1.png",
      price: 25.98,
      oldPrice: 34.99,
      count: 1,
      total: 25.98,
    },
    {
      id: 301,
      name: "Antique Clock",
      image: "img/photo3.jpg",
      price: 74.99,
      oldPrice: 94.99,
      count: 1,
      total: 74.99,
    },
    {
      id: 222,
      name: "Levi Shoes",
      image: "img/photo2.png",
      price: 45.99,
      oldPrice: 54.99,
      count: 1,
      total: 45.99,
    },
    {
      id: 101,
      name: "Vintage Backbag",
      image: "img/photo1.png",
      price: 25.98,
      oldPrice: 34.99,
      count: 1,
      total: 25.98,
    },
    {
      id: 302,
      name: "Antique Clock",
      image: "img/photo3.jpg",
      price: 74.99,
      oldPrice: 94.99,
      count: 1,
      total: 74.99,
    },
    {
      id: 223,
      name: "Levi Shoes",
      image: "img/photo2.png",
      price: 45.99,
      oldPrice: 54.99,
      count: 1,
      total: 45.99,
    },
  ];
  
  function generateProduct() {
    const htmlContent = data.map(
      (item) => `
    <div class="product" data-id=${item.id}>
    <img src="${item.image}" alt="" />
    <div class="product-info">
      <h2>${item.name}</h2>
      <div class="product-price">
        <p>
          <strong>${item.price}</strong>
          <span class="line-through">${item.oldPrice}</span>
        </p>
      </div>
      <div class="quantity-controller">
        <span class="minus">-</span>
        <p id="product-quantity">${item.count}</p>
        <span class="plus">+</span>
      </div>
      <div class="product-removal">
        <button class="remove-product">Remove</button>
      </div>
      <div class="product-line-price">${item.total}</div>
    </div>
  </div>`
    );
  
    return htmlContent.join("");
  }
  
  let subtotal = 0;
  let tax = 0;
  let shipping = 15;
  let total = 0;
  
  function generateTotalPrice() {
    const content = `<div class="buy-detail" id="cart-subtotal">
    <p>Subtotal</p>
    <p>${subtotal.toFixed(2)}</p>
  </div>
  <div class="buy-detail" id="cart-tax">
    <p>Tax(%18)</p>
    <p>${tax.toFixed(2)}</p>
  </div>
  <div class="buy-detail" id="cart-shipping">
    <p>Shipping</p>
    <p>${shipping}</p>
  </div>
  <div class="buy-detail" id="cart-total">
    <p>Total</p>
    <p>${total.toFixed(2)}</p>
  </div>`;
    return content;
  }
  
  const productsDiv = document.querySelector(".products");
  function renderHtml() {
    const content = generateProduct();
    const totalPriceContent = generateTotalPrice();
    productsDiv.innerHTML = content + totalPriceContent;
  }
  
  function calculatePrices() {
    subtotal = 0;
    data.forEach((item) => {
      item.total = item.price * item.count;
      subtotal += item.total;
    });
    tax = subtotal * 0.18;
    total = subtotal + tax + shipping;
  }
  
  productsDiv.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.classList.contains("plus")) {
      const id = e.target.parentElement.parentElement.parentElement.dataset.id;
      const index = data.findIndex((item) => item.id == id);
      data[index].count++;
      calculatePrices();
      renderHtml();
    }
    if (e.target.classList.contains("minus")) {
      const id = e.target.parentElement.parentElement.parentElement.dataset.id;
      const index = data.findIndex((item) => item.id == id);
      data[index].count--;
      if (data[index].count == 0) {
        if (confirm("Do you want to remove?")) {
          data.splice(index, 1);
        } else {
          data[index].count = 1;
        }
      }
      calculatePrices();
      renderHtml();
    }
    if (e.target.classList.contains("remove-product")) {
      const id = e.target.parentElement.parentElement.parentElement.dataset.id;
      const index = data.findIndex((item) => item.id == id);
      if (confirm("Do you want to remove?")) data.splice(index, 1);
      calculatePrices();
      renderHtml();
    }
  });
  
  calculatePrices();
  renderHtml();