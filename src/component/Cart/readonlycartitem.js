import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class readonlycartitem extends Component {



  render() {
    var item = this.props.item;

    return (
      <div className="row">
          <div className="col-sm-2"><img alt=""  width="100" height="100" src={"/images/" + item.product.number + ".jpg"} /></div>
          <div className="col-sm-2"><label>{item.product.displayName}</label></div>
          <div className="col-sm-2"><label>{item.product.category}</label></div>
          <div className="col-sm-2"> <label>{item.product.count}</label></div>
          <div className="col-sm-2"><label>{item.product.price}</label></div>
     </div>        


    );
  }
}

export default withRouter(readonlycartitem);
