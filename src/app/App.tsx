import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { MaterialInnovation } from './components/MaterialInnovation';
import { ChitinCycle } from './components/ChitinCycle';
import exampleImage from 'figma:asset/20ad5720398e7a9f47e9f82dea5eb01257f7ef64.png';
import aquaCeleryCharm from 'figma:asset/5b15dd2f3600cbb8c6c23fe6d3687d00187dd70e.png';
import coralPeriwinkleCharm from 'figma:asset/d7b8abdb112ef9e059d954cc975391bb504949a4.png';
import auroraMintCharm from 'figma:asset/02a698999f9697b7d1aa74a581869eb80e20fac9.png';
import sunkissedPearCharm from 'figma:asset/d3086240ca3105561f35a846121d973ce1ff195a.png';
import gourdFernCharm from 'figma:asset/f81a521a0d2b711b1aab82b5c6715c0e38ba292f.png';
import shrimpCharm from 'figma:asset/f252fee1548c45fdc73ff440f7b5a78897920d79.png';
import { ProductCard } from './components/ProductCard';
import gaiaLogo from 'figma:asset/449682b8382400bb7c6a592b4c61f2e88ffa318a.png';
import circularEconomyImage from 'figma:asset/f02bd5cffd4200260d3fbbca7d9f12eee0ff47d2.png';
import closedBoxImg from 'figma:asset/cb08f40b1985bab889f270d535b4c710fdfacc22.png';
import unboxingHandsImg from 'figma:asset/05e9f8d7bf5f3ab7dccb38cebc0a44b8a2f7c092.png';
import plantedPotImg from 'figma:asset/2e86142a8ec9968a97b49e728e3fdbcd60ac6839.png';

// Animated Counter Component
function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, isInView]);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      {count}
      {suffix}
    </div>
  );
}

// Fade-up section wrapper
function FadeUpSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={{ position: 'relative' }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#2D5016]">
      {/* Sticky Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 px-8 py-6 backdrop-blur-md bg-[#FFF8F0]/80"
        style={{ borderBottom: '1px solid rgba(45, 80, 22, 0.1)' }}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src={gaiaLogo} alt="GAIA Logo" className="h-10 w-auto object-contain mix-blend-multiply" />
          </div>
          <div className="hidden md:flex gap-8" style={{ fontFamily: 'var(--font-body)' }}>
            <a href="#manifesto" className="hover:opacity-60 transition-opacity">
              Story
            </a>
            <a href="#cycle" className="hover:opacity-60 transition-opacity">
              Process
            </a>
            <a href="#collection" className="hover:opacity-60 transition-opacity">
              Collection
            </a>
            <a href="#waitlist" className="hover:opacity-60 transition-opacity">
              Contact
            </a>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2D5016] text-[#FFF8F0] px-8 h-14 rounded-full hover:shadow-lg transition-shadow"
            style={{ fontFamily: 'var(--font-body)' }}
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Waitlist
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#74B3E6]/20 to-[#DBE098]/20" />
        <div className="max-w-[1440px] mx-auto px-8 py-24 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1
                style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
                className="text-6xl md:text-7xl font-bold leading-tight mb-6"
              >
                Born from the sea. Grown in the garden.
              </h1>
              <p style={{ fontFamily: 'var(--font-body)' }} className="text-xl opacity-80">
                Luxury bag charms crafted from shrimp-waste chitosan. Beautiful by design, biodegradable by nature.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFA182]/30 to-[#F3E7A1]/30 rounded-full blur-3xl" />
              <img
                src={exampleImage}
                alt="GAIA Charm"
                className="relative z-10 w-full h-[500px] object-cover rounded-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stat Bar */}
      <FadeUpSection className="border-y border-[#2D5016]/10 bg-white/40">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }} className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={6} suffix="M" />
              </div>
              <div style={{ fontFamily: 'var(--font-body)' }} className="text-sm opacity-70">
                tons waste/year
              </div>
            </div>
            <div className="text-center">
              <div style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }} className="text-4xl md:text-5xl font-bold mb-2">
                &lt;<AnimatedCounter end={12} />
              </div>
              <div style={{ fontFamily: 'var(--font-body)' }} className="text-sm opacity-70">
                months to biodegrade
              </div>
            </div>
            <div className="text-center">
              <div style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }} className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <div style={{ fontFamily: 'var(--font-body)' }} className="text-sm opacity-70">
                plant packaging
              </div>
            </div>
            <div className="text-center">
              <div style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }} className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={6} />
              </div>
              <div style={{ fontFamily: 'var(--font-body)' }} className="text-sm opacity-70">
                colorways
              </div>
            </div>
          </div>
        </div>
      </FadeUpSection>

      {/* Manifesto */}
      <section id="manifesto" className="py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeUpSection>
              <div className="relative rounded-full overflow-hidden aspect-square shadow-xl max-w-md mx-auto ring-8 ring-[#2D5016]/10 flex items-center justify-center">
                <motion.img 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  src={circularEconomyImage} 
                  alt="Circular Economy" 
                  className="w-full h-full max-w-none object-cover origin-center scale-110" 
                />
              </div>
            </FadeUpSection>
            <FadeUpSection>
              <div style={{ fontFamily: 'var(--font-body)' }} className="space-y-6 text-lg leading-relaxed">
                <p>
                  GAIA was born from a simple question: what if luxury meant leaving nothing behind? We source chitosan from
                  discarded shrimp shells—6 million tons of waste transformed into wearable art.
                </p>
                <p>
                  Each charm is hand-finished by artisans, colored with plant-based dyes, and designed to biodegrade in under a
                  year. No microplastics. No forever waste. Just beauty that returns.
                </p>
                <p>
                  This is fashion's future: material innovation meets timeless craft. Accessories that celebrate the earth instead
                  of exploiting it.
                </p>
              </div>
            </FadeUpSection>
          </div>
        </div>
      </section>

      {/* Chitin Cycle - Sticky Scroll */}
      <ChitinCycle />

      {/* Material Innovation Parallax */}
      <MaterialInnovation />

      {/* Collection Grid */}
      <section id="collection" className="py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-8">
          <FadeUpSection className="text-center mb-20">
            <h2 style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }} className="text-5xl md:text-6xl font-bold mb-4">
              Lost At Sea
            </h2>
            <p style={{ fontFamily: 'var(--font-body)' }} className="text-xl opacity-70">
              This collection features 6 shrimp characters with unique personalities, colors, and ocean stories.
            </p>
          </FadeUpSection>

          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard
              name="Aqua & Celery Green"
              gradient="bg-gradient-to-br from-[#74B3E6] to-[#DBE098]"
              imageUrl={aquaCeleryCharm}
            />
            <ProductCard
              name="Coral & Periwinkle"
              gradient="bg-gradient-to-br from-[#FFA182] to-[#A1ACE2]"
              imageUrl={coralPeriwinkleCharm}
            />
            <ProductCard
              name="Aurora & Mint"
              gradient="bg-gradient-to-br from-[#8878C0] to-[#43E7B5]"
              imageUrl={auroraMintCharm}
            />
            <ProductCard
              name="Sunkissed & Pear"
              gradient="bg-gradient-to-br from-[#FF4D1B] to-[#ECE7BF]"
              imageUrl={sunkissedPearCharm}
            />
            <ProductCard
              name="Champagne & Rosé"
              gradient="bg-gradient-to-br from-[#F3E7A1] to-[#FFA698]"
              imageUrl={shrimpCharm}
            />
            <ProductCard
              name="Gourd & Fern"
              gradient="bg-gradient-to-br from-[#E5EA7E] to-[#57C252]"
              imageUrl={gourdFernCharm}
            />
          </div>
        </div>
      </section>

      {/* Packaging Section */}
      <FadeUpSection className="py-24 bg-white/40">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left side: Vertical Image Stack */}
            <div className="flex flex-col gap-6 items-center w-full">
              {/* Image 1: The mystery */}
              <div className="w-full max-w-[220px] group">
                <ImageWithFallback
                  src={closedBoxImg}
                  alt="Closed sealed GAIA seed paper blind box"
                  className="w-full aspect-[4/3] object-cover rounded-[16px] shadow-sm transition-all duration-700 group-hover:-translate-y-1 group-hover:shadow-md"
                />
                <p style={{ fontFamily: 'var(--font-body)', letterSpacing: '2px' }} className="text-[#2D5016] text-[11px] mt-2 uppercase font-medium text-center">THE MYSTERY</p>
              </div>

              {/* Image 2: The reveal */}
              <div className="w-full max-w-[220px] group">
                <ImageWithFallback
                  src={unboxingHandsImg}
                  alt="Hands lifting the lid off the box mid-reveal"
                  className="w-full aspect-square object-cover rounded-[16px] shadow-sm transition-all duration-700 group-hover:-translate-y-1 group-hover:shadow-md"
                />
                <p style={{ fontFamily: 'var(--font-body)', letterSpacing: '2px' }} className="text-[#2D5016] text-[11px] mt-2 uppercase font-medium text-center">THE REVEAL</p>
              </div>

              {/* Image 3: The garden */}
              <div className="w-full max-w-[220px] group">
                <ImageWithFallback
                  src={plantedPotImg}
                  alt="Torn seed paper planted in a terracotta pot with herb sprouts growing"
                  className="w-full aspect-square object-cover rounded-[16px] shadow-sm transition-all duration-700 group-hover:-translate-y-1 group-hover:shadow-md"
                />
                <p style={{ fontFamily: 'var(--font-body)', letterSpacing: '2px' }} className="text-[#2D5016] text-[11px] mt-2 uppercase font-medium text-center">THE GARDEN</p>
              </div>
            </div>

            {/* Right side: Typography */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }} className="text-5xl md:text-6xl font-bold mb-6 text-[#2D5016]">
                Even the box becomes a garden
              </h2>
              <p style={{ fontFamily: 'var(--font-body)' }} className="text-xl leading-relaxed text-[#2D5016]/80">
                Our packaging is made from seed paper embedded with wildflower seeds. Plant it, water it, and watch your GAIA box
                bloom into life. Zero waste, infinite beauty.
              </p>
            </div>
          </div>
        </div>
      </FadeUpSection>

      {/* Waitlist CTA */}
      <section id="waitlist" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFA182] to-[#A1ACE2]" />
        <div className="max-w-[800px] mx-auto px-8 text-center relative z-10">
          <FadeUpSection>
            <h2 style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }} className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Launch April 2026
            </h2>
            <p style={{ fontFamily: 'var(--font-body)' }} className="text-xl mb-10 text-white/90">
              Join the waitlist for early access and exclusive launch offers
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/90 backdrop-blur-sm text-[#2D5016] placeholder:text-[#2D5016]/50 focus:outline-none focus:ring-2 focus:ring-white"
                style={{ fontFamily: 'var(--font-body)' }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-[#2D5016] text-[#FFF8F0] px-8 h-14 rounded-full hover:shadow-xl transition-shadow whitespace-nowrap"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Join Waitlist
              </motion.button>
            </form>
          </FadeUpSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D5016] text-[#FFF8F0] py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="mb-4 inline-flex bg-[#FFF8F0] rounded-full px-4 py-2">
                <img src={gaiaLogo} alt="GAIA Logo" className="h-8 w-auto object-contain mix-blend-multiply" />
              </div>
              <p style={{ fontFamily: 'var(--font-body)' }} className="text-sm opacity-70">
                Luxury biodegradable accessories made from shrimp-waste chitosan
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)' }} className="font-bold mb-4">
                Product
              </h4>
              <ul style={{ fontFamily: 'var(--font-body)' }} className="space-y-2 text-sm opacity-70">
                <li>
                  <a href="#collection" className="hover:opacity-100 transition-opacity">
                    Collection
                  </a>
                </li>
                <li>
                  <a href="#cycle" className="hover:opacity-100 transition-opacity">
                    Our Process
                  </a>
                </li>
                <li>
                  <a href="#manifesto" className="hover:opacity-100 transition-opacity">
                    Sustainability
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)' }} className="font-bold mb-4">
                Company
              </h4>
              <ul style={{ fontFamily: 'var(--font-body)' }} className="space-y-2 text-sm opacity-70">
                <li>About</li>
                <li>Artisans</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)' }} className="font-bold mb-4">
                Connect
              </h4>
              <ul style={{ fontFamily: 'var(--font-body)' }} className="space-y-2 text-sm opacity-70">
                <li>Instagram</li>
                <li>Email</li>
                <li>Newsletter</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#FFF8F0]/20 text-center">
            <p style={{ fontFamily: 'var(--font-body)' }} className="text-sm opacity-50">
              © 2026 GAIA. All rights reserved. Returns to earth.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}