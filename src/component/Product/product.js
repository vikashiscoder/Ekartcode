import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class product extends Component {
    constructor(props){
        super(props);
        this.ShowDescription = this.ShowDescription.bind(this);
      }

  ShowDescription(){
    this.props.history.push('/productdescription/' + this.props.item.number);
  }

  render() {
    var item = this.props.item;
  

    return (
    <div className="well well-sm rowgap" onClick={this.ShowDescription}>
        <div className="row">
          <img alt="" style={{"padding":"50px"}} className="col-sm-12" width="100%" height="250" src={"/images/" + item.number + ".jpg"} />
        </div>
        <div className="row">
          <hr className="col=sm-12"/>
        </div>
        <div className="row">
          <label className="col-sm-12 text-center">{item.displayName}</label>
        </div>
    </div>  
    );
  }
}

export default withRouter(product);
