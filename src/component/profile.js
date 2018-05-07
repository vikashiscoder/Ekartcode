import React, { Component } from 'react';
import AuthAPI from '../API/AuthAPI'
import {withRouter} from 'react-router-dom'

class profile extends Component {
    constructor(props){
        super(props);
        this.SaveClick = this.SaveClick.bind(this);
        this.state={error:"Hide",errortext:""};
      }

  SaveClick(e)
  {
    e.preventDefault();
  
      //Save
      let result = AuthAPI.Save({email:this.refs.email.value,
                     phone:this.refs.phone.value});

      if(result.status === "error"){
        this.setState({error:"Show",errortext:result.errormessage})
      }
      else{
        this.props.history.push('/');
      }
  
  }

  render() {

    let item = AuthAPI.get();

    return (
      <center>
    
    <div className="well well-lg" style={{"width":"500px"}}>
      <label>Profile</label>

        <br/><br/>
        <form onSubmit={this.SaveClick}>
        
        <div className="row">
             <div className="col-sm-5">
                <label>User Name</label>
              </div>
              <div className="col-sm-7">              
                <label>{item.username}</label>
              </div>
          
          </div>

          <div className="row rowgap" >
             <div className="col-sm-5" >
                <label>Email Address</label>
              </div>
              <div className="col-sm-7">              
                <input type="email" ref="email" className="form-control col-sm-*" required defaultValue={item.email} />
              </div>
          </div>
                    
          <div className="row rowgap">
             <div className="col-sm-5">
                <label>Phone Number</label>
              </div>
              <div className="col-sm-7">              
                <input type="text" ref="phone" className="form-control col-sm-*" required minLength="10" maxLength="10" pattern="[0-9]*" defaultValue={item.phone} />
              </div>
          </div>

         <div className="row rowgap">
          <div className="col-sm-12">              
                <p  className={this.state.error + " text-left text-danger"}>{this.state.errortext}</p>
          </div>
          </div>              

              <input type="submit" className="btn btn-primary form-control" value="Save" />
          </form>
      </div>
      <br/>
      
  </center>
    );
  }
}

export default withRouter(profile);
