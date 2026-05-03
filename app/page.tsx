export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1>
          Organic media planners creating, distributing & optimising<br />
          <span className="highlight">search-first content</span> for SEO, Social, PR, Ai and LLM search
        </h1>
        <div className="stats-row">
          <div className="stat-item">
            <div className="stat-number">4</div>
            <div className="stat-desc">Global Offices serving UK, USA (New York) & EU</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">#1</div>
            <div className="stat-desc">Most recommended content marketing agency</div>
          </div>
        </div>
      </section>

      {/* Category Leaders */}
      <section className="category-leaders">
        <h2>#WeCreate CategoryLeaders</h2>
        <p>on every searchable platform</p>
      </section>

      {/* Agency Behind */}
      <section className="agency-behind">
        <h3>
          A global team of search-first content marketers engineering <span>semantic relevancy & category signals</span> for both the internet and people
        </h3>
      </section>

      {/* Legacy Grid */}
      <div className="legacy-grid">
        <div className="legacy-card">
          <div className="big-word">Driving<br />Demand&Discovery</div>
          <p>Search-first ecosystem for new audience entry points</p>
        </div>
        <div className="legacy-card">
          <div className="big-word">Legacy<br />In The Making</div>
          <p>Building category-defining authority across every channel</p>
        </div>
      </div>

      {/* Pioneers */}
      <section className="pioneers">
        <h2>Pioneers</h2>
        <div className="description">
          We&apos;re dedicated to creating the industry narrative that others follow 3 years from now. 
          We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search 
          and we will continue to do it.
        </div>
        <div className="cannes-mission">
          🏆 We&apos;re on a mission to be the first search-first agency to win a Cannes Lion — disrupting the status quo.
        </div>
      </section>

      {/* Award Winning */}
      <section className="award-section">
        <h3>Award Winning</h3>
        <div className="award-text">
          A roll top bath full of 79 awards. Voted The Drum&apos;s best agency outside of London. 
          We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.
        </div>
        <div className="award-badge">
          ★ recognised by The Drum, Global Search Awards, Content Marketing Awards
        </div>
      </section>

      {/* Speed */}
      <section className="speed-section">
        <h3>Speed</h3>
        <div className="speed-desc">
          People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm?<br />
          Google is moving fast, but humans are moving faster. We chase consumers, not algorithms.
        </div>
        <div className="speed-quote">
          ⚡ We&apos;ve created a service which takes ideas to result within 60 minutes ⚡
        </div>
      </section>
    </>
  );
}