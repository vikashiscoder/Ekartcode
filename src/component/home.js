import React, { Component } from 'react';
import Deals from './Product/deals';
import Contentrecommended from './content/contentrecommended';

import Other from './Product/other'
import Shortid from 'shortid';


class home extends Component {


  render() {
    return (
    <div key={Shortid.generate()}>
        <Deals key={Shortid.generate()} />
        <Contentrecommended key={Shortid.generate()} />
        <Other key={Shortid.generate()}/>
    </div>  
    );
  }
}

export default home;
