import {clearCartAction} from '../../Actions/clearCartAction'
import {connect} from 'react-redux';
import Checkout from '../Cart/checkout';


const mapDispatchToProps = (dispatch,p) => {
  return {
    clearCart:(p)=>{

      return dispatch(clearCartAction(p))
    }
  }
}

export default connect(null,mapDispatchToProps)(Checkout);
