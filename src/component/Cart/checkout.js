import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Contentcart from '../content/contentcart'
import AddressAPI from '../../API/AddressAPI';
import Addressitem from '../Address/addressitem';
import CardAPI from '../../API/CardAPI';
import Carditem from '../Card/carditem';
import OrderAPI from '../../API/OrderAPI'

class checkout extends Component {
    constructor(props){
        super(props);
        this.state={error:"Hide",errortext:""};
        this.PlaceOrder = this.PlaceOrder.bind(this);
        this.AddAddress = this.AddAddress.bind(this);
        this.AddCard = this.AddCard.bind(this);
        this.Refresh = this.Refresh.bind(this);
        this.AddressSelected = this.AddressSelected.bind(this);
        this.CardSelected = this.CardSelected.bind(this);
      }

  PlaceOrder(){
    
    if(this.state.selectedAddress && this.state.cardSelected){
      
      this.setState({error:"Hide",errortext:""})
      OrderAPI.add(this.state.selectedAddress,this.state.cardSelected)  
      this.props.clearCart();
      this.props.history.push('/MyOrder/Open')
    }
    else{
      this.setState({error:"Show",errortext:"Address & Card details are mandatory. Please select atleast one."})
    }
    
  }

  AddAddress(){
    this.props.history.push('/Addaddress')
  }

  AddCard(){
    this.props.history.push('/Addcard')
  }

  Refresh(){
    this.setState(this.state);
  }

  AddressSelected(e){
    this.setState(Object.assign(this.state,{selectedAddress:e.target.value}));
  }

  CardSelected(e){
    this.setState(Object.assign(this.state,{cardSelected:e.target.value}));
  }

  render() {

    //Get all addresses
    let alladdress = AddressAPI.getAll();
    let addresstag = [];
    
    addresstag.push(<div ><h3>Select Shipping Address</h3></div>);

    
    addresstag.push(<div className="col-sm-2 well margingap" height="100" onClick={this.AddAddress}  >
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <h4 className="text-center">Add Address</h4>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                      
                    </div>);

    if(alladdress.length > 0){
        alladdress.forEach(x=>{
            addresstag.push(<div className="well  col-sm-2 margingap "  >
                            <input type="radio" id={x.addressId} ref="address" name="address" value={x.addressId} 
                            onChange={this.AddressSelected}>
                            </input>
                            <Addressitem item={x} Refresh={this.Refresh}/>
                            </div>)
        })  
    }

    //addresstag.push(<div className="row">{addresstag}</div>)


    //Get all cards
    let allcard = CardAPI.getAll();
    let cardtag = [];
    
    cardtag.push(<div   ><h3>Select Details</h3></div>);

    cardtag.push(<div className="col-sm-2 well margingap" height="100" onClick={this.AddCard }  >
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <h4 className="text-center">Add Card</h4>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                      
                    </div>);    


    if(allcard.length > 0){
        allcard.forEach(x=>{
            cardtag.push(<div className="well  col-sm-2 margingap " >
                            <input type="radio" id={x.cardNumber} ref="card" name="card" 
                            onChange={this.CardSelected} value={x.cardNumber}>
                            </input>
                            <Carditem item={x} Refresh={this.Refresh}/>
                            </div>)
        })  
    }    


    return (
    <div className="gap" >
        <Contentcart Readonly={true} />

        <div className="row">
          {addresstag}
        </div>
        <br/>
        <br/>
        <div className="row">
          {cardtag}
        </div>
        <br/>
        <center>              
                <p  className={this.state.error + " text-left text-danger"}>{this.state.errortext}</p>
          </center>
        <input type="button" className="btn-success" onClick={this.PlaceOrder} value="Place Order"/>
    </div>  
    );
  }
}

export default withRouter(checkout);
