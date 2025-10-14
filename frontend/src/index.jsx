import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/Home.jsx";
import Pets from "./components/Pets.jsx";
import NewPet from "./components/NewPet.jsx";
import Sobre from "./components/Sobre.jsx";
import Contato from "./components/Contato.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [view, setView] = React.useState("home");
  return (
    <div className="app">
      <Header currentView={view} onNavigate={setView} />
      <main className="main-content">
        <div className="fade-in">
          {view === "home" && <Home onNavigate={setView} />}
          {view === "pets" && <Pets />}
          {view === "new" && <NewPet />}
          {view === "sobre" && <Sobre />}
          {view === "contato" && <Contato />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
