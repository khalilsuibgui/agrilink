import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import "./Sitemap.css";

export default function Sitemap() {
  return (
    <div className="sitemap-container">
      <h1 className="sitemap-title">Arborescence du site AgriLink</h1>
      <Tree
        lineWidth={"2px"}
        lineColor={"#d9534f"}
        lineBorderRadius={"10px"}
        label={<div className="node root">Accueil</div>}
      >
        <TreeNode label={<div className="node">Producteurs</div>}>
          <TreeNode label={<div className="node">Carte interactive</div>} />
          <TreeNode label={<div className="node">Liste producteurs</div>}>
            <TreeNode label={<div className="node small">Filtres</div>} />
          </TreeNode>
          <TreeNode label={<div className="node">Fiche producteur</div>}>
            <TreeNode label={<div className="node small">Produits</div>} />
            <TreeNode label={<div className="node small">Avis</div>} />
          </TreeNode>
        </TreeNode>

        <TreeNode label={<div className="node">Produits</div>}>
          <TreeNode label={<div className="node">Catégories</div>} />
          <TreeNode label={<div className="node">Liste produits</div>} />
          <TreeNode label={<div className="node">Fiche produit</div>}>
            <TreeNode label={<div className="node small">Détails</div>} />
            <TreeNode label={<div className="node small">Avis clients</div>} />
          </TreeNode>
        </TreeNode>

        <TreeNode label={<div className="node">Panier / Commande</div>}>
          <TreeNode label={<div className="node small">Panier</div>} />
          <TreeNode label={<div className="node small">Étapes commande</div>} />
        </TreeNode>

        <TreeNode label={<div className="node">Compte utilisateur</div>}>
          <TreeNode label={<div className="node small">Acheteur</div>} />
          <TreeNode label={<div className="node small">Producteur</div>} />
          <TreeNode label={<div className="node small">Admin</div>} />
        </TreeNode>

        <TreeNode label={<div className="node">Blog</div>}>
          <TreeNode label={<div className="node small">Articles</div>} />
          <TreeNode label={<div className="node small">Catégories</div>} />
        </TreeNode>

        <TreeNode label={<div className="node">À propos</div>}>
          <TreeNode label={<div className="node small">Mission</div>} />
          <TreeNode label={<div className="node small">Équipe</div>} />
        </TreeNode>

        <TreeNode label={<div className="node">Aide / Légal</div>}>
          <TreeNode label={<div className="node small">FAQ</div>} />
          <TreeNode label={<div className="node small">CGU</div>} />
          <TreeNode label={<div className="node small">Confidentialité</div>} />
        </TreeNode>
      </Tree>
    </div>
  );
}
