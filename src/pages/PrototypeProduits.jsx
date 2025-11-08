import React from "react";
import "./PrototypePages.css";

export default function PrototypeProduits() {
  return (
    <div className="wireframe">
      <header className="header">
        <h1>Catalogue de produits</h1>
      </header>

      <section className="filters">
        <h2>Filtres</h2>
        <div className="filter-bar">
          <div className="filter">Catégorie</div>
          <div className="filter">Prix min/max</div>
          <div className="filter">Distance</div>
          <div className="filter">Label</div>
        </div>
      </section>

      <section className="product-grid">
        <div className="card">Produit 1</div>
        <div className="card">Produit 2</div>
        <div className="card">Produit 3</div>
        <div className="card">Produit 4</div>
      </section>

      <footer className="footer">
        <p>Pagination : 1 | 2 | 3 ...</p>
      </footer>
    </div>
  );
}
