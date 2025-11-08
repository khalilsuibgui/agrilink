import React from "react";
import "./PrototypeAccueil.css";

export default function PrototypeAccueil() {
  return (
    <div className="wireframe">
      {/* HEADER */}
      <header className="header">
        <div className="logo">AgriLink</div>
        <input type="text" placeholder="Rechercher un produit ou un producteur..." className="search" />
        <nav className="nav">
          <a href="#">Accueil</a>
          <a href="#">Produits</a>
          <a href="#">Producteurs</a>
          <a href="#">Blog</a>
          <a href="#">Connexion</a>
        </nav>
        <button className="cta">S’inscrire</button>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>Relions producteurs et acheteurs locaux</h1>
        <button className="hero-btn">Découvrir les producteurs</button>
        <div className="hero-img">[ Image marché / ferme ]</div>
      </section>

      {/* CATÉGORIES */}
      <section className="categories">
        <h2>Catégories</h2>
        <div className="category-grid">
          <div className="box">Fruits</div>
          <div className="box">Légumes</div>
          <div className="box">Produits laitiers</div>
          <div className="box">Viande</div>
        </div>
      </section>

      {/* PRODUCTEURS À LA UNE */}
      <section className="producers">
        <h2>Producteurs à la une</h2>
        <div className="card-grid">
          <div className="card">[ Photo + Nom + Localisation ]</div>
          <div className="card">[ Photo + Nom + Localisation ]</div>
          <div className="card">[ Photo + Nom + Localisation ]</div>
        </div>
      </section>

      {/* PRODUITS POPULAIRES */}
      <section className="products">
        <h2>Produits populaires</h2>
        <div className="card-grid">
          <div className="card">[ Produit + Prix + Bouton panier ]</div>
          <div className="card">[ Produit + Prix + Bouton panier ]</div>
          <div className="card">[ Produit + Prix + Bouton panier ]</div>
          <div className="card">[ Produit + Prix + Bouton panier ]</div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="testimonials">
        <h2>Témoignages & Partenaires</h2>
        <div className="testimonial-grid">
          <div className="box">“Très satisfait !” – Ferme El Aman</div>
          <div className="box">“Produits de qualité !” – Client local</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>© 2025 AgriLink</div>
        <div>
          <a href="#">À propos</a> | <a href="#">Contact</a> | <a href="#">Mentions légales</a> | <a href="#">CGU</a>
        </div>
      </footer>
    </div>
  );
}
