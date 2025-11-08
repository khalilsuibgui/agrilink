import React from "react";
import "./PrototypePages.css";

export default function PrototypeAcheteur() {
  return (
    <div className="wireframe">
      <aside className="sidebar">
        <div className="menu">Mon profil</div>
        <div className="menu">Mes commandes</div>
        <div className="menu">Mes favoris</div>
        <div className="menu">Mes avis</div>
        <div className="menu">Paramètres</div>
      </aside>

      <main className="main">
        <h1>Espace Acheteur</h1>

        <section className="dashboard">
          <div className="block">Commandes récentes</div>
          <div className="block">Produits favoris</div>
          <div className="block">Avis récents</div>
        </section>
      </main>
    </div>
  );
}
