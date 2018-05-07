import React, { Component } from 'react';
import Contentcartitem from '.././content/contentcartitem';
import Readonlycartitem from './readonlycartitem';
import {withRouter} from 'react-router-dom'
import Shortid from 'shortid';

class cart extends Component {
    constructor(props){
        super(props);
        this.state={};
        this.Checkout = this.Checkout.bind(this);
      }

componentWillReceiveProps(){
  
  this.setState({cart: this.props.cart})
}

Checkout(){
  this.props.history.push('/checkout')
}



  render() {
    let cart = this.props.cart;
    let cols=[];

    if(cart){
      if(cart.length > 0){

        if(this.props.Readonly)
        {
            //Readonly Cart - Used in checkout
            //Editable Cart 
            cols.push(<div  key={Shortid.generate()} ><h3>Shopping Cart</h3></div>)

            cols.push(<div  key={Shortid.generate()} >
                      <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-2">Category</div>
                        <div className="col-sm-2">Quantity</div>
                        <div className="col-sm-2">Price</div>
                        <div className="col-sm-2"></div>
                      </div>
                      <div><hr/></div>
                      </div>)

                let total = 0;
                  cart.forEach(x=>{
                    total=total+(x.product.price * x.product.count);
                    cols.push(<Readonlycartitem item={x} Readonly={true} key={Shortid.generate()}  />)
                    cols.push(<div  key={Shortid.generate()} ><hr/></div>);
                  })
            
            cols.push(<div className="row"  key={Shortid.generate()} >
                        <div className="col-sm-8">&nbsp;</div>
                        <div className="col=sm-4"><h4>Total:{total}</h4></div>
                      </div>);
            
        }
        else
        {
        
            //Editable Cart 
            cols.push(<div  key={Shortid.generate()} ><h3>Shopping Cart</h3></div>)

            cols.push(<div  key={Shortid.generate()} >
                      <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-2">Category</div>
                        <div className="col-sm-2">Quantity</div>
                        <div className="col-sm-2">Price</div>
                        <div className="col-sm-2"></div>
                      </div>
                      <div><hr/></div>
                      </div>)
            let total = 0;
            cart.forEach(x=>{
              total=total+(x.product.price * x.product.count);
              cols.push(<Contentcartitem item={x}  key={Shortid.generate()} />)
              cols.push(<div key={Shortid.generate()} ><hr/></div>);
            })
            
            cols.push(<div className="row"  key={Shortid.generate()} >
                        <div className="col-sm-8">&nbsp;</div>
                        <div className="col=sm-4"><h4>Total:{total}</h4></div>
                      </div>);

            cols.push(<div className="row"  key={Shortid.generate()} >
                        <div className="col-sm-10"/>
                        <div className="col=sm-2"><button className="btn-success" onClick={this.Checkout}>Checkout</button></div>
                      </div>);

      }

        return (
          <div  key={Shortid.generate()} >
            {cols}
          </div>
               )
          
        
      }
    }

     //Empty cart
     return (<center><div className="text-primary"><h4>Cart is empty!!</h4></div></center>)
  }
}

export default withRouter(cart);
