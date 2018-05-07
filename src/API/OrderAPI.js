import AuthAPI from './AuthAPI'
import AddressAPI from './AddressAPI'
import CardAPI from './CardAPI'

class Order{

constructor(){

    let order = [
            { "orderId": 1, "orderDate": "12/21/2018", "totalPrice": 500,"status":"Open", "username":"user",
            "orderItems" : [
              {"product":{
               "number":1, 
               "displayName":"Dell Laptop", 
               "category":"Laptop",
               "count":1,  
               "price":200  
              }},
              {"product":{
              "number":2,
              "displayName":"Lenovo Laptop",
              "category":"Laptop",
              "count":2,
              "price":300
                 }}
             ],
            "addressDetails": {
                "address":"123 Bricklin Rd",
                "city":"chennai",
                "state":"Gujrat",
                "pinCode":"600009",
                "phoneNumber":"9889989989"
               },
            "paymentMethod": {
                "cardNumber":"098788788887888",
                "nameOnCard":"Vikash Gupta",
                "expiryMonth":"12",
                "expiryYear":"2019"
               }
              },


              { "orderId": 2, "orderDate": "12/21/2018", "totalPrice": "500","status":"Cancel", "username":"user",
              "orderItems" : [
                {"product":{
                "number":1,
                "displayName":"Dell Laptop",
                "category":"Laptop",
                "count":1,
                "price":200
               }},
               {"product":{
               "number":2,
               "displayName":"Lenovo Laptop",
               "category":"Laptop",
               "count":2,
               "price":300
                  }}
              ],
             "addressDetails": {
                 "address":"123 Bricklin Rd",
                 "city":"chennai",
                 "state":"Gujrat",
                 "pinCode":"600009",
                 "phoneNumber":"9889989989"
                },
             "paymentMethod": {
                 "cardNumber":"098788788887888",
                 "nameOnCard":"Vikash Gupta",
                 "expiryMonth":"12",
                 "expiryYear":"2019"
                }
               },
       
              { "orderId": 3, "orderDate": "12/21/2018", "totalPrice": "500","status":"Return","username":"user",
              "orderItems" : [
                {"product":{
                "number":1,
                "displayName":"Dell Laptop",
                "category":"Laptop",
                "count":1,
                "price":200
               }},
               {"product":{
                "number":2,
               "displayName":"Lenovo Laptop",
               "category":"Laptop",
               "count":2,
               "price":300
                  }}
              ],
             "addressDetails": {
                 "address":"123 Bricklin Rd",
                 "city":"chennai",
                 "state":"Gujrat",
                 "pinCode":"600009",
                 "phoneNumber":"9889989989"
                },
             "paymentMethod": {
                 "cardNumber":"098788788887888",
                 "nameOnCard":"Vikash Gupta",
                 "expiryMonth":"12",
                 "expiryYear":"2019"
                }
               },
       
               { "orderId": 4, "orderDate": "12/21/2018", "totalPrice":500, "status":"Closed", "username":"user",
               "orderItems" : [
                {"product":{
                  "number":1,
                  "displayName":"Dell Laptop",
                  "category":"Laptop",
                  "count":1,
                  "price":200
                 }},
                 {"product":{
                 "number":2,
                 "displayName":"Lenovo Laptop",
                 "category":"Laptop",
                 "count":2,
                 "price":300
                    }}
                ],
               "addressDetails": {
                   "address":"123 Bricklin Rd",
                   "city":"chennai",
                   "state":"Gujrat",
                   "pinCode":"600009",
                   "phoneNumber":"9889989989"
                  },
               "paymentMethod": {
                   "cardNumber":"098788788887888",
                   "nameOnCard":"Vikash Gupta",
                   "expiryMonth":"12",
                   "expiryYear":"2019"
                  }
               }
          ]
      
      

        if(!localStorage.getItem('DBORDER')){
            localStorage.setItem('DBORDER',JSON.stringify(order));
        }
    }

    getNewOrderId(){
        let max = 0;
        this.getOrder().forEach(x=>{
          if(x.orderId > max){
            max = x.orderId;
          }
        });
      
        return max + 1;
      }

    getOrder(){
        return  JSON.parse(localStorage.getItem('DBORDER'));
    }

    setOrder(order){
        let u = this.getOrder();
        u.push(order);
        localStorage.setItem('DBORDER',JSON.stringify(u))
    }

    
    getAll(){ return this.getOrder().filter(x=>x.username===AuthAPI.GetLoggedInUser())}

    getByStatus(status){ 

        return this.getOrder().filter(x=>x.status===status && x.username===AuthAPI.GetLoggedInUser())
    }


    get(orderId) { 
        let o = this.getOrder().filter(x=>x.orderId===orderId && x.username===AuthAPI.GetLoggedInUser());

        if(o.length > 0) return o[0];

        return {};
    }
    
    add(addressId,cardNumber) {

        let total = 0;
        if(AuthAPI.GetCart()){
            if(AuthAPI.GetCart().length > 0){
                AuthAPI.GetCart().forEach(x=>{total=total+(x.product.price * x.product.count) })
            }
        }
     let newOrder = 
        { "orderId":this.getNewOrderId(), "orderDate": (new Date()).toLocaleDateString(),
          "totalPrice":total, "status":"Open", "username":AuthAPI.GetLoggedInUser(),
        "orderItems":AuthAPI.GetCart(),
        "addressDetails":AddressAPI.get(addressId),
        "paymentMethod":CardAPI.get(cardNumber)
        };  

        this.setOrder(newOrder);
    }


    modify(orderId,status) {

      //address.username = AuthAPI.GetLoggedInUser();
      let newOrder = this.getOrder();
      
      let index = this.getOrder().findIndex(x=>x.orderId===orderId && x.username===AuthAPI.GetLoggedInUser())
      if(index >= 0){
        newOrder[index].status = status;
      }

      //Save the address
      localStorage.setItem('DBORDER',JSON.stringify(newOrder));

    }

  }

  const OrderAPI = new Order();
  export default OrderAPI