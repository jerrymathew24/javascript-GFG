//Assignment 3

//3a - Console all the different colors available for women's shirts

//3b - Console all the different colors available for men's shirts which are currently in stock.

//3c - Console an array which only contains the elements which are in stock.

const clothingStock = [
    {
      id: "1",
      color: "red",
      category: "men shirt",
      item: "Regular Fit Men Shirt",
      inStock: true
    },
    {
      id: "2",
      color: "green",
      category: "women shirt",
      item: "Slim Fit Women Shirt",
      inStock: true
    },
    {
      id: "3",
      color: "blue",
      category: "men shirt",
      item: "Oversized Men Shirt",
      inStock: false
    },
    {
      id: "4",
      color: "yellow",
      category: "men tshirt",
      item: "Regular Fit Men Tshirt",
      inStock: false
    },
    
    
   {
      id: "5",
      color: "magenta",
      category: "women jeans",
      item: "Ankle Lenght Women Jeans",
      inStock: true
    },
    {
      id: "6",
      color: "yellow",
      category: "men shirt",
      item: "Casual Fit Men Shirt",
      inStock: true
    },
    {
      id: "7",
      color: "green",
      category: "men jeans",
      item: "Carrot Fit Men Jeans",
      inStock: true
    },
    {
      id: "8",
      color: "red",
      category: "women shirt",
      item: "Casual Fit Women Shirt",
      inStock: false
    }
   ];

   clothingStock.map(item => {
    item.category === 'women shirt' && console.log(`${item.color}`);
    
   })

   clothingStock.map(item => {
    item.category === 'men shirt' && item.inStock === true && console.log(`${item.color}`);
    
   })

   const availableCloths = clothingStock.filter(item => {
    return item.inStock=== true
   })
   console.log(availableCloths);
   