import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Meni() {
  return (
    <div className="background-image">
      <div className="menu-bar">
        <div className="menu-bar-text">
          <img
            src={"https://previews.123rf.com/images/sergeypykhonin/sergeypykhonin1809/sergeypykhonin180900041/108230283-registration-register-logo-or-label-diary-note-icon-vector-illustration.jpg"}
            alt="Opis slike"
            style={{ width: "100px", height: "auto" }}
          />
          <div className="menu-bar-items-div">
            <Link to="/products" className="menu-bar-items">
              Book Shop
            </Link>
          </div>
          <p>
          Explore our rich collection of books for every occasion.
          Discover the perfect titles for relaxation, learning, or
          inspiration, and enrich every moment with your favorite books.
          </p>
          <p>Contact: 064/267 72 76</p>
          <p>Working hours: 07-22h</p>
          <p>Address : Bulevar Kralja Aleksandra 10, Beograd</p>
        </div>
      </div>
    </div>
  );
}

export default Meni;
