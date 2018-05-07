import React, { Component } from 'react';
import Product from './product';
import Shortid from 'shortid';

class productlist extends Component {
    constructor(props){
        super(props);
      }

  render() {

    let rows = [];
    let cols = [];
    let p = this.props.products;

    //Heading
    rows.push(<div key={Shortid.generate()} className="text-primary text-large"><h3>{this.props.Heading}</h3></div>)

    //Category
    if(this.props.Category){
        let unique = [...new Set(p.map(item => item.category))];
        unique.forEach(cat=>{
            rows.push( this.FormTable(p.filter(i=> i.category==cat),cat ));
        })
    }
    else //No categorization
    {
        rows.push(this.FormTable(p));
    }
      return rows;
  }

  FormTable(p,cat){
    let rows = [];
    let cols = [];

    //Display Category
    if(cat)
    {
        rows.push(<div  key={Shortid.generate()}  className="text-primary text-large"><h4>{cat}</h4></div>)
    }

    for(var index=0;index<p.length;index++)
    {
             cols.push(<div  key={Shortid.generate()}  className="col-sm-3 col-xs-12" key={p[index].number}>
                      <Product  key={Shortid.generate()}  item={p[index]}  />
                      {this.props.IsDeal ? <div  key={Shortid.generate()}  className="deal">DEAL</div> : <div  key={Shortid.generate()} ></div>}
                    </div>);
         if(index==(p.length - 1)  || ((index + 1) % 3 == 0  && index !=0))
         {
             rows.push(
                     <div  key={Shortid.generate()}  className="row">
                         <div  key={Shortid.generate()}  className="col-sm-1 col-xs-0"></div>                    
                         {cols}
                         <div  key={Shortid.generate()}  className="col-sm-1 col-xs-0"></div>
                         
                     </div>  
                       
             );
             cols=[];
         }
    }
    return rows;
  }


}

export default productlist;
