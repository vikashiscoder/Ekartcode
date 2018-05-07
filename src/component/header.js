import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom'

import Shortid from 'shortid';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={};
        this.Search=this.Search.bind(this);
        this.LogoutClick = this.LogoutClick.bind(this);
      }

      componentWillReceiveProps(){
        this.setState({isLoggedIn: this.props.isLoggedIn, cart:this.props.cart})
      }

      LogoutClick(e)
      {
          e.preventDefault();
          this.props.logoutClick(false);
          this.props.history.push('/');
      }

      Search(e){
          e.preventDefault();
          this.props.history.push('/search/' + e.target.search.value)
      }

  render() {

      let colsLoggedin=[];
      let colsLoggedout=[];

        colsLoggedin.push(<li key={Shortid.generate()} className={""}><Link to="/profile"><i className="glyphicon glyphicon-user"></i>Profile</Link></li>);
        colsLoggedin.push(<li key={Shortid.generate()}><Link to="/Myorder/Open" ><i className="glyphicon glyphicon-book"></i>My Orders</Link></li>);
        colsLoggedin.push(<li key={Shortid.generate()}><Link to="/wishlist" ><i className="glyphicon glyphicon-heart"></i>Wishlist</Link></li>);
        colsLoggedin.push(<li key={Shortid.generate()}><Link to="/notification" ><i className="glyphicon glyphicon-tags"></i>Notification</Link></li>);
        colsLoggedin.push(<li key={Shortid.generate()}><Link to="/logout" onClick={this.LogoutClick} ><i className="glyphicon glyphicon-log-out"></i>Logout</Link></li>);

        colsLoggedout.push(<li key="header-login-link"><Link to="/login"><i className={"glyphicon glyphicon-log-in"}></i>Login</Link></li>);
        colsLoggedout.push(<li key="header-signup-link"><Link to="/signup"><i className="glyphicon glyphicon-user"></i>Signup</Link></li>);

      let dynamicMenu = this.props.isLoggedIn ?
                                                colsLoggedin
                                                :
                                                colsLoggedout;
    return (
    <div>


<nav className={"navbar navbar-inverse "}>
  <div className={"container-fluid"}>

    <div className={"navbar-header"}>
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        
        <span className={"icon-bar"}></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="">EKART</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
       
        <li className={"active"}><Link to="/home"><i className="glyphicon glyphicon-home"></i>Home</Link></li>
            {dynamicMenu}
        <li><Link to="cart"><i className="glyphicon glyphicon-shopping-cart"></i>Cart<span className="badge">{this.props.cart.length}</span></Link></li>
      </ul>

      <div className="col-sm-3 col-md-3 pull-right">
        <form className="navbar-form" role="search" onSubmit={this.Search}>
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Search" name="search" refs="search" id="srch-term"/>
            <div className="input-group-btn">
                <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
            </div>
        </div>
        </form>
        </div>

    </div>

  </div>
</nav>
      
      
      

      
      
            
      

    </div>  
    );
  }
}

export default withRouter(Header);
