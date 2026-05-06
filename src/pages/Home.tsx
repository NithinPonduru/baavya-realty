import { motion } from "motion/react";
import { ArrowRight, Building, Home as HomeIcon, Map, Briefcase, Sparkles, MapPin, ShieldCheck, ClipboardList, HandHelping, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Luxury Property" 
            className="w-full h-full object-cover" 
            src={`${import.meta.env.BASE_URL}hero-realestate.png`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-cyan-900/90 to-blue-900/85"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>

        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6 md:mb-8 shadow-xl"
            >
              <span className="text-white/90 text-xs md:text-sm font-medium">Building Dreams Since 2021</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight"
            >
              BHAAVYA REALTY AND INFRA DEVELOPERS
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-cyan-100 mb-4 font-light tracking-wide"
            >
              Building Dreams, Creating Landmarks
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 md:mb-10 shadow-xl"
            >
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-teal-400" />
              <span className="text-white text-sm md:text-base font-medium">Manikonda, Hyderabad</span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-lg text-cyan-50/90 mb-10 md:mb-12 max-w-2xl leading-relaxed"
            >
              Led by young visionary, <span className="font-semibold text-white">Satharla Bhanu Prakash Reddy</span> — Real-estate advisory and infrastructure-focused opportunities, helping clients make informed property decisions through verified deals, market insight & professional execution.{" "}
              <span className="block mt-2">Follow us on our social media handles for all the latest updates, deals and news.</span>
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact" className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold shadow-2xl shadow-teal-500/40 hover:shadow-teal-500/60 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center">
                View Projects
              </Link>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <h2 className="text-sm text-primary uppercase tracking-[0.3em] mb-4 font-semibold">Leadership</h2>
            <h3 className="text-4xl font-serif text-gray-900 mb-8">Satharla Bhanu Prakash Reddy</h3>
            
            <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
              <p>
                As the Founder and CEO of <strong className="text-gray-900 font-medium">BHAAVYA REALTY AND INFRA DEVELOPERS</strong>, Satharla Bhanu Prakash Reddy is driven by a vision to create a transparent and value-oriented real estate ecosystem.
              </p>
              <p>
                With a strong focus on land, infrastructure, and long-term asset growth, he brings a disciplined and research-backed approach to every transaction. His work emphasizes legal clarity, due diligence, and strategic investment opportunities, ensuring clients make informed and secure decisions.
              </p>
              <p>
                Under his leadership, BHAAVYA Realty is committed to delivering trusted real estate solutions, building long-term relationships, and creating sustainable value for clients and investors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-serif text-gray-900 mb-4">Why Choose Us</h2>
            <div className="w-12 h-0.5 bg-primary mx-auto rounded-full mt-1" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Sparkles size={28} />,
                title: "Best Value Guaranteed",
                desc: "Maximum return on every rupee invested — we ensure your money works harder for you.",
              },
              {
                icon: <ShieldCheck size={28} />,
                title: "Trusted & Transparent Advisory",
                desc: "Honest guidance with full legal clarity and due diligence at every step.",
              },
              {
                icon: <MapPin size={28} />,
                title: "Deep Local Market Expertise",
                desc: "Years of on-ground knowledge of Hyderabad's most promising real estate corridors.",
              },
              {
                icon: <ClipboardList size={28} />,
                title: "Tailored Property Solutions",
                desc: "Customized recommendations that match your budget, timeline, and investment goals.",
              },
              {
                icon: <HandHelping size={28} />,
                title: "Complete Buying Assistance",
                desc: "End-to-end support — from site visits and negotiations to documentation and possession.",
              },
              {
                icon: <TrendingUp size={28} />,
                title: "Exclusive Investment Opportunities",
                desc: "Access to pre-launch deals and off-market properties not available elsewhere.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-l-4 hover:border-l-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Quote Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 py-8 px-8 rounded-2xl bg-gray-50 border border-gray-200"
          >
            <span className="w-8 h-px bg-primary rounded-full flex-shrink-0" />
            <p className="text-base text-gray-600 font-light leading-relaxed text-center">
              Smart investments begin with the right guidance.
            </p>
            <span className="w-8 h-px bg-primary rounded-full flex-shrink-0" />
          </motion.div>
        </div>
      </section>

      {/* Expertise / Project Types */}
      <section id="services" className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-sm text-primary uppercase tracking-[0.3em] mb-4 font-semibold">Our Expertise</h2>
            <h3 className="text-4xl font-serif text-gray-900">Diverse Real Estate Portfolio</h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <HomeIcon size={32} />, title: "Villas", desc: "Luxury independent homes with premium amenities.", filter: "Villas" },
              { icon: <Building size={32} />, title: "Apartments", desc: "Modern high-rise living spaces in prime locations.", filter: "Apartments" },
              { icon: <Briefcase size={32} />, title: "Commercial", desc: "Strategic business spaces and retail environments.", filter: "Commercial" },
              { icon: <Map size={32} />, title: "Other Projects", desc: "Land development and infrastructure investments.", filter: "All" }
            ].map((item, index) => (
              <Link to={`/projects?type=${item.filter}`} key={index} className="block">
                <div
                  className="bg-white p-10 border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group rounded-2xl cursor-pointer"
                >
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-serif text-gray-900 mb-4">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
