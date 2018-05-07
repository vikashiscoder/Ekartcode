import {logout} from '../../Actions/logout'
import {connect} from 'react-redux';
import header from '.././header';

const mapStateToProps = state =>{
  return {isLoggedIn:state.loginlogout.isLoggedIn, cart:state.cart.cart};
}

const mapDispatchToProps = (dispatch,p) => {
  return {
    logoutClick:(p)=>{
      return dispatch(logout(p))
    }
  }
} 

export default connect(mapStateToProps,mapDispatchToProps)(header);
