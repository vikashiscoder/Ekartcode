const initialState = {
    isLoggedIn:false,
    user:{}
  }
  
  export default (state=initialState, action) => {
      
      if (typeof state === 'undefined') {

      return {isLoggedIn:false, user:{}};
    }
  
      switch(action.type){
          case 'login':
          {
              
              return Object.assign({},...state,{isLoggedIn:action.isLoggedIn,user:action.user});
               //newState.isLoggedIn = action.isLoggedIn;
               //newState.products.push(Object.assign({},Object.assign({},action.product),{id:newState.products.length+1}));
               //return newState;
          }
          case 'logout':
                {
                    var newState = Object.assign({},state);
                    newState.isLoggedIn = false;
                    newState.user = {};
                    return newState;
                }
          default:
              return state;
      }
  }