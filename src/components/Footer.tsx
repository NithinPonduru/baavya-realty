import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 border-t border-slate-800 pb-28 md:pb-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section: Brand & Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8 border-b border-slate-800 pb-8">
          <div className="max-w-md">
            <Link to="/" className="text-2xl font-serif tracking-widest text-white uppercase mb-2 block">
              Bhaavya <span className="text-teal-500">Realty</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              Leading real estate advisory and infrastructure development firm in Hyderabad, committed to excellence and client satisfaction.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium uppercase tracking-wider">
            <Link to="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <Link to="/#about" className="hover:text-teal-400 transition-colors">About</Link>
            <Link to="/#services" className="hover:text-teal-400 transition-colors">Services</Link>
            <Link to="/projects" className="hover:text-teal-400 transition-colors">Projects</Link>
            <Link to="/contact" className="hover:text-teal-400 transition-colors">Contact</Link>
          </div>
        </div>

        {/* Bottom Section: Contact, Socials, Copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-slate-400">
            <a href="tel:+918179888986" className="flex items-center hover:text-teal-400 transition-colors">
              <Phone size={14} className="mr-2 text-teal-500" />
              +91 81798 88986
            </a>
            <span className="hidden md:inline text-slate-700">|</span>
            <a href="mailto:bhaavyarealty@gmail.com" className="flex items-center hover:text-teal-400 transition-colors">
              <Mail size={14} className="mr-2 text-teal-500" />
              bhaavyarealty@gmail.com
            </a>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="flex items-center">
              <MapPin size={14} className="mr-2 text-teal-500" />
              Manikonda, Hyderabad
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/bhaavyarealty" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 text-white" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://x.com/bhaavyarealty" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-blue-400 transition-all duration-300 hover:scale-110 text-white" aria-label="X (Twitter)">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/bhaavyarealty.infra?igsh=ODU1eGlxOWxhaWY1" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:scale-110 text-white" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://whatsapp.com/channel/0029VbCGilO1yT20QoWuNm1F" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-green-500 transition-all duration-300 hover:scale-110 text-white" aria-label="WhatsApp Channel">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-slate-500 text-center sm:text-left">
              &copy; {new Date().getFullYear()} BHAAVYA REALTY. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
