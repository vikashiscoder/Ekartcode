import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
import WishlistAPI from '../../API/WishlistAPI';
import Shortid from 'shortid';

class cartitem extends Component {
    constructor(props){
        super(props);
        this.DeleteCartItem = this.DeleteCartItem.bind(this);
        this.UpdateCartOrderQuantity = this.UpdateCartOrderQuantity.bind(this);
        this.DeleteWish = this.DeleteWish.bind(this);
      }

  DeleteCartItem(){
    this.props.deleteCartItem({number:this.props.item.product.number});
  }

  DeleteWish()
  {
    WishlistAPI.delete(this.props.item);
    this.props.Refresh();
  }

  UpdateCartOrderQuantity(){

    this.props.updateCartOrderQuantity({number:this.props.item.product.number, count:this.refs.itemcount.value});
  }

  render() {
    var item = this.props.item;
    
    let cols=[];
    let btn = []
    let counttag=[];

    if(this.props.Readonly){
        counttag.push(<label>{item.product.count}</label>);
    }
    else{
        //If not wishlist only display drop down
        if(!this.props.IsWish){

                for(var i=1;i<5;i++){
                    if(i===item.product.count){
                        cols.push(<option selected  key={Shortid.generate()} >{i}</option>)    
                    }
                    else{
                        cols.push(<option  key={Shortid.generate()} >{i}</option>)
                    }
                }
                counttag.push(<select ref="itemcount" onChange={this.UpdateCartOrderQuantity}  key={Shortid.generate()} >
                            {cols}
                            </select>);
        }
    }

    if(this.props.IsWish){
        btn.push(<div className="col-sm-2"  key={Shortid.generate()} ><button className="btn-danger" onClick={this.DeleteWish}>Remove Wish</button></div>);
    }
    else{
        btn.push(<div className="col-sm-2" key={Shortid.generate()} ><button className="btn-danger" onClick={this.DeleteCartItem}>Remove Item</button></div>);
    }

    return (

    <div className="row" key={Shortid.generate()} >
        <div className="col-sm-2"><Link to={'/productdescription/' + item.product.number}><img alt="" width="100" height="100" src={"/images/" + item.product.number + ".jpg"} /></Link></div>
        <div className="col-sm-2"><label>{item.product.displayName}</label></div>
        <div className="col-sm-2"><label>{item.product.category}</label></div>
        <div className="col-sm-2">
            {counttag}
        </div>
        <div className="col-sm-2"><label>{item.product.price}</label></div>
        {btn}
    </div>        
    );
  }
}

export default withRouter(cartitem);
