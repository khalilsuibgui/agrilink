import React from "react";

export default function PrototypeApropos() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>À propos d’AgriLink</h1>
      <p>
        AgriLink est une plateforme web visant à connecter directement les
        producteurs locaux et les consommateurs, sans intermédiaires.
      </p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Notre mission</h2>
        <p>
          Promouvoir l’agriculture locale, soutenir les producteurs et offrir
          aux consommateurs un accès facile à des produits de qualité.
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>L’équipe</h2>
        <ul>
          <li><strong>Souibgui Khalil</strong> — Étudiant ingénieur, concepteur du projet</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Nos valeurs</h2>
        <p>
          Authenticité, durabilité, et proximité : trois piliers au cœur du
          projet AgriLink.
        </p>
      </section>
    </div>
  );
}
