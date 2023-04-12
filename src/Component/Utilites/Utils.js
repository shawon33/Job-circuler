const addToDb = id => {
    let shoppingCart = getShoppingCart();
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

const getShoppingCart = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('Applied-job');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}



export {
    addToDb,
    getShoppingCart,
}
