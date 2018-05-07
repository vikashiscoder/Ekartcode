import React, { Component } from 'react';
import ProductAPI from '../../API/ProductAPI';
import {Link} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import WishlistAPI from '../../API/WishlistAPI';



class productdescription extends Component {
    constructor(props){
        super(props);
        this.state={};
        this.AddToCart = this.AddToCart.bind(this);
        this.onStarClick = this.onStarClick.bind(this);
        this.AddToWishlist = this.AddToWishlist.bind(this);
      }

  componentWillMount(){
    let p = ProductAPI.productDescription(this.props.match.params.number);
    this.setState({product:p});
  }

  componentWillReceiveProps(){
    this.setState(Object.assign({},this.state,{cart: this.props.cart}))
  }
  
  onStarClick(nextValue, prevValue, name) {
  }

  AddToWishlist(){
    WishlistAPI.add({product:this.state.product});
    this.props.history.push('/wishlist');
  }

  AddToCart(e){

    var existingqty = 0;
    //Check if item already exists in cart
    if(this.props.cart){
      if(this.props.cart.length > 0){
        let matchingProd = this.props.cart.filter(x=>x.product.number === this.state.product.number );
        if(matchingProd){
          if(matchingProd.length>0){
            existingqty = parseInt(matchingProd[0].product.count,10)         
          }
        }
      }
    }

    let newQty = parseInt(this.refs.itemcount.value,10) + existingqty;

    let newItem = {product:{
      count: (newQty > 4) ? 4 : newQty,
      number:this.state.product.number,
      displayName:this.state.product.displayName,
      category:this.state.product.category,
      price:this.state.product.offerPrice
    }};

    existingqty == 0 ? 
        this.props.addToCart(newItem) 
              : 
        this.props.updateCartOrderQuantity({count: newItem.product.count,
                                           number: newItem.product.number});
    
    this.props.history.push('/cart');
  }


  render() {

    if(this.state.product)
    {
        return (
        
        <div className="row rowgap">
          <div className="col-sm-1"/>
          <div className="col-sm-3">
            <img  width="100%" height="250" src={"/images/" + this.state.product.number + ".jpg"} />
          </div>
          <div className="col-sm-8">
              <div><h2>{this.state.product.displayName}</h2></div>
              <div>
                  <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={this.state.product.avgRating}
                    onStarClick={this.onStarClick }
                  />
                 <span style={{"paddingLeft":"20px"}}>{this.state.product.reviews.length + " Customer reviewed"}</span>
              </div>
              <div>
                <hr/>
              </div>
              <div className="linegap">
                <label>Price:</label> <span style={{"paddingLeft":"2px"}}>{this.state.product.price}</span>
              </div>
              <div className="linegap">
                <label>Discount:</label> <span style={{"paddingLeft":"2px"}}>{this.state.product.discount + "%"}</span>
              </div>
              <div className="linegap">
                <label>Offer Price:</label> <span style={{"paddingLeft":"2px"}}>{this.state.product.offerPrice}</span>
              </div>               
              <div className="linegap">
                <span className="text-success"><h3>{this.state.product.inStock ? "In Stock" : "Out Of Stock"}</h3></span>
              </div>                            
              <div className="linegap">
                <label>Quantity:</label>
                <select  ref="itemcount">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <div className="linegap">
                <input className="btn-primary" type="button" onClick={this.AddToCart} value="Add to cart"/>
              </div>
              <div className="linegap">
                <input className="btn-primary" type="button" onClick={this.AddToWishlist} value="Add to wishlist"/>
              </div>
              <br/><br/>
              <div className="linegap">
                <hr/>
                <h4>Rating & Reviews</h4>
              </div>              
          </div>
        </div>  
        );
      }

      return(<center><h3 className="text-primary">Currently no description available</h3><Link to="/">Back</Link></center>);
  }
}

export default productdescription;
