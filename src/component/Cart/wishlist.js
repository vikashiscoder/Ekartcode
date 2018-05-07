import React, { Component } from 'react';
import Cartitem from '../Cart/cartitem'
import {withRouter} from 'react-router-dom'
import WishlistAPI from '../../API/WishlistAPI'
import Shortid from 'shortid';

class wishlist extends Component {
    constructor(props){
        super(props);
        this.state={};
        this.Refresh = this.Refresh.bind(this);
      }

 Refresh(){
     this.setState({});
 }

  render() {
    let wishlist = WishlistAPI.getAll();
    let cols=[];

    if(wishlist){
      if(wishlist.length > 0){
         
        wishlist.forEach(x=>cols.push(<Cartitem Refresh={this.Refresh} IsWish={true} item={x}  key={Shortid.generate()} />));

        return (
          <div  key={Shortid.generate()} >  
            <div><h3>Wish List</h3></div>
            <div>
              <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-2">Category</div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-2">Price</div>
                    <div className="col-sm-2"></div>
                </div>
                <div><hr/></div>
              </div>
              {cols}
            <div><hr/></div>
           </div>)
     }
    }

     //Empty cart
     return (<center  key={Shortid.generate()} ><div className="text-primary"><h4>Wish list is empty!!</h4></div></center>)
  }
}

export default withRouter(wishlist);
