import React from "react";

export default function PrototypeCompte() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Compte Utilisateur</h1>
      <p>
        Cette page illustre la structure de l’espace utilisateur pour les
        différents profils : acheteur, producteur et administrateur.
      </p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Profil Acheteur</h2>
        <ul>
          <li>Tableau de bord</li>
          <li>Mes commandes</li>
          <li>Mes favoris</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Profil Producteur</h2>
        <ul>
          <li>Mes produits</li>
          <li>Commandes reçues</li>
          <li>Statistiques</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Espace Administrateur</h2>
        <ul>
          <li>Validation des producteurs</li>
          <li>Gestion du catalogue</li>
          <li>Suivi des ventes globales</li>
        </ul>
      </section>
    </div>
  );
}
