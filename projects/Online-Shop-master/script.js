/* Add items into cart */

let carts = document.querySelectorAll('.add-to-cart');

let products=[
    
    /* WOMAN COLLECTIONS */
    {
        name: 'Summer Dress',
        tag: 'w1',
        price: 10,
        inCart: 0
        
    },
     {
        name: 'Long Cardigan',
        tag: 'w2',
        price: 10,
        inCart: 0
        
    },
     {
        name: 'Pink Sweater',
        tag: 'w3',
        price: 6,
        inCart: 0
        
    },
     {
        name: 'Long Sleeve',
        tag: 'w4',
        price: 20,
        inCart: 0
    },
    {
        name: 'Black Tshirt',
        tag: 'w5',
        price: 6,
        inCart: 0
    },
    {
        name: 'Spring Dress',
        tag: 'w6',
        price: 7,
        inCart: 0
    },
     {
        name: 'Beach Dress',
        tag: 'w7',
        price: 7,
        inCart: 0
    },
     {
        name: 'Grey Tshirt',
        tag: 'w8',
        price: 5,
        inCart: 0
    },
     {
        name: 'Summer Jumpsuit',
        tag: 'w9',
        price: 10,
        inCart: 0
    },
     
    {
        name: 'Perfect Dress',
        tag: 'w10',
        price: 10 ,
        inCart: 0
    },
     
    {
        name: 'White Tshirt',
        tag: 'w11',
        price: 6,
        inCart: 0
    },
     
    {
        name: 'Pink Romper',
        tag: 'w12',
        price: 8,
        inCart: 0
    },
    /* MEN COLLECTIONS */
    
    {
        name: 'Colorblock Striped Shirt',
        tag: 'm1',
        price: 10,
        inCart: 0
    },
    {
        name: 'Flower Black Tshirt',
        tag: 'm2',
        price: 7,
        inCart: 0
    },

    {
        name: 'Black and White Stripped Shirt',
        tag: 'm3',
        price:10,
        inCart: 0
    },
    {
        name: 'Green Tshirt',
        tag: 'm4',
        price: 5,
        inCart: 0
    },
    {
        name: 'Navy Blue',
        tag:'m5',
        price:15,
        inCart: 0
    },
    {
        name: 'Red Shirt',
        tag: 'm6',
        price: 10,
        inCart: 0
    },
    {
        name:'Black Blazer',
        tag:'m7',
        price:15,
        inCart: 0
    },

    {
        name:'Black Tshirt',
        tag:'m8',
        price:7,
        inCart: 0
    },

    /*GIRL COLLECTIONS */
    {
        name:'Skirt',
        tag:'g1',
        price:5,
        inCart: 0
    },
    {
        name:'Crop Top and Skirt Full Set',
        tag:'g2',
        price:10,
        inCart: 0
    },
    {
        name:'Red Dress',
        tag:'g3',
        price:10,
        inCart: 0
    },
    {
        name:'White Tshirt and Skirt',
        tag:'g4',
        price: 9,
        inCart: 0
    },
    {
        name:'Pink Jumpsuit',
        tag:'g5',
        price: 8,
        inCart: 0
    },
    {
        name:'White Off-Shoulder Shirt',
        tag:'g6',
        price: 7,
        inCart: 0
    },
    {
        name:'Twin Dress',
        tag:'g7',
        price: 20,
        inCart: 0
    },
    {
        name:'Long Dress',
        tag:'g8',
        price: 10,
        inCart: 0
    },

    /*BOYS COLLECTIONS */
    {
        name:'Boys Blazer',
        tag:'b1',
        price: 10,
        inCart: 0
    },
    {
        name:'G.O.A.T Black Tshirt',
        tag:'b2',
        price: 5,
        inCart: 0
    },
    {
        name:'White Tshirt',
        tag:'b3',
        price:5,
        inCart: 0
    },
    {
        name:'Striped Shirt',
        tag:'b4',
        price: 7,
        inCart: 0
    },
    {
        name:'Grey Sweater',
        tag:'b5',
        price: 9,
        inCart: 0
    },
    {
        name:'Boy Jean Shirt',
        tag:'b6',
        price: 10,
        inCart: 0
    },
    {
        name:'Blue and White Stripped Shirt',
        tag:'b7',
        price: 10,
        inCart: 0
    },
    {
        name:'White Sweater',
        tag:'b8',
        price: 10,
        inCart: 0
    } 
]

for (let i=0; i <carts.length;i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    } )
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
        if(productNumbers){
           localStorage.setItem('cartNumbers', productNumbers + 1);
           document.querySelector('.cart span').textContent = productNumbers + 1;
        }else{
             localStorage.setItem('cartNumbers', 1);
            document.querySelector('.cart span').textContent = 1;
        }
    setItems(product); 
}

function setItems(product){
    
    let cartItems = localStorage.getItem('productsInCart'); 
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems ={
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart  += 1;
    }else{
        product.inCart = 1; 
        cartItems = {
            [product.tag]: product
        } 
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}
function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null){
        cartCost = parseInt(cartCost);

        localStorage.setItem('totalCost', cartCost + product.price);
    }else{
        localStorage.setItem('totalCost', product.price);
    
    }
    
}

function displayCart(){
    let cartItems = localStorage.getItem('productsInCart'); 
    
    cartItems = JSON.parse(cartItems);
    
    console.log(cartItems);
    let productContainer = document.querySelector('.products-container');
    
   if(cartItems && productContainer) {
       
       productContainer.innerHTML = '';
       Object.values(cartItems).map(item =>{
            productContainer.innerHTML += `
            <br>
            <div style="display:flex; width:80%;">
             <div style="display:flex;width:50%">
                <img src="onlineshop/Images/${item.tag}.jpg" style="width: 90px; height:120px">
                <span>${item.name}</span></div>
            <div style="width:15%">${item.price}</div> 
            <div style="width:30%">${item.inCart}</div>
            <div style="width:10%">$${item.price * item.inCart}, 00</div><br>
            </div> 
            <br>

        `});
   }
}
    
function subtotal(){
    let sub = localStorage.getItem('totalCost');
    sub = parseInt(sub);
    if (sub>0){
        document.querySelector('.subtotal').textContent = "Subtotal:    $" + sub;  
        total(sub);
    }
    else{
        document.querySelector('.subtotal').textContent = "Subtotal:    $0";  
        document.querySelector('.total-summary').textContent = "Total:    $0";
    }
}
function total(x){
    var total = (x * .10) + x;
    document.querySelector('.total-summary').textContent = "Total:    $" + (total).toFixed(2);
}

onLoadCartNumbers();
displayCart();
subtotal();

























