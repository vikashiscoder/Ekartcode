import React, { Component } from 'react';
import ProductAPI from '../../API/ProductAPI';
import Productlist from './productlist';


class recommended extends Component {
    constructor(props){
        super(props);
        this.state={}
      }

      componentWillReceiveProps(){
        this.setState({isLoggedIn: this.props.isLoggedIn})
      }


      render() {
        var r = ProductAPI.recommended();
        
        if(this.props.isLoggedIn){
            if(r){
                if(r.length > 0){
                    return (
                    <div>
                        <Productlist products={r} Heading="Recommended products" Category={true}/>
                    </div>
                    );
                }
             }
        }

        return (<div> </div>)
      }
}

export default recommended;
