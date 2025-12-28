'use client';

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  angle: number;
  radius: number;
  speed: number;
  size: number;
  opacity: number;
  color: 'pink' | 'gold';
}

interface BlackHoleProps {
  className?: string;
  size?: number; // Size in pixels, default 400
}

export function BlackHole({ className = "", size = 400 }: BlackHoleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number>();

  // Scale factor based on size (original was 800px canvas)
  const scale = size / 800;

  useEffect(() => {
    // Create initial particles
    const initialParticles: Particle[] = [];
    for (let i = 0; i < 150; i++) {
      initialParticles.push({
        angle: Math.random() * Math.PI * 2,
        radius: 150 + Math.random() * 250,
        speed: 0.3 + Math.random() * 0.7,
        size: 1 + Math.random() * 3,
        opacity: Math.random() * 0.8 + 0.2,
        color: Math.random() > 0.4 ? 'pink' : 'gold',
      });
    }
    setParticles(initialParticles);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.angle += particle.speed * 0.01;
        particle.radius -= particle.speed * 0.5;

        if (particle.radius < 50) {
          particle.radius = 150 + Math.random() * 250;
          particle.angle = Math.random() * Math.PI * 2;
        }

        const x = centerX + Math.cos(particle.angle) * particle.radius;
        const y = centerY + Math.sin(particle.angle) * particle.radius;

        const baseColor = particle.color === 'pink' ? '#c75a78' : '#ffd666';

        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${baseColor}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Trailing effect
        ctx.beginPath();
        const trailX = centerX + Math.cos(particle.angle - 0.1) * (particle.radius + 10);
        const trailY = centerY + Math.sin(particle.angle - 0.1) * (particle.radius + 10);
        ctx.strokeStyle = `${baseColor}${Math.floor(particle.opacity * 0.3 * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = particle.size * 0.5;
        ctx.moveTo(x, y);
        ctx.lineTo(trailX, trailY);
        ctx.stroke();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles]);

  return (
    <div 
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Central black hole */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Larger gold particles (right side) */}
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={`gold-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${(6 + Math.random() * 6) * scale}px`,
              height: `${(6 + Math.random() * 6) * scale}px`,
              backgroundColor: '#ffd666',
              boxShadow: '0 0 10px rgba(255, 214, 102, 0.8)',
              left: '50%',
              top: '50%',
              x: `${(100 + Math.random() * 80) * scale}px`,
              y: `${(-80 + Math.random() * 160) * scale}px`,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: [0.8, 0.3],
              scale: [1, 0.3],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeIn",
              delay: i * 2,
            }}
          />
        ))}

        {/* Larger pink particles (left side) */}
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={`pink-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${(6 + Math.random() * 6) * scale}px`,
              height: `${(6 + Math.random() * 6) * scale}px`,
              backgroundColor: '#c75a78',
              boxShadow: '0 0 10px rgba(199, 90, 120, 0.8)',
              left: '50%',
              top: '50%',
              x: `${(-100 - Math.random() * 80) * scale}px`,
              y: `${(-80 + Math.random() * 160) * scale}px`,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: [0.8, 0.3],
              scale: [1, 0.3],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeIn",
              delay: i * 2,
            }}
          />
        ))}

        {/* Outer glow rings */}
        {[1, 2, 3, 4].map((ring) => (
          <motion.div
            key={ring}
            className="absolute rounded-full"
            style={{
              width: `${ring * 100 * scale}px`,
              height: `${ring * 100 * scale}px`,
              border: `2px solid rgba(199, 90, 120, ${0.3 / ring})`,
              boxShadow: `0 0 ${ring * 15}px rgba(199, 90, 120, ${0.4 / ring})`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: {
                duration: 20 - ring * 2,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}

        {/* Particle canvas */}
        <canvas
          ref={canvasRef}
          width={800}
          height={800}
          className="absolute"
          style={{
            width: size,
            height: size,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Event horizon (black center) */}
        <motion.div
          className="absolute rounded-full bg-black"
          style={{
            width: `${128 * scale}px`,
            height: `${128 * scale}px`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: `
              0 0 30px rgba(199, 90, 120, 0.8),
              0 0 60px rgba(255, 214, 102, 0.6),
              0 0 90px rgba(199, 90, 120, 0.4),
              inset 0 0 30px rgba(0, 0, 0, 1)
            `,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Question mark */}
        <div 
          className="absolute pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <motion.span
            className="text-white/80 font-bold block"
            style={{
              fontSize: `${56 * scale}px`,
              textShadow: '0 0 20px rgba(199, 90, 120, 0.8), 0 0 40px rgba(199, 90, 120, 0.6), 0 0 60px rgba(199, 90, 120, 0.4)',
            }}
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ?
          </motion.span>
        </div>

        {/* Photon sphere */}
        <motion.div
          className="absolute rounded-full border-2"
          style={{
            width: `${160 * scale}px`,
            height: `${160 * scale}px`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            borderColor: 'rgba(255, 214, 102, 0.3)',
            boxShadow: "0 0 20px rgba(255, 214, 102, 0.6)",
          }}
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Gravitational lensing effect */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: `${384 * scale}px`,
            height: `${384 * scale}px`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, transparent 20%, rgba(199, 90, 120, 0.1) 40%, rgba(255, 214, 102, 0.1) 60%, transparent 80%)`,
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>
    </div>
  );
}