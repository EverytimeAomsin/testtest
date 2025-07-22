export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col items-center justify-center p-8 text-center">
      {/* Main title */}
      <div className="mb-16">
        <h1 className="text-8xl md:text-9xl font-light text-gray-600 mb-8 tracking-wider">
          เมพาร์
        </h1>
      </div>
      
      {/* Subtitle section */}
      <div className="mb-32">
        <h2 className="text-xl md:text-2xl text-pink-500 font-medium mb-2">
          FRONT : PROMPT LIGHT
        </h2>
        <p className="text-lg md:text-xl text-pink-400">
          หางประมาณนี้
        </p>
      </div>
      
      {/* Bottom text */}
      <div className="absolute bottom-32">
        <p className="text-lg md:text-xl text-pink-500 font-medium">
          ANIMATION อัน ๆ กัน ใช่ชอบนี้
        </p>
      </div>
    </div>
  );
}
