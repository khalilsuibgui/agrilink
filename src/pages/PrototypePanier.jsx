import React from "react";
import "./PrototypePages.css";

export default function PrototypePanier() {
  return (
    <div className="wireframe">
      <header className="header">
        <h1>Votre Panier</h1>
      </header>

      <section className="cart">
        <div className="cart-list">
          <div className="cart-item">Produit 1 – 2x – 20DT</div>
          <div className="cart-item">Produit 2 – 1x – 15DT</div>
        </div>
        <div className="summary">
          <p>Sous-total : 35DT</p>
          <p>Livraison : 5DT</p>
          <p><b>Total : 40DT</b></p>
          <button className="cta">Passer la commande</button>
        </div>
      </section>

      <section className="steps">
        <h2>Étapes de commande</h2>
        <ul>
          <li>1️⃣ Informations personnelles</li>
          <li>2️⃣ Adresse / Livraison</li>
          <li>3️⃣ Paiement à la livraison</li>
          <li>4️⃣ Confirmation</li>
        </ul>
      </section>
    </div>
  );
}
