"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const footerSections = [
  {
    title: "Quick Links",
    links: [
      { name: "About Us", href: "/company" },
      { name: "Clients", href: "/company#clients" },
      { name: "Careers", href: "/careers" },
      { name: "Insights", href: "/sustainability/insights" },
    ],
  },
  {
    title: "Our Solutions",
    links: [
      { name: "Optibyte", href: "/technology/optibyte" },
      { name: "Fixbyte", href: "/technology/fixbyte" },
      { name: "IR Blaster", href: "/technology/inbyte" },
      { name: "Energy", href: "/energy" },
      
   
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubscribe = () => {
    if (email) {
      router.push(`/contact?email=${encodeURIComponent(email)}`);
    }
  };
  return (
    <footer className="bg-white text-[#0D1B3E]">
      {/* Newsletter Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#0D1B3E]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-white mb-1">
                Subscribe for the latest in AI, IoT, and sustainability
                solutions
              </h3>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 md:w-72 px-5 py-3 rounded-full border border-white/20 text-sm focus:outline-none focus:border-[#3DD68C] transition-colors bg-white/10 text-white placeholder-white/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubscribe}
                className="px-6 py-3 bg-[#3DD68C] text-[#0D1B3E] rounded-full text-sm font-semibold hover:bg-[#2bc478] transition-all duration-300 hover:shadow-[0_0_20px_rgba(61,214,140,0.3)] whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Social */}
          <motion.div variants={itemVariants}>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Data-driven energy and sustainability solutions for a Net Zero
              future.
            </p>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/company/sustainabyte-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F5F7FA] flex items-center justify-center text-[#0D1B3E] hover:bg-[#3DD68C] hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.youtube.com/@SustainabyteTechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F5F7FA] flex items-center justify-center text-[#0D1B3E] hover:bg-[#3DD68C] hover:text-white transition-all duration-300"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links & Solutions */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="font-[family-name:var(--font-sora)] font-bold text-sm uppercase tracking-wider text-[#0D1B3E] mb-5">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-[#3DD68C] hover:pl-1 transition-all duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Us */}
          <motion.div variants={itemVariants}>
            <h3 className="font-[family-name:var(--font-sora)] font-bold text-sm uppercase tracking-wider text-[#0D1B3E] mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#3DD68C] mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-500">
                  <p>+91 83770 07638</p>
                  <p>+91 73059 54384</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#3DD68C] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@sustainabyte.ai"
                  className="text-sm text-gray-500 hover:text-[#3DD68C] transition-colors"
                >
                  info@sustainabyte.ai
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#3DD68C] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-500">
                  Chennai, Tamil Nadu, India
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#3DD68C] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-500">Monday to Friday</p>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Sustainabyte Technologies. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-gray-400 hover:text-[#3DD68C] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-400 hover:text-[#3DD68C] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
