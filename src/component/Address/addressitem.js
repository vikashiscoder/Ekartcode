import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import AddressAPI from '../../API/AddressAPI';

class addressitem extends Component {
    constructor(props){
        super(props);
        this.state={edit:false,item:props.item};
        this.ModifyClick = this.ModifyClick.bind(this);
        this.Delete = this.Delete.bind(this);
        this.ModifySave = this.ModifySave.bind(this);
        this.Cancel = this.Cancel.bind(this);
      }

  ModifyClick(){
    this.setState({edit:true, item:this.state.item});
  }

  Delete(){
    AddressAPI.delete(this.props.item);
    this.props.Refresh();
  }

  ModifySave(e){
    e.preventDefault();
      let changedAddress = { addressId: this.props.item.addressId, address: this.refs.address.value,
                              city: this.refs.city.value,state:this.refs.state.value,
                              pincode:this.refs.pincode.value,phoneNumber:this.refs.phoneNumber.value };
    
    AddressAPI.modify(changedAddress);
    
    this.setState({edit:false, item:changedAddress})
  }

  Cancel(){
    this.setState({edit:false, item:this.state.item})
  }


  render() {
    var item = this.state.item;
    var allstates = AddressAPI.allstates;

    

    if(this.state.edit){

        let cols=[];
        for(var i=0;i<allstates.length;i++){
            if(allstates[i].name==item.state){
                cols.push(<option selected>{allstates[i].name}</option>)    
            }
            else{
                cols.push(<option>{allstates[i].name}</option>)
            }
        }
            return (
                <form onSubmit={this.ModifySave}>
                  <div className="controlverticalgap">
                  <input required maxLength="30" type="text" ref="address" defaultValue={item.address}/></div>
                  <div className="controlverticalgap"><input required  pattern="[a-zA-Z ]*" maxLength="30" type="text" ref="city" defaultValue={item.city}></input></div>
                  <div className="controlverticalgap"><select ref="state">
                        {cols}
                        </select></div>
                  <div className="controlverticalgap"><input required type="text" pattern="[0-9]*" minLength="6" maxLength="6" ref="pincode" defaultValue={item.pincode}></input></div>
                  <div className="controlverticalgap"><input required type="text" pattern="[0-9]*" minLength="10" maxLength="10" ref="phoneNumber" defaultValue={item.phoneNumber}></input></div>
                  <div><input type="submit" className="btn-success" style={{"marginRight":20}} value="Save" ></input>
                        <button className="btn-primary" onClick={this.Cancel}>Cancel</button></div>
                  
                </form>  
                );
        
    }
    else{
        return (
            <div>
              <div><label>{item.address}</label></div>
              <div><label>{item.city}</label></div>
              <div><label>{item.state}</label></div>
              <div><label>{item.pincode}</label></div>
              <div><label>{item.phoneNumber}</label></div>
              <div><button className="btn-primary" onClick={this.ModifyClick} style={{"marginRight":20}}>Modify</button>
              <button className="btn-primary" onClick={this.Delete}>Delete</button> </div>
            </div>  
        
            );
    }
  }
}

export default withRouter(addressitem);
