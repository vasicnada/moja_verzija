import React, { useState } from 'react';
import OneProduct from './OneProduct';
import ReactPaginate from 'react-paginate';
import usePagination from './usePagination';
import axios from 'axios';

const Products = ({ products, addProduct, removeProduct, token }) => {
  const itemsPerPage = 6;
  const { handlePageChange, getItemsForCurrentPage, getPageCount } = usePagination(itemsPerPage);

  const [filteri, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredProducts = products.filter((prod) =>
    prod.title.toLowerCase().includes(filteri.toLowerCase())
  );

  const paginatedProducts = getItemsForCurrentPage(filteredProducts);

  const handleClick = () => {
    let data = JSON.stringify({
      title: 'Knjiga za motivaciju',
      page_count: '300',
      category_id: 2,
      description: 'Inspirativna knjiga za svakodnevno motivisanje i lični razvoj.',
      user_id: 1,
      cover_image: 'https://example.com/path-to-cover-image.jpg',
      price: '1500din',
      size: 'A5',
      author: 'Jane Doe',
      publisher: 'XYZ Izdavaštvo',
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'api/books',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      data: data,
    };
    axios.request(config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderProducts = () => {
    return (
      <>
        {token && (
          <button
            style={{ width: '15%', justifyContent: 'center', alignItems: 'center', marginTop: '15px', marginLeft: 'auto', marginRight: 'auto' }}
            onClick={handleClick}
          >
            Dodaj knjigu
          </button>
        )}
        <div style={{ display: 'flex', overflowX: 'auto' }}>
          {paginatedProducts.map((prod) => (
            <OneProduct
              product={prod}
              key={prod.id}
              addProduct={addProduct}
              removeProduct={removeProduct}
              inCart={1}
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <div className='all-products'>
      <div className='filter'>
        <label htmlFor='filter'>Search: </label>
        <input
          className='input'
          type='text'
          id='filter'
          value={filteri}
          onChange={handleFilterChange}
        />
      </div>

      {renderProducts()}

      <div>
        <ReactPaginate
          className='pagination'
          pageCount={getPageCount(filteredProducts.length)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
};

export default Products;
