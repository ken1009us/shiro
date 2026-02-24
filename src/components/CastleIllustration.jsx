// Pure SVG castle illustration — multiple distinct styles
import { useEffect, useState } from 'react';

function lightenDarkColor(hex, isDark) {
  if (!isDark) return hex;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  if (r + g + b < 180) {
    const boost = 70;
    return `#${Math.min(255, r + boost).toString(16).padStart(2, '0')}${Math.min(255, g + boost).toString(16).padStart(2, '0')}${Math.min(255, b + boost).toString(16).padStart(2, '0')}`;
  }
  return hex;
}

export default function CastleIllustration({ illustration, size = 160 }) {
  const { style = 'classic', tiers = 3, color: rawColor = '#888', roofColor: rawRoofColor = '#333' } = illustration;
  const [isDark, setIsDark] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const color = lightenDarkColor(rawColor, isDark);
  const roofColor = lightenDarkColor(rawRoofColor, isDark);
  const w = size;
  const h = size;
  const dk = isDark; // shorthand

  const uid = `ci-${style}-${dk ? 'd' : 'l'}`;
  const stoneTop = dk ? '#aaa898' : '#9a9a88';
  const stoneBot = dk ? '#8a8a78' : '#7a7a68';
  const white = dk ? '#d8d0c8' : '#f5f0e8';
  const treeGreen = dk ? '#5a8a5a' : '#4a7a4a';
  const treeDark = dk ? '#3a6a3a' : '#2a5a2a';
  const woodBrown = dk ? '#9a8a6a' : '#7b6b4b';
  const groundY = h * 0.92;

  // ─── Shared components ───

  // Classic stone foundation (trapezoidal ishigaki)
  const StoneBase = ({ topY = h * 0.65, topW = 0.50, botW = 0.62 }) => {
    const cx = w / 2;
    const tl = cx - w * topW / 2;
    const tr = cx + w * topW / 2;
    const bl = cx - w * botW / 2;
    const br = cx + w * botW / 2;
    return (
      <g>
        <path d={`M${bl},${groundY} L${tl},${topY} L${tr},${topY} L${br},${groundY}Z`}
          fill={`url(#${uid}-stone)`} stroke={dk ? '#8a8a7a' : '#6b6b5a'} strokeWidth={0.6} />
        {/* Stone block lines */}
        {[0.25, 0.45, 0.65, 0.82].map((t, i) => {
          const y = topY + (groundY - topY) * t;
          const spread = t * (botW - topW) / 2;
          return (
            <line key={i} x1={tl - w * spread + 3} y1={y} x2={tr + w * spread - 3} y2={y}
              stroke={dk ? '#8a8a7a' : '#6b6b5a'} strokeWidth={0.3} strokeOpacity={0.4} />
          );
        })}
      </g>
    );
  };

  const Ground = () => (
    <ellipse cx={w / 2} cy={groundY + 4} rx={w * 0.40} ry={h * 0.02} fill="rgba(0,0,0,0.08)" />
  );

  // A simple tree
  const Tree = ({ x, y, s = 1.0 }) => (
    <g>
      <line x1={x} y1={y} x2={x} y2={y + 14 * s} stroke={woodBrown} strokeWidth={1.5 * s} />
      <circle cx={x} cy={y - 2 * s} r={8 * s} fill={treeGreen} fillOpacity={0.7} />
      <circle cx={x - 4 * s} cy={y - 5 * s} r={6 * s} fill={treeDark} fillOpacity={0.5} />
    </g>
  );

  // Curved Japanese roof
  const Roof = ({ cx, y, rw, rh = 12, fill = roofColor }) => (
    <g>
      <path d={`M${cx - rw},${y} Q${cx - rw * 0.3},${y - rh * 0.5} ${cx},${y - rh}
        Q${cx + rw * 0.3},${y - rh * 0.5} ${cx + rw},${y}`}
        fill={fill} stroke={dk ? '#666' : 'none'} strokeWidth={dk ? 0.4 : 0} />
      <line x1={cx - rw} y1={y} x2={cx + rw} y2={y}
        stroke={dk ? '#777' : fill} strokeWidth={0.6} />
    </g>
  );

  const renderIllustration = () => {
    const cx = w / 2;

    switch (style) {

      // ━━━ Classic tiered keep (天守閣) ━━━
      case 'classic':
      case 'black':
      case 'white':
      case 'gold':
      case 'red':
      case 'imperial':
      default: {
        const t = Math.max(tiers || 3, 1);
        const baseTopY = h * 0.62;
        const tierData = [];
        const startY = h * 0.06;
        const endY = baseTopY;
        const totalH = endY - startY;
        const tierH = totalH / t;
        const maxW = w * 0.50;
        const minW = w * 0.18;

        for (let i = 0; i < t; i++) {
          const frac = t === 1 ? 0.5 : i / (t - 1);
          tierData.push({
            w: minW + frac * (maxW - minW),
            y: startY + i * tierH,
            h: tierH,
          });
        }

        const isRed = style === 'red';
        return (
          <g>
            <StoneBase topY={baseTopY} topW={0.50} botW={0.64} />
            {tierData.map((td, i) => {
              const oh = td.w * 0.12;
              const wallColor = isRed ? color : (i % 2 === 0 ? color : white);
              const wallY = td.y + td.h * 0.30;
              const wallH = td.h * 0.70;
              return (
                <g key={i}>
                  {/* Roof */}
                  <Roof cx={cx} y={wallY} rw={td.w / 2 + oh} rh={td.h * 0.30} />
                  {/* Wall */}
                  <rect x={cx - td.w / 2} y={wallY} width={td.w} height={wallH}
                    fill={wallColor} stroke={dk ? '#888' : roofColor} strokeWidth={0.4} />
                  {/* Windows */}
                  {Array.from({ length: Math.max(1, Math.floor(td.w / 16)) }).map((_, j, arr) => {
                    const sp = td.w / (arr.length + 1);
                    return (
                      <rect key={j} x={cx - td.w / 2 + sp * (j + 1) - 1.5} y={wallY + wallH * 0.15}
                        width={3} height={wallH * 0.55} fill={roofColor} fillOpacity={0.45} rx={0.3} />
                    );
                  })}
                </g>
              );
            })}
            {/* Shachihoko on top */}
            {t >= 3 && (
              <g>
                <path d={`M${cx - 3},${startY + 6} Q${cx - 6},${startY + 1} ${cx - 3},${startY - 2}`}
                  fill="#c48a2a" stroke="#8b6914" strokeWidth={0.3} />
                <path d={`M${cx + 3},${startY + 6} Q${cx + 6},${startY + 1} ${cx + 3},${startY - 2}`}
                  fill="#c48a2a" stroke="#8b6914" strokeWidth={0.3} />
              </g>
            )}
            <Ground />
          </g>
        );
      }

      // ━━━ Ruins (城跡 — 石垣遺構) ━━━
      case 'ruins': {
        // No StoneBase — the ruins ARE the main feature
        const grassG = dk ? '#6a9a6a' : '#5a8a5a';
        return (
          <g>
            {/* Ground / hill shape */}
            <path d={`M${w * 0.05},${groundY} Q${w * 0.20},${h * 0.55} ${w * 0.50},${h * 0.48}
              Q${w * 0.80},${h * 0.55} ${w * 0.95},${groundY}Z`}
              fill={dk ? '#5a6a5a' : '#8aaa7a'} fillOpacity={0.3} />

            {/* Left stone wall section — taller, partially crumbled */}
            <path d={`M${w * 0.18},${groundY} L${w * 0.20},${h * 0.42} L${w * 0.24},${h * 0.36}
              L${w * 0.32},${h * 0.33} L${w * 0.38},${h * 0.35} L${w * 0.40},${h * 0.42}
              L${w * 0.42},${groundY}Z`}
              fill={color} stroke={roofColor} strokeWidth={0.6} />
            {/* Stone block texture on left wall */}
            {[0.42, 0.50, 0.58, 0.66, 0.74, 0.82].map((yR, i) => (
              <g key={`sl${i}`}>
                <line x1={w * 0.21 + i * 0.5} y1={h * yR} x2={w * 0.40 - i * 0.5} y2={h * yR}
                  stroke={roofColor} strokeWidth={0.4} strokeOpacity={0.35} />
                {/* Vertical joints */}
                {i % 2 === 0 && <line x1={w * (0.28 + (i % 3) * 0.03)} y1={h * yR} x2={w * (0.28 + (i % 3) * 0.03)} y2={h * (yR + 0.08)}
                  stroke={roofColor} strokeWidth={0.3} strokeOpacity={0.25} />}
              </g>
            ))}

            {/* Right stone wall section — shorter, more intact */}
            <path d={`M${w * 0.56},${groundY} L${w * 0.56},${h * 0.44} L${w * 0.60},${h * 0.40}
              L${w * 0.70},${h * 0.38} L${w * 0.76},${h * 0.40} L${w * 0.78},${h * 0.46}
              L${w * 0.80},${groundY}Z`}
              fill={color} stroke={roofColor} strokeWidth={0.6} />
            {[0.48, 0.56, 0.64, 0.72, 0.80].map((yR, i) => (
              <line key={`sr${i}`} x1={w * 0.58} y1={h * yR} x2={w * 0.78} y2={h * yR}
                stroke={roofColor} strokeWidth={0.4} strokeOpacity={0.35} />
            ))}

            {/* Grass patches on top of walls */}
            {[[0.26, 0.33], [0.33, 0.31], [0.37, 0.33], [0.62, 0.38], [0.72, 0.36]].map(([xr, yr], i) => (
              <g key={`g${i}`}>
                <path d={`M${w * xr - 3},${h * yr} Q${w * xr - 1},${h * yr - 5} ${w * xr},${h * yr - 7}
                  Q${w * xr + 1},${h * yr - 5} ${w * xr + 3},${h * yr}`}
                  fill={grassG} fillOpacity={0.7} />
              </g>
            ))}

            {/* Tree growing beside the ruins */}
            <Tree x={w * 0.12} y={h * 0.38} s={1.1} />
            <Tree x={w * 0.88} y={h * 0.44} s={0.9} />

            {/* Stone path / steps leading up */}
            {[0, 1, 2, 3].map(i => (
              <rect key={`st${i}`} x={w * 0.44} y={h * (0.62 + i * 0.07)} width={w * 0.12} height={3}
                fill={stoneTop} stroke={stoneBot} strokeWidth={0.3} rx={0.5} />
            ))}

            <Ground />
          </g>
        );
      }

      // ━━━ Mountain castle (山城) ━━━
      case 'yamashiro': {
        return (
          <g>
            {/* Mountain shape */}
            <path d={`M${w * 0.02},${groundY} Q${w * 0.15},${h * 0.40} ${w * 0.30},${h * 0.28}
              Q${w * 0.40},${h * 0.18} ${w * 0.50},${h * 0.14}
              Q${w * 0.60},${h * 0.18} ${w * 0.70},${h * 0.28}
              Q${w * 0.85},${h * 0.40} ${w * 0.98},${groundY}Z`}
              fill={dk ? '#4a5a4a' : '#7a9a6a'} fillOpacity={0.4} />

            {/* Terraced stone walls going up the mountain */}
            {/* Bottom terrace */}
            <path d={`M${w * 0.22},${h * 0.72} L${w * 0.25},${h * 0.58} L${w * 0.75},${h * 0.58} L${w * 0.78},${h * 0.72}Z`}
              fill={color} stroke={roofColor} strokeWidth={0.5} />
            {[0.62, 0.66, 0.70].map((yR, i) => (
              <line key={`b${i}`} x1={w * (0.24 + i * 0.01)} y1={h * yR} x2={w * (0.76 - i * 0.01)} y2={h * yR}
                stroke={roofColor} strokeWidth={0.3} strokeOpacity={0.35} />
            ))}

            {/* Middle terrace */}
            <path d={`M${w * 0.30},${h * 0.56} L${w * 0.32},${h * 0.43} L${w * 0.68},${h * 0.43} L${w * 0.70},${h * 0.56}Z`}
              fill={color} stroke={roofColor} strokeWidth={0.5} />
            {[0.47, 0.51].map((yR, i) => (
              <line key={`m${i}`} x1={w * 0.33} y1={h * yR} x2={w * 0.67} y2={h * yR}
                stroke={roofColor} strokeWidth={0.3} strokeOpacity={0.35} />
            ))}

            {/* Top platform with small turret */}
            <path d={`M${w * 0.37},${h * 0.41} L${w * 0.38},${h * 0.32} L${w * 0.62},${h * 0.32} L${w * 0.63},${h * 0.41}Z`}
              fill={color} stroke={roofColor} strokeWidth={0.5} />

            {/* Small turret/building at summit */}
            <rect x={cx - w * 0.07} y={h * 0.20} width={w * 0.14} height={h * 0.12}
              fill={white} stroke={roofColor} strokeWidth={0.4} />
            <Roof cx={cx} y={h * 0.20} rw={w * 0.12} rh={10} />

            {/* Trees on mountain slopes */}
            <Tree x={w * 0.14} y={h * 0.48} s={0.85} />
            <Tree x={w * 0.22} y={h * 0.38} s={0.7} />
            <Tree x={w * 0.86} y={h * 0.48} s={0.85} />
            <Tree x={w * 0.78} y={h * 0.38} s={0.7} />

            {/* Small trees near summit */}
            <circle cx={w * 0.32} cy={h * 0.28} r={4} fill={treeGreen} fillOpacity={0.6} />
            <circle cx={w * 0.68} cy={h * 0.28} r={4} fill={treeGreen} fillOpacity={0.6} />

            <Ground />
          </g>
        );
      }

      // ━━━ Gate (城門) ━━━
      case 'gate': {
        const gateTopY = h * 0.26;
        return (
          <g>
            <StoneBase topY={h * 0.65} topW={0.55} botW={0.68} />

            {/* Gate pillars — thick white walls */}
            <rect x={cx - w * 0.24} y={h * 0.30} width={w * 0.14} height={h * 0.35}
              fill={white} stroke={roofColor} strokeWidth={0.4} />
            <rect x={cx + w * 0.10} y={h * 0.30} width={w * 0.14} height={h * 0.35}
              fill={white} stroke={roofColor} strokeWidth={0.4} />

            {/* Gate opening (dark) */}
            <rect x={cx - w * 0.10} y={h * 0.38} width={w * 0.20} height={h * 0.27}
              fill={dk ? '#1a1a2a' : '#1a0f05'} rx={1} />

            {/* Gate doors — two panels with wood grain */}
            <line x1={cx} y1={h * 0.38} x2={cx} y2={h * 0.65} stroke={dk ? '#444' : '#3a2a1a'} strokeWidth={0.6} />
            {/* Metal studs */}
            {[0.44, 0.52, 0.58].map((yR, i) => (
              <g key={i}>
                <circle cx={cx - w * 0.04} cy={h * yR} r={1.5} fill={dk ? '#aaa' : '#8b8b6b'} />
                <circle cx={cx + w * 0.04} cy={h * yR} r={1.5} fill={dk ? '#aaa' : '#8b8b6b'} />
              </g>
            ))}

            {/* Upper turret (yagura) on top of gate */}
            <rect x={cx - w * 0.16} y={h * 0.16} width={w * 0.32} height={h * 0.14}
              fill={white} stroke={roofColor} strokeWidth={0.3} />
            {/* Turret windows */}
            {[-0.08, 0, 0.08].map((xOff, i) => (
              <rect key={i} x={cx + w * xOff - 2} y={h * 0.19} width={4} height={h * 0.08}
                fill={roofColor} fillOpacity={0.4} rx={0.3} />
            ))}

            {/* Main roof over turret */}
            <Roof cx={cx} y={h * 0.16} rw={w * 0.25} rh={14} />

            {/* Small connecting roof between turret and pillars */}
            <Roof cx={cx} y={h * 0.30} rw={w * 0.22} rh={6} />

            <Ground />
          </g>
        );
      }

      // ━━━ Ancient fortress (古代城柵 / チャシ) ━━━
      case 'ancient': {
        return (
          <g>
            {/* Earth mound / embankment */}
            <path d={`M${w * 0.08},${groundY} Q${w * 0.15},${h * 0.55} ${w * 0.25},${h * 0.50}
              L${w * 0.75},${h * 0.50} Q${w * 0.85},${h * 0.55} ${w * 0.92},${groundY}Z`}
              fill={dk ? '#6a7a5a' : '#8a9a6a'} fillOpacity={0.4} />

            {/* Wooden palisade walls */}
            {Array.from({ length: 16 }).map((_, i) => {
              const x = w * 0.15 + i * (w * 0.70 / 15);
              const top = h * 0.48 - (Math.sin(i * 0.5) * 2); // slight variation
              return <rect key={i} x={x - 1.5} y={top} width={3} height={groundY - top - h * 0.10}
                fill={woodBrown} stroke={dk ? '#6a5a3a' : '#5a4a2a'} strokeWidth={0.3} rx={0.5} />;
            })}
            {/* Horizontal beam */}
            <rect x={w * 0.14} y={h * 0.54} width={w * 0.72} height={2.5}
              fill={woodBrown} stroke={dk ? '#6a5a3a' : '#5a4a2a'} strokeWidth={0.3} />

            {/* Watchtower (raised on stilts) */}
            {/* Stilts */}
            <line x1={cx - 10} y1={h * 0.28} x2={cx - 10} y2={h * 0.52} stroke={woodBrown} strokeWidth={2} />
            <line x1={cx + 10} y1={h * 0.28} x2={cx + 10} y2={h * 0.52} stroke={woodBrown} strokeWidth={2} />
            {/* Cross braces */}
            <line x1={cx - 10} y1={h * 0.36} x2={cx + 10} y2={h * 0.46} stroke={woodBrown} strokeWidth={1} />
            {/* Platform */}
            <rect x={cx - 14} y={h * 0.27} width={28} height={2} fill={woodBrown} />
            {/* Tower body */}
            <rect x={cx - 12} y={h * 0.14} width={24} height={h * 0.14}
              fill={color} stroke={woodBrown} strokeWidth={0.5} />
            {/* Window */}
            <rect x={cx - 3} y={h * 0.17} width={6} height={h * 0.06}
              fill={dk ? '#1a1a2a' : '#2a1a0a'} rx={0.5} />
            {/* Thatched roof — steep triangle */}
            <path d={`M${cx - 18},${h * 0.14} L${cx},${h * 0.02} L${cx + 18},${h * 0.14}Z`}
              fill={roofColor} stroke={woodBrown} strokeWidth={0.5} />
            {/* Ridge pole decoration */}
            <line x1={cx - 2} y1={h * 0.005} x2={cx + 2} y2={h * 0.005} stroke={woodBrown} strokeWidth={1.5} />
            <line x1={cx} y1={h * 0.0} x2={cx} y2={h * 0.02} stroke={woodBrown} strokeWidth={1} />

            <Ground />
          </g>
        );
      }

      // ━━━ Palace (御殿 — 二条城 etc.) ━━━
      case 'palace': {
        return (
          <g>
            <StoneBase topY={h * 0.60} topW={0.60} botW={0.72} />

            {/* Main hall — wide and low */}
            <rect x={cx - w * 0.30} y={h * 0.34} width={w * 0.60} height={h * 0.26}
              fill={white} stroke={roofColor} strokeWidth={0.4} />
            {/* Main hall roof — wide sweeping */}
            <Roof cx={cx} y={h * 0.34} rw={w * 0.38} rh={16} />

            {/* Left wing */}
            <rect x={w * 0.10} y={h * 0.42} width={w * 0.22} height={h * 0.18}
              fill={white} stroke={roofColor} strokeWidth={0.3} />
            <Roof cx={w * 0.21} y={h * 0.42} rw={w * 0.16} rh={10} />

            {/* Right wing */}
            <rect x={w * 0.68} y={h * 0.42} width={w * 0.22} height={h * 0.18}
              fill={white} stroke={roofColor} strokeWidth={0.3} />
            <Roof cx={w * 0.79} y={h * 0.42} rw={w * 0.16} rh={10} />

            {/* Sliding door lines on main hall */}
            {[-0.18, -0.08, 0.02, 0.12, 0.22].map((xOff, i) => (
              <line key={i} x1={cx + w * xOff} y1={h * 0.40} x2={cx + w * xOff} y2={h * 0.58}
                stroke={roofColor} strokeWidth={0.3} strokeOpacity={0.35} />
            ))}

            {/* Gold decorative elements */}
            <rect x={cx - 2} y={h * 0.20} width={4} height={4} fill="#c48a2a" rx={1} />

            <Ground />
          </g>
        );
      }

      // ━━━ Gusuku (琉球城) ━━━
      case 'gusuku': {
        const coralColor = color;
        const coralDark = roofColor;
        return (
          <g>
            {/* Curved coral stone walls — distinctive gusuku feature */}
            {/* Left wall — curving upward */}
            <path d={`M${w * 0.06},${groundY} Q${w * 0.10},${h * 0.50} ${w * 0.18},${h * 0.35}
              Q${w * 0.26},${h * 0.25} ${w * 0.36},${h * 0.22}
              L${w * 0.36},${h * 0.30} Q${w * 0.28},${h * 0.32} ${w * 0.22},${h * 0.42}
              Q${w * 0.16},${h * 0.55} ${w * 0.14},${groundY}Z`}
              fill={coralColor} stroke={coralDark} strokeWidth={0.6} />

            {/* Right wall — curving upward */}
            <path d={`M${w * 0.94},${groundY} Q${w * 0.90},${h * 0.50} ${w * 0.82},${h * 0.35}
              Q${w * 0.74},${h * 0.25} ${w * 0.64},${h * 0.22}
              L${w * 0.64},${h * 0.30} Q${w * 0.72},${h * 0.32} ${w * 0.78},${h * 0.42}
              Q${w * 0.84},${h * 0.55} ${w * 0.86},${groundY}Z`}
              fill={coralColor} stroke={coralDark} strokeWidth={0.6} />

            {/* Stone texture on walls */}
            {[0.30, 0.40, 0.50, 0.60, 0.72].map((yR, i) => (
              <g key={i}>
                <line x1={w * (0.12 + i * 0.01)} y1={h * yR} x2={w * (0.34 - i * 0.01)} y2={h * yR}
                  stroke={coralDark} strokeWidth={0.3} strokeOpacity={0.3} />
                <line x1={w * (0.66 + i * 0.01)} y1={h * yR} x2={w * (0.88 - i * 0.01)} y2={h * yR}
                  stroke={coralDark} strokeWidth={0.3} strokeOpacity={0.3} />
              </g>
            ))}

            {/* Arched gate in center */}
            <path d={`M${w * 0.36},${groundY} L${w * 0.36},${h * 0.40}
              Q${w * 0.50},${h * 0.28} ${w * 0.64},${h * 0.40} L${w * 0.64},${groundY}Z`}
              fill={coralColor} stroke={coralDark} strokeWidth={0.6} />
            {/* Gate opening */}
            <path d={`M${w * 0.40},${groundY} L${w * 0.40},${h * 0.50}
              Q${w * 0.50},${h * 0.38} ${w * 0.60},${h * 0.50} L${w * 0.60},${groundY}Z`}
              fill={dk ? '#1a1a2a' : '#2a1a1a'} />

            {/* Sacred utaki tree */}
            <line x1={w * 0.50} y1={h * 0.05} x2={w * 0.50} y2={h * 0.22} stroke={woodBrown} strokeWidth={2} />
            <circle cx={w * 0.50} cy={h * 0.05} r={9} fill={treeGreen} fillOpacity={0.7} />
            <circle cx={w * 0.45} cy={h * 0.02} r={6} fill={treeDark} fillOpacity={0.5} />
            <circle cx={w * 0.55} cy={h * 0.03} r={5} fill={treeGreen} fillOpacity={0.5} />

            {/* Red hibiscus hint */}
            <circle cx={w * 0.82} cy={h * 0.22} r={3} fill="#e06060" fillOpacity={0.6} />
            <circle cx={w * 0.18} cy={h * 0.24} r={2.5} fill="#e06060" fillOpacity={0.5} />

            <Ground />
          </g>
        );
      }

      // ━━━ Star fort (五稜郭式) ━━━
      case 'star-fort': {
        // Top-down view showing star shape
        const ccy = h * 0.48;
        const R = w * 0.38; // outer radius
        const r = w * 0.22; // inner radius
        const points = [];
        for (let i = 0; i < 5; i++) {
          const outerAngle = (i * 72 - 90) * Math.PI / 180;
          const innerAngle = ((i * 72 + 36) - 90) * Math.PI / 180;
          points.push(`${cx + R * Math.cos(outerAngle)},${ccy + R * Math.sin(outerAngle)}`);
          points.push(`${cx + r * Math.cos(innerAngle)},${ccy + r * Math.sin(innerAngle)}`);
        }

        return (
          <g>
            {/* Water moat (outer) */}
            <polygon points={points.join(' ')}
              fill={dk ? '#3a5a7a' : '#b8d4e8'} fillOpacity={0.4}
              stroke={dk ? '#4a6a8a' : '#7aaccc'} strokeWidth={1.5} />

            {/* Star walls (slightly smaller) */}
            {(() => {
              const iR = R * 0.85;
              const ir = r * 0.85;
              const innerPoints = [];
              for (let i = 0; i < 5; i++) {
                const outerAngle = (i * 72 - 90) * Math.PI / 180;
                const innerAngle = ((i * 72 + 36) - 90) * Math.PI / 180;
                innerPoints.push(`${cx + iR * Math.cos(outerAngle)},${ccy + iR * Math.sin(outerAngle)}`);
                innerPoints.push(`${cx + ir * Math.cos(innerAngle)},${ccy + ir * Math.sin(innerAngle)}`);
              }
              return (
                <polygon points={innerPoints.join(' ')}
                  fill={dk ? '#6a8a6a' : '#8aaa7a'} fillOpacity={0.5}
                  stroke={color} strokeWidth={1.2} />
              );
            })()}

            {/* Central building */}
            <rect x={cx - 12} y={ccy - 12} width={24} height={18}
              fill={white} stroke={roofColor} strokeWidth={0.5} />
            <Roof cx={cx} y={ccy - 12} rw={18} rh={10} />

            {/* Tower mark */}
            <rect x={cx - 2} y={ccy - 24} width={4} height={4} fill={roofColor} />

            <Ground />
          </g>
        );
      }

      // ━━━ Mansion / residence (館 / 居館) ━━━
      case 'mansion': {
        return (
          <g>
            {/* Garden ground */}
            <ellipse cx={cx} cy={groundY} rx={w * 0.44} ry={h * 0.06}
              fill={dk ? '#4a5a4a' : '#c8d8b8'} fillOpacity={0.3} />

            {/* Main building — long and low */}
            <rect x={cx - w * 0.30} y={h * 0.38} width={w * 0.60} height={h * 0.22}
              fill={color} stroke={roofColor} strokeWidth={0.4} />
            <Roof cx={cx} y={h * 0.38} rw={w * 0.36} rh={14} />

            {/* Engawa (veranda) */}
            <rect x={cx - w * 0.28} y={h * 0.58} width={w * 0.56} height={h * 0.04}
              fill={woodBrown} fillOpacity={0.6} />

            {/* Sliding doors (shoji) */}
            {[-0.20, -0.10, 0, 0.10, 0.20].map((xOff, i) => (
              <line key={i} x1={cx + w * xOff} y1={h * 0.42} x2={cx + w * xOff} y2={h * 0.58}
                stroke={roofColor} strokeWidth={0.3} strokeOpacity={0.4} />
            ))}

            {/* Side wing (detached) */}
            <rect x={w * 0.08} y={h * 0.50} width={w * 0.18} height={h * 0.16}
              fill={color} stroke={roofColor} strokeWidth={0.3} />
            <Roof cx={w * 0.17} y={h * 0.50} rw={w * 0.13} rh={8} />

            {/* Garden elements */}
            <Tree x={w * 0.80} y={h * 0.36} s={1.0} />

            {/* Stone lantern */}
            <rect x={w * 0.74 - 1.5} y={h * 0.62} width={3} height={8} fill={stoneTop} />
            <rect x={w * 0.74 - 3} y={h * 0.58} width={6} height={4} fill={stoneTop} rx={0.5} />
            <path d={`M${w * 0.74 - 5},${h * 0.58} L${w * 0.74},${h * 0.53} L${w * 0.74 + 5},${h * 0.58}`}
              fill={stoneBot} />

            {/* Stepping stones */}
            {[0, 1, 2].map(i => (
              <ellipse key={i} cx={cx + i * 10 - 10} cy={h * 0.72 + i * 4} rx={4} ry={2.5}
                fill={stoneTop} stroke={stoneBot} strokeWidth={0.3} />
            ))}

            <Ground />
          </g>
        );
      }

      // ━━━ Tower / single turret (櫓) ━━━
      case 'tower': {
        const tw = w * 0.28;
        return (
          <g>
            <StoneBase topY={h * 0.55} topW={0.42} botW={0.56} />

            {/* Tower body — two stories */}
            {/* Lower story */}
            <rect x={cx - tw / 2} y={h * 0.30} width={tw} height={h * 0.25}
              fill={white} stroke={roofColor} strokeWidth={0.4} />
            {/* Lower windows */}
            {[-0.06, 0, 0.06].map((xOff, i) => (
              <rect key={`lw${i}`} x={cx + w * xOff - 1.5} y={h * 0.36} width={3} height={h * 0.12}
                fill={roofColor} fillOpacity={0.4} rx={0.3} />
            ))}
            {/* Mid roof */}
            <Roof cx={cx} y={h * 0.30} rw={tw * 0.7} rh={8} />

            {/* Upper story (smaller) */}
            <rect x={cx - tw * 0.35} y={h * 0.16} width={tw * 0.70} height={h * 0.16}
              fill={white} stroke={roofColor} strokeWidth={0.3} />
            {/* Upper windows */}
            {[-0.03, 0.03].map((xOff, i) => (
              <rect key={`uw${i}`} x={cx + w * xOff - 1.5} y={h * 0.20} width={3} height={h * 0.08}
                fill={roofColor} fillOpacity={0.4} rx={0.3} />
            ))}
            {/* Top roof */}
            <Roof cx={cx} y={h * 0.16} rw={tw * 0.55} rh={12} />

            {/* Side walls (connecting to stone base) */}
            <rect x={w * 0.14} y={h * 0.44} width={cx - tw / 2 - w * 0.14} height={h * 0.11}
              fill={white} fillOpacity={0.8} stroke={roofColor} strokeWidth={0.3} />
            <rect x={cx + tw / 2} y={h * 0.44} width={w * 0.86 - cx - tw / 2} height={h * 0.11}
              fill={white} fillOpacity={0.8} stroke={roofColor} strokeWidth={0.3} />

            <Ground />
          </g>
        );
      }
    }
  };

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} className="drop-shadow-lg">
      <defs>
        <linearGradient id={`${uid}-stone`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stoneTop} />
          <stop offset="100%" stopColor={stoneBot} />
        </linearGradient>
      </defs>
      {renderIllustration()}
    </svg>
  );
}
