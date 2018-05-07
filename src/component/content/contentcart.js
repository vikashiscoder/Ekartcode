import {connect} from 'react-redux';
import cart from '.././Cart/cart';

const mapStateToProps = state =>{
  return {cart:state.cart.cart};
}

export default connect(mapStateToProps,null)(cart);
