var shoplist = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
shoplist[4] = 'fair trade coffee';
shoplist.push('fruit loops');
shoplist.push('cream of wheat');
shoplist.splice(2,2,'rice', 'beans');

var cart = [];
cart.push(shoplist.pop());
cart.push(shoplist.shift());

while(shoplist.length > 0)
    cart.push(shoplist.pop());

cart.sort().reverse();
console.log("My cart contains: ", cart.join(','));