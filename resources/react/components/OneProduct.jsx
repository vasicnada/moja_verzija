import React, { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { BsCartDash } from "react-icons/bs";

function OneProduct({ product, addProduct, removeProduct, inCart }) {
  const [selectPage, setSelectPage] = useState("");
  const [selectSize, setSelectSize] = useState("");
  const [selectNotes, setSelectNotes] = useState("");
  const [selectStickers, setSelectStickers] = useState("");

  const handleSelectPageChange = (e) => {
    setSelectPage(e.target.value);
    product.page_number = e.target.value;
  };

  const handleSelectSizeChange = (e) => {
    setSelectSize(e.target.value);
    product.size = e.target.value;
  };

  const handleSelectNotesChange = (e) => {
    setSelectNotes(e.target.value);
    product.notes = e.target.value;
  };

  const handleSelectStickersChange = (e) => {
    setSelectStickers(e.target.value);
    product.stickers = e.target.value;
  };

  return (
    <div
      className={inCart === 1 ? "card" : "card-cart"}
      style={{
        margin: 10,
        borderStyle: "double",
        backgroundColor: "pink",
        width: "30%",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
      }}
    >
      <img src={product.image} alt="image" className="img-product" />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.body}</p>
        {inCart === 1 ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontStyle: "italic", fontWeight: "bolder" }}>
              U nastavku mozete odabrati zeljene opcije za Vas buduci planer!
            </p>
            <div style={{ flexDirection: "row" }}>
              <p style={{ marginBottom: "1px", marginTop: "2px" }}>
                Broj stranica:
              </p>
              <select
                style={{ width: "30%" }}
                value={selectPage}
                onChange={handleSelectPageChange}
              >
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="200">200</option>
              </select>
            </div>
            <div style={{ flexDirection: "row" }}>
              <p style={{ marginBottom: "1px", marginTop: "2px" }}>
                Velicina planera:
              </p>
              <select
                style={{ width: "30%" }}
                value={selectSize}
                onChange={handleSelectSizeChange}
              >
                <option value="A5(210x148)">A5(210x148)</option>
                <option value="A6(105x148)">A6(105x148)</option>
                <option value="A4(297x210)">A4(297x210)</option>
              </select>
            </div>
            <div style={{ flexDirection: "row" }}>
              <p style={{ marginBottom: "1px", marginTop: "2px" }}>
                Deo za beleske na kraju dnevnika:
              </p>
              <select
                style={{ width: "30%" }}
                value={selectNotes}
                onChange={handleSelectNotesChange}
              >
                <option value="25 stranica">25 stranica</option>
                <option value="50 stranica">50 stranica</option>
                <option value="Ne zelim deo sa beleskama.">Ne zelim deo sa beleskama.</option>
              </select>
            </div>
            <div style={{ flexDirection: "row" }}>
              <p style={{ marginBottom: "1px", marginTop: "2px" }}>Stikeri:</p>
              <div className="custom-dropdown">
               
                  <img
                  src="https://images.squarespace-cdn.com/content/v1/5d41414f4f8c15000124126e/1674553878212-4BXA9KSGR9017YZWRTYZ/Pastel+hearts+list-01.png?format=300w"
                  style={{ maxWidth: '150%', maxHeight: '150px', marginRight:'5px', marginBottom:'10px'}}
                />
                  <img
                  src="https://images.squarespace-cdn.com/content/v1/5d41414f4f8c15000124126e/1645653559423-1DTWRUXRX9MLSXH8RPN1/dani+u+nedelji+list-01.png?format=300w"
                  style={{ maxWidth: '150%', maxHeight: '150px', marginBottom:'10px' }}
                />
                <select
                  value={selectStickers}
                  onChange={handleSelectStickersChange}
                >
                  <option value="Stikeri 1(pastelna srca)">Stikeri 1(pastelna srca)</option>
                  <option value="Stikeri 2(dani u nedelji)">Stikeri 2(dani u nedelji)</option>
                </select>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ marginTop: "20px" }}>
            <p className="card-page-number">
              Broj stranica: {product.page_number}
            </p>
            <p className="card-page-number">Velicina: {product.size}</p>
            <p className="card-page-number">
              Deo za beleske: {product.notes} 
            </p>
            <p className="card-page-number">
              Stikeri: {product.stickers} 
            </p>
          </div>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {inCart === 1 ? (
          <>
            <button
              className="btn"
              onClick={() => addProduct(product.name, product.id)}
            >
              <BsCartPlus />
            </button>
            <button
              className="btn"
              onClick={() => removeProduct(product.name, product.id)}
            >
              <BsCartDash />
            </button>
          </>
        ) : (
          <div>
            <h4>Kolicina: {product.amount}</h4>
            <p className="card-price">{product.price}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default OneProduct;
