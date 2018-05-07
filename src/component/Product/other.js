import React, { Component } from 'react';
import ProductAPI from '../../API/ProductAPI';
import Productlist from './productlist';


class other extends Component {
    constructor(props){
        super(props);
      }

      render() {
        var o = ProductAPI.other();
        
        return (
        <div>
            <Productlist products={o} Heading="Other products" Category={true}/>
        </div>  
        );
      }
}

export default other;
