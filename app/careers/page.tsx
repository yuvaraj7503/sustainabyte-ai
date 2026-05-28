"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import GreenButton from "@/components/ui/GreenButton";
import toast from "react-hot-toast";
import {
  Briefcase,
  Upload,
  Cpu,
  TrendingUp,
  Coffee,
  Users,
  BookOpen,
  Lightbulb,
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  Building,
  GraduationCap
} from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const whyJoinUs = [
  { icon: Lightbulb, title: "Innovative Projects", desc: "Work on cutting-edge AI and IoT solutions." },
  { icon: TrendingUp, title: "Career Growth", desc: "Clear pathways to advance your career rapidly." },
  { icon: Coffee, title: "Flexible Work Culture", desc: "Balance your life with flexible working arrangements." },
  { icon: Cpu, title: "Latest Technologies", desc: "Access the best tools and tech stacks." },
  { icon: Users, title: "Collaborative Team", desc: "Join a diverse team of brilliant minds." },
  { icon: BookOpen, title: "Learning & Development", desc: "Continuous learning programs and resources." },
];

const jobs = [
  { title: "Frontend Developer", experience: "1-3 Years Full Time", location: "Chennai / On-site", skills: "React, Next.js, Tailwind, TS" },
  { title: "Backend Developer", experience: "1-3 Years Full Time", location: "Chennai / On-site", skills: "Node.js, Python, .NET, .NET CORE, PostgreSQL, SQL SERVER, influxdb, MongoDB, MQTT" },
  { title: "AI/ML Engineer", experience: "1-3 Years Full Time", location: "Chennai / On-site", skills: "Python, TensorFlow, Data Pipelines" },
  { title: "UI/UX Designer", experience: "1-3 Years Full Time", location: "Chennai / On-site", skills: "Figma, User Research, Prototyping" },
  { title: "IoT Engineer", experience: "1-5 Years Full Time", location: "Chennai / On-site", skills: "C++, Embedded Systems, MQTT" },
  { title: "DevOps Engineer", experience: "1-2 Years Full Time", location: "Chennai / On-site", skills: "AWS/Azure, Docker, CI/CD" },
];

export default function CareersPage() {
  const [activeJob, setActiveJob] = useState<number | null>(null);
  const [selectedPosition, setSelectedPosition] = useState("");

  const handleApplyClick = (position: string) => {
    setSelectedPosition(position);
    const element = document.getElementById('apply');
    if (element) {
      const offset = 100; // Offset for header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      const validTypes = [".pdf", ".doc", ".docx"];
      const extension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();

      if (validTypes.includes(extension)) {
        if (file.size <= 5 * 1024 * 1024) {
          setSelectedFile(file);
        } else {
          toast.error("File size exceeds 5MB limit.");
        }
      } else {
        toast.error("Invalid file type. Please upload PDF, DOC, or DOCX.");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const loadingToast = toast.loading("Submitting your application...");

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData();

    formData.append("type", "career");
    formData.append("name", (form.elements.namedItem("applicant-name") as HTMLInputElement).value);
    formData.append("email", (form.elements.namedItem("applicant-email") as HTMLInputElement).value);
    formData.append("mobile", (form.elements.namedItem("mobile") as HTMLInputElement).value);
    formData.append("position", (form.elements.namedItem("applying-position") as HTMLSelectElement).value);
    formData.append("experience", (form.elements.namedItem("experience") as HTMLSelectElement).value);
    formData.append("linkedin", (form.elements.namedItem("linkedin-url") as HTMLInputElement).value);
    formData.append("message", (form.elements.namedItem("cover-letter") as HTMLTextAreaElement).value);

    if (selectedFile) {
      formData.append("resume", selectedFile);
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Application submitted successfully!", { id: loadingToast });
        form.reset();
        setSelectedPosition("");
        setSelectedFile(null);
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Something went wrong.", { id: loadingToast });
      }
    } catch (error) {
      toast.error("Error sending application.", { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0D1B3E] min-h-screen text-white overflow-x-hidden">

      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Careers/career .webp"
            alt="Careers Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E] via-[#0D1B3E]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B3E]/70 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0D1B3E]/40 via-transparent to-transparent" />
          <div className="absolute inset-0 mesh-gradient opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-[#3DD68C]/10 text-[#3DD68C] border border-[#3DD68C]/20 mb-8">
              <Building className="w-4 h-4" /> Join Sustainabyte
            </span>
            <h1 className="font-[family-name:var(--font-sora)] text-4xl md:text-7xl font-black mb-8 leading-[1.1]">
              <span className="text-white">Build the</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3DD68C] to-[#2bc478]">Future</span>
            </h1>
            <p className="text-[#B0BEC5] text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl">
              Join our team of innovators creating AI-powered industrial and digital solutions to drive <span className="text-white font-bold italic">global sustainability</span>.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <GreenButton href="#jobs">View Open Positions</GreenButton>
              <button
                onClick={() => handleApplyClick("")}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold transition-all backdrop-blur-md flex items-center gap-2 text-white shadow-lg"
              >
                Apply now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: WHY JOIN US ── */}
      <section className="py-24 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#3DD68C]/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Why Work With <span className="text-[#3DD68C]">Us</span>
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Experience a culture built on innovation, continuous learning, and <span className="text-[#3DD68C] font-semibold">impactful work</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyJoinUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(61,214,140,0.1)] transition-all duration-500 group relative overflow-hidden h-full text-center"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#3DD68C]/5 rounded-bl-[4rem] group-hover:bg-[#3DD68C]/10 transition-colors" />
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                  className="w-16 h-16 rounded-2xl bg-[#3DD68C]/10 flex items-center justify-center mb-8 relative z-10 mx-auto"
                >
                  <item.icon className="w-8 h-8 text-[#3DD68C]" />
                </motion.div>
                <h3 className="font-[family-name:var(--font-sora)] text-xl md:text-2xl font-bold text-[#0D1B3E] mb-4 relative z-10">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: OPEN POSITIONS ── */}
      <section id="jobs" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D1B3E] mb-6"
            >
              Open <span className="text-[#3DD68C]">Positions</span>
            </motion.h2>
            <p className="text-gray-500 text-lg">Join us in building the next generation of industrial software.</p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[2rem] border border-gray-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(61,214,140,0.08)] transition-all overflow-hidden"
              >
                <button
                  onClick={() => setActiveJob(activeJob === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-8 text-left transition-colors focus:outline-none"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-[#0D1B3E] mb-3">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-medium">
                      <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-[#3DD68C]" /> {job.experience}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#3DD68C]" /> {job.location}</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${activeJob === idx ? 'bg-[#3DD68C] text-white' : 'bg-gray-100 text-gray-400'}`}>
                    <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${activeJob === idx ? "rotate-180" : ""}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeJob === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-gray-100 bg-[#F8FAFC]"
                    >
                      <div className="p-8">
                        <p className="text-gray-600 mb-8 leading-relaxed"><strong className="text-[#0D1B3E]">Required Skills:</strong> {job.skills}</p>
                        <GreenButton onClick={() => handleApplyClick(job.title)}>Apply Now</GreenButton>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: INTERNSHIP PROGRAM ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 relative aspect-video md:aspect-square rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] bg-white"
          >
            <Image
              src="/Careers/teams.avif"
              alt="Sustainabyte Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3DD68C]/10 to-transparent" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-5xl font-bold text-[#0D1B3E] mb-6">
              Start Your <span className="text-[#3DD68C]">Tech Career</span> With Us
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed mb-10">
              Our internship program offers hands-on experience, mentorship from industry experts, and a pathway to a full-time career.
            </p>
            <ul className="space-y-4 mb-10">
              {['Real-world industrial projects', '1-on-1 Mentorship', 'Comprehensive training support', 'Pre-placement offers for top performers'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-600 font-medium text-lg">
                  <div className="w-8 h-8 rounded-full bg-[#3DD68C]/10 flex items-center justify-center text-[#3DD68C] border border-[#3DD68C]/20">✓</div>
                  {item}
                </li>
              ))}
            </ul>
            <GreenButton onClick={() => handleApplyClick("Internship")}>Apply for Internship</GreenButton>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5: RESUME UPLOAD FORM ── */}
      {/* ── SECTION 4: QUOTE ── */}
      <section className="py-24 bg-[#0D1B3E] relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#3DD68C] blur-[120px] rounded-full" />
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-blue-500 blur-[120px] rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="font-[family-name:var(--font-sora)] text-3xl md:text-5xl font-bold text-white mb-8 italic"
          >
            "We aren't just building products; we're crafting the future of industrial intelligence."
          </motion.h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[2px] bg-[#3DD68C]" />
            <span className="text-[#3DD68C] font-bold tracking-widest uppercase">The Sustainabyte Vision</span>
            <div className="w-12 h-[2px] bg-[#3DD68C]" />
          </div>
        </div>
      </section>

      {/* ── SECTION 5: APPLY NOW FORM ── */}
      <section className="relative py-24 overflow-hidden" id="apply">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Careers/career .webp"
            alt="Apply Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-800/80 backdrop-blur-[2px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto p-10 md:p-16 rounded-[3rem] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-sora)] text-4xl font-bold text-[#0D1B3E] mb-4">Apply Now</h2>
              <p className="text-gray-500 text-lg">Send us your details and we'll get back to you soon.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Full Name</label>
                <input name="applicant-name" type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] placeholder-gray-400 focus:outline-none focus:border-[#3DD68C] focus:bg-white transition-all" placeholder="John Doe" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email Address</label>
                  <input name="applicant-email" type="email" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] placeholder-gray-400 focus:outline-none focus:border-[#3DD68C] focus:bg-white transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Mobile Number</label>
                  <input name="mobile" type="tel" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] placeholder-gray-400 focus:outline-none focus:border-[#3DD68C] focus:bg-white transition-all" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Applying Position</label>
                  <select
                    name="applying-position"
                    value={selectedPosition}
                    onChange={(e) => setSelectedPosition(e.target.value)}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] focus:outline-none focus:border-[#3DD68C] focus:bg-white transition-all"
                  >
                    <option value="">Select a position</option>
                    {jobs.map(job => (
                      <option key={job.title} value={job.title}>{job.title}</option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Experience</label>
                  <select name="experience" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] focus:outline-none focus:border-[#3DD68C] focus:bg-white transition-all">
                    <option value="">Years of experience</option>
                    <option value="Fresher">Fresher</option>
                    <option value="1-2 Years">1-2 Years</option>
                    <option value="3-5 Years">3-5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">LinkedIn Profile URL</label>
                <input name="linkedin-url" type="url" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] placeholder-gray-400 focus:outline-none focus:border-[#3DD68C] focus:bg-white transition-all" placeholder="https://linkedin.com/in/johndoe" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Cover Letter (Optional)</label>
                <textarea name="cover-letter" rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] placeholder-gray-400 focus:outline-none focus:border-[#3DD68C] focus:bg-white transition-all resize-none" placeholder="Tell us why you'd be a great fit..."></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Upload Resume</label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`w-full border-2 border-dashed rounded-2xl p-10 text-center transition-all cursor-pointer flex flex-col items-center justify-center group ${
                    isDragging || selectedFile
                      ? "border-[#3DD68C] bg-[#3DD68C]/5"
                      : "border-gray-200 bg-gray-50 hover:border-[#3DD68C] hover:bg-gray-100"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors ${selectedFile || isDragging ? 'bg-[#3DD68C] text-white' : 'bg-[#3DD68C]/10 text-[#3DD68C] group-hover:bg-[#3DD68C]/20'}`}>
                    <Upload className="w-7 h-7" />
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    required={!selectedFile}
                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                    className="hidden"
                    id="resume-upload"
                    accept=".pdf,.doc,.docx"
                  />
                  <div>
                    <p className="text-[#0D1B3E] font-bold mb-2">
                      {selectedFile ? selectedFile.name : "Click to upload or drag and drop"}
                    </p>
                    <p className="text-sm text-gray-500">
                      {selectedFile ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB` : "PDF, DOC, DOCX (Max 5MB)"}
                    </p>
                  </div>
                  {selectedFile && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedFile(null);
                        if (fileInputRef.current) fileInputRef.current.value = "";
                      }}
                      className="mt-4 text-xs font-bold text-red-500 hover:text-red-600 transition-colors uppercase tracking-wider"
                    >
                      Remove File
                    </button>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full mt-4 py-5 bg-[#3DD68C] hover:bg-[#2bc478] text-[#0D1B3E] rounded-xl font-bold text-lg transition-all shadow-[0_4px_14px_0_rgba(61,214,140,0.39)] hover:shadow-[0_6px_20px_rgba(61,214,140,0.23)] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
              >
                {isSubmitting ? "Submitting Application..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3DD68C]/5 blur-[120px] rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full -ml-48 -mb-48" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Mail, title: "Email HR", detail: "hr@sustainabyte.ai", link: "mailto:hr@sustainabyte.ai" },
              { icon: Phone, title: "Call Us", detail: "+91 83770 07638", link: "tel:+918377007638" },
              { icon: LinkedinIcon, title: "LinkedIn", detail: "Follow for updates", link: "https://linkedin.com/company/sustainabyte-ai/" }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target={item.title === "LinkedIn" ? "_blank" : undefined}
                rel={item.title === "LinkedIn" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(61,214,140,0.15)] hover:border-[#3DD68C]/30 transition-all duration-500 text-center group block"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#3DD68C]/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-[#3DD68C] transition-all duration-500 relative">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <item.icon className="w-10 h-10 text-[#3DD68C] group-hover:text-white transition-colors duration-500" />
                  </motion.div>
                  <div className="absolute inset-0 bg-[#3DD68C] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
                </div>
                <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0D1B3E] text-2xl mb-3">{item.title}</h3>
                <p className="text-gray-500 text-lg font-medium group-hover:text-[#3DD68C] transition-colors">{item.detail}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
