import { Link, useLocation } from "react-router-dom";
import { Home as HomeIcon, Building, Phone, Gift } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // On non-home pages, always use dark/scrolled styles since background is light
  const isDark = scrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Referral", path: "/referral" },
  ];

  return (
    <>
      <header
        role="banner"
        aria-label="Bhaavya Realty site header"
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 hidden md:block",
          isDark ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label="Bhaavya Realty home">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Bhaavya Realty logo"
              className="h-10 w-10 object-contain"
            />
            <span className={cn("text-xl font-serif tracking-widest uppercase hidden sm:block", isDark ? "text-gray-900" : "text-white")}>
              Bhaavya <span className="text-primary">Realty</span>
            </span>
          </Link>

          <nav aria-label="Main navigation" className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                aria-current={location.pathname === link.path ? "page" : undefined}
                className={cn(
                  "text-sm uppercase tracking-wider transition-colors hover:text-primary font-medium",
                  location.pathname === link.path
                    ? "text-primary"
                    : isDark ? "text-gray-600" : "text-gray-200"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={cn(
                "px-6 py-2 border transition-colors uppercase text-sm tracking-widest font-medium rounded-full",
                isDark 
                  ? "border-primary text-primary hover:bg-primary hover:text-white" 
                  : "border-white text-white hover:bg-white hover:text-gray-900"
              )}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav aria-label="Mobile navigation" className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-full px-6 py-3 flex justify-between items-center">
          <Link to="/" className={cn("flex flex-col items-center p-2 transition-colors", location.pathname === '/' ? "text-primary" : "text-gray-500 hover:text-gray-900")}>
            <HomeIcon size={24} strokeWidth={location.pathname === '/' ? 2.5 : 2} />
            <span className="text-[10px] font-semibold mt-1">Home</span>
          </Link>
          <Link to="/projects" className={cn("flex flex-col items-center p-2 transition-colors", location.pathname === '/projects' ? "text-primary" : "text-gray-500 hover:text-gray-900")}>
            <Building size={24} strokeWidth={location.pathname === '/projects' ? 2.5 : 2} />
            <span className="text-[10px] font-semibold mt-1">Projects</span>
          </Link>
          <Link to="/referral" className={cn("flex flex-col items-center p-2 transition-colors", location.pathname === '/referral' ? "text-primary" : "text-gray-500 hover:text-gray-900")}>
            <Gift size={24} strokeWidth={location.pathname === '/referral' ? 2.5 : 2} />
            <span className="text-[10px] font-semibold mt-1">Referral</span>
          </Link>
          <Link to="/contact" className={cn("flex flex-col items-center p-2 transition-colors", location.pathname === '/contact' ? "text-primary" : "text-gray-500 hover:text-gray-900")}>
            <Phone size={24} strokeWidth={location.pathname === '/contact' ? 2.5 : 2} />
            <span className="text-[10px] font-semibold mt-1">Contact</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
