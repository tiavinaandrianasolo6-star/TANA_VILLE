import { Link } from "react-router-dom";
import "../App.css";

function Rova() {
  return (
    <div className="rova-page">

      {/* ================= HEADER ================= */}
      <header className="navbar">

        <div className="logo">
          <span className="logo-icon">T</span>

          <span>
            Tana<span>City</span>
          </span>
        </div>

        <nav>
          <Link to="/">
            Accueil
          </Link>

          <Link to="/#histoire">
            Histoire
          </Link>

          <Link to="/#actualites">
            Actualités
          </Link>

          <Link to="/#decouvrir">
            À découvrir
          </Link>
        </nav>

        <button className="search-btn">
          🔍 Rechercher
        </button>

      </header>


      {/* ================= CONTENU ================= */}
      <main>

        {/* HERO DU ROVA */}
        <section className="rova-hero">

          <div className="rova-hero-image">
            <img
              src="/src/assets/images/Rova_di_Antananarivo.jpg"
              alt="Rova d'Antananarivo"
            />
          </div>

          <div className="rova-hero-content">

            <span>
              HISTOIRE & PATRIMOINE
            </span>

            <h1>
              Le Rova d'Antananarivo
            </h1>

            <p>
              Un lieu emblématique au cœur de l'histoire
              de Madagascar.
            </p>

          </div>

        </section>


        {/* ================= HISTOIRE ================= */}
        <section className="rova-history">

          <div className="rova-history-content">

            <span className="rova-section-label">
              L'HISTOIRE DU LIEU
            </span>

            <h2>
              Le Rova d'Antananarivo
            </h2>

            <p>
              Le Rova d'Antananarivo, également appelé
              Rovan'Antananarivo, est l'un des monuments
              historiques les plus importants de Madagascar.
              Il se trouve au sommet de la colline
              d'Analamanga et domine une grande partie de
              la capitale malgache.
            </p>

            <p>
              Le site est profondément lié à l'histoire de
              la royauté malgache. Il a notamment été associé
              aux souverains du royaume de Madagascar et a
              constitué pendant plusieurs siècles un centre
              politique et symbolique majeur du pays.
            </p>

            <p>
              Le Rova est composé de plusieurs bâtiments,
              palais et espaces qui témoignent de différentes
              périodes de l'histoire de la monarchie.
              Parmi les édifices les plus connus figure le
              palais de Manjakamiadana, construit sous le
              règne de la reine Ranavalona Ire.
            </p>

            <p>
              Depuis les hauteurs du Rova, les visiteurs
              peuvent également observer une grande partie
              d'Antananarivo, ses quartiers historiques,
              ses maisons traditionnelles et les paysages
              qui entourent la capitale.
            </p>

            <p>
              Au-delà de son architecture, le Rova représente
              une partie importante du patrimoine culturel et
              historique de Madagascar. Il permet de mieux
              comprendre l'organisation de l'ancien royaume,
              la vie de la famille royale ainsi que l'évolution
              de la capitale au fil des siècles.
            </p>

          </div>

        </section>


        {/* ================= DOCUMENT ================= */}
        <section className="rova-document">

          <div className="rova-document-box">

            <span className="rova-section-label">
              DOCUMENT HISTORIQUE
            </span>

            <h2>
              En savoir plus sur le Rova
            </h2>

            <p>
              Un document PDF détaillé sera bientôt disponible
              afin de permettre aux visiteurs de découvrir
              davantage l'histoire du Rova d'Antananarivo.
            </p>

            <button className="rova-pdf-button">
              Télécharger le PDF
            </button>

          </div>

        </section>


        {/* ================= RETOUR ================= */}
        <section className="rova-back">

          <Link to="/">
            ← Retour à la page principale
          </Link>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer>

        <div className="footer-logo">
          Tana<span>City</span>
        </div>

        <p>
          Découvrez Antananarivo autrement.
        </p>

        <div className="footer-links">

          <Link to="/">
            Accueil
          </Link>

          <Link to="/#histoire">
            Histoire
          </Link>

          <Link to="/#actualites">
            Actualités
          </Link>

          <Link to="/#decouvrir">
            Découvrir
          </Link>

        </div>

        <p className="copyright">
          © 2026 TanaCity — Antananarivo, Madagascar
        </p>

      </footer>

    </div>
  );
}

export default Rova;