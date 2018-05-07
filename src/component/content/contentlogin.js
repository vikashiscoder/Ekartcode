import {login as loginAction} from '../../Actions/login'
import {connect} from 'react-redux';
import login from '.././login';

const mapStateToProps = state =>{

  return {isLoggedIn:state.isLoggedIn};
}

const mapDispatchToProps = (dispatch,p) => {
  return {
    loginClick:(p)=>{

      return dispatch(loginAction(p))
    }
  }
}

export default connect(null,mapDispatchToProps)(login);
