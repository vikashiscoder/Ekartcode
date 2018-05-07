import React, { Component } from 'react';
import AuthAPI from '../API/AuthAPI';

class login extends Component {
    constructor(props){
        super(props);
        this.LoginClick = this.LoginClick.bind(this);
        this.state={auth:"Hide"};
      }
    
  LoginClick(e)
  {
      e.preventDefault();

      if(AuthAPI.Authenticate({username:this.refs.username.value,password:this.refs.password.value}))
      {
        this.props.loginClick({user:{name:this.refs.username.value,id:this.refs.username.value}});
        this.props.history.push('/home')
      }
      else
      {
        this.setState({auth:"Show"});
      }
     
  }

  render() {
    return (
    <center>
        <h4>Sign In</h4>
        <div className="well well-lg" style={{"width":"300px","height":"300px"}}>
            <i className="glyphicon glyphicon-user glyphicon-ring" style={{"fontSize":"60px","opacity":".25"}}></i>
            <br/><br/><br/>
            <form onSubmit={this.LoginClick}>
                <input autoFocus type="text" placeholder="User Name" className="form-control" name="username" ref="username" required/>

                <input type="password"  placeholder="Password" className="form-control" name="password" ref="password" required />

                <input type="submit" className="btn btn-primary form-control" value="Login" />
                <div className="text-danger" className={this.state.auth + " text-danger"}>Invalid credentials!!</div>
            </form>
        </div>
        <br/>
        
    </center>  
    );
  }
}

export default login;
