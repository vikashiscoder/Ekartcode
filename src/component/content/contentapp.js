import {withRouter} from 'react-router-dom'
//import ProductsAPI from './API/ProductsAPI'
//import store from './store'
//import {deleteFromCart} from './Actions/deleteFromCart'
import {connect} from 'react-redux';
import App from '../../App';

const mapStateToProps = state =>{
    return {isLoggedIn:state.loginlogout.isLoggedIn};
}

export default withRouter(connect(mapStateToProps,null)(App));
