import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Home, ArrowLeft, Phone } from "lucide-react";
import { useSEO } from "../lib/useSEO";

export function NotFound() {
  useSEO({
    title: "Page Not Found – 404",
    description: "The page you are looking for doesn't exist. Return to Bhaavya Realty's homepage to explore luxury real estate in Hyderabad.",
    canonicalPath: "/404",
    noIndex: true,
  });

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg mx-auto">

        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-9xl font-bold text-gray-100 select-none">404</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h1 className="text-3xl font-serif text-gray-900 mb-3">Page Not Found</h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            The page you're looking for doesn't exist or may have been moved. 
            Let us help you find the right property instead.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              <Home size={18} />
              Back to Home
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ArrowLeft size={18} />
              Browse Projects
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-400 mb-2">Need help? Call us directly:</p>
            <a
              href="tel:+918179888986"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              <Phone size={16} />
              +91 81798 88986
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
