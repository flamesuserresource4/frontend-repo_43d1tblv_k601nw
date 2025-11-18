function ThreeDBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Gold Orb */}
      <div
        className="absolute -right-24 top-10 h-[42rem] w-[42rem] rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(250, 204, 21, 0.35), rgba(250, 204, 21, 0.12) 40%, transparent 70%)',
          filter: 'blur(20px)',
          transform: 'translateZ(0)',
        }}
      />
      {/* Dark Aura */}
      <div
        className="absolute -left-24 bottom-0 h-[36rem] w-[36rem] rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(17, 24, 39, 0.8), rgba(0,0,0,0.6) 60%, transparent 75%)',
          filter: 'blur(18px)',
          transform: 'translateZ(0)',
        }}
      />
      {/* Gold Ring with subtle rotation for 3D feel */}
      <div
        className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            'conic-gradient(from 0deg, rgba(250, 204, 21, 0.0), rgba(250, 204, 21, 0.45), rgba(245, 158, 11, 0.0))',
          borderRadius: '9999px',
          mask: 'radial-gradient(farthest-side, transparent calc(100% - 14px), black calc(100% - 13px))',
          WebkitMask:
            'radial-gradient(farthest-side, transparent calc(100% - 14px), black calc(100% - 13px))',
          animation: 'spin 26s linear infinite',
        }}
      />
      {/* Floating chips for depth */}
      <div className="absolute inset-0" style={{ perspective: '1200px' }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-8 rounded-full bg-gradient-to-r from-yellow-300/70 to-amber-500/70 shadow-[0_0_24px_rgba(234,179,8,0.5)]"
            style={{
              top: `${10 + i * 8}%`,
              left: `${(i * 13) % 90}%`,
              transform:
                `translateZ(${(i % 3) * 60 - 40}px) rotateY(${i * 18}deg) rotateZ(${i * 6}deg)`,
              opacity: 0.6,
              animation: `floatY ${14 + i}s ease-in-out ${i * 0.8}s infinite alternate`,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes floatY { from { transform: translateY(-8px) } to { transform: translateY(8px) } }
        @keyframes spin { to { transform: rotate(360deg) } }
      `}</style>
    </div>
  )
}

export default ThreeDBackdrop
