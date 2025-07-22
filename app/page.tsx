export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-8 text-center overflow-hidden relative">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-gray-600 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-8 h-8 bg-gray-700 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-16 w-12 h-12 border-2 border-gray-500 animate-spin duration-slow"></div>
        <div className="absolute bottom-20 right-20 w-6 h-20 bg-gradient-to-t from-gray-700 to-transparent animate-pulse delay-500"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full gap-4">
            {Array.from({ length: 144 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-gray-600 animate-pulse" 
                style={{ 
                  animationDelay: `${(i * 50)}ms`,
                  animationDuration: '3s'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Main title with typewriter effect */}
        <div className="mb-16">
          <h1 className="text-8xl md:text-9xl font-extralight text-gray-300 mb-8 tracking-wider animate-fade-in">
            เมพาร์
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto animate-expand"></div>
        </div>
        
        {/* Animated design tools */}
        <div className="flex justify-center items-center space-x-8 mb-16 animate-float">
          {/* Pen tool */}
          <div className="relative group">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <div className="w-6 h-6 border-2 border-gray-400 rounded-sm transform rotate-45"></div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">PEN</div>
          </div>
          
          {/* Brush tool */}
          <div className="relative group">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <div className="w-6 h-6 bg-gradient-to-t from-gray-400 to-gray-500 rounded-t-full"></div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">BRUSH</div>
          </div>
          
          {/* Shape tool */}
          <div className="relative group">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <div className="w-6 h-6 border-2 border-gray-400"></div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">SHAPE</div>
          </div>
        </div>

        {/* Design process animation */}
        <div className="flex justify-center items-center space-x-4 text-gray-400 text-sm mb-16">
          <span className="animate-pulse">CONCEPT</span>
          <div className="w-8 h-0.5 bg-gray-600 animate-expand-x"></div>
          <span className="animate-pulse delay-300">DESIGN</span>
          <div className="w-8 h-0.5 bg-gray-600 animate-expand-x delay-300"></div>
          <span className="animate-pulse delay-500">DEVELOP</span>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-600 rounded-full animate-float-random opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
