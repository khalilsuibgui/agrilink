import React from "react";
import "./PrototypePages.css";

export default function PrototypeProducteurs() {
  return (
    <div className="wireframe">
      <header className="header">
        <h1>Nos producteurs</h1>
      </header>

      <section className="filters">
        <h2>Filtres de recherche</h2>
        <div className="filter-bar">
          <div className="filter">Catégorie</div>
          <div className="filter">Distance</div>
          <div className="filter">Label</div>
          <div className="filter">Note</div>
        </div>
      </section>

      <section className="content-grid">
        <div className="map">[ Carte interactive ]</div>
        <div className="list">
          <div className="card">Producteur 1</div>
          <div className="card">Producteur 2</div>
          <div className="card">Producteur 3</div>
        </div>
      </section>
    </div>
  );
}
