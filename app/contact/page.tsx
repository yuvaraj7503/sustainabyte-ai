"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Building,
  User,
  ArrowRight,
  Globe
} from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    mobile: "",
    message: ""
  });

  useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setFormData(prev => ({ ...prev, email: emailParam }));
    }
  }, [searchParams]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending your message...");

    const form = e.currentTarget as HTMLFormElement;
    const data = {
      type: "contact",
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      organization: (form.elements.namedItem("organization") as HTMLInputElement).value,
      mobile: (form.elements.namedItem("mobile") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We will contact you soon.", { id: loadingToast });
        form.reset();
        setFormData({ name: "", email: "", organization: "", mobile: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.", { id: loadingToast });
      }
    } catch (error) {
      toast.error("Error sending message. Check your connection.", { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#3DD68C]/5 rounded-full blur-3xl -mr-32 -mt-32" />

      <div className="relative z-10">
        <h2 className="font-sora text-4xl font-bold text-[#0D1B3E] mb-4">Get In Touch</h2>
        <p className="text-gray-500 mb-10 text-lg">Fill out the form below and our team will get back to you within 24 hours</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#0D1B3E] uppercase tracking-widest flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-[#3DD68C]" /> Full Name*
              </label>
              <input
                name="name"
                type="text"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] focus:outline-none focus:border-[#3DD68C] focus:bg-white transition-all placeholder:text-gray-400"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#0D1B3E] uppercase tracking-widest flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#3DD68C]" /> Email Address*
              </label>
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] focus:outline-none focus:border-[#3DD68C] focus:bg-white transition-all placeholder:text-gray-400"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#0D1B3E] uppercase tracking-widest flex items-center gap-2">
                <Building className="w-3.5 h-3.5 text-[#3DD68C]" /> Organization Name*
              </label>
              <input
                name="organization"
                type="text"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] focus:outline-none focus:border-[#3DD68C] focus:bg-white transition-all placeholder:text-gray-400"
                placeholder="Company Inc."
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#0D1B3E] uppercase tracking-widest flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#3DD68C]" /> Mobile Number
              </label>
              <input
                name="mobile"
                type="tel"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] focus:outline-none focus:border-[#3DD68C] focus:bg-white transition-all placeholder:text-gray-400"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#0D1B3E] uppercase tracking-widest flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5 text-[#3DD68C]" /> Your Message
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] focus:outline-none focus:border-[#3DD68C] focus:bg-white transition-all resize-none placeholder:text-gray-400"
              placeholder="How can we help you achieve your sustainability goals?"
            ></textarea>
          </div>
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-5 bg-[#3DD68C] text-[#0D1B3E] rounded-xl font-bold text-lg transition-all shadow-[0_10px_30px_rgba(61,214,140,0.3)] flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? "Sending Intelligence..." : "Send Message"}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ── HERO SECTION ── */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <Image
          src="/Contact%20Us/Contact-Us-BG-scaled.webp"
          alt="Contact Us Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
         
            <h1 className="font-sora text-5xl md:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="text-[#3DD68C]">Contact</span> Us
            </h1>
        
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT: LOCATIONS & FORM ── */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* LEFT: OUR LOCATIONS */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <span className="text-[#3DD68C] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Corporate HQ</span>
                <h2 className="font-sora text-4xl md:text-5xl font-bold text-[#0D1B3E] mb-10">Our Global Presence</h2>

                {/* Map Iframe */}
                <div className="relative w-full aspect-video rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl mb-12 group">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.2345!2d80.17!3d12.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f0000000000%3A0x0!2sMadambakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="transition-all duration-700"
                  />
                  <div className="absolute inset-0 pointer-events-none border-[12px] border-white/50 rounded-[3rem]" />
                </div>

                <div className="space-y-0 border-t border-gray-100">
                  <div className="py-8 border-b border-gray-100 flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#3DD68C]/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-[#3DD68C]" />
                    </div>
                    <div>
                      <h3 className="font-sora font-bold text-[#0D1B3E] mb-2 uppercase text-xs tracking-wider">Location</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">Madambakkam, Chennai, Tamil Nadu, India</p>
                    </div>
                  </div>
                  
                  <div className="py-8 border-b border-gray-100 flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#3DD68C]/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-[#3DD68C]" />
                    </div>
                    <div>
                      <h3 className="font-sora font-bold text-[#0D1B3E] mb-2 uppercase text-xs tracking-wider">Email Us</h3>
                      <p className="text-gray-500 text-sm">info@sustainabyte.ai, support@sustainabyte.ai</p>
                    </div>
                  </div>
                  
                  <div className="py-8 border-b border-gray-100 flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#3DD68C]/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-[#3DD68C]" />
                    </div>
                    <div>
                      <h3 className="font-sora font-bold text-[#0D1B3E] mb-2 uppercase text-xs tracking-wider">Call Support</h3>
                      <p className="text-gray-500 text-sm">+91 83770 07638, +91 73059 54384</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: CONTACT FORM */}
            <Suspense fallback={<div className="h-[600px] bg-gray-50 animate-pulse rounded-[3rem]" />}>
              <ContactForm />
            </Suspense>

          </div>
        </div>
      </section>
    </div>
  );
}
