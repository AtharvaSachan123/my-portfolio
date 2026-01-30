import { useRef, useEffect } from 'react';

const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resize();
    
    const stars = Array.from({ length: 400 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5,
      opacity: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.5 + 0.2
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      requestAnimationFrame(animate);
    };
    
    animate();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-50 pointer-events-none mix-blend-screen" />;
};

export default StarField;
