import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import CardAPI from '../../API/CardAPI';

class carditem extends Component {
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
    CardAPI.delete(this.props.item);
    this.props.Refresh();
  }

  ModifySave(e){
    e.preventDefault();
    let changedCard = { cardNumber: this.refs.cardNumber.value,  nameOnCard: this.refs.nameOnCard.value,
                     expiryMonth: this.refs.expiryMonth.value,expiryYear:this.refs.expiryYear.value}
    CardAPI.modify(changedCard);
    
    this.setState({edit:false, item:changedCard})
  }

  Cancel(){
    this.setState({edit:false, item:this.state.item})
  }


  render() {
    var item = this.state.item;

    

    if(this.state.edit){
      return (

        

        <form onSubmit={this.ModifySave}>
            <div className="controlverticalgap"><input ref="cardNumber" type="text" max="9999999999999" required defaultValue={item.cardNumber}  ></input></div>
            <div className="controlverticalgap"><input type="text" pattern="[a-zA-Z ]*" maxLength="20" required ref="nameOnCard" defaultValue={item.nameOnCard}></input></div>
            <div className="controlverticalgap"><input type="number" max="12" min="01" required ref="expiryMonth" defaultValue={item.expiryMonth}></input></div>
            <div className="controlverticalgap"><input type="number" max="9999" min="2018" required ref="expiryYear" defaultValue={item.expiryYear}></input></div>
            <div><input type="submit" className="btn-success" style={{"margin-right":20}} value="Save" ></input>
                  <button className="btn-primary" onClick={this.Cancel}>Cancel</button></div>
      </form>
      )

    }
    else{
        return (

        <div>
          <div><label>{item.cardNumber}</label></div>
          <div><label>{item.nameOnCard}</label></div>
          <div><label>{item.expiryMonth}</label></div>
          <div><label>{item.expiryYear}</label></div>
          <div><button className="btn-primary" onClick={this.ModifyClick} style={{"margin-right":20}}>Modify</button>
          <button className="btn-primary" onClick={this.Delete}>Delete</button> </div>
        </div>          
      );
    }
  }
}

export default withRouter(carditem);
