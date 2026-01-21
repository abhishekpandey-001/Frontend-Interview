export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Brand */}
        <div className="text-lg font-bold tracking-wide">
          CA Monk Blog
        </div>

        {/* Center: Links */}
        <div className="flex flex-wrap gap-6 text-sm md:text-base text-gray-300 justify-center">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>

        {/* Right: Copyright */}
        <div className="text-gray-400 text-sm text-center md:text-right">
          © {new Date().getFullYear()} CA Monk Blog. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
