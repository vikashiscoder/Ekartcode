import {connect} from 'react-redux';
import Recommended from '../Product/recommended';

const mapStateToProps = state =>{
  return {isLoggedIn:state.loginlogout.isLoggedIn};
}

export default connect(mapStateToProps,null)(Recommended);
