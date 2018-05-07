import React, { Component } from 'react';
import ProductAPI from '../../API/ProductAPI';
import Productlist from './productlist';
import Shortid from 'shortid';

class deals extends Component {
    constructor(props){
        super(props);
      }

  render() {
    var deals = ProductAPI.deals();

    return (
    <div key={Shortid.generate()}>
        <Productlist key={Shortid.generate()} products={deals} IsDeal={true} Heading="Todays deal products" Category={false}/>
    </div>  
    );
  }
}

export default deals;
