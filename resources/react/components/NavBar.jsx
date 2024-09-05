import React from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdAccountBox } from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";

function NavBar({ cartNum, token, token2, addToken, addToken2}) {

  function handleLogout(){
    let config = {
      method: 'post',
      url: 'api/logout',
      headers: { 
        'Authorization': 'Bearer ' + token, 
      },
    };
    
    axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      window.sessionStorage.removeItem('auth_token');
      addToken(null);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  function handleLogout2(){
    let config = {
      method: 'post',
      url: 'api/logout2',
      headers: { 
        'Authorization': 'Bearer ' + token2, 
      },
    };
    
    axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      window.sessionStorage.removeItem('auth_token2');
      addToken2(null);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  console.log("Vrijednost token1:", token);
          console.log("Vrijednost token2:", token2);
  
  return (
    <div className="navBar">
      <img
        src="https://www.zeppelin.rs/login/media/images/categories/0-58254900-1666006933.png"
        alt="Opis slike"
        style={{ width: "40px", height: "auto", marginRight: "20px" }}
      />
      <Link to="/">Početna strana </Link>
      <Link to="/cart" className="cart-item">
        <BsCart style={{ marginLeft: 10 }} />
        <a className="cart-num">{cartNum}</a>
      </Link>
      <div className="linkContainer" style={{marginLeft:'auto', marginRight:'20px'}}>
      {((token == null) && (token2 == null)) ? (
        <div style={{display:"flex", flexDirection:"row"}}>
          <div>
            <p className="small fw-bold mt-2 pt-1 mb-0">
                  Nemas nalog?{" "}
                  <a href="/register" className="link-danger">
                    Registruj se
                  </a>
                </p>
          </div>
      <MdAccountBox style={{fontSize:'30px', marginRight:'5px', height:'50px'}}></MdAccountBox>
      <Dropdown>
      <DropdownToggle variant="success" id="dropdown-basic">
        PRIJAVI SE
      </DropdownToggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/login">Prijava za kupce</Dropdown.Item>
        <Dropdown.Item href="/login2">Prijava za administratora</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
      ) : (
        <div>
          <MdAccountBox style={{fontSize:'30px', marginRight:'5px'}}></MdAccountBox>
          <label style={{fontWeight: 'bold', marginRight:'15px'}}>{window.sessionStorage.getItem("name_login")}
          </label>       
        <Link to="/" onClick={token2 == null ? handleLogout : handleLogout2}>ODJAVI SE</Link>
        </div>
      )}
      </div>
    </div>
  );
}

export default NavBar;
