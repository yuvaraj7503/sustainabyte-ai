"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Zap, BarChart3, ShieldCheck, Database, Leaf, Globe, Cpu, BookOpen, Users, Brain, Newspaper, Handshake, Briefcase } from "lucide-react";

type NavLink = {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
  megaMenu?: {
    title: string;
    gridCols?: number;
    columns: {
      title: string;
      href?: string;
      items: { name: string; href: string }[];
    }[];
  };
};

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  {
    name: "Energy",
    href: "/energy",
    megaMenu: {
      title: "Energy",
      columns: [
        {
          title: "Energy Efficiency and Consulting",
          href: "/energy/efficiency-consulting",
          items: [
            { name: "Equip-Ops Analytics", href: "/energy#equip-ops" },
            { name: "Compressed Air Leakage Audits", href: "/energy#compressed-air" },
            { name: "Chiller Reliability & Performance Audits", href: "/energy#chiller" },
            { name: "Boiler Performance Audits", href: "/energy#boiler" },
            { name: "ASHRAE Level 1 & 2 Audits", href: "/energy#ashrae" },
            { name: "Electrical Safety Audits", href: "/energy#electrical" },
            { name: "Power Quality Analysis", href: "/energy#power" },
          ]
        },
        {
          title: "Energy Analytics",
          href: "/energy/analytics",
          items: [
            { name: "Utility Data Analytics", href: "/energy/analytics#utility" },
            { name: "BMS Data Analytics", href: "/energy/analytics#bms" },
            { name: "Solar Data Analytics", href: "/energy/analytics#solar" },
            { name: "Design & Development of Analytical Systems", href: "/energy/analytics#design" },
          ]
        },
        {
          title: "Energy Management Solutions",
          href: "/energy/management-solutions",
          items: [
            { name: "ISO 50001 System Implementation Support", href: "/energy/management-solutions#iso-50001" },
            { name: "ISO 50002 System Implementation Support", href: "/energy/management-solutions#iso-50002" },
            { name: "Measurement & Verification (IPMVP)", href: "/energy/management-solutions#ipmvp" },
            { name: "Digitisation for savings tracking", href: "/energy/management-solutions#digitalisation" },
          ]
        }
      ]
    }
  },
  {
    name: "Sustainability",
    href: "/sustainability",
    megaMenu: {
      title: "Sustainability",
      gridCols: 4,
      columns: [
        {
          title: "Carbon Accounting",
          href: "/sustainability/carbon-accounting",
          items: [
            { name: "GHG Protocol", href: "/sustainability/carbon-accounting#ghg" },
            { name: "ISO 14064", href: "/sustainability/carbon-accounting#iso14064" },
            { name: "CDP Reporting", href: "/sustainability/carbon-accounting#cdp" },
          ]
        },
        {
          title: "Water Management",
          href: "/sustainability/water-management",
          items: [
            { name: "Key Objectives", href: "/sustainability/water-management#objectives" },
            { name: "Conservation Strategies", href: "/sustainability/water-management#strategies" },
            { name: "Audit Journey", href: "/sustainability/water-management#timeline" },
          ]
        },
        {
          title: "Decarbonization",
          href: "/sustainability/decarbonization",
          items: [
            { name: "Target the Right Asset", href: "/sustainability/decarbonization#approach" },
            { name: "Measurable Results", href: "/sustainability/decarbonization#results" },
            { name: "Immediate Impact", href: "/sustainability/decarbonization#impact" },
          ]
        },
        {
          title: "Net Zero RoadMap",
          href: "/sustainability/net-zero-roadmap",
          items: [
            { name: "Baseline & Target Setting", href: "/sustainability/net-zero-roadmap#baseline" },
            { name: "Science-Aligned Actions", href: "/sustainability/net-zero-roadmap#science" },
            { name: "Performance Monitoring", href: "/sustainability/net-zero-roadmap#monitoring" },
          ]
        }
      ]
    }
  },
  {
    name: "Technology",
    href: "/technology",
    megaMenu: {
      title: "Technology",
      gridCols: 3,
      columns: [
        {
          title: "Software",
          items: [
            { name: "OptiByte (AIoT Energy)", href: "/technology/optibyte" },
            { name: "CPM/CPO (Chiller Plant Manager)", href: "/technology/chiller-plant-manager" },
            { name: "IR Blaster (AC Monitoring)", href: "/technology/inbyte" },
            { name: "FixiByte (CMMS & Maintenance)", href: "/technology/fixbyte" },
            { name: "Fusionbyte", href: "/technology/fusionbyte" },
            { name: "Digiweld", href: "/technology/digiweld" },
          ]
        },
        {
          title: "IOT Solutions",
          href: "/technology/iot-solutions",
          items: [
            { name: "Optiedge Water", href: "/technology/iot-solutions#optiedgew" },
            { name: "Optiedge HVAC", href: "/technology/iot-solutions#optiedgeac" },
            { name: "Optiedge Cooling Tower", href: "/technology/iot-solutions#optiedgect" },
            { name: "Optiedge Chiller Plant Management", href: "/technology/iot-solutions#optiedgecpm" },
            { name: "Optiedge Compressed Air Manager", href: "/technology/iot-solutions#optiedgecam" },
            { name: "Optiedge Demand Management", href: "/technology/iot-solutions#optiedgedm" },
          ]
        }, {
          title: "AI",
          items: [
            { name: "AI Capabilities", href: "/technology/ai" },
            { name: "Digital Twin Intelligence", href: "/technology/ai#digital-twin" },
            { name: "Smart Fault Detection & Diagnostics", href: "/technology/ai#fdd" },
            { name: "AI Assistant", href: "/technology/ai#ai-assistant" },
          ]
        }
      ]
    }
  },
  {
    name: "Resources",
    href: "/resources",
    megaMenu: {
      title: "Resources",
      gridCols: 2,
      columns: [
        {
          title: "Blogs",
          items: [
            { name: "Sustainability Insights", href: "/sustainability/insights" }
          ]
        },
        {
          title: "News",
          items: [
            { name: "Latest News", href: "/news" }
          ]
        }
      ]
    }
  },
  {
    name: "Company",
    href: "/company",
    megaMenu: {
      title: "Company",
      gridCols: 4,
      columns: [
        {
          title: "About Us",
          href: "/company",
          items: []
        },
        {
          title: "Clients",
          href: "/company#clients",
          items: []
        },
        {
          title: "Careers",
          href: "/careers",
          items: []
        },
        {
          title: "People",
          href: "/people",
          items: []
        }
      ]
    }
  },
  { name: "Regions", href: "/regions" },
  { name: "Contact us", href: "/contact" },
];

function DropdownMenu({
  items,
  isOpen,
}: {
  items: { name: string; href: string }[];
  isOpen: boolean;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scaleY: 0.96 }}
          animate={{ opacity: 1, y: 0, scaleY: 1 }}
          exit={{ opacity: 0, y: -8, scaleY: 0.96 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-0 mt-1 w-64 rounded-xl overflow-hidden shadow-2xl z-50 origin-top"
          style={{
            background: "rgba(13, 27, 62, 0.98)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(13, 27, 62, 0.1)",
          }}
        >
          <div className="py-2">
            {items.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block px-5 py-3 text-sm text-[#B0BEC5] hover:text-[#3DD68C] hover:bg-white/5 hover:pl-7 transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  // Reset expanded menus when mobile menu closes
  useEffect(() => {
    if (!mobileOpen) {
      setExpandedMobileMenu(null);
    }
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/" && pathname !== "/") return false;
    return pathname.startsWith(href);
  };

  // Checks if current page matches the nav item OR any of its dropdown/megaMenu children
  const isNavActive = (link: NavLink): boolean => {
    if (link.href === "/" && pathname !== "/") return false;
    if (pathname.startsWith(link.href) && link.href !== "/") return true;
    if (link.href === "/" && pathname === "/") return true;
    // Check dropdown items
    if (link.dropdown) {
      return link.dropdown.some((item) => pathname.startsWith(item.href.split("#")[0]));
    }
    // Check megaMenu items
    if (link.megaMenu) {
      return link.megaMenu.columns.some((col) => {
        const colHref = col.href?.split("#")[0];
        if (colHref && pathname.startsWith(colHref)) return true;
        return col.items.some((item) => pathname.startsWith(item.href.split("#")[0]));
      });
    }
    return false;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const getColumnIcon = (title: string, className = "w-5 h-5 text-[#4DB846]") => {
    const t = title.toLowerCase();
    if (t.includes("consulting") || t.includes("accounting")) return <Zap className={className} />;
    if (t.includes("analytics") || t.includes("water")) return <BarChart3 className={className} />;
    if (t.includes("management") || t.includes("decarbonization")) return <ShieldCheck className={className} />;
    if (t.includes("software") || t.includes("net zero")) return <Cpu className={className} />;
    if (t.includes("iot")) return <Database className={className} />;
    if (t.includes("blogs")) return <BookOpen className={className} />;
    if (t.includes("about") || t.includes("people")) return <Users className={className} />;
    if (t.includes("clients")) return <Handshake className={className} />;
    if (t.includes("careers")) return <Briefcase className={className} />;
    if (t.includes("ai")) return <Brain className={className} />;
    if (t.includes("news")) return <Newspaper className={className} />;
    return <Globe className={className} />;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled
        ? "bg-[#0D1B3E]/90 backdrop-blur-xl shadow-lg border-b border-white/5"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <Image
              src="/Company-Logo-3-1.webp"
              alt="Sustainabyte Technologies"
              width={280}
              height={60}
              className="h-14 w-auto object-contain group-hover:brightness-110 transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  (link.dropdown || link.megaMenu) && handleMouseEnter(link.name)
                }
                onMouseLeave={handleMouseLeave}
              >
                {(link.dropdown || link.megaMenu) ? (
                  <div className="flex flex-col items-center">
                    <button
                      className={`flex items-center gap-1 px-3 xl:px-4 py-2 text-sm xl:text-base transition-colors duration-200 font-semibold ${isNavActive(link) || activeDropdown === link.name
                          ? "text-[#3DD68C]"
                          : "text-white hover:text-white/80"
                        }`}
                      onClick={() =>
                        setActiveDropdown(activeDropdown === link.name ? null : link.name)
                      }
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    {/* Active underline indicator */}
                    <span
                      className={`block h-0.5 rounded-full transition-all duration-300 ${isNavActive(link) || activeDropdown === link.name
                          ? "w-4/5 bg-[#3DD68C]"
                          : "w-0 bg-transparent"
                        }`}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 px-3 xl:px-4 py-2 text-sm xl:text-base transition-colors duration-200 font-semibold ${isNavActive(link)
                          ? "text-[#3DD68C]"
                          : "text-white hover:text-white/80"
                        }`}
                    >
                      {link.name}
                    </Link>
                    {/* Active underline indicator */}
                    <span
                      className={`block h-0.5 rounded-full transition-all duration-300 ${isNavActive(link)
                          ? "w-4/5 bg-[#3DD68C]"
                          : "w-0 bg-transparent"
                        }`}
                    />
                  </div>
                )}
                {link.dropdown && (
                  <DropdownMenu
                    items={link.dropdown}
                    isOpen={activeDropdown === link.name}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden fixed left-0 right-0 top-[72px] h-[calc(100vh-72px)] bg-gradient-to-b from-[#0D1B3E] via-[#0A1530] to-[#050A18] border-t border-white/5 z-50 overflow-y-auto"
          >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-[#3DD68C]/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-[220px] h-[220px] bg-[#4DB846]/5 rounded-full blur-[70px] pointer-events-none" />

            <div className="px-6 py-8 space-y-3 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="border-b border-white/5 last:border-0"
                >
                  {!(link.megaMenu || link.dropdown) ? (
                    <Link
                      href={link.href}
                      className={`block py-3.5 text-lg font-semibold transition-colors duration-200 ${
                        isActive(link.href) ? "text-[#3DD68C]" : "text-white/80 hover:text-[#3DD68C]"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <div className="py-1">
                      <button
                        onClick={() =>
                          setExpandedMobileMenu(
                            expandedMobileMenu === link.name ? null : link.name
                          )
                        }
                        className={`w-full flex items-center justify-between py-2.5 text-lg font-semibold transition-colors duration-200 ${
                          isNavActive(link) || expandedMobileMenu === link.name
                            ? "text-[#3DD68C]"
                            : "text-white/80 hover:text-[#3DD68C]"
                        }`}
                      >
                        <span className={isNavActive(link) ? "text-[#3DD68C]" : ""}>{link.name}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            expandedMobileMenu === link.name ? "rotate-180 text-[#3DD68C]" : "text-white/40"
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {expandedMobileMenu === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pr-2 py-4 my-2 space-y-6 bg-white/[0.02] rounded-xl border border-white/5 backdrop-blur-md">
                              {/* Main Overview Link */}
                              <Link
                                href={link.href}
                                className="inline-flex items-center gap-1.5 text-[#3DD68C] font-bold text-sm hover:underline"
                                onClick={() => setMobileOpen(false)}
                              >
                                Explore {link.name} Overview
                                <span className="text-xs">→</span>
                              </Link>

                              {link.megaMenu &&
                                link.megaMenu.columns.map((col, idx) => (
                                  <div key={idx} className="space-y-2.5">
                                    {/* Column Title */}
                                    <div className="flex items-center gap-2">
                                      {getColumnIcon(col.title, "w-4 h-4 text-[#3DD68C]")}
                                      {col.href ? (
                                        <Link
                                          href={col.href}
                                          className="text-sm font-bold text-white hover:text-[#3DD68C] transition-colors"
                                          onClick={() => setMobileOpen(false)}
                                        >
                                          {col.title}
                                        </Link>
                                      ) : (
                                        <h5 className="text-sm font-bold text-white/50">
                                          {col.title}
                                        </h5>
                                      )}
                                    </div>

                                    {/* Column Items */}
                                    {col.items && col.items.length > 0 && (
                                      <ul className="space-y-2 pl-6 border-l border-white/10">
                                        {col.items.map((item, itemIdx) => (
                                          <li key={itemIdx}>
                                            <Link
                                              href={item.href}
                                              className={`block text-xs py-1 transition-colors ${
                                                pathname === item.href.split("#")[0]
                                                  ? "text-[#3DD68C] font-semibold"
                                                  : "text-white/60 hover:text-white"
                                              }`}
                                              onClick={() => setMobileOpen(false)}
                                            >
                                              {item.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                ))}

                              {link.dropdown && (
                                <ul className="space-y-2 pl-6 border-l border-white/10">
                                  {link.dropdown.map((sub, subIdx) => (
                                    <li key={subIdx}>
                                      <Link
                                        href={sub.href}
                                        className={`block text-xs py-1 transition-colors ${
                                          pathname === sub.href.split("#")[0]
                                            ? "text-[#3DD68C] font-semibold"
                                            : "text-white/60 hover:text-white"
                                        }`}
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        {sub.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {navLinks.map((link) =>
          link.megaMenu && activeDropdown === link.name && (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, }}
              className="absolute top-full left-0 right-0 bg-[#0D1B3E]/95 backdrop-blur-3xl border-t border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-40 pb-16 pt-12 overflow-hidden"
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4DB846]/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#4DB846]/5 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none" />

              <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Close Button */}
                <button
                  onClick={() => setActiveDropdown(null)}
                  className="absolute -top-6 right-6 text-white/40 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-300 z-50"
                >
                  <X className="w-5 h-5" />
                </button>
                {/* Columns */}
                <div className={`grid grid-cols-1 gap-12 ${link.megaMenu.gridCols === 4 ? "md:grid-cols-4" :
                  link.megaMenu.gridCols === 2 ? "md:grid-cols-2" :
                    "md:grid-cols-3"
                  }`}>
                  {link.megaMenu.columns.map((col, idx) => (
                    <div key={idx} className="group/col">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4DB846]/20 to-[#3DD68C]/5 border border-white/10 flex items-center justify-center group-hover/col:border-[#4DB846]/40 transition-colors duration-500">
                          {getColumnIcon(col.title)}
                        </div>
                        {col.href ? (
                          <Link
                            href={col.href}
                            className="text-xl font-black text-white hover:text-[#4DB846] transition-colors duration-300"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {col.title}
                          </Link>
                        ) : (
                          <h4 className="text-xl font-black text-white">
                            {col.title}
                          </h4>
                        )}
                      </div>

                      <ul className="space-y-4 pl-1">
                        {col.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <Link
                              href={item.href}
                              className="group/link flex items-center gap-2 text-[16px] text-gray-300 hover:text-[#4DB846] transition-all duration-300"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover/link:bg-[#4DB846] group-hover/link:scale-125 transition-all duration-300" />
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </nav>
  );
}
