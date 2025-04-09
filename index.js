let products = [
    {
      id: "1",
      item: "Shirt"
    },
    {
      id: "2",
      item: "Jeans"
    },
    {
      id: "3",
      item: "T-shirt"
    },
    {
      id: "4",
      item: "Denim Jacket"
    },
    {
      id: "5",
      item: "Casual Shoes"
    }
  ];


  const appContainer = document.getElementById("app");

  function showProducts() {
    for(let product of products){
      let productDiv = document.createElement("div");
      let productLabel = document.createElement("label");
      let removeButton = document.createElement("button");

      productLabel.innerText = product.item;
      removeButton.setAttribute('data-id', product.id);
      removeButton.innerText = "Remove";

      productDiv.appendChild(productLabel);
      productDiv.appendChild(removeButton);
      appContainer.appendChild(productDiv);
    }
  }

  showProducts(products);

  appContainer.addEventListener('click', (event)=>{
    let itemId = event.target.dataset.id;
    products = products.filter(product=> product.id !== itemId);
    appContainer.innerHTML = ""; // Clear the container
    showProducts(products); // Re-render the products
  })