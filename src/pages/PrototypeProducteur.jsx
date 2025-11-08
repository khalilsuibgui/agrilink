import React from "react";
import "./PrototypePages.css";

export default function PrototypeProducteur() {
  return (
    <div className="wireframe">
      <aside className="sidebar">
        <div className="menu">Tableau de bord</div>
        <div className="menu">Mes produits</div>
        <div className="menu">Commandes reçues</div>
        <div className="menu">Statistiques</div>
        <div className="menu">Paramètres boutique</div>
      </aside>

      <main className="main">
        <h1>Espace Producteur</h1>

        <section className="dashboard">
          <div className="block">Graphique ventes</div>
          <div className="block">Dernières commandes</div>
          <div className="block">Ajouter un produit</div>
          <div className="block">Produits en stock</div>
        </section>
      </main>
    </div>
  );
}
