import React, { useState} from 'react';
import OneProduct from './OneProduct';
import ReactPaginate from 'react-paginate';
import usePagination from './usePagination';
import axios from "axios";

const Products = ({ products, addProduct, removeProduct, token }) => {
  const itemsPerPage = 6;
  const { handlePageChange, getItemsForCurrentPage, getPageCount } = usePagination(itemsPerPage);

  const [filteri, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredProducts = products.filter((prod) =>
    prod.name.toLowerCase().includes(filteri.toLowerCase())
  );

  const paginatedProducts = getItemsForCurrentPage(filteredProducts);

  const rows = [];
  for (let i = 0; i < paginatedProducts.length; i += 3) {
    rows.push(paginatedProducts.slice(i, i + 3));
  }
  const handleClick = () => {
    let data = JSON.stringify({
      "name": "Standardni planer",
      "page_number": "200",
      "category_id": 1,
      "body": "Dvanaest meseci, dvanaest boja i dvanaest motivacionih ca za bolje planiranje. Sa kalendarom za dve godine, mesecnim i nedeljnim planerima za 12 meseci i stranama za beleske, bicete sigurni da nijedna obaveza nece biti zaboravljena.",
      "user_id": 1,
      "image": "https://moj-rokovnik.myshopify.com/cdn/shop/products/planer-putovanje2-n_360x.jpg?v=1652433318https://moj-rokovnik.myshopify.com/cdn/shop/products/S34ne_1024x1024@2x.jpg?v=1603194973",
      "amount": 0,
      "price": "2500din",
      "size": "A4",
      "notes": "Zelim beleske",
      "stickers": "Zelim stikere"
    });
    let config = {
      method: 'post', // Promijenite 'put' u 'post'
      maxBodyLength: Infinity,
      url: 'api/planers', // Uklonite ID iz URL-a
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token, // Dodajte token za autorizaciju
      },
      data: data, // Pošaljite requestData kao tijelo zahtjeva
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
      {token && <button style={{width: "15%", justifyContent:'center', alignItems:'center', marginTop:'15px', marginLeft: 'auto', marginRight: 'auto'}} onClick={handleClick}>Dodaj proizvod</button>}
        {rows.map((row, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
            {row.map((prod) => (
              <OneProduct
                product={prod}
                key={prod.id}
                addProduct={addProduct}
                removeProduct={removeProduct}
                inCart={1}
              />
            ))}
          </div>
        ))}
      </>
    );
  };

  return (
    <div className='all-products'>
      <div className='filter'>
        <label htmlFor='filter'>Pretraga: </label>
        <input className='input'
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
          pageCount={filteredProducts ? getPageCount(filteredProducts.length) : 0}
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