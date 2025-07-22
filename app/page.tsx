export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <h1 className="text-8xl md:text-9xl font-extralight text-gray-200 mb-8 tracking-wider" style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 300 }}>
        เมพาร์
      </h1>
      <img src="/window.svg" alt="ออกแบบห้อง" className="w-32 h-32 opacity-80 drop-shadow-lg" />
    </div>
  );
}
