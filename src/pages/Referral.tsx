import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  Gift, Users, TrendingUp, CheckCircle2, ChevronDown,
  IndianRupee, Star, Zap, Shield, Clock, AlertCircle,
  ArrowRight, Phone
} from "lucide-react";
import { Link } from "react-router-dom";

const rewardTiers = [
  {
    referrals: "1",
    label: "First Referral",
    reward: "₹29,999",
    bonus: null,
    icon: <Gift size={28} />,
    color: "from-teal-500 to-cyan-500",
    bg: "bg-teal-50",
    border: "border-teal-200",
    highlight: false,
  },
  {
    referrals: "2",
    label: "2 Successful Referrals",
    reward: "₹20,000",
    bonus: "Bonus Reward",
    icon: <Star size={28} />,
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
    highlight: false,
  },
  {
    referrals: "5",
    label: "5 Successful Referrals",
    reward: "₹50,000",
    bonus: "Mega Bonus",
    icon: <Zap size={28} />,
    color: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    highlight: true,
  },
  {
    referrals: "5+",
    label: "More than 5 Referrals",
    reward: "₹75,000 + ₹10,000",
    bonus: "per additional purchase",
    icon: <TrendingUp size={28} />,
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
    highlight: false,
  },
];

const steps = [
  {
    number: "01",
    title: "Share a Lead",
    desc: "Refer someone you know who is looking to buy property. Give us their details.",
    icon: <Users size={24} />,
  },
  {
    number: "02",
    title: "Client Mentions You",
    desc: "The referred client mentions your name at their very first interaction with us.",
    icon: <CheckCircle2 size={24} />,
  },
  {
    number: "03",
    title: "Deal is Confirmed",
    desc: "Token/booking is confirmed and the Agreement of Sale (AOS) is executed.",
    icon: <Shield size={24} />,
  },
  {
    number: "04",
    title: "You Get Paid",
    desc: "Your referral amount is credited via bank transfer within 2–7 working days.",
    icon: <IndianRupee size={24} />,
  },
];

const termsData = [
  {
    title: "Eligibility",
    icon: <CheckCircle2 size={18} />,
    points: [
      'A "lead" is considered valid only if the client is new and not already in our database.',
      "The referred client must directly mention the referrer's name at the first interaction.",
    ],
  },
  {
    title: "Bonus Conditions",
    icon: <Star size={18} />,
    points: [
      "Referral bonus is valid only when the same referee introduces multiple unique customers.",
      "Each customer must complete a successful transaction in the same project.",
    ],
  },
  {
    title: "Payout Condition",
    icon: <IndianRupee size={18} />,
    points: [
      "Token/booking is confirmed AND Agreement of Sale (AOS) is executed.",
      "If the deal is cancelled before AOS, no referral payout will be applicable.",
    ],
  },
  {
    title: "Duplicate Lead Policy",
    icon: <AlertCircle size={18} />,
    points: [
      "In case of duplicate referrals, the first valid registered referrer will be considered.",
    ],
  },
  {
    title: "Payment Terms",
    icon: <Clock size={18} />,
    points: [
      "Referral amount will be credited within 2–7 working days after AOS execution.",
      "Payment will be made via bank transfer only.",
    ],
  },
  {
    title: "Property Eligibility",
    icon: <Shield size={18} />,
    points: [
      "Offer valid only for properties above ₹2 Crores (base price).",
    ],
  },
  {
    title: "Right to Modify & Verification",
    icon: <AlertCircle size={18} />,
    points: [
      "BHAAVYA REALTY reserves the right to modify or withdraw this program at any time without prior notice.",
      "BHAAVYA REALTY holds sole discretion in qualifying leads and validating transactions.",
    ],
  },
];

function TermsAccordion({ item }: { item: typeof termsData[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-300 ${open ? "border-teal-300 shadow-sm" : "border-gray-200"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-teal-50/50 transition-colors duration-200"
      >
        <span className="flex items-center gap-3 font-medium text-gray-800">
          <span className="text-teal-600">{item.icon}</span>
          {item.title}
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={18} className="text-gray-500" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="px-5 pb-4 pt-1 space-y-2 bg-gray-50 border-t border-gray-100">
              {item.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Referral() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}
        />
        <div className="absolute top-16 left-8 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-8 right-8 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6 shadow-xl"
          >
            <Gift size={16} className="text-teal-300" />
            <span className="text-white/90 text-sm font-medium">Earn While You Refer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight"
          >
            Referral <span className="text-teal-300">Program</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-cyan-100 mb-4 max-w-2xl mx-auto leading-relaxed"
          >
            Give us a lead of someone looking to buy a property and earn.
            Invite your colleagues, family, and friends —
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl font-bold text-teal-300 mb-10"
          >
            Earn up to ₹29,999 for every successful referral.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/918179888986?text=Hi%2C%20I%20would%20like%20to%20refer%20someone%20for%20your%20referral%20program."
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold shadow-2xl shadow-teal-500/40 hover:shadow-teal-500/60 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Refer Now on WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+918179888986"
              className="px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Call Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Reward Tiers */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm text-teal-600 uppercase tracking-[0.3em] mb-3 font-semibold">Rewards Structure</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-3">Bonus Rewards</h3>
            <div className="w-12 h-0.5 bg-teal-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewardTiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl border-2 p-6 flex flex-col items-center text-center ${tier.border} ${tier.highlight ? "shadow-xl scale-105" : "shadow-sm"} bg-white hover:shadow-lg transition-all duration-300`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow">
                    Most Popular
                  </div>
                )}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  {tier.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">{tier.referrals}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-medium">{tier.label}</div>
                <div className="text-2xl font-bold text-teal-600 mb-1">{tier.reward}</div>
                {tier.bonus && (
                  <div className={`text-xs font-semibold px-3 py-1 rounded-full mt-1 ${tier.bg} text-gray-600`}>
                    {tier.bonus}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm text-teal-600 uppercase tracking-[0.3em] mb-3 font-semibold">Simple Process</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-3">How It Works</h3>
            <div className="w-12 h-0.5 bg-teal-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-0.5 bg-teal-200 z-0" />
                )}
                <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white shadow-lg mb-4">
                  {step.icon}
                </div>
                <div className="text-xs font-bold text-teal-500 tracking-widest mb-2">{step.number}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Shield size={20} className="text-teal-600" />
              <h2 className="text-sm text-teal-600 uppercase tracking-[0.3em] font-semibold">Legal</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-3">Terms & Conditions</h3>
            <div className="w-12 h-0.5 bg-teal-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            {termsData.map((item, i) => (
              <TermsAccordion key={i} item={item} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-700">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Know someone looking for property?
            </h3>
            <p className="text-cyan-100 mb-8 text-lg">
              Don't let the opportunity pass — refer them today and start earning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918179888986?text=Hi%2C%20I%20would%20like%20to%20refer%20someone%20for%20your%20referral%20program."
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white text-teal-700 rounded-full font-bold shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Refer on WhatsApp
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/15 border-2 border-white/40 text-white rounded-full font-semibold hover:bg-white/25 hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
