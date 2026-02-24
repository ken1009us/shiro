import { motion } from 'framer-motion';

// 30 sakura petals with randomized trajectories
const petals = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 4,
  duration: 4 + Math.random() * 4,
  size: 8 + Math.random() * 10,
  drift: (Math.random() - 0.5) * 60,
  rotation: Math.random() * 720,
}));

export default function SakuraAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: '-20px',
            width: petal.size,
            height: petal.size,
          }}
          initial={{ y: -20, x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: '110vh',
            x: petal.drift,
            rotate: petal.rotation,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'easeIn',
          }}
        >
          {/* SVG sakura petal */}
          <svg viewBox="0 0 20 20" width="100%" height="100%">
            <path
              d="M10,2 Q14,6 12,10 Q14,14 10,18 Q6,14 8,10 Q6,6 10,2Z"
              fill="#e8a0b4"
              fillOpacity={0.7}
            />
            <path
              d="M10,6 L10,14"
              stroke="#d4899e"
              strokeWidth={0.3}
              strokeOpacity={0.5}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
