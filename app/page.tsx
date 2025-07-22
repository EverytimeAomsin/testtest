export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 relative">
      <h1 className="text-8xl md:text-9xl font-extralight text-gray-200 mb-8 tracking-wider" style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 300 }}>
        เมพาร์
      </h1>
      {/* วิดีโอ 3D ด้านล่างจอ สื่อถึงบริษัทออกแบบห้อง */}
      <video
        src="/technology-animations-8772922.mp4"
        autoPlay
        loop
        muted
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[400px] max-w-full rounded-xl shadow-2xl border border-gray-700 z-20"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
}
