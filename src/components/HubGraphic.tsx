// -----------------------------------------------------------------------------
// Signature brand element: the "hub". A central 10th HUB node links employer
// nodes on the left to VA skill-nodes on the right — the two-sided marketplace,
// drawn literally. Decorative, so it's aria-hidden; connection lines animate
// gently and are stilled by the global prefers-reduced-motion rule.
// -----------------------------------------------------------------------------

const employers = [
  { x: 34, y: 46, r: 13 },
  { x: 60, y: 118, r: 15 },
  { x: 40, y: 196, r: 12 },
];

const vas = [
  { x: 366, y: 42, r: 12, label: "CS" },
  { x: 340, y: 110, r: 15, label: "Dev" },
  { x: 368, y: 178, r: 13, label: "Bkg" },
  { x: 332, y: 236, r: 11, label: "Amz" },
];

const hub = { x: 200, y: 140, r: 30 };

export function HubGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 280"
      className={className}
      role="img"
      aria-label="A diagram of businesses on the left connected through the 10th HUB to virtual assistants on the right."
    >
      <defs>
        <linearGradient id="hubCore" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2557E6" />
          <stop offset="1" stopColor="#1A3EA8" />
        </linearGradient>
        <linearGradient id="lineL" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2557E6" stopOpacity="0.15" />
          <stop offset="1" stopColor="#2557E6" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="lineR" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FB6B4B" stopOpacity="0.7" />
          <stop offset="1" stopColor="#FB6B4B" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Connection lines: employers -> hub */}
      {employers.map((n, i) => (
        <line
          key={`el-${i}`}
          x1={n.x}
          y1={n.y}
          x2={hub.x}
          y2={hub.y}
          stroke="url(#lineL)"
          strokeWidth="1.6"
          strokeDasharray="4 5"
          className="animate-[dash_1.6s_linear_infinite]"
          style={{ strokeDashoffset: 40 + i * 6 }}
        />
      ))}
      {/* hub -> VAs */}
      {vas.map((n, i) => (
        <line
          key={`vl-${i}`}
          x1={hub.x}
          y1={hub.y}
          x2={n.x}
          y2={n.y}
          stroke="url(#lineR)"
          strokeWidth="1.6"
          strokeDasharray="4 5"
          className="animate-[dash_1.8s_linear_infinite]"
          style={{ strokeDashoffset: 40 + i * 6 }}
        />
      ))}

      {/* Employer nodes (blue) */}
      {employers.map((n, i) => (
        <g key={`e-${i}`} className="animate-pulse-node" style={{ animationDelay: `${i * 0.3}s` }}>
          <circle cx={n.x} cy={n.y} r={n.r} fill="#EEF3FF" stroke="#2557E6" strokeWidth="1.6" />
          <path
            d={`M${n.x - 4} ${n.y - 1}h8M${n.x - 4} ${n.y + 3}h8`}
            stroke="#2557E6"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </g>
      ))}

      {/* VA skill nodes (coral) */}
      {vas.map((n, i) => (
        <g key={`v-${i}`} className="animate-pulse-node" style={{ animationDelay: `${i * 0.25 + 0.4}s` }}>
          <circle cx={n.x} cy={n.y} r={n.r} fill="#FFF1EC" stroke="#FB6B4B" strokeWidth="1.6" />
          <text
            x={n.x}
            y={n.y + 3}
            textAnchor="middle"
            fontSize="8"
            fontWeight="700"
            fill="#CC3F1F"
            fontFamily="var(--font-display)"
          >
            {n.label}
          </text>
        </g>
      ))}

      {/* Central hub */}
      <circle cx={hub.x} cy={hub.y} r={hub.r + 8} fill="#2557E6" opacity="0.08" />
      <circle cx={hub.x} cy={hub.y} r={hub.r} fill="url(#hubCore)" />
      <text
        x={hub.x}
        y={hub.y - 2}
        textAnchor="middle"
        fontSize="12"
        fontWeight="800"
        fill="#fff"
        fontFamily="var(--font-display)"
      >
        10th
      </text>
      <text
        x={hub.x}
        y={hub.y + 12}
        textAnchor="middle"
        fontSize="9"
        fontWeight="700"
        fill="#DCE6FF"
        letterSpacing="1.5"
        fontFamily="var(--font-display)"
      >
        HUB
      </text>
    </svg>
  );
}

// Small monogram lockup for the navbar / footer.
export function HubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="url(#hubCore)" />
      <defs>
        <linearGradient id="markCore" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2557E6" />
          <stop offset="1" stopColor="#1A3EA8" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#markCore)" />
      <circle cx="16" cy="16" r="4.2" fill="#fff" />
      <circle cx="7" cy="16" r="2.1" fill="#DCE6FF" />
      <circle cx="25" cy="16" r="2.1" fill="#FB6B4B" />
      <path d="M9 16h3M20 16h3" stroke="#DCE6FF" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
