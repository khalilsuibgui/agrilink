import React from "react";
import "./DesignIdentite.css";

export default function DesignIdentite() {
  return (
    <div className="design-container">
      {/* ===== HEADER ===== */}
      <header className="design-header">
        <h1>Design & Identité Visuelle — AgriLink</h1>
        <p>
          L’identité visuelle d’AgriLink s’inspire de la nature, de la proximité
          et de la durabilité. Elle combine des teintes vertes naturelles, une
          typographie moderne et des icônes claires issues du standard Google
          Material Icons.
        </p>
      </header>

      {/* ===== PALETTE DE COULEURS ===== */}
      <section className="palette-section">
        <h2>🎨 Palette de couleurs</h2>
        <div className="palette">
          <div className="color" style={{ background: "#386641" }}>
            <span>#386641</span>
          </div>
          <div className="color" style={{ background: "#6A994E" }}>
            <span>#6A994E</span>
          </div>
          <div className="color" style={{ background: "#A7C957" }}>
            <span>#A7C957</span>
          </div>
          <div className="color" style={{ background: "#F2E8CF", color: "#333" }}>
            <span>#F2E8CF</span>
          </div>
          <div className="color" style={{ background: "#BC4749" }}>
            <span>#BC4749</span>
          </div>
        </div>
      </section>

      {/* ===== TYPOGRAPHIES ===== */}
<section className="typo-section">
  <h2>🖋️ Typographies utilisées</h2>
  <p>
    L’identité typographique d’AgriLink repose sur deux polices
    complémentaires issues de Google Fonts :
  </p>

  <div className="typo-block">
    <div className="typo-card">
      <h3 style={{ fontFamily: "Merriweather, serif" }}>Merriweather</h3>
      <p>
        Utilisée pour les <strong>titres et sous-titres</strong>.  
        Elle évoque la nature, la fiabilité et la tradition artisanale.
      </p>
      <h1 style={{ fontFamily: "Merriweather, serif" }}>H1 — Titre principal</h1>
      <h2 style={{ fontFamily: "Merriweather, serif" }}>H2 — Sous-titre</h2>
    </div>

    <div className="typo-card">
      <h3 style={{ fontFamily: "Lato, sans-serif" }}>Lato</h3>
      <p>
        Utilisée pour le <strong>corps du texte</strong> et les contenus.
        Lisible, moderne et neutre, elle équilibre parfaitement la rigueur de
        Merriweather.
      </p>
      <p style={{ fontFamily: "Lato, sans-serif" }}>
        Exemple de paragraphe :  
        “AgriLink relie les producteurs et les consommateurs dans une
        dynamique locale et durable, favorisant une agriculture responsable.”
      </p>
      <button
        style={{
          fontFamily: "Lato, sans-serif",
          background: "#6A994E",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          marginTop: "10px",
        }}
      >
        Bouton Exemple
      </button>
    </div>
  </div>
</section>


      {/* ===== ICONES ===== */}
      <section className="icons-section">
        <h2>🔘 Icônes Google Material</h2>
        <p>Icônes standard utilisées pour la navigation et les actions.</p>
        <div className="icons">
          <span className="material-icons">home</span>
          <span className="material-icons">shopping_cart</span>
          <span className="material-icons">store</span>
          <span className="material-icons">favorite</span>
          <span className="material-icons">account_circle</span>
        </div>
      </section>

      {/* ===== MOODBOARD ===== */}
      <section className="moodboard-section">
        <h2>🖼️ Moodboard & Inspiration</h2>
        <p>
          Exemple d’ambiance visuelle inspirant la direction artistique du
          projet : tons verts, images naturelles, mise en avant de producteurs
          et produits frais.
        </p>
        <img
          src="/image.webp"
          alt="Inspiration visuelle AgriLink"
          className="moodboard-img"
        />
      </section>

      {/* ===== LOGO / CONCLUSION ===== */}
      <section className="logo-section">
        <h2>🌿 Identité de marque</h2>
        <p>
          <strong>Logo AgriLink :</strong> un mot-symbole simple, vert et
          arrondi, symbolisant la connexion entre producteurs et acheteurs.
        </p>
        <div className="logo-sample">
          <span className="logo-text">
            Agri<span>Link</span>
          </span>
        </div>
      </section>
    </div>
  );
}
