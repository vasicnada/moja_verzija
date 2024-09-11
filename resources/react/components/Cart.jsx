import { useState } from 'react';
import React from 'react';
import OneProduct from './OneProduct';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Cart = ({ products}) => {
  const [isLogin, setIsLogin] = useState(true);

  const generateInvoicePDF = () => {
    setIsLogin(true)
    const pdf = new jsPDF();
    pdf.text('Your order is recieved', 20, 20);

    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');

    const columns = ['Knjiga', 'Autor', 'Cena',];
    const data = products.map((prod) => [prod.title, prod.author, prod.price]);

    const columnWidths = [50, 50, 50];
    const startY = 30;

  pdf.autoTable({
      startY,
      head: [columns],
      headStyles: {
        fillColor: [238, 154, 123],
        textColor: [255, 255, 255],
      },
      body: data,
      columnStyles: { 0: { cellWidth: columnWidths[0] }, 1: { cellWidth: columnWidths[1], halign: 'left' } },
    });
    const totalPrice = products.reduce((sum, prod) => sum + Number(prod.price), 0);

    // Set the same font as the rest of the document and align it to the right
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(65, 63, 63);
    const pageWidth = pdf.internal.pageSize.getWidth();
    const text = `Ukupna cena: ${totalPrice} RSD`;
    const textWidth = pdf.getTextDimensions(text).w;

    // Add the total sum below the table, aligned to the right
    pdf.text(text, 15, pdf.autoTable.previous.finalY + 10);

    pdf.save('racun_narudzbine.pdf');
  };



  const handleClick = () => {
    const authToken = window.sessionStorage.getItem("auth_token");

    if (authToken !== null) {
      generateInvoicePDF();
    } else {
      setIsLogin(false);
    }
  };


  return (
    <div className="cart-container" style={{display:'flex', flexDirection:'column'}}>
      <h3>This is your cart.</h3>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {products.map((prod) => (
        <OneProduct
          product={prod}
          key={prod.id}
          inCart={0}
        />
      ))}
      </div>

      <button className="btn" style={{width: "15%", justifyContent:'center', alignItems:'center', marginTop:'15px', marginLeft: 'auto', marginRight: 'auto'}} onClick={handleClick}>
        Order
      </button>
      <label style={{color: 'red', fontWeight: 'bold', justifyContent:'center', alignItems:'center', marginTop:'15px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '30px'}}>
        {!isLogin && 'You have to be logged in!'}
      </label>
    </div>
  );
};

export default Cart;

