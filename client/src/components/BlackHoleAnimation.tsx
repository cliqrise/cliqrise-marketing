import { useEffect, useRef } from 'react';

export default function BlackHoleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 100;

    // Colors from Figma description
    const colors = ['#c75a78', '#ffd666']; // Red/Pink and Gold

    class Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      angle: number;
      distance: number;
      speed: number;

      constructor(w: number, h: number) {
        this.angle = Math.random() * Math.PI * 2;
        this.distance = Math.random() * (Math.min(w, h) / 2) + 50;
        this.x = w / 2 + Math.cos(this.angle) * this.distance;
        this.y = h / 2 + Math.sin(this.angle) * this.distance;
        this.radius = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speed = Math.random() * 0.02 + 0.01;
      }

      update(w: number, h: number) {
        this.angle += this.speed;
        this.distance -= 0.5;

        if (this.distance < 20) {
           // Reset particle
           this.angle = Math.random() * Math.PI * 2;
           this.distance = Math.max(w, h) / 2;
           this.speed = Math.random() * 0.02 + 0.01;
        }

        this.x = w / 2 + Math.cos(this.angle) * this.distance;
        this.y = h / 2 + Math.sin(this.angle) * this.distance;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.fillStyle = '#1a1c2e'; // Dark Navy Background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Accretion Disk Glow
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        10,
        canvas.width / 2,
        canvas.height / 2,
        150
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
      gradient.addColorStop(0.5, 'rgba(199, 90, 120, 0.2)'); // Pinkish glow
      gradient.addColorStop(1, 'rgba(26, 28, 46, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      // Draw Pulsing Question Mark
      const time = Date.now() / 1000;
      const opacity = 0.5 + Math.sin(time * 2) * 0.3;
      
      ctx.font = 'bold 80px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Glow for question mark
      ctx.shadowColor = '#d946ef'; // Magenta-ish
      ctx.shadowBlur = 20;
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fillText('?', canvas.width / 2, canvas.height / 2);
      ctx.shadowBlur = 0; // Reset shadow

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        init();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full rounded-full" />;
}
