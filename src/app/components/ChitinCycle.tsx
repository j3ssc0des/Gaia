import { useEffect } from 'react';

export function ChitinCycle() {
  useEffect(() => {
    // Update progress bar based on which stage is in view
    const stages = document.querySelectorAll('.chitin-stage');
    const progressFill = document.getElementById('chitin-progress-fill');
    if (!stages.length || !progressFill) return;

    const progressObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stageNum = parseInt(entry.target.getAttribute('data-stage') || '1', 10);
            const pct = (stageNum / stages.length) * 100;
            progressFill.style.width = pct + '%';
          }
        });
      },
      { threshold: 0.5 }
    );

    stages.forEach((stage) => progressObserver.observe(stage));

    return () => {
      stages.forEach((stage) => progressObserver.unobserve(stage));
    };
  }, []);

  return (
    <>
      <style>{`
        /* ════════════════════════════════════════════════════
           GAIA CHITIN CYCLE — Streamable Iframe Version
           All 5 videos hosted on Streamable, embedded via iframe
           with logo-cover overlays to hide the Streamable watermark.
           ════════════════════════════════════════════════════ */

        :root {
          --cream: #FFF8F0;
          --ink-soft: #2D5016;
          --ink-muted: rgba(45, 80, 22, 0.7);
          --ink-faint: rgba(45, 80, 22, 0.4);
          --accent-1: #2D5016;
          --accent-2: #436e25;
          --accent-3: #5f9a38;
          --chrome: rgba(45, 80, 22, 0.15);
        }

        /* Section wrapper */
        .chitin-cycle {
          position: relative;
          padding-top: 80px;
        }

        /* Header */
        .chitin-header {
          max-width: 1024px;
          margin: 0 auto 64px;
          padding: 0 24px;
          text-align: center;
        }
        .chitin-eyebrow {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 12px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(45, 80, 22, 0.7);
          margin-bottom: 16px;
        }
        .chitin-title {
          font-family: 'Cabinet Grotesk', system-ui, sans-serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 800;
          color: var(--ink-soft);
          line-height: 1.05;
          letter-spacing: -0.02em;
        }
        .chitin-subtitle {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 16px;
          color: var(--ink-muted);
          margin-top: 24px;
          max-width: 560px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        /* Each scroll stage */
        .chitin-stage {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
        }
        .chitin-stage-grid {
          max-width: 1152px;
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .chitin-stage-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        /* Video wrapper with Streamable iframe */
        .chitin-video-wrap {
          position: relative;
          width: 100%;
          max-width: 560px;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: 28px;
          border: none;
          box-shadow: 0 30px 80px -20px rgba(45, 80, 22, 0.15);
          background: var(--cream);
          margin: 0 auto;
          isolation: isolate;
        }
        .chitin-video-wrap iframe {
          position: absolute;
          /* Scale up + shift to completely crop out Streamable branding without overlays */
          top: -20%;
          left: -20%;
          width: 140%;
          height: 140%;
          border: none;
          pointer-events: none;
          z-index: 1;
        }

        /* Stage info column */
        .chitin-stage-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .chitin-stage-num {
          font-family: 'Cabinet Grotesk', system-ui, sans-serif;
          font-size: 96px;
          font-weight: 800;
          line-height: 1;
          color: var(--ink-soft);
          opacity: 0.2;
        }
        .chitin-stage-title {
          font-family: 'Cabinet Grotesk', system-ui, sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: var(--ink-soft);
        }
        .chitin-stage-body {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 16px;
          color: var(--ink-muted);
          line-height: 1.65;
          max-width: 440px;
        }

        /* Reverse layout for even-numbered stages (02, 04) */
        .chitin-stage.reverse .chitin-stage-grid {
          direction: rtl;
        }
        .chitin-stage.reverse .chitin-stage-grid > * {
          direction: ltr;
        }

        /* Sticky progress bar */
        .chitin-progress {
          position: sticky;
          bottom: 32px;
          height: 4px;
          margin: 40px auto 0;
          max-width: 280px;
          background: rgba(45, 80, 22, 0.15);
          border-radius: 999px;
          overflow: hidden;
          z-index: 20;
        }
        .chitin-progress-fill {
          height: 100%;
          width: 20%;
          background: var(--ink-soft);
          transition: width 0.4s ease-out;
          border-radius: inherit;
        }

        /* Divider lines */
        .chitin-divider {
          height: 1.5px;
          max-width: 1280px;
          margin: 0 auto;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(45, 80, 22, 0.2),
            rgba(45, 80, 22, 0.4),
            rgba(45, 80, 22, 0.2),
            transparent
          );
        }
      `}</style>

      <section id="cycle" className="chitin-cycle py-24 bg-[#FFF8F0]" style={{ position: 'relative' }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="chitin-divider"></div>

          <div className="chitin-header">
            <p className="chitin-eyebrow">The Process</p>
            <h2 className="chitin-title">The Chitin Cycle</h2>
            <p className="chitin-subtitle">
              From shrimp shell waste to wearable artifact. Five stages of transformation.
            </p>
          </div>

          {/* Stage 01: Waste Collected */}
          <div className="chitin-stage" data-stage="1">
            <div className="chitin-stage-grid">
              <div className="chitin-video-wrap">
                <iframe
                  src="https://streamable.com/e/wgj609?autoplay=1&muted=1&loop=1&nocontrols=1"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="chitin-stage-info">
                <span className="chitin-stage-num">01</span>
                <h3 className="chitin-stage-title">Waste Collected</h3>
                <p className="chitin-stage-body">
                  6 million tons of crustacean shells become global seafood waste every year. We start
                  where everyone else stops.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 02: Chitin Extracted */}
          <div className="chitin-stage reverse" data-stage="2">
            <div className="chitin-stage-grid">
              <div className="chitin-video-wrap">
                <iframe
                  src="https://streamable.com/e/orwqwk?autoplay=1&muted=1&loop=1&nocontrols=1"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="chitin-stage-info">
                <span className="chitin-stage-num">02</span>
                <h3 className="chitin-stage-title">Chitin Extracted</h3>
                <p className="chitin-stage-body">
                  Shells are dried, crushed, and deacetylated into raw chitin flakes — the molecular
                  backbone of every charm.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 03: Biopolymer Formed */}
          <div className="chitin-stage" data-stage="3">
            <div className="chitin-stage-grid">
              <div className="chitin-video-wrap">
                <iframe
                  src="https://streamable.com/e/a79hyj?autoplay=1&muted=1&loop=1&nocontrols=1"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="chitin-stage-info">
                <span className="chitin-stage-num">03</span>
                <h3 className="chitin-stage-title">Biopolymer Formed</h3>
                <p className="chitin-stage-body">
                  Chitosan transforms into a flexible, iridescent bio-leather sheet — the hand of
                  luxury, the soul of compost.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 04: Charm Crafted */}
          <div className="chitin-stage reverse" data-stage="4">
            <div className="chitin-stage-grid">
              <div className="chitin-video-wrap">
                <iframe
                  src="https://streamable.com/e/5tt82h?autoplay=1&muted=1&loop=1&nocontrols=1"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="chitin-stage-info">
                <span className="chitin-stage-num">04</span>
                <h3 className="chitin-stage-title">Charm Crafted</h3>
                <p className="chitin-stage-body">
                  Each piece is precision-cut and hand-stitched. No two are exactly alike — by design,
                  by nature.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 05: Returned to Earth */}
          <div className="chitin-stage" data-stage="5">
            <div className="chitin-stage-grid">
              <div className="chitin-video-wrap">
                <iframe
                  src="https://streamable.com/e/a6mtgp?autoplay=1&muted=1&loop=1&nocontrols=1"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="chitin-stage-info">
                <span className="chitin-stage-num">05</span>
                <h3 className="chitin-stage-title">Returned to Earth</h3>
                <p className="chitin-stage-body">
                  An accessory that returns to soil in under 12 months. The cycle closes. The story
                  continues.
                </p>
              </div>
            </div>
          </div>

          {/* Sticky progress bar */}
          <div className="chitin-progress">
            <div className="chitin-progress-fill" id="chitin-progress-fill"></div>
          </div>

          <div className="chitin-divider" style={{ marginTop: '80px' }}></div>
        </div>
      </section>
    </>
  );
}
