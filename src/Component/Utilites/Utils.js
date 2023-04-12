// const addToDb = id => {
//     let shoppingCart = getShoppingCart();
    
//     const  storeCart = localStorage.getItem('shoppingCart');
//     if(storeCart){
//         shoppingCart =JSON.parse(storeCart)
//     } else{
//         shoppingCart ={}
//     }

//     const quantity = shoppingCart[id];
//     if(quantity){
//         const newQuantity = quantity + 1;
//         shoppingCart[id] =newQuantity
//         localStorage.setItem(id,newQuantity)
//     }
//     else{
//        shoppingCart[id]=1;
        
//     }
//     localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart))
// }


// const getShoppingCart = () => {
//     let shoppingCart = {};

//     const storedCart = localStorage.getItem('shopping-cart');
//     if (storedCart) {
//         shoppingCart = JSON.parse(storedCart);
//     }
//     return shoppingCart;
// }



const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('Applied-job', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('Applied-job');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
