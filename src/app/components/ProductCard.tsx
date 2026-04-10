import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductCard({ name, gradient, imageUrl, imageStyle }: { name: string; gradient: string; imageUrl: string; imageStyle?: React.CSSProperties }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      className="rounded-3xl overflow-clip shadow-lg cursor-pointer"
    >
      <div className={`h-[400px] p-8 flex flex-col justify-between ${gradient}`}>
        <div className="flex-1 flex items-center justify-center relative">
          <ImageWithFallback
            src={imageUrl}
            alt={name}
            className="w-72 h-72 object-contain filter drop-shadow-2xl"
            style={{ transform: 'translateZ(50px)', ...imageStyle }}
          />
        </div>
        <div className="text-center">
          <h3 style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', transform: 'translateZ(30px)' }} className="text-2xl font-medium text-[#2D5016]">
            {name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}