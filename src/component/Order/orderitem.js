import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import OrderAPI from '../../API/OrderAPI'
import Shortid from 'shortid';

class orderitem extends Component {
    constructor(props){
        super(props);
        this.Cancel = this.Cancel.bind(this);
        this.Return = this.Return.bind(this);
      }

  Cancel(){
    OrderAPI.modify(this.props.item.orderId,"Cancel");
    this.props.Refresh();
  }

  Return(){

    OrderAPI.modify(this.props.item.orderId,"Return");
    this.props.Refresh();
  }

  render() {
    var item = this.props.item;

    let productsstring = "";
    if(item.orderItems){
        if(item.orderItems.length > 0){
            item.orderItems.forEach(x=> productsstring = productsstring + " " + x.product.displayName);     
        }
    }

    //Add buttons only for open orders
    
    let cols = [];
    if(item.status==="Open"){
        cols.push(<button onClick={this.Cancel} className="btn-primary" style={{"marginRight":10}} key={Shortid.generate()} >Cancel</button>);      
    }

    if(item.status==="Closed"){
        cols.push(<button onClick={this.Return} className="btn-primary" key={Shortid.generate()} >Return</button>);      
    }    

    return (
     <div key={Shortid.generate()} >   
        <div className="row">
            <div className="col-sm-2"><label>{item.orderId}</label></div>
            <div className="col-sm-2"><label>{item.orderDate}</label></div>
            <div className="col-sm-2"><label>{item.totalPrice}</label></div>
            <div className="col-sm-2"><label>{productsstring}</label></div>
            <div className="col-sm-2">{cols}</div>
        </div>  
        <hr/>
    </div>
    );
  }
}

export default withRouter(orderitem);
