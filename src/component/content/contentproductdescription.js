import {connect} from 'react-redux';
import productdescription from '.././Product/productdescription';
import {addToCartAction} from '../../Actions/addToCartAction'
import {updateCartQuantityAction} from '../../Actions/updateCartQuantityAction'

const mapStateToProps = state =>{
  return {cart:state.cart.cart};
}

const mapDispatchToProps = (dispatch,p) => {
  return {
    addToCart:(p)=>{

      return dispatch(addToCartAction(p))
    },

    updateCartOrderQuantity:(p)=>{

      return dispatch(updateCartQuantityAction(p))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(productdescription);
