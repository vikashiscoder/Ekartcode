import AuthAPI from './AuthAPI'

class Wishlist {

  constructor(){
    let products= [
        {product:{  username:"user", number: 1, displayName: "macbook air", shortDesc: "This is macbook air",
          category:"Laptop", desc:"This is macbook air", price:100000, discount:10, deliveryCharge:30,
          offerPrice:90000, avgRating:3, reviews:5 ,inStock:true, deal:true,
          review:[{rating:3,title:"Good",description:"This is a good product"},
                   {rating:2,title:"Not so good",description:"This is a average product"}
        ]}}];

    if(!localStorage.getItem('DBWISHLIST')){
      localStorage.setItem('DBWISHLIST',JSON.stringify(products));
  }
}


getWishlist(){
    return  JSON.parse(localStorage.getItem('DBWISHLIST'));
}

setWishlist(a){
    let u = this.getWishlist();
    u.push(a);
    localStorage.setItem('DBWISHLIST',JSON.stringify(u))
}


    
getAll(){ return this.getWishlist().filter(x=>x.product.username===AuthAPI.GetLoggedInUser())}


add(w) {
    w.product.username = AuthAPI.GetLoggedInUser();

    //If wishlist already exists no ned to add
    if(this.getWishlist().filter(x=>x.product.number===w.number && x.product.username===AuthAPI.GetLoggedInUser()).length > 0)
    {
        return;
    }
    this.setWishlist(w);
}

    delete(w) {
    
      let newAddress = this.getWishlist().filter(x=>x.product.number!==w.product.number);
      //Save the address
      localStorage.setItem('DBWISHLIST',JSON.stringify(newAddress));

      }
  }
  
  const WishlistAPI = new Wishlist();
  export default WishlistAPI