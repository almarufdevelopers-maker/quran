import { useEffect, useState } from "react";
import appimage from "./assets/1.webp";
import shotSurahs from "./assets/shot-surahs.webp";
import shotReading from "./assets/shot-reading.webp";
import shotStreak from "./assets/shot-streak.webp";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.jamia26.myquranapp";

const features = [
  ["📖", "Read in 10 languages", "English, French, Spanish, Indonesian, Turkish, Urdu, Bengali, Chinese, Russian and Swedish."],
  ["🎧", "Listen to 16 reciters", "Verse-by-verse audio from Sudais, Alafasy, Abdul Basit and more."],
  ["📚", "Tafsir Ibn Kathir offline", "The complete tafsir for all 114 surahs, one tap per ayah."],
  ["🔥", "Build a daily habit", "Reading streaks and daily reminders keep you coming back."],
  ["🔖", "Bookmarks and reflections", "Save any verse and write private notes on your phone."],
  ["🔍", "Search the Quran", "Search by surah name, surah:ayah, or any word, even offline."],
];

const stats = [
  ["10", "languages"],
  ["16", "reciters"],
  ["114", "surahs with tafsir"],
];

// Streak screen is last on purpose
const shots = [
  [shotSurahs, "Find any surah fast", "Search by name, ayah or word, in your language."],
  [shotReading, "Read and listen verse by verse", "Arabic, translation, audio, tafsir and bookmarks for every ayah."],
  [shotStreak, "Keep your daily streak", "Track your reading and get gentle daily reminders."],
];

const trust = ["100% free", "No ads", "No subscriptions", "Works offline"];

const track = (place) => {
  try {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "download_click", { location: place });
    }
  } catch (e) {
    /* analytics must never break the page */
  }
};

/* Google Play logo (simplified). For the official badge artwork,
   download it from play.google.com/intl/en_us/badges and swap it in. */
function PlayLogo({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="30 0 480 512" aria-hidden="true">
      <path fill="#00A0FF" d="M48.2 28.5c-3.1 3.3-4.9 8.4-4.9 15v424.9c0 6.6 1.8 11.7 4.9 15l.8.8L287.7 245v-5.8L49 27.7l-.8.8z" />
      <path fill="#FFE000" d="M367.2 325.6l-79.5-79.6v-5.8l79.5-79.6 1.8 1 94.2 53.5c26.9 15.3 26.9 40.3 0 55.6l-94.2 53.5-1.8 1z" />
      <path fill="#FF3A44" d="M369 324.6L287.7 243 48.2 482.5c8.9 9.4 23.5 10.5 40 1.2L369 324.6z" />
      <path fill="#00F076" d="M369 161.4L88.2 2.3c-16.5-9.3-31.1-8.2-40 1.2L287.7 243 369 161.4z" />
    </svg>
  );
}

function PlayBadge({ place }) {
  return (
    <a
      className="play-badge"
      href={PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get MyQuran on Google Play"
      onClick={() => track(place)}
    >
      <PlayLogo />
      <span className="play-text">
        <small>GET IT ON</small>
        <strong>Google Play</strong>
      </span>
    </a>
  );
}

function PhoneMockup() {
  return (
    <div className="phone-wrap">
      <div className="phone-glow" />
      <div className="phone">
        <img src={shotReading} alt="MyQuran reading screen with Arabic text, translation and audio" />
      </div>
      <img className="float-icon" src={appimage} alt="MyQuran app icon" />
    </div>
  );
}

function Homepage() {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="mq">
      <style>{css}</style>

      {/* HERO */}
      <header className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="app-chip">
              <img src={appimage} alt="" />
              <span>MyQuran</span>
            </div>
            <h1>Read, listen and reflect on the Quran</h1>
            <p className="lead">A free Quran app with no ads, no subscriptions and no locked features.</p>

            <PlayBadge place="hero" />

            <ul className="trust">
              {trust.map((t) => (
                <li key={t}>
                  <span aria-hidden="true">✓</span> {t}
                </li>
              ))}
            </ul>
          </div>
          <PhoneMockup />
        </div>
      </header>

      {/* STATS */}
      <section className="stats">
        <div className="wrap stats-row">
          {stats.map(([n, label]) => (
            <div key={label} className="stat">
              <b>{n}</b>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="shots">
        <div className="wrap">
          <h2>See how it looks</h2>
          <div className="shots-row">
            {shots.map(([src, title, text]) => (
              <figure key={title} className="shot">
                <div className="shot-frame">
                  <img src={src} alt={title} loading="lazy" />
                </div>
                <figcaption>
                  <b>{title}</b>
                  <span>{text}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <main className="features">
        <div className="wrap">
          <h2>Everything you need to read every day</h2>
          <div className="grid">
            {features.map(([icon, title, text]) => (
              <article key={title} className="card">
                <div className="icon" aria-hidden="true">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* FINAL CTA */}
      <section className="cta">
        <div className="wrap cta-inner">
          <img src={appimage} alt="" className="cta-icon" />
          <h2>Make the Quran part of your every day</h2>
          <p>Free forever. Install in two taps.</p>
          <PlayBadge place="cta" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>MyQuran by almarufdevelopers</p>
        <p className="links">
          <a href="mailto:almarufdevelopers@gmail.com">almarufdevelopers@gmail.com</a>
          <span aria-hidden="true">|</span>
          <a href="https://docs.google.com/document/d/1Dq5F67UeURC1A79kXBKHAjtt54KSs4XWsPF6zXUSOsA/edit?usp=sharing">
            Privacy policy
          </a>
        </p>
      </footer>

      {/* STICKY INSTALL BAR (phones only) */}
      <div className={`sticky ${showBar ? "show" : ""}`} aria-hidden={!showBar}>
        <img src={appimage} alt="" />
        <div className="sticky-text">
          <b>MyQuran</b>
          <small>Free · No ads</small>
        </div>
        <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" tabIndex={showBar ? 0 : -1} onClick={() => track("sticky")}>
          <PlayLogo size={18} /> Install
        </a>
      </div>
    </div>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap');

.mq{
  --green:#0f3226; --green2:#1c4a3a; --green3:#2a6650; --gold:#f5d90a; --paper:#fbfaf6;
  --ink:#2a3b33; --muted:#556b60;
  font-family:'Inter',system-ui,-apple-system,sans-serif; color:var(--ink); background:var(--paper);
  line-height:1.65; width:100%; min-height:100vh; margin:0; overflow-x:hidden;
}
.mq *{box-sizing:border-box}
.mq img{max-width:100%}
.mq a:focus-visible{outline:3px solid var(--gold); outline-offset:3px; border-radius:12px}
.mq .wrap{max-width:1100px; margin:0 auto; width:100%}

/* ---------- hero ---------- */
.mq .hero{
  position:relative; color:#fff; overflow:hidden;
  padding:clamp(40px,7vw,90px) clamp(20px,5vw,48px) 0;
  background:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M40 6l8 14 15-6-6 15 14 8-14 8 6 15-15-6-8 14-8-14-15 6 6-15-14-8 14-8-6-15 15 6z' fill='none' stroke='%23ffffff' stroke-opacity='.06' stroke-width='1.2'/%3E%3C/svg%3E"),
    radial-gradient(900px 500px at 85% 20%, rgba(245,217,10,.14), transparent 60%),
    linear-gradient(135deg,var(--green) 0%,var(--green2) 100%);
}
.mq .hero-grid{display:grid; grid-template-columns:1.1fr .9fr; gap:clamp(24px,5vw,64px); align-items:center}
.mq .hero-copy{padding-bottom:clamp(24px,5vw,80px)}
.mq .app-chip{display:inline-flex; align-items:center; gap:10px; padding:6px 16px 6px 6px; border-radius:999px; background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.14); font-weight:600; font-size:15px; margin-bottom:22px}
.mq .app-chip img{width:32px; height:32px; border-radius:10px; object-fit:cover}
.mq h1{font-family:'Playfair Display',Georgia,serif; font-weight:700; font-size:clamp(34px,7.5vw,62px); line-height:1.08; letter-spacing:-1px; margin:0 0 18px}
.mq .lead{font-size:clamp(17px,4vw,21px); color:#d6e4dc; max-width:30em; margin:0 0 30px}

.mq .play-badge{
  display:inline-flex; align-items:center; gap:12px; text-decoration:none; color:#fff;
  background:#000; border:1.5px solid #a6a6a6; border-radius:14px; padding:10px 24px 10px 18px; min-height:60px;
  box-shadow:0 10px 30px rgba(0,0,0,.35); transition:transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}
.mq .play-badge:hover{transform:translateY(-3px); box-shadow:0 14px 36px rgba(0,0,0,.45); border-color:var(--gold)}
.mq .play-badge:active{transform:translateY(0)}
.mq .play-text{display:flex; flex-direction:column; line-height:1; text-align:left}
.mq .play-text small{font-size:11px; letter-spacing:.8px; font-weight:500; opacity:.9}
.mq .play-text strong{font-size:25px; font-weight:600; letter-spacing:-.3px; margin-top:3px}

.mq .trust{list-style:none; padding:0; margin:26px 0 0; display:flex; flex-wrap:wrap; gap:8px 18px; font-size:14.5px; color:#cfe0d6}
.mq .trust span{color:var(--gold); font-weight:800}

/* ---------- phone ---------- */
.mq .phone-wrap{position:relative; display:flex; justify-content:center; align-self:end}
.mq .phone-glow{position:absolute; width:80%; height:70%; top:10%; border-radius:50%; background:rgba(245,217,10,.18); filter:blur(70px)}
.mq .phone{
  position:relative; width:min(270px,70vw); background:#0a1a14; border-radius:40px 40px 0 0;
  padding:9px 9px 0; border:2px solid rgba(255,255,255,.18); border-bottom:0;
  box-shadow:0 30px 70px rgba(0,0,0,.45);
}
.mq .phone img{display:block; width:100%; height:auto; border-radius:32px 32px 0 0}
.mq .float-icon{position:absolute; right:calc(50% - 190px); top:12%; width:84px; height:84px; border-radius:26px; object-fit:cover; border:4px solid rgba(255,255,255,.18); box-shadow:0 16px 34px rgba(0,0,0,.4); transform:rotate(8deg)}

/* ---------- stats ---------- */
.mq .stats{background:var(--green); border-top:1px solid rgba(255,255,255,.06); padding:28px clamp(20px,5vw,48px)}
.mq .stats-row{display:grid; grid-template-columns:repeat(3,1fr); gap:12px; text-align:center}
.mq .stat b{display:block; font-family:'Playfair Display',serif; font-size:clamp(28px,6vw,44px); color:var(--gold); line-height:1.1}
.mq .stat span{font-size:clamp(12.5px,3vw,15px); color:#b9cdc3}

/* ---------- screenshots ---------- */
.mq .shots{padding:clamp(44px,7vw,90px) 0 0; background:linear-gradient(180deg,#fff,var(--paper))}
.mq .shots .wrap{padding:0 clamp(20px,5vw,48px)}
.mq .shots-row{display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(20px,4vw,48px)}
.mq .shot{margin:0; text-align:center}
.mq .shot-frame{background:#0a1a14; border-radius:34px; padding:7px; box-shadow:0 20px 44px rgba(15,50,38,.22); border:2px solid rgba(15,50,38,.9)}
.mq .shot-frame img{display:block; width:100%; height:auto; border-radius:27px}
.mq .shot figcaption{margin-top:18px; display:flex; flex-direction:column; gap:4px}
.mq .shot figcaption b{font-size:clamp(17px,3.5vw,19px); color:var(--green2)}
.mq .shot figcaption span{font-size:15px; color:var(--muted)}

/* ---------- features ---------- */
.mq .features{padding:clamp(44px,7vw,90px) clamp(20px,5vw,48px)}
.mq h2{font-family:'Playfair Display',Georgia,serif; font-size:clamp(26px,6vw,40px); line-height:1.2; letter-spacing:-.5px; margin:0 0 clamp(24px,4vw,40px); text-align:center; color:var(--green)}
.mq .grid{display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr)); gap:18px}
.mq .card{background:#fff; border-radius:22px; padding:26px; border:1px solid rgba(15,50,38,.07); box-shadow:0 6px 24px rgba(15,50,38,.05); transition:transform .2s ease, box-shadow .2s ease}
.mq .card:hover{transform:translateY(-4px); box-shadow:0 14px 34px rgba(15,50,38,.1)}
.mq .icon{width:52px; height:52px; border-radius:16px; display:grid; place-items:center; font-size:26px; background:linear-gradient(135deg,var(--green),var(--green3)); margin-bottom:16px}
.mq .card h3{margin:0 0 8px; font-size:clamp(18px,4vw,20px); color:var(--green2); font-weight:700}
.mq .card p{margin:0; color:var(--muted); font-size:clamp(15px,3.5vw,16px)}

/* ---------- final CTA ---------- */
.mq .cta{background:linear-gradient(135deg,var(--green2),var(--green)); color:#fff; padding:clamp(52px,8vw,96px) clamp(20px,5vw,48px); text-align:center}
.mq .cta-inner{max-width:720px}
.mq .cta-icon{width:84px; height:84px; border-radius:26px; object-fit:cover; margin-bottom:22px; box-shadow:0 16px 34px rgba(0,0,0,.35); border:3px solid rgba(255,255,255,.15)}
.mq .cta h2{color:#fff; margin-bottom:12px}
.mq .cta p{margin:0 0 28px; color:#cfe0d6; font-size:18px}

/* ---------- footer ---------- */
.mq .footer{background:var(--green); color:#a9bcb3; text-align:center; font-size:15px; padding:32px clamp(20px,5vw,48px)}
.mq .footer p{margin:0 0 8px}
.mq .links{display:flex; flex-wrap:wrap; justify-content:center; gap:12px}
.mq .footer a{color:#fff; text-decoration:none; font-weight:500}
.mq .footer a:hover{text-decoration:underline}

/* ---------- sticky install bar ---------- */
.mq .sticky{display:none}

/* ---------- tablets & phones ---------- */
@media (max-width:860px){
  .mq .hero-grid{grid-template-columns:1fr; text-align:center}
  .mq .hero-copy{padding-bottom:8px}
  .mq .lead{margin-left:auto; margin-right:auto}
  .mq .trust{justify-content:center}
  .mq .phone-wrap{height:360px; overflow:hidden; align-self:center}
  .mq .float-icon{display:none}
}
@media (max-width:700px){
  .mq .shots .wrap{padding:0}
  .mq .shots h2{padding:0 20px}
  .mq .shots-row{display:flex; overflow-x:auto; scroll-snap-type:x mandatory; gap:16px; padding:8px 20px 28px; -webkit-overflow-scrolling:touch; scrollbar-width:none}
  .mq .shots-row::-webkit-scrollbar{display:none}
  .mq .shot{flex:0 0 72%; max-width:300px; scroll-snap-align:center}
  .mq .play-badge{width:100%; max-width:340px; justify-content:center}
  .mq .footer{padding-bottom:96px}
  .mq .sticky{
    display:flex; align-items:center; gap:12px; position:fixed; left:12px; right:12px;
    bottom:calc(12px + env(safe-area-inset-bottom, 0px)); z-index:50;
    background:rgba(15,50,38,.96); color:#fff; padding:10px 12px; border-radius:20px;
    border:1px solid rgba(255,255,255,.14); box-shadow:0 12px 34px rgba(0,0,0,.4);
    transform:translateY(160%); transition:transform .3s ease;
  }
  .mq .sticky.show{transform:none}
  .mq .sticky img{width:42px; height:42px; border-radius:12px; object-fit:cover; flex:none}
  .mq .sticky-text{flex:1; display:flex; flex-direction:column; line-height:1.2; min-width:0}
  .mq .sticky-text small{color:#b9cdc3; font-size:12.5px}
  .mq .sticky a{display:inline-flex; align-items:center; gap:8px; background:var(--gold); color:var(--green); font-weight:800; font-size:16px; text-decoration:none; padding:12px 18px; border-radius:14px; min-height:44px}
}
@media (prefers-reduced-motion:reduce){
  .mq *{transition:none !important}
}
`;

export default Homepage;