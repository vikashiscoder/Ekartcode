import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import CardAPI from '../../API/CardAPI';

class addcard extends Component {
    constructor(props){
        super(props);
        this.Save = this.Save.bind(this);
        this.Cancel=this.Cancel.bind(this);        
      }

  Save(e){
      e.preventDefault();
      CardAPI.add({ cardNumber: this.refs.cardNumber.value,  nameOnCard: this.refs.nameOnCard.value,
                  expiryMonth: this.refs.expiryMonth.value,expiryYear:this.refs.expiryYear.value});

      this.props.history.push('/checkout') 
  }

  Cancel(){
    this.props.history.push('/checkout')
}


  render() {

    return (
      <form onSubmit={this.Save}>
      <h3>Add Card Details</h3>
      <div className="well well-lg" style={{"width":"500px"}}>

      <div className="row">
          <div className="col-sm-5">
              <label>Card Number</label>
          </div>
          <div className="col-sm-7">              
              <input type="number" max="9999999999999" ref="cardNumber" className="form-control col-sm-*" required/>
          </div>
       </div>


      <div className="row">
          <div className="col-sm-5">
              <label>Name On Card</label>
          </div>
          <div className="col-sm-7">              
              <input type="text" pattern="[a-zA-Z ]*" maxLength="20" ref="nameOnCard" className="form-control col-sm-*" required/>
          </div>
       </div>

      <div className="row">
          <div className="col-sm-5">
              <label>Expiry Month</label>
          </div>
          <div className="col-sm-7">              
              <input type="number" max="12" min="01" ref="expiryMonth" className="form-control col-sm-*" required/>
          </div>
       </div>

      <div className="row">
          <div className="col-sm-5">
              <label>Expiry Year</label>
          </div>
          <div className="col-sm-7">              
              <input type="number" max="9999" min="2018" ref="expiryYear" className="form-control col-sm-*" required/>
          </div>
       </div>
      <div className="row">
        <div className="col-sm-6">
          <input type="submit"  className="btn-success" style={{"margin-right":10}} value="Save"/>
          <button onClick={this.Cancel}  className="btn-primary">Cancel</button>
         </div> 
      </div>
      </div> 
      </form> 
      );
  }
}

export default withRouter(addcard);
