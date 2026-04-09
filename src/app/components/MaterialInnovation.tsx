import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MaterialInnovation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[80vh] min-h-[600px] overflow-hidden bg-[#FFF8F0] flex items-center justify-center"
      style={{ position: 'relative' }}
    >
      {/* Textured Material Background with Parallax */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 z-0 w-full h-[140%] -top-[20%]"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1573227897444-860137a0fe74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0dXJlZCUyMGxlYXRoZXIlMjBzaGVldHxlbnwxfHx8fDE3NzU2MjU5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Textured Chitosan Leather"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay to enhance the blend effect */}
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      {/* Large Editorial Text with mix-blend-difference */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-8 text-center pointer-events-none mix-blend-difference">
        <h2 
          style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', lineHeight: '0.9' }} 
          className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold text-white uppercase"
        >
          Material
          <br />
          <span className="italic font-light lowercase">innovation</span>
        </h2>
      </div>
    </section>
  );
}
