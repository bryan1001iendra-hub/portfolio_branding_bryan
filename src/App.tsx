import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-white min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-slate-50/70 dark:bg-slate-900/70 backdrop-blur-md shadow-sm dark:shadow-none docked full-width top-0 sticky z-50">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
            <div className="text-xl font-black tracking-tighter text-blue-900 dark:text-white">
              Bryan Portfolio
            </div>
            <nav className="hidden md:flex items-center gap-8 font-manrope font-bold tracking-tight">
              <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-blue-700 transition-colors">Home</Link>
              <Link to="/projects" className="text-slate-600 dark:text-slate-400 hover:text-blue-700 transition-colors">Projects</Link>
            </nav>
            
            <div className="flex items-center gap-2 md:gap-4">
              <a href="/#contact" className="hidden md:inline-block bg-primary text-on-primary px-6 py-2 rounded-md font-manrope font-bold hover:opacity-80 transition-all duration-300 scale-95 active:scale-90">
                Contact Me
              </a>
              
              {/* Mobile Menu Toggle (Titik Tiga) */}
              <button 
                className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors flex items-center justify-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-lg py-4 px-6 flex flex-col gap-4 font-manrope font-bold">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-slate-600 dark:text-slate-400 hover:text-blue-700">Home</Link>
              <Link to="/projects" onClick={() => setIsMenuOpen(false)} className="text-slate-600 dark:text-slate-400 hover:text-blue-700">Projects</Link>
              <a href="/#contact" onClick={() => setIsMenuOpen(false)} className="text-blue-700 dark:text-blue-400">Contact Me</a>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-slate-50 dark:bg-slate-950 full-width py-12 border-t border-slate-200/15 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <span className="font-manrope font-bold text-blue-900 dark:text-white text-xl">Bryan Nathanael Iendra</span>
              <p className="font-inter text-sm uppercase tracking-widest text-slate-500">© 2026 Portfolio. Designed with Rigorous Leadership.</p>
            </div>
            
            <div className="flex flex-col gap-4 items-center md:items-end">
              <div className="flex flex-wrap justify-center gap-6">
                <a href="tel:085230579101" className="text-slate-500 hover:text-blue-700 hover:translate-y-[-2px] transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>phone</span>
                  wa.me/6285230579101
                </a>
                <a href="mailto:bryan1001iendra@gmail.com" className="text-slate-500 hover:text-blue-700 hover:translate-y-[-2px] transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>mail</span>
                  bryan1001iendra@gmail.com
                </a>
                <a href="https://www.instagram.com/bryaniendra?igsh=MTJ2MGdteW13anQ4cg==" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-700 hover:translate-y-[-2px] transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>account_circle</span>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
