import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Rova from "./pages/rova";


/* =========================================================
   PAGE PRINCIPALE
========================================================= */

function Home() {
  return (
    <div className="app">

      {/* ================= HEADER ================= */}
      <header className="navbar">

        <div className="logo">
          <span className="logo-icon">T</span>

          <span>
            Tana<span>City</span>
          </span>
        </div>

        <nav>
          <a href="#accueil">Accueil</a>
          <a href="#histoire">Histoire</a>
          <a href="#actualites">Actualités</a>
          <a href="#decouvrir">À découvrir</a>
        </nav>

        <button className="search-btn">
          🔍 Rechercher
        </button>

      </header>


      {/* ================= HERO ================= */}
      <main>

        <section id="accueil" className="hero-section">

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <span className="hero-label">
              ANTANANARIVO
            </span>

            <h1>
              Découvrez <br />
              <span>Antananarivo</span>
            </h1>

            <p>
              Histoire, culture, lieux emblématiques et actualités
              de la capitale de Madagascar.
            </p>

            <div className="hero-buttons">

              <a
                href="#histoire"
                className="btn-primary"
              >
                Découvrir la ville
              </a>

              <a
                href="#actualites"
                className="btn-secondary"
              >
                Voir les actualités
              </a>

            </div>

          </div>

        </section>


        {/* ================= INTRO ================= */}
        <section className="intro-section">

          <div className="section-heading">

            <span>
              LA VILLE
            </span>

            <h2>
              Antananarivo, une ville à découvrir
            </h2>

          </div>

          <p className="intro-text">
            Antananarivo est une ville riche en histoire, en culture
            et en traditions. Découvrez ses quartiers, ses monuments,
            ses lieux historiques et les événements qui font vivre
            la capitale au quotidien.
          </p>

        </section>


        {/* ================= HISTOIRE ================= */}
        <section
          id="histoire"
          className="places-section"
        >

          <div className="section-heading">

            <span>
              HISTOIRE & PATRIMOINE
            </span>

            <h2>
              Les lieux qui racontent Tana
            </h2>

          </div>


          <div className="places-grid">

            {/* ================= ROVA ================= */}

            <article className="place-card">

              <div className="place-image place-rova">

                <span className="place-tag">
                  HISTOIRE
                </span>

              </div>

              <div className="place-content">

                <h3>
                  Le Rova d'Antananarivo
                </h3>

                <p>
                  Un lieu emblématique qui témoigne de l'histoire
                  de la capitale et de la monarchie malgache.
                </p>
                <button>
                  <Link
                  to="/lieux/rova"
                  className="discover-button"
                >
                  Découvrir →
                </Link>
                </button>
                

              </div>

            </article>


            {/* ================= HAUTE VILLE ================= */}

            <article className="place-card">

              <div className="place-image place-haute-ville">

                <span className="place-tag">
                  PATRIMOINE
                </span>

              </div>

              <div className="place-content">

                <h3>
                  La Haute Ville
                </h3>

                <p>
                  Découvrez les ruelles, les maisons anciennes
                  et l'architecture historique d'Antananarivo.
                </p>

                <button>
                  Découvrir →
                </button>

              </div>

            </article>


            {/* ================= LAC ANOSY ================= */}

            <article className="place-card">

              <div className="place-image place-anosi">

                <span className="place-tag">
                  CULTURE
                </span>

              </div>

              <div className="place-content">

                <h3>
                  Le Lac Anosy
                </h3>

                <p>
                  Un des endroits emblématiques du centre
                  d'Antananarivo.
                </p>

                <button>
                  Découvrir →
                </button>

              </div>

            </article>

          </div>

        </section>

                  {/* ================= LOISIRS & HOTELS ================= */}
          <section
            id="loisirs"
            className="leisure-section"
          >

            <div className="section-heading">

              <span>
                SORTIR & SÉJOURNER À TANA
              </span>

              <h2>
                Des endroits pour profiter de la capitale
              </h2>

            </div>

            <p className="leisure-intro">
              Découvrez prochainement une sélection d'espaces de loisirs,
              restaurants, hôtels et lieux où passer un agréable moment
              à Antananarivo.
            </p>


            <div className="leisure-grid">

              {/* ================= LOISIR ================= */}
              <article className="leisure-card">

                <div className="leisure-image leisure-loisir">

                  <span className="leisure-tag">
                    LOISIRS
                  </span>

                </div>

                <div className="leisure-content">

                  <h3>
                    Espaces de loisirs
                  </h3>

                  <p>
                    Découvrez des lieux pour vous détendre, vous divertir
                    et passer du temps en famille ou entre amis.
                  </p>

                  <button>
                    Découvrir →
                  </button>

                </div>

              </article>


              {/* ================= HOTEL ================= */}
              <article className="leisure-card">

                <div className="leisure-image leisure-hotel">

                  <span className="leisure-tag">
                    HÔTELS
                  </span>

                </div>

                <div className="leisure-content">

                  <h3>
                    Hôtels à Antananarivo
                  </h3>

                  <p>
                    Retrouvez des hôtels et hébergements à découvrir
                    lors de votre séjour dans la capitale.
                  </p>

                  <button>
                    Voir les hôtels →
                  </button>

                </div>

              </article>


              {/* ================= RESTAURANTS ================= */}
              <article className="leisure-card">

                <div className="leisure-image leisure-restaurant">

                  <span className="leisure-tag">
                    RESTAURATION
                  </span>

                </div>

                <div className="leisure-content">

                  <h3>
                    Restaurants & sorties
                  </h3>

                  <p>
                    Découvrez les restaurants, cafés et autres endroits
                    où profiter de la vie quotidienne à Tana.
                  </p>

                  <button>
                    Explorer →
                  </button>

                </div>

              </article>

            </div>

          </section>


        {/* ================= ACTUALITES ================= */}
        <section
          id="actualites"
          className="news-section"
        >

          <div className="section-heading">

            <span>
              AUJOURD'HUI À TANA
            </span>

            <h2>
              Les dernières actualités
            </h2>

          </div>


          <div className="news-layout">

            <article className="main-news">

              <div className="news-image"></div>

              <div className="news-content">

                <span className="news-category">
                  ACTUALITÉ
                </span>

                <h3>
                  Ce qui se passe aujourd'hui à Antananarivo
                </h3>

                <p>
                  Retrouvez prochainement les informations,
                  événements et actualités de la capitale.
                </p>

                <button>
                  Lire l'article →
                </button>

              </div>

            </article>


            <div className="small-news">

              <article>

                <span>
                  ÉVÉNEMENT
                </span>

                <h3>
                  Les événements à venir à Antananarivo
                </h3>

                <p>
                  À découvrir prochainement
                </p>

              </article>


              <article>

                <span>
                  CULTURE
                </span>

                <h3>
                  La culture et les traditions de Tana
                </h3>

                <p>
                  À découvrir prochainement
                </p>

              </article>


              <article>

                <span>
                  VILLE
                </span>

                <h3>
                  Les endroits à visiter cette semaine
                </h3>

                <p>
                  À découvrir prochainement
                </p>

              </article>

            </div>

          </div>

        </section>


        {/* ================= DECOUVRIR ================= */}
        <section
          id="decouvrir"
          className="discover-section"
        >

          <div>

            <span>
              EXPLOREZ
            </span>

            <h2>
              Il y a toujours quelque chose
              à découvrir à Tana.
            </h2>

            <p>
              Lieux historiques, restaurants, marchés,
              événements, culture et vie quotidienne.
            </p>

            <button className="btn-primary">
              Explorer Antananarivo
            </button>

          </div>

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

          <a href="#accueil">
            Accueil
          </a>

          <a href="#histoire">
            Histoire
          </a>

          <a href="#actualites">
            Actualités
          </a>

          <a href="#decouvrir">
            Découvrir
          </a>

        </div>

        <p className="copyright">
          © 2026 TanaCity — Antananarivo, Madagascar
        </p>

      </footer>

    </div>
  );
}


/* =========================================================
   ROUTES
========================================================= */

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* PAGE PRINCIPALE */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* PAGE DETAIL ROVA */}
        <Route
          path="/lieux/rova"
          element={<Rova />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;