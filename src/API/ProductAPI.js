import OrderAPI from './OrderAPI'

const ProductAPI = {
  dealProducts: [
    { number: 1, displayName: "macbook air", shortDesc: "This is macbook air", category:"Laptop" },
    { number: 2, displayName: "Dell xps", shortDesc: "This is Dell XPs", category:"Laptop" },
    { number: 3, displayName: "Samsung", shortDesc: "This is Samsung", category:"Laptop" },
    { number: 4, displayName: "HP Elite book", shortDesc: "This is HP elite book", category:"Laptop" },
    { number: 5, displayName: "Lenovo book", shortDesc: "This is Lenovo book", category:"Laptop" },
    { number:6, displayName: "G5", shortDesc: "Moto G5", category:"Phone" },
  ],
  recommendedProducts: [
    { number: 1, displayName: "macbook air", shortDesc: "This is macbook air", category:"Laptop" },
    { number: 2, displayName: "Dell xps", shortDesc: "This is Dell XPs",category:"Laptop" },
    { number: 3, displayName: "Samsung", shortDesc: "This is Samsung", category:"Laptop" },
    { number: 4, displayName: "HP Elite book", shortDesc: "This is HP elite book", category:"Laptop" },
    { number: 5, displayName: "Lenovo book", shortDesc: "This is Lenovo book", category:"Laptop" },
    { number:6, displayName: "G5", shortDesc: "Moto G5", category:"Phone" },
    { number:7, displayName: "G6", shortDesc: "Moto G6", category:"Phone" }
  ],
  searchProducts: [
    { number: 1, displayName: "macbook air", shortDesc: "This is macbook air", category:"Laptop" },
    { number: 2, displayName: "Dell xps", shortDesc: "This is Dell XPs",category:"Laptop" },
    { number: 3, displayName: "Samsung", shortDesc: "This is Samsung", category:"Laptop" },
    { number: 4, displayName: "HP Elite book", shortDesc: "This is HP elite book", category:"Laptop" },
    { number: 5, displayName: "Lenovo book", shortDesc: "This is Lenovo book",discount:"15", category:"Laptop" },
    { number:6, displayName: "G5", shortDesc: "Moto G5", category:"Phone" },
    { number:7, displayName: "G6", shortDesc: "Moto G5", category:"Phone" }
  ],
  product: [
    { number: 1, displayName: "macbook air", shortDesc: "This is macbook air",
      category:"Laptop", desc:"This is macbook air", price:100000, discount:10, deliveryCharge:30,
      offerPrice:90000, avgRating:3, reviews:5 ,inStock:true, deal:true,
      review:[{rating:3,title:"Good",description:"This is a good product"},
               {rating:2,title:"Not so good",description:"This is a average product"}
    ]},

    { number: 2, displayName: "Dell xps", shortDesc: "This is Dell XPs",
      category:"Laptop", desc:"This is Dell XPs", price:50000, discount:10, deliveryCharge:3,
      offerPrice:45000, avgRating:3, reviews:5, inStock:true , deal:true,
      review:[{rating:3,title:"Good",description:"This is a good product"},
               {rating:2,title:"Not so good",description:"This is a average product"}]
    },

    { number: 3, displayName: "Samsung", shortDesc: "This is samsung laptop",
    category:"Laptop", desc:"This is Samsung laptop", price:40000, discount:10, deliveryCharge:3,
    offerPrice:36000, avgRating:3, reviews:5, inStock:true ,
    review:[{rating:3,title:"Good",description:"This is a good product"},
             {rating:2,title:"Not so good",description:"This is a average product"}]
    },

    { number: 4, displayName: "HP Elite book", shortDesc: "This is HP Elite book",
    category:"Laptop", desc:"This is HP Elite book", price:40000, discount:10, deliveryCharge:3,
    offerPrice:36000, avgRating:3, reviews:5, inStock:true ,
    review:[{rating:3,title:"Good",description:"This is a good product"},
             {rating:2,title:"Not so good",description:"This is a average product"}]
    },

    { number: 5, displayName: "Lenovo book", shortDesc: "This is Lenovo book",
    category:"Laptop", desc:"This is Lenovo book", price:40000, discount:10, deliveryCharge:3,
    offerPrice:36000, avgRating:3, reviews:5, inStock:true ,
    review:[{rating:3,title:"Good",description:"This is a good product"},
             {rating:2,title:"Not so good",description:"This is a average product"}]
    },

    { number: 6, displayName: "Moto G5", shortDesc: "Moto G5",
    category:"Mobile", desc:"This is MotoG5", price:20000, discount:10, deliveryCharge:3,
    offerPrice:18000, avgRating:3, reviews:5, inStock:true ,
    review:[{rating:3,title:"Good",description:"This is a good product"},
             {rating:2,title:"Not so good",description:"This is a average product"}]
    },

    { number: 7, displayName: "Moto G6", shortDesc: "Moto G6",
    category:"Mobile", desc:"This is MotoG6", price:20000, discount:10, deliveryCharge:3,
    offerPrice:18000, avgRating:3, reviews:5, inStock:true ,
    review:[{rating:3,title:"Good",description:"This is a good product"},
             {rating:2,title:"Not so good",description:"This is a average product"}]
    }

  ],
  deals: function() { return this.product.filter(x=>x.deal==true)},
  recommended: function(userid) {
    //This should be based on previous purchases
    //Verify that the products linked are relevent based on buyers last one months  purchases
    //return this.recommendedProducts;

    //Get all products
    let productIds = [];
    OrderAPI.getAll().forEach(x=>x.orderItems.forEach(y=>productIds.push(y.product.number)));

    return this.product.filter(x=> productIds.filter(y=> x.number == y).length > 0 );
  },
  other: function(userid) { //this should be other products
    return this.product.filter(x=>x.deal!=true);
  },
  search: function(searchText) {
    return this.product.filter(x=>x.displayName.toLowerCase().search(searchText.toLowerCase())!= -1)
    //return this.searchProducts; //return [] in case no search results
  },
  productDescription: function(number) {
    
    return this.product.filter(x=>x.number==number)[0];
  },
  getByCategory: function(id) {
    const isproduct = 
    p => {
      p.category.
                  p.number == id}
    
    
    return this.Products.filter(isproduct)[0];
  }
}

export default ProductAPI