import {deleteFromCartAction} from '../../Actions/deleteFromCartAction'
import {updateCartQuantityAction} from '../../Actions/updateCartQuantityAction'
import {connect} from 'react-redux';
import cartitem from '.././Cart/cartitem';


const mapDispatchToProps = (dispatch,p) => {
  return {
    deleteCartItem:(p)=>{

      return dispatch(deleteFromCartAction(p))
    },

    updateCartOrderQuantity:(p)=>{

        return dispatch(updateCartQuantityAction(p))
      }
  }
}

export default connect(null,mapDispatchToProps)(cartitem);
