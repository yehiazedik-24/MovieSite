import React, { Component } from 'react';





export default class Item extends Component {
    render() {
       let {images,text} = this.props;
      return <>
      
          <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
      <img src={images} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">
         {text}
        </p>
      </div>
    </div>
              </div>
          
          
              </>
      ;
    }
  }