const getLocalCart = function(){

    if(localStorage.getItem("cart") && localStorage.getItem("cartdate")){
        let localcartdate = localStorage.getItem("cartdate")
        //Get timestamp of 7 days from now
        let oneweekearlier = new Date().getTime() - (7 * 24 * 60 * 60 * 1000)

        //If local storage is les than 7 days old do not restore
        if(localcartdate < oneweekearlier){
            localStorage.removeItem("cart");
            localStorage.removeItem("cartdate");
        }
        else
           return JSON.parse(localStorage.getItem("cart"))
    }

    return [];
}

const initialState = {
    cart:getLocalCart()
  }
  
  export default (state=initialState, action) => {
      
      if (typeof state === 'undefined') {

      return { cart:[]};
    }
  
      switch(action.type){
          case 'addtocart':
          {
            //If item is not there in
            let c = [...state.cart,{product:action.item.product}]
            return Object.assign({},...state,{cart:c});
          }
          case 'deletefromcart':
          {
              return Object.assign({},{cart:state.cart.filter(x=>x.product.number!==action.item.number)});
         }
         case 'clearcart':
         {
             return Object.assign({},{cart:[]});
        }
          case 'updatecartquantity':
          {
              let newCart = state.cart.map(x=>{
                if(x.product.number === action.item.number)
                    return {product:Object.assign({},x.product,{count:action.item.count})};
                
                return x;
              }); 

              return Object.assign({},state,{cart:newCart});
          }
          default:
              return state;
      }
  }