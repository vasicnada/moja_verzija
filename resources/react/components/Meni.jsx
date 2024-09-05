import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Meni() {
  return (
    <div className="background-image">
      <div className="menu-bar">
        <div className="menu-bar-text">
          <img
            src={"https://www.zeppelin.rs/login/media/images/categories/0-58254900-1666006933.png"}
            alt="Opis slike"
            style={{ width: "200px", height: "auto" }}
          />
          <div className="menu-bar-items-div">
            <Link to="/products" className="menu-bar-items">
              Prodavnica
            </Link>
          </div>
          <p>
            Organizujte svoj dan, nedelju i godinu koristeći naše unikatne
            planere. Upotpunite dozivljaj personalizacijom bilo kog planera koji
            odaberete.
          </p>
          <p>Kontakt: 064/267 72 76</p>
          <p>Radno vreme: Pon-Ned 07-22h</p>
          <p>Adresa: Bulevar Kralja Aleksandra 10, Beograd</p>
        </div>
      </div>
    </div>
  );
}

export default Meni;
