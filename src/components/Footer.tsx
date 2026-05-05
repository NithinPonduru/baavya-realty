import { Mail, Phone, MapPin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 border-t border-slate-800 pb-28 md:pb-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section: Brand & Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8 border-b border-slate-800 pb-8">
          <div className="max-w-md">
            <Link to="/" className="text-2xl font-serif tracking-widest text-white uppercase mb-2 block">
              Bhaavya <span className="text-teal-500">Realty</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              Leading real estate advisory and infrastructure development firm in Hyderabad, committed to excellence and client satisfaction.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Projects", path: "/projects" },
                { name: "Referral Program", path: "/referral" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
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
              <a href="https://x.com/bhaavyarealty" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-blue-400 transition-all duration-300 hover:scale-110 text-white" aria-label="X (Twitter)">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/bhaavyarealty.infra?utm_source=qr&igsh=ODU1eGlxOWxhaWY1" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:scale-110 text-white" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/918179888986?text=Hi%20Bhanu%20Prakash%2CI've%20gone%20through%20your%20project%20and%20I'm%20intrested.Can%20we%20discuss%20further%3F" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-green-500 transition-all duration-300 hover:scale-110 text-white" aria-label="WhatsApp">
                <svg className="w-4 h-4" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.003 2.667C8.639 2.667 2.667 8.639 2.667 16.003c0 2.364.641 4.672 1.856 6.691L2.667 29.333l6.794-1.822a13.29 13.29 0 0 0 6.542 1.716h.003c7.361 0 13.327-5.972 13.327-13.333 0-7.362-5.966-13.227-13.33-13.227zm0 24.293a11.02 11.02 0 0 1-5.627-1.541l-.403-.239-4.034 1.081 1.086-4.002-.262-.415a11.027 11.027 0 0 1-1.696-5.841c0-6.087 4.953-11.04 11.04-11.04 6.084 0 11.033 4.953 11.033 11.04 0 6.084-4.952 11.04-11.037 11.04l-.1-.083zm6.05-8.263c-.33-.166-1.954-.964-2.257-1.073-.303-.11-.524-.166-.745.166-.22.33-.856 1.073-1.049 1.293-.193.22-.386.248-.716.083-.33-.166-1.395-.514-2.657-1.638-.982-.874-1.645-1.953-1.838-2.283-.192-.33-.02-.508.145-.672.15-.148.33-.386.496-.579.165-.193.22-.33.33-.551.11-.22.055-.413-.028-.579-.083-.166-.745-1.796-1.02-2.46-.268-.645-.54-.558-.745-.568-.193-.009-.413-.011-.634-.011-.22 0-.579.083-.883.413-.303.33-1.158 1.132-1.158 2.762s1.186 3.204 1.352 3.424c.165.22 2.333 3.562 5.653 4.994.79.341 1.407.545 1.888.698.793.252 1.515.216 2.085.131.636-.095 1.954-.799 2.23-1.571.275-.771.275-1.432.192-1.571-.082-.138-.303-.22-.634-.386z"/>
                </svg>
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
