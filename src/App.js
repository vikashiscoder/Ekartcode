import React, { Component } from 'react';
import {withRouter,Switch,Route,Redirect} from 'react-router-dom';
import contentcart from './component/content/contentcart';
import home from './component/home';
import contentlogin from './component/content/contentlogin';
import notifications from './component/notifications';
import contentproductdescription from './component/content/contentproductdescription';
import profile from './component/profile';
import search from './component/search';
import signup from './component/signup';
import wishlist from './component/Cart/wishlist';
import Contentcheckout from './component/content/contentcheckout'
import Addaddress from './component/Address/addaddress';
import Addcard from './component/Card/addcard';
import Myorder from './component/Order/myorder'
import Shortid from 'shortid';

class App extends Component {

  constructor(props){
    super(props);
    this.state={}
    this.GetRenderLoggedIn = this.GetRenderLoggedIn.bind(this);
  }

  componentWillReceiveProps(){
    this.setState({isLoggedIn: this.props.isLoggedIn})
  }

  GetRenderLoggedIn(Comp){
    return (this.props.isLoggedIn ? (<Comp/>) : (<Redirect to="/login" />));
  }


  render() {
    return (
      <Switch key={Shortid.generate()}>
        <Route key={Shortid.generate()} exact path='/' component={home}/>
        <Route key={Shortid.generate()} exact path='/home' component={home}/>
        <Route key={Shortid.generate()} exact path='/login' component={contentlogin}/>
        <Route key={Shortid.generate()} exact path='/notification' render={()=>this.GetRenderLoggedIn(notifications)}/>
        <Route key={Shortid.generate()} exact path='/productdescription/:number' component={contentproductdescription}/>
        <Route key={Shortid.generate()} exact path='/profile' render={()=>this.GetRenderLoggedIn(profile)}/>
        <Route key={Shortid.generate()} exact path='/search/:searched' component={search}/>
        <Route key={Shortid.generate()} exact path='/signup' component={signup}/>
        <Route key={Shortid.generate()} exact path='/wishlist' render={()=>this.GetRenderLoggedIn(wishlist)}/>
        <Route key={Shortid.generate()} exact path='/cart' component={contentcart}/>
        <Route  key={Shortid.generate()} exact path='/checkout' render={()=>this.GetRenderLoggedIn(Contentcheckout)} />
        <Route  key={Shortid.generate()} exact path='/Addaddress' render={()=>this.GetRenderLoggedIn(Addaddress)} />
        <Route  key={Shortid.generate()} exact path='/Addcard' render={()=>this.GetRenderLoggedIn(Addcard)} />
        <Route  key={Shortid.generate()} exact path='/Myorder/:status' render={	()=>this.GetRenderLoggedIn(Myorder) }/>
      </Switch>
    );
  }
  

}


export default withRouter(App);
