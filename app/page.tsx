export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 relative">
    <h1
  className="mt-[-4rem] sm:mt-0 text-6xl sm:text-8xl md:text-9xl font-extralight text-gray-200 mb-8 tracking-[0.1em]"
  style={{ fontFamily: "Prompt, sans-serif", fontWeight: 300 }}
>
  เมพิตรี
</h1>

      <video
        src="/technology-animations-8772922.mp4"
        autoPlay
        loop
        muted
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[300px] max-w-full rounded-xl shadow-2xl border border-gray-700 z-20"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
