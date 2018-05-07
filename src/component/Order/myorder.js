import React, { Component } from 'react';
import Orderitem from './orderitem';
import {withRouter} from 'react-router-dom'
import OrderAPI from '../../API/OrderAPI'
import Myordertab from './myordertab';
import Shortid from 'shortid';

class myorder extends Component {
    constructor(props){
        super(props);
        this.state={status:this.props.match.params.status};
        this.Refresh = this.Refresh.bind(this);
      }

Refresh(){
this.setState(this.state);

}

  render() {
    
    let orders = OrderAPI.getByStatus(this.props.match.params.status);
    let cols=[];

    if(orders){
      if(orders.length > 0){
        return (
            <div  key={Shortid.generate()} >
                <Myordertab  key={Shortid.generate()}  />
                    
                    <br/>
                    <div className="row"  key={Shortid.generate()} >
                        <div className="col-sm-2"><label>Order Id</label></div>
                        <div className="col-sm-2"><label>Order Date</label></div>
                        <div className="col-sm-2"><label>Total Price</label></div>
                        <div className="col-sm-2"><label>Products</label></div>
                        <div className="col-sm-2"><label>&nbsp;</label></div>
                        {cols}
                    </div>
                    <hr/>
                {orders.map(x=>(<Orderitem item={x} Refresh={this.Refresh}  key={Shortid.generate()}  />))}
            </div>
        );
      }
    }

     //Empty cart
     return (<div><Myordertab /> <div>No orders</div></div>)
  }
}

export default withRouter(myorder);
