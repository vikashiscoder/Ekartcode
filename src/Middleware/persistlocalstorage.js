const persistlocalstorage = store => next => action => {
    next(action);
    let s= store.getState();
    if(s.cart){
      localStorage.setItem("cart",JSON.stringify(s.cart.cart));
      localStorage.setItem("cartdate",JSON.stringify(new Date().getTime()));
      }
    }

export default persistlocalstorage;