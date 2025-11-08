import React from "react";

export default function PrototypeAideLegal() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Aide & Légal</h1>
      <p>
        Cette page regroupe les informations destinées à accompagner
        l’utilisateur et à présenter les aspects juridiques du site AgriLink.
      </p>

      <section style={{ marginTop: "2rem" }}>
        <h2>FAQ (Foire aux questions)</h2>
        <ul>
          <li>Comment passer une commande ?</li>
          <li>Comment contacter un producteur ?</li>
          <li>Quels moyens de paiement sont disponibles ?</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Mentions légales</h2>
        <p>
          Ce site est un projet académique à but non commercial. Les données et
          images affichées sont fictives.
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Politique de confidentialité</h2>
        <p>
          Aucune donnée personnelle n’est stockée. Cette page simule la section
          “Confidentialité” pour le prototype.
        </p>
      </section>
    </div>
  );
}
