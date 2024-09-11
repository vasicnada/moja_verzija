import React from 'react';
import { BsCartPlus, BsCartDash } from 'react-icons/bs';

function OneProduct({ product, addProduct, removeProduct, inCart }) {
  console.log("Product data:", product);

  // Access category_name from product.category
  const categoryName = product.category ? product.category.name : 'Category not available';

  return (
    <div className={inCart === 1 ? 'card' : 'card-cart'}>
      <div className="card-img-container">
        <img src={product.cover_image} alt="Product Image" className="card-img-top" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-category">{categoryName}</p>
        <p className="card-price">{product.price} RSD</p>
      </div>
      <div className="card-actions">
        {inCart === 1 ? (
          <>
            <button className="btn" onClick={() => addProduct(product.title, product.id)}>
              <BsCartPlus />
            </button>
            <button className="btn" onClick={() => removeProduct(product.title, product.id)}>
              <BsCartDash />
            </button>
          </>
        ) : (
          <div className="product-quantity">
            <h4>Amount: {product.amount}</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default OneProduct;
