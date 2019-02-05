var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function addToCart(item) {
 var price = getRandomIntInclusive(1, 100);
 var added = {'itemName': item, 'itemPrice': price };
 cart.push(added);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  for (var i = 0; i < cart.length; i++){
    
    if (cart.length===1){
      return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`;
        
      
      
    } else if (cart.length === 2){
           return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}, and ${cart[1]['itemName']} at $${cart[1]['itemPrice']}.`;
        
      
      
    } else if (cart.length >= 3){
          for(var n = 0; n < cart.length; n++){
           if(cart.length === 3){
            return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}, ${cart[1]['itemName']} at $${cart[1]['itemPrice']}, and ${cart[2]['itemName']} at $${cart[2]['itemPrice']}.`
           } else {
             var inCart = String(cart).push();
             return inCart;
           }
          }
          
          
     } else {
        
      }  
  } return "Your shopping cart is empty.";
}

function total(){
var cartTotal = 0;  
  for (var i = 0; i < cart.length; i++){
  cartTotal += cart[i].itemPrice;
} return cartTotal;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
