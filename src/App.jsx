import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Vite scanne automatiquement tous les fichiers dans /pages
const pages = import.meta.glob("./pages/*.jsx", { eager: true });

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 10, borderBottom: "1px solid #ffffffff" }}>
        <Link to="/" style={{ marginRight: 10 }}>Accueil</Link>
        {Object.keys(pages).map((path) => {
          const routePath = "/" + path.split("/").pop().replace(".jsx", "").toLowerCase();
          return (
            <Link
              key={routePath}
              to={routePath}
              style={{ marginRight: 10 }}
            >
              {routePath}
            </Link>
          );
        })}
      </nav>

      <Routes>
        {/* Page d’accueil simple */}
        <Route path="/" element={<Home />} />

        {/* Génération automatique des routes */}
        {Object.entries(pages).map(([path, module]) => {
          const routePath = "/" + path.split("/").pop().replace(".jsx", "").toLowerCase();
          const Component = module.default;
          return <Route key={routePath} path={routePath} element={<Component />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div style={{ padding: 30 }}>
      <h1>Bienvenue sur AgriLink 🌾</h1>
      <p>
        Les pages sont chargées automatiquement depuis <code>src/pages/</code>.
      </p>
      <p>
        Ajoute un fichier dans <b>src/pages</b> (ex. <code>DashboardProducteur.jsx</code>) et il apparaîtra ici sans rien modifier !
      </p>
    </div>
  );
}
