import { useState, useEffect } from "react";
import appimage from "./assets/1.webp";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.jamia26.myquranapp";
const GREEN = "#0f3226";
const GREEN2 = "#1c4a3a";
const GOLD = "#f5d90a";
const PAPER = "#f4f1e6";

const features = [
  ["Read in 10 languages", "English, French, Spanish, Indonesian, Turkish, Urdu, Bengali, Chinese, Russian and Swedish."],
  ["Listen to 16 reciters", "Verse-by-verse audio from Sudais, Alafasy, Abdul Basit and more."],
  ["Tafsir Ibn Kathir offline", "The complete tafsir for all 114 surahs, one tap per ayah."],
  ["Build a daily habit", "Reading streaks and daily reminders keep you coming back."],
  ["Bookmarks and reflections", "Save any verse and write private notes on your phone."],
  ["Search the Quran", "Search by surah name, surah:ayah, or any word, even offline."],
];

// Inline styles can't use media queries, so we read the screen width instead.
function useWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return w;
}

function DownloadButton({ label, full }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={PLAY_URL}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: full ? "block" : "inline-block",
        boxSizing: "border-box",
        width: full ? "100%" : "auto",
        maxWidth: "420px",
        minHeight: "52px",
        textAlign: "center",
        background: hover ? "#fff" : GOLD,
        color: GREEN,
        fontSize: "clamp(18px, 4.5vw, 22px)",
        fontWeight: 700,
        padding: "14px 32px",
        borderRadius: "14px",
        textDecoration: "none",
        transition: "background 0.15s",
      }}
    >
      {label}
    </a>
  );
}

function Homepage() {
  const width = useWidth();
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  const sidePad = isMobile ? "20px" : isTablet ? "32px" : "48px";
  const align = isMobile || isTablet ? "center" : "left";

  const h2 = {
    fontFamily: "Georgia, serif",
    fontSize: "clamp(26px, 5vw, 40px)",
    lineHeight: 1.15,
    margin: "0 0 28px",
  };

  return (
    <div style={{ fontFamily: "system-ui, 'Segoe UI', Roboto, sans-serif", color: "#17261f", background: PAPER, lineHeight: 1.6, overflowX: "hidden", WebkitTextSizeAdjust: "100%" }}>
      {/* Hero: stacked on phones/tablets, two columns on desktop */}
      <header style={{ background: GREEN, color: "#fff", padding: `clamp(32px, 8vw, 80px) ${sidePad}` }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            flexDirection: width >= 1024 ? "row" : "column-reverse",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "clamp(24px, 5vw, 64px)",
            textAlign: align,
          }}
        >
          <div style={{ flex: "1 1 0", minWidth: 0 }}>
            <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 7vw, 60px)", lineHeight: 1.08, margin: "0 0 16px" }}>
              Read, listen and reflect on the Quran
            </h1>
            <p style={{ fontSize: "clamp(17px, 3.5vw, 22px)", color: "#d6e4dc", margin: `0 ${align === "center" ? "auto" : "0"} 28px`, maxWidth: "32em" }}>
              A free Quran app with no ads, no subscriptions and no locked features.
            </p>
            <DownloadButton label="Download free on Google Play" full={isMobile} />
            <p style={{ color: "#c9d9d1", fontSize: "15px", marginTop: "14px" }}>For Android 7.0 and up</p>
          </div>
          <img
            src={appimage}
            alt="MyQuran app"
            style={{
              width: "clamp(140px, 38vw, 340px)",
              height: "clamp(140px, 38vw, 340px)",
              flexShrink: 0,
              borderRadius: "50%",
              border: `4px solid ${GOLD}`,
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </header>

      {/* Features: 1 column on phones, 2 on tablets, 3 on desktop (auto-fits) */}
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: `clamp(40px, 8vw, 80px) ${sidePad}` }}>
        <h2 style={{ ...h2, color: GREEN, textAlign: align }}>Everything you need to read every day</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "20px" }}>
          {features.map(([title, text]) => (
            <div key={title} style={{ background: "#fff", borderLeft: `5px solid ${GOLD}`, borderRadius: "10px", padding: "20px 22px" }}>
              <h3 style={{ margin: "0 0 6px", fontSize: "clamp(18px, 4vw, 22px)", color: GREEN2 }}>{title}</h3>
              <p style={{ margin: 0, color: "#4b5b52", fontSize: "clamp(15px, 3.5vw, 17px)" }}>{text}</p>
            </div>
          ))}
        </div>
      </main>

      <section style={{ background: GREEN2, color: "#fff", textAlign: "center", padding: `clamp(40px, 8vw, 72px) ${sidePad}` }}>
        <h2 style={h2}>Make the Quran part of your every day</h2>
        <DownloadButton label="Download free" full={isMobile} />
      </section>

      <footer
        style={{
          background: GREEN,
          color: "#c9d9d1",
          textAlign: "center",
          fontSize: "15px",
          padding: `24px ${sidePad}`,
          paddingBottom: isMobile ? "96px" : "24px", // room for the sticky bar
          overflowWrap: "anywhere",
        }}
      >
        MyQuran by almarufdevelopers ·{" "}
        <a href="mailto:almarufdevelopers@gmail.com" style={{ color: "#fff" }}>almarufdevelopers@gmail.com</a> ·{" "}
        <a href="https://docs.google.com/document/d/1Dq5F67UeURC1A79kXBKHAjtt54KSs4XWsPF6zXUSOsA/edit?usp=sharing" style={{ color: "#fff" }}>Privacy policy</a>
      </footer>

      {/* Sticky download bar, phones only */}
      {isMobile && (
        <div style={{ position: "fixed", left: 0, right: 0, bottom: 0, background: GREEN, padding: "10px 16px calc(10px + env(safe-area-inset-bottom, 0px))", borderTop: `2px solid ${GOLD}`, zIndex: 10 }}>
          <div style={{ maxWidth: "420px", margin: "0 auto" }}>
            <DownloadButton label="Download free" full />
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;