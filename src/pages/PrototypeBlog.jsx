import React from "react";

export default function PrototypeBlog() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Blog & Actualités</h1>
      <p>
        Cette page présente des articles, des conseils agricoles et des
        témoignages de producteurs et consommateurs.
      </p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Catégories</h2>
        <ul>
          <li>Agriculture durable</li>
          <li>Nutrition et bien-être</li>
          <li>Innovation agricole</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Articles récents</h2>
        <article style={{ marginBottom: "1.5rem" }}>
          <h3>🌱 Cultiver localement : un acte écologique</h3>
          <p>
            Découvrez comment les circuits courts contribuent à la protection de
            l’environnement et à la vitalité économique des régions.
          </p>
        </article>

        <article>
          <h3>🍎 Rencontre avec un producteur de pommes bio</h3>
          <p>
            Témoignage d’un producteur passionné par la qualité et le respect de
            la nature.
          </p>
        </article>
      </section>
    </div>
  );
}
