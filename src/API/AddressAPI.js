import AuthAPI from './AuthAPI'

class Address {

  constructor(){
    let address = [
      { "addressId":1, "username":"user", "address": "123, Syndehams Rd", "city": "Chennai","state":"Rajasthan", "pincode":"699999","phoneNumber":"09887789987" },
      { "addressId":2, "username":"user", "address": "45, Bricklin Rd", "city": "Ahmedabad","state":"Gujarat", "pincode":"9099999","phoneNumber":"0988909000" }
    ];

    if(!localStorage.getItem('DBADDRESS')){
      localStorage.setItem('DBADDRESS',JSON.stringify(address));
  }
}

getNewAddressId(){
  let max = 0;
  this.getAddress().forEach(x=>{
    if(x.addressId > max){
      max = x.addressId;
    }
  });

  return max + 1;
}

getAddress(){
    return  JSON.parse(localStorage.getItem('DBADDRESS'));
}

setAddress(a){
    let u = this.getAddress();
    u.push(a);
    localStorage.setItem('DBADDRESS',JSON.stringify(u))
}


    allstates= [
      { name:"Andhra Pradesh" },
      { name:"Arunachal Pradesh" },
      { name:"Assam" },
      { name:"Bihar" },
      { name:"Goa" },
      { name:"Gujarat" },
      { name:"Haryana" },
      { name:"Himachal Pradesh" },
      { name:"Jammu & Kashmir" },
      { name:"Karnataka" },
      { name:"Kerala" },
      { name:"Madhya Pradesh" },
      { name:"Maharashtra" },
      { name:"Manipur" },
      { name:"Meghalaya" },
      { name:"Mizoram" },
      { name:"Nagaland" },
      { name:"Orissa" },
      { name:"Punjab" },
      { name:"Rajasthan" },
      { name:"Sikkim" },
      { name:"Tamil Nadu" },
      { name:"Tripura" },
      { name:"Uttar Pradesh" },
      { name:"West Bengal" },
      { name:"Chhattisgarh" },
      { name:"Uttarakhand" },
      { name:"Jharkhand" },
      { name:"Telangana" }
    ]
 
    getAll(){ return this.getAddress().filter(x=>x.username===AuthAPI.GetLoggedInUser())}

    get(addressId) { return this.getAddress().filter(x=>x.addressId===addressId && x.username===AuthAPI.GetLoggedInUser())[0]}

    add(address) {
      address.username = AuthAPI.GetLoggedInUser();
      address.addressId = this.getNewAddressId();
      this.setAddress(address);
    }

    modify(address) {
      address.username = AuthAPI.GetLoggedInUser();
      let newAddress = this.getAddress();
      
      let index = this.getAddress().findIndex(x=>x.addressId===address.addressId && x.username===AuthAPI.GetLoggedInUser())
      if(index >= 0){
        newAddress[index] = address;
      }

      //Save the address
      localStorage.setItem('DBADDRESS',JSON.stringify(newAddress));
    }

    delete(address) {
      let newAddress = this.getAddress().filter(x=>x.addressId !== address.addressId);

      //Save the address
      localStorage.setItem('DBADDRESS',JSON.stringify(newAddress));

      }
  }
  
  const AddressAPI = new Address();
  export default AddressAPI