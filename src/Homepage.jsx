import { useState, useEffect } from "react";
import appimage from "./assets/1.webp";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.jamia26.myquranapp";
const GREEN = "#0f3226";
const GREEN2 = "#1c4a3a";
const GOLD = "#f5d90a";
const PAPER = "#fbfaf6"; // Slightly warmer, lighter paper color
const TEXT_DARK = "#2a3b33";
const TEXT_LIGHT = "#556b60";

const features = [
  ["📖 Read in 10 languages", "English, French, Spanish, Indonesian, Turkish, Urdu, Bengali, Chinese, Russian and Swedish."],
  ["🎧 Listen to 16 reciters", "Verse-by-verse audio from Sudais, Alafasy, Abdul Basit and more."],
  ["📚 Tafsir Ibn Kathir offline", "The complete tafsir for all 114 surahs, one tap per ayah."],
  ["🔥 Build a daily habit", "Reading streaks and daily reminders keep you coming back."],
  ["🔖 Bookmarks and reflections", "Save any verse and write private notes on your phone."],
  ["🔍 Search the Quran", "Search by surah name, surah:ayah, or any word, even offline."],
];

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
        minHeight: "56px",
        textAlign: "center",
        background: hover ? "#fff" : GOLD,
        color: GREEN,
        fontSize: "clamp(18px, 4.5vw, 20px)",
        fontWeight: 800,
        padding: "16px 36px",
        borderRadius: "16px",
        textDecoration: "none",
        transition: "all 0.2s ease",
        boxShadow: hover ? "0 6px 20px rgba(245, 217, 10, 0.3)" : "0 4px 14px rgba(0,0,0,0.15)",
        transform: hover ? "translateY(-2px)" : "none",
        border: "2px solid transparent",
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

  const h2Style = {
    fontFamily: "'Playfair Display', Georgia, serif", // Elegant font
    fontSize: "clamp(28px, 5vw, 42px)",
    lineHeight: 1.2,
    margin: "0 0 32px",
    letterSpacing: "-0.5px",
  };

  return (
    // Outer wrapper: No horizontal padding/margin. Backgrounds go edge-to-edge.
    <div
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        color: TEXT_DARK,
        background: PAPER,
        lineHeight: 1.7,
        overflowX: "hidden",
        width: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      {/* --- HERO SECTION --- */}
      <header
        style={{
          background: `linear-gradient(135deg, ${GREEN} 0%, ${GREEN2} 100%)`, // Beautiful gradient
          color: "#fff",
          padding: `clamp(48px, 10vw, 100px) ${sidePad}`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto", // Centers the content
            display: "flex",
            flexDirection: width >= 1024 ? "row" : "column-reverse",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "clamp(32px, 6vw, 80px)",
            textAlign: align,
            position: "relative",
            zIndex: 2,
          }}
        >
          <div style={{ flex: "1 1 0", minWidth: 0 }}>
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(34px, 7vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.1,
                margin: "0 0 20px",
                letterSpacing: "-1px",
              }}
            >
              Read, listen and reflect on the Quran
            </h1>
            <p
              style={{
                fontSize: "clamp(17px, 3.5vw, 22px)",
                color: "#d6e4dc",
                margin: `0 ${align === "center" ? "auto" : "0"} 32px`,
                maxWidth: "32em",
                fontWeight: 400,
              }}
            >
              A free Quran app with no ads, no subscriptions and no locked features.
            </p>
            <DownloadButton label="Download free on Google Play" full={isMobile} />
            
          </div>
          
          <img
            src={appimage}
            alt="MyQuran app"
            style={{
              width: "clamp(160px, 40vw, 320px)",
              height: "clamp(160px, 40vw, 320px)",
              flexShrink: 0,
              borderRadius: "30%", // Modern squircle look instead of full circle
              border: `6px solid rgba(255,255,255,0.1)`,
              boxShadow: "0 24px 48px rgba(0,0,0,0.3)",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </header>

      {/* --- FEATURES SECTION --- */}
      <main
        style={{
          width: "100%",
          padding: `clamp(56px, 10vw, 100px) ${sidePad}`,
          background: PAPER,
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}> {/* Centers the content */}
          <h2 style={{ ...h2Style, color: GREEN, textAlign: align }}>
            Everything you need to read every day
          </h2>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              gap: "24px",
            }}
          >
            {features.map(([title, text]) => (
              <div
                key={title}
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "28px 24px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)", // Soft, modern shadow
                  border: "1px solid rgba(15, 50, 38, 0.05)",
                  transition: "transform 0.2s ease, boxShadow 0.2s ease",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: "clamp(18px, 4vw, 20px)",
                    color: GREEN2,
                    fontWeight: 700,
                  }}
                >
                  {title}
                </h3>
                <p style={{ margin: 0, color: TEXT_LIGHT, fontSize: "clamp(15px, 3.5vw, 16px)" }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* --- CALL TO ACTION SECTION --- */}
      <section
        style={{
          background: GREEN2,
          color: "#fff",
          textAlign: "center",
          padding: `clamp(56px, 10vw, 90px) ${sidePad}`,
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ ...h2Style, marginBottom: "24px" }}>Make the Quran part of your every day</h2>
          <DownloadButton label="Download free" full={isMobile} />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer
        style={{
          background: GREEN,
          color: "#a9bcb3",
          textAlign: "center",
          fontSize: "15px",
          padding: `32px ${sidePad}`,
          paddingBottom: isMobile ? "110px" : "32px", // Room for sticky bar
          width: "100%",
          borderTop: `1px solid rgba(255,255,255,0.05)`,
        }}
      >
        <p style={{ margin: 0, marginBottom: "8px" }}>
          MyQuran by almarufdevelopers
        </p>
        <p style={{ margin: 0 }}>
          <a href="mailto:almarufdevelopers@gmail.com" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>
            almarufdevelopers@gmail.com
          </a>
          <span style={{ margin: "0 12px", color: "rgba(255,255,255,0.2)" }}>|</span>
          <a
            href="https://docs.google.com/document/d/1Dq5F67UeURC1A79kXBKHAjtt54KSs4XWsPF6zXUSOsA/edit?usp=sharing"
            style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}
          >
            Privacy policy
          </a>
        </p>
      </footer>

      {/* --- STICKY MOBILE BAR --- */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(15, 50, 38, 0.95)",
            backdropFilter: "blur(10px)", // Modern glass effect
            padding: "12px 16px calc(12px + env(safe-area-inset-bottom, 0px))",
            borderTop: `1px solid rgba(245, 217, 10, 0.3)`,
            zIndex: 10,
          }}
        >
          <div style={{ maxWidth: "420px", margin: "0 auto" }}>
            <DownloadButton label="Download free" full />
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;