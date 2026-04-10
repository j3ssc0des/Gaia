import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

import aquaCeleryCharm from 'figma:asset/20ad5720398e7a9f47e9f82dea5eb01257f7ef64.png';
import coralPeriwinkleCharm from 'figma:asset/d7b8abdb112ef9e059d954cc975391bb504949a4.png';
import auroraMintCharm from 'figma:asset/02a698999f9697b7d1aa74a581869eb80e20fac9.png';
import sunkissedPearCharm from 'figma:asset/d3086240ca3105561f35a846121d973ce1ff195a.png';
import gourdFernCharm from 'figma:asset/f81a521a0d2b711b1aab82b5c6715c0e38ba292f.png';
import shrimpCharm from 'figma:asset/f252fee1548c45fdc73ff440f7b5a78897920d79.png';
import closedBoxImg from 'figma:asset/cb08f40b1985bab889f270d535b4c710fdfacc22.png';
import gaiaLogo from 'figma:asset/449682b8382400bb7c6a592b4c61f2e88ffa318a.png';

const swatches = [
  { id: 'aqua', colorClass: 'bg-[#74B3E6]', image: aquaCeleryCharm, label: 'Aqua & Celery Green' },
  { id: 'coral', colorClass: 'bg-[#FFA182]', image: coralPeriwinkleCharm, label: 'Coral & Periwinkle' },
  { id: 'aurora', colorClass: 'bg-[#8878C0]', image: auroraMintCharm, label: 'Aurora & Mint' },
  { id: 'sunkissed', colorClass: 'bg-[#FF4D1B]', image: sunkissedPearCharm, label: 'Sunkissed & Pear' },
  { id: 'gourd', colorClass: 'bg-[#E5EA7E]', image: gourdFernCharm, label: 'Gourd & Fern' },
  { id: 'champagne', colorClass: 'bg-[#F3E7A1]', image: shrimpCharm, label: 'Champagne & Rosé' },
  { id: 'mystery', colorClass: 'bg-gradient-to-tr from-[#FFD700] to-[#FFA182]', image: closedBoxImg, label: 'Mystery Gold Edition', isGold: true },
];

export function HeroGamification() {
  const [activeSwatch, setActiveSwatch] = useState(swatches[0]);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center" style={{ position: 'relative' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#74B3E6]/10 to-[#DBE098]/10 pointer-events-none" />
      <div className="max-w-[1440px] mx-auto px-8 py-24 md:py-32 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Gamification UI */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start"
            style={{ position: 'relative' }}
          >
            <h1
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', lineHeight: '1.1' }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-[#2D5016]"
            >
              Born from the sea.<br/>Grown in the garden.
            </h1>
            
            <p style={{ fontFamily: 'var(--font-body)' }} className="text-xl opacity-80 text-[#2D5016] mb-12 max-w-lg leading-relaxed">
              Luxury bag charms crafted from shrimp-waste chitosan. Beautiful by design, biodegradable by nature.
            </p>
          </motion.div>
          
          {/* Right Side: Dynamic Image Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[500px] lg:h-[650px] w-full flex items-center justify-center"
            style={{ position: 'relative' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFA182]/20 to-[#F3E7A1]/20 rounded-full blur-[100px]" />
            
            <div className="relative z-10 w-full h-full max-w-[500px] max-h-[500px] lg:max-w-[600px] lg:max-h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSwatch.id}
                  initial={{ opacity: 0, y: 30, rotate: -5 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, y: -30, rotate: 5 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full h-full flex items-center justify-center drop-shadow-2xl"
                  style={{ position: 'relative' }}
                >
                  <ImageWithFallback
                    src={activeSwatch.image}
                    alt={activeSwatch.label}
                    className={`
                      w-full h-full object-cover rounded-[32px] shadow-2xl transition-transform duration-700 hover:scale-[1.02]
                    `}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}