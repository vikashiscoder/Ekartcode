import React, { Component } from 'react';
import ProductAPI from '../API/ProductAPI';
import Productlist from './Product/productlist';

class search extends Component {
    constructor(props){
        super(props);
      }

  render() {
    let searchtext = this.props.match.params.searched;
    var deals = ProductAPI.search(searchtext);
    let table = (<div></div>);

    if(deals.length > 0){
      table = <Productlist products={deals} Heading={"Result for '" + searchtext + "'"} Category={false}/>
    }


    return (
    <div>
      <div>{(deals.length == undefined ? "0" : deals.length)  + " Results found"}</div>
        {table}
    </div>  
    );
  }
}

export default search;
