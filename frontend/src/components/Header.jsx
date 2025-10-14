import styles from "./Header.module.css";

export default function Header({ currentView, onNavigate }) {
  return (
    <header className="header" role="banner">
      <div className="header-container">
        <div
          className={`logo ${styles.headerPointer}`}
          onClick={() => onNavigate("home")}
          tabIndex={0}
          aria-label="Ir para a página inicial"
          role="link"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onNavigate("home");
          }}
        >
          <img
            src="/logo.png"
            alt="Meu Caramelo Pet Shop"
            className="logo-image"
            onError={(e) => {
              // Fallback para emoji caso a imagem não carregue
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className="logo-text">
            <span className="logo-line">Meu</span>
            <span className="logo-line">Caramelo</span>
          </div>
        </div>
        <nav className="nav" aria-label="Navegação principal">
          <button
            className={`nav-button ${currentView === "home" ? "active" : ""}`}
            onClick={() => onNavigate("home")}
            aria-label="Ir para Home"
          >
            Home
          </button>
          <button
            className={`nav-button ${currentView === "pets" ? "active" : ""}`}
            onClick={() => onNavigate("pets")}
            aria-label="Ver Meus Pets"
          >
            Meus Pets
          </button>
          <button
            className={`nav-button ${currentView === "new" ? "active" : ""}`}
            onClick={() => onNavigate("new")}
            aria-label="Cadastrar novo pet"
          >
            Cadastrar
          </button>
          <button
            className={`nav-button ${
              currentView === "contato" ? "active" : ""
            }`}
            onClick={() => onNavigate("contato")}
            aria-label="Contato"
          >
            Contato
          </button>
          <button
            className={`nav-button ${currentView === "sobre" ? "active" : ""}`}
            onClick={() => onNavigate("sobre")}
            aria-label="Sobre o Meu Caramelo"
          >
            Sobre
          </button>
        </nav>
      </div>
    </header>
  );
}
