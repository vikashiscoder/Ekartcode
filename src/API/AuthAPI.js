import ReduxStore from '../ReduxStore';

class Auth{
    constructor(){
        if(!localStorage.getItem('DBUSER')){
            localStorage.setItem('DBUSER','[{"username":"user","password":"user", "email":"user@user.com", "phone":"9889989989"}]')
        }
    }

    getUser(){
        return  JSON.parse(localStorage.getItem('DBUSER'));
    }

    setUser(user){
        let u = this.getUser();
        u.push(user);
        localStorage.setItem('DBUSER',JSON.stringify(u))
    }

    get(username) { 
        return this.getUser().filter(x=>x.username===AuthAPI.GetLoggedInUser())[0]
    }

    Authenticate(credential) { 
        if((this.getUser().filter(x=>
                            (x.username===credential.username && 
                             x.password===credential.password))).length > 0)
        {
            return true;
        }
        //if(credential.username === 'user' && credential.password=== 'user')
        //    return true;
        return false;
  
    }
  
  Save(user){
    let newUser = this.getUser();
    
    let index = this.getUser().findIndex(x=> x.username===AuthAPI.GetLoggedInUser())
    if(index >= 0){
        newUser[index].phone = user.phone;
        newUser[index].email = user.email;
    }

    //Save the address
    localStorage.setItem('DBUSER',JSON.stringify(newUser));
    return{status:"success"};
  }

  Signup(user){
      //Check if user already exists
      if((this.getUser().filter(x=>
        (x.username===user.username && 
         x.password===user.password))).length > 0){
            return{status:"error",errormessage:"User already exists!"}
      }
      else
      {
          this.setUser(user);
          return{status:"success"}
      }

  }

  GetLoggedInUser(){
      if(ReduxStore.getState()){
        if(ReduxStore.getState().loginlogout){
            if(ReduxStore.getState().loginlogout.user){
                return ReduxStore.getState().loginlogout.user.name};
      }
    }
    return "";
    }

    GetCart(){
        if(ReduxStore.getState()){
          if(ReduxStore.getState().cart){
              if(ReduxStore.getState().cart.cart){
                  if(ReduxStore.getState().cart.cart.length > 0){
                    return ReduxStore.getState().cart.cart;
                  }
               }
            }
        }
        
      return [];
      }    
}

const AuthAPI = new Auth();
export default AuthAPI