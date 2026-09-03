export default function Home() {
  return (
    <main>
      <nav className="nav container">
        <a className="logo" href="/">nova<span>.</span></a>
        <a className="nav-link" href="#get-started">Get started</a>
      </nav>

      <section className="hero container">
        <div className="eyebrow">NEXT.JS 14 · APP ROUTER</div>
        <h1>Build something<br /><span>remarkable.</span></h1>
        <p className="lead">
          A focused starting point for your next idea. Fast, modern, and
          intentionally minimal.
        </p>
        <div className="actions">
          <a className="button primary" href="#get-started">Get started <span>→</span></a>
          <a className="button secondary" href="#features">Explore features</a>
        </div>
      </section>

      <section id="features" className="features container">
        <article>
          <div className="icon">01</div>
          <h2>Simple</h2>
          <p>Clean structure with only the essentials. Easy to understand and extend.</p>
        </article>
        <article>
          <div className="icon">02</div>
          <h2>Fast</h2>
          <p>Powered by the App Router and designed to keep the experience snappy.</p>
        </article>
        <article>
          <div className="icon">03</div>
          <h2>Flexible</h2>
          <p>Plain JavaScript and CSS give you full control without framework overhead.</p>
        </article>
      </section>

      <section id="get-started" className="cta container">
        <div>
          <div className="eyebrow">READY WHEN YOU ARE</div>
          <h2>Turn the idea into reality.</h2>
        </div>
        <a className="button primary" href="mailto:hello@example.com">Say hello <span>→</span></a>
      </section>

      <footer className="footer container">
        <span>© 2026 Nova</span>
        <span>Made with Next.js</span>
      </footer>
    </main>
  );
}
