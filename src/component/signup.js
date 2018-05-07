import React, { Component } from 'react';
import AuthAPI from '../API/AuthAPI'
class signup extends Component {
    constructor(props){
        super(props);
        this.LoginClick = this.LoginClick.bind(this);
        this.state={error:"Hide",errortext:""};
      }

  LoginClick(e)
  {
    e.preventDefault();
    if(this.refs.password.value !== this.refs.confirmpassword.value)
    {
      this.setState({error:"Show",errortext:"Password & Confirm Password do not match"})
    }
    else{

      //Save
      let result = AuthAPI.Signup({username:this.refs.username.value,email:this.refs.email.value,
                     phone:this.refs.phone.value,password:this.refs.password.value});

      if(result.status === "error"){
        this.setState({error:"Show",errortext:result.errormessage})
      }
      else{
        this.props.history.push('/login');
      }
    }
  }

  render() {
    return (
      <center>
    
    <div className="well well-lg" style={{"width":"500px"}}>
      <label>Register</label>

        <br/><br/>
        <form onSubmit={this.LoginClick}>
        
        <div className="row">
             <div className="col-sm-5">
                <label>User Name</label>
              </div>
              <div className="col-sm-7">              
                <input type="text" ref="username" className="form-control col-sm-*" required pattern="[a-zA-Z]*" maxLength="10"/>
              </div>
          
          </div>

          <div className="row">
            <div className="col-sm-5"></div>
            <div className="col-sm-7">              
                <p style={{"fontSize":9}} className="text-left text-danger">*only characters allowed</p>
              </div>
          </div>

          <div className="row rowgap" >
             <div className="col-sm-5" >
                <label>Email Address</label>
              </div>
              <div className="col-sm-7">              
                <input type="email" ref="email" className="form-control col-sm-*" required/>
              </div>
          </div>
                    
          <div className="row rowgap">
             <div className="col-sm-5">
                <label>Phone Number</label>
              </div>
              <div className="col-sm-7">              
                <input type="text" ref="phone" className="form-control col-sm-*" required minLength="10" maxLength="10" pattern="[0-9]*" />
              </div>
          </div>

          <div className="row rowgap">
             <div className="col-sm-5">
                <label>Password</label>
              </div>
              <div className="col-sm-7">              
                <input type="password" minLength="8" maxLength="12" ref="password" className="form-control col-sm-*" required pattern="(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[#?@$%^&*-]).{8,}" />
              </div>
          </div>
          <div className="row rowgap">
            <div className="col-sm-5"></div>
            <div className="col-sm-7">              
                <p style={{"fontSize":9}} className="text-left text-danger">*Atleast 1 capital, 1 lower case, 1 numeric and one spl character</p>
              </div>
          </div>

          <div className="row rowgap">
             <div className="col-sm-5">
                <label>Confirm Password</label>
              </div>
              <div className="col-sm-7">              
                <input type="password" ref="confirmpassword" className="form-control col-sm-*" required />
              </div>
          </div>

          <div className="row rowgap">
          <div className="col-sm-12">              
                <p  className={this.state.error + " text-left text-danger"}>{this.state.errortext}</p>
          </div>
          </div>              

              <input type="submit" className="btn btn-primary form-control" value="Create" />
          </form>
      </div>
      <br/>
      
  </center>
    );
  }
}

export default signup;
