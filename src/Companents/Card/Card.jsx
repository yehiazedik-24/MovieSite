import React, { Component } from 'react';
import imageone from '../images/gettyimages-946683906-2048x2048.webp' ;
import imagetoo from '../images/002.jpg' ;
import imagetree from '../images/008 (5).jpg' ;
import imagefor from '../images/Bayleyصضشي.jpg' ;
import Item from '../Item/Item';

export default class Card extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-danger text-center'>Card</h1>
        <p className='text-center'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa rem quaerat eos repudiandae vero laudantium tempore esse labore molestiae, quisquam iusto magnam explicabo blanditiis, deserunt optio adipisci tempora! Quasi, tempora.
        </p>
        <div className="row" id='test'>
         
     <Item images={imageone} text={"beacky C"} />
     <Item images={imagetoo} text={"Charlote"} />
     <Item images={imagetree} text={"sahsa"}/>
     <Item images={imagefor} text={"bayley C"} />
        
 
</div>

      </div>
    );
  }
}
