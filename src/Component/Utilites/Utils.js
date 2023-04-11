const addToDb = id => {
    let shoppingCart = {};
    
    const  storeCart = localStorage.getItem('shoppingCart');
    if(storeCart){
        shoppingCart =JSON.parse(storeCart)
    } else{
        shoppingCart ={}
    }

    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] =newQuantity
        localStorage.setItem(id,newQuantity)
    }
    else{
       shoppingCart[id]=1;
        
    }
    localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart))
}


const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

export {
    addToDb,
    getShoppingCart
}