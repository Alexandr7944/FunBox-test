import React, { useState } from 'react';
import {Product} from '../data/data'

const ProductItem = ({options}: {options: Product}) => {

  const [selected, setSelected] = useState(false);
  
  const select = (event: React.MouseEvent<HTMLDivElement>) => {
    options.status && !selected
      && event.currentTarget.addEventListener('mouseleave', () => {
        setSelected(prev => !prev);
      }, {once: true});

    options.status && selected && setSelected(prev => !prev);
  }

  let productContainerClass, productWeightClass;

  if (!options.status) {
    productContainerClass = 'product-container-block';
    productWeightClass = 'product-weight-block';
  } else if (selected) {
    productContainerClass = 'product-container-selected';
    productWeightClass = 'product-weight-selected';
  } else {
    productContainerClass = 'product-container';
    productWeightClass = 'product-weight';
  }
  
  return (
    <div className='product-item'>
      <div
        className={productContainerClass}
        onClick={select}
      >
        <div className={
          !options.status ? 'wrapper-block' : 'wrapper'
        }>
          <div className="item-text">
            <h4 className="product-producer">Сказочное заморское явство</h4>
          <h2 className="product-title">Нямушка</h2>
          <h4 className="product-type">{options.type}</h4>
          <p className="product-action">{options.portions}</p>
          <p className="product-action">{options.action}</p>
          </div>
          <div className={productWeightClass}>
            <span>{options.mass}</span>
            <span>кг</span>
          </div>
        </div>
      </div>
      { !options.status 
        && <div className="product-status product-status-yellow">{options.disabled}</div> }
      { selected && <div className="product-status">{options.selected}</div> }
      {
        options.status && !selected
          && <div className="product-status">Чего сидишь? Порадуй котэ,
            <span onClick={select}> купи.</span>
          </div>
      }
    </div>
  );
}


export default ProductItem;
