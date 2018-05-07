import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import AddressAPI from '../../API/AddressAPI';

class addaddress extends Component {
    constructor(props){
        super(props);
        this.Save = this.Save.bind(this);
        this.Cancel=this.Cancel.bind(this);
      }

  Save(e){
    e.preventDefault();
    AddressAPI.add({ addressId: 0, address: this.refs.address.value,
        city: this.refs.city.value,state:this.refs.state.value,
        pincode:this.refs.pincode.value,phoneNumber:this.refs.phonenumber.value,username:"" });
    
        this.props.history.push('/checkout')
  }

  Cancel(){
        this.props.history.push('/checkout')
  }


  render() {
    let states = AddressAPI.allstates;

            return (
                <form onSubmit={this.Save}>
                <h3>Add Address</h3>
                <div className="well well-lg" style={{"width":"500px"}}>

                <div className="row">
                    <div className="col-sm-5">
                        <label>Address</label>
                    </div>
                    <div className="col-sm-7">              
                        <input type="text" ref="address" maxLength="30" className="form-control col-sm-*" required/>
                    </div>
                 </div>


                <div className="row">
                    <div className="col-sm-5">
                        <label>City</label>
                    </div>
                    <div className="col-sm-7">              
                        <input type="text" pattern="[a-zA-Z ]*"  ref="city" maxLength="30" className="form-control col-sm-*" required/>
                        <p style={{"fontSize":9}} className="text-left text-danger">*only alphabets,space allowed</p>
                    </div>
                 </div>


                <div className="row">
                    <div className="col-sm-5">
                        <label>State</label>
                    </div>
                    <div className="col-sm-7" >              
                        <select ref="state">
                            {states.map(x=>(<option>{x.name}</option>))}
                        </select>
                    </div>
                 </div>

                <div className="row">
                    <div className="col-sm-5">
                        <label>Pincode</label>
                    </div>
                    <div className="col-sm-7">              
                        <input type="text" pattern="[0-9]*" maxLength="6" ref="pincode" className="form-control col-sm-*" required/>
                        <p style={{"fontSize":9}} className="text-left text-danger">*only 6 digit number allowed</p>
                    </div>
                 </div>

                <div className="row">
                    <div className="col-sm-5">
                        <label>Phone Number</label>
                    </div>
                    <div className="col-sm-7">              
                        <input type="text" pattern="[0-9]*" maxLength="10" ref="phonenumber" className="form-control col-sm-*" required/>
                        <p style={{"fontSize":9}} className="text-left text-danger">*only 10 digit number allowed</p>
                    </div>
                 </div>

                <div className="row">
                    <div className="col-sm-6">
                    <input type="submit" className="btn-success" style={{"margin-right":10}} value={"Save"}></input>
                    <button onClick={this.Cancel}  className="btn-primary">Cancel</button>
                    </div> 
                </div>
                </div> 
                </form> 
                );
  }
}

export default withRouter(addaddress);
