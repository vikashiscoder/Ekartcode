import React, { Component } from 'react';
import {withRouter,Link} from 'react-router-dom'

class myordertab extends Component {
    constructor(props){
        super(props);
        this.TabClick = this.TabClick.bind(this);
        this.state={status:this.props.match.params.status,
                    open:"active",closed:"",cancelled:"",returned:""};
      }

      TabClick(s){
          //let name = e.target.name;
        this.setState(Object.assign({},this.state,{open:"",closed:"",cancelled:"",returned:""},{s:"active"}));
      }


  render() {

    return (<div>
        <ul className="nav nav-pills">
            <li role="presentation" className={this.state.open + " text-primary"} onClick={()=>this.TabClick("open")}><Link to="/Myorder/Open"  >Open</Link></li>
            <li role="presentation" className={this.state.closed} onClick={()=>this.TabClick("closed")} ><Link to="/Myorder/Closed"  >Closed</Link></li>
            <li role="presentation" className={this.state.cancelled} onClick={()=>this.TabClick("cancelled")}><Link to="/Myorder/Cancel"  >Cancelled</Link></li>
            <li role="presentation" className={this.state.returned} onClick={()=>this.TabClick("returned")}><Link to="/Myorder/Return"  >Returned</Link></li>
        </ul>
            
        </div>)
    
    }
}

export default withRouter(myordertab);
