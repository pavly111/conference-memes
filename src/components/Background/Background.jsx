export default function Background() {
  return (
    <>
      {/* Orange Blob */}
      <div className="fixed top-[-150px] left-[-150px] w-[400px] h-[400px] rounded-full bg-orange-500/20 blur-[140px] animate-pulse" />

      {/* Yellow Blob */}
      <div className="fixed bottom-[-150px] right-[-150px] w-[400px] h-[400px] rounded-full bg-yellow-400/20 blur-[140px] animate-pulse" />

      {/* Blue Blob */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Grid */}
      <div
        className="fixed inset-0 opacity-5"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </>
  );
}