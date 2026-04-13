import { Link, useLocation } from "react-router-dom";
import { Home as HomeIcon, Building, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 hidden md:block",
          scrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className={cn("text-2xl font-serif tracking-widest uppercase", scrolled ? "text-gray-900" : "text-white")}>
            Bhaavya <span className="text-primary">Realty</span>
          </Link>

          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm uppercase tracking-wider transition-colors hover:text-primary font-medium",
                  location.pathname === link.path 
                    ? "text-primary" 
                    : scrolled ? "text-gray-600" : "text-gray-200"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={cn(
                "px-6 py-2 border transition-colors uppercase text-sm tracking-widest font-medium rounded-full",
                scrolled 
                  ? "border-primary text-primary hover:bg-primary hover:text-white" 
                  : "border-white text-white hover:bg-white hover:text-gray-900"
              )}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Nav (Liquid Glass) */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-full px-6 py-3 flex justify-between items-center">
          <Link to="/" className={cn("flex flex-col items-center p-2 transition-colors", location.pathname === '/' ? "text-primary" : "text-gray-500 hover:text-gray-900")}>
            <HomeIcon size={24} strokeWidth={location.pathname === '/' ? 2.5 : 2} />
            <span className="text-[10px] font-semibold mt-1">Home</span>
          </Link>
          <Link to="/projects" className={cn("flex flex-col items-center p-2 transition-colors", location.pathname === '/projects' ? "text-primary" : "text-gray-500 hover:text-gray-900")}>
            <Building size={24} strokeWidth={location.pathname === '/projects' ? 2.5 : 2} />
            <span className="text-[10px] font-semibold mt-1">Projects</span>
          </Link>
          <Link to="/contact" className={cn("flex flex-col items-center p-2 transition-colors", location.pathname === '/contact' ? "text-primary" : "text-gray-500 hover:text-gray-900")}>
            <Phone size={24} strokeWidth={location.pathname === '/contact' ? 2.5 : 2} />
            <span className="text-[10px] font-semibold mt-1">Contact</span>
          </Link>
        </div>
      </div>
    </>
  );
}
