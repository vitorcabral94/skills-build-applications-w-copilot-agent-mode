import { Link, Route, Routes } from 'react-router-dom';

const highlights = [
  {
    title: 'Authentication',
    text: 'Secure profiles, team memberships, and account onboarding.',
  },
  {
    title: 'Activity Tracking',
    text: 'Log workouts, sessions, and progress against training goals.',
  },
  {
    title: 'Leaderboard',
    text: 'Compare team performance with a competitive scoring system.',
  },
  {
    title: 'Workout Suggestions',
    text: 'Personalized recommendations based on recent activity.',
  },
];

function OverviewPage() {
  return (
    <section className="hero-grid">
      <div className="hero-copy">
        <span className="eyebrow">Modern multi-tier fitness platform</span>
        <h1>Track training, build teams, and compete on every workout.</h1>
        <p>
          OctoFit Tracker brings together authentication, activity logging, team
          collaboration, leaderboard competition, and personalized coaching.
        </p>
        <div className="button-row">
          <Link className="btn btn-warning btn-lg" to="/teams">
            Explore teams
          </Link>
          <Link className="btn btn-outline-light btn-lg" to="/leaderboard">
            View leaderboard
          </Link>
        </div>
      </div>

      <div className="hero-card">
        <img className="brand-logo" src="/octofitapp-small.png" alt="OctoFit Tracker logo" />
        <div className="metric-grid">
          <article>
            <strong>8000</strong>
            <span>API port</span>
          </article>
          <article>
            <strong>5173</strong>
            <span>Frontend port</span>
          </article>
          <article>
            <strong>27017</strong>
            <span>MongoDB port</span>
          </article>
          <article>
            <strong>Mongoose</strong>
            <span>Data access</span>
          </article>
        </div>
      </div>
    </section>
  );
}

function FeaturePage({ title, description }: { title: string; description: string }) {
  return (
    <section className="content-panel">
      <span className="eyebrow">OctoFit Tracker</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <Link className="brand-link" to="/">
          <img className="brand-mark" src="/octofitapp-small.png" alt="OctoFit Tracker" />
          <div>
            <span className="eyebrow">OctoFit Tracker</span>
            <strong>Build. Train. Compete.</strong>
          </div>
        </Link>

        <nav className="nav-links">
          <Link to="/teams">Teams</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/workouts">Workouts</Link>
        </nav>
      </header>

      <main className="page-frame container-fluid px-4 px-md-5 py-4 py-md-5">
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route
            path="/teams"
            element={
              <FeaturePage
                title="Team management"
                description="Create squads, manage membership, and coordinate group training."
              />
            }
          />
          <Route
            path="/leaderboard"
            element={
              <FeaturePage
                title="Competitive leaderboard"
                description="Rank athletes and teams with a scoring system designed for friendly competition."
              />
            }
          />
          <Route
            path="/workouts"
            element={
              <FeaturePage
                title="Workout suggestions"
                description="Surface personalized training recommendations from recent activity patterns."
              />
            }
          />
        </Routes>

        <section className="feature-grid">
          {highlights.map((item) => (
            <article className="feature-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
