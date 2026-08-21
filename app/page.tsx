"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowUpRight, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const services = [
  { title: "Frontend", desc: "Interfaces modernas con React y Next.js.", color: "cyan" },
  { title: "Backend", desc: "APIs robustas con Node.js y Express.", color: "violet" },
  { title: "E-commerce", desc: "Tiendas online escalables y optimizadas.", color: "emerald" },
  { title: "Dashboard IA", desc: "Visualizacion de datos con inteligencia artificial.", color: "blue" },
  { title: "Automatizacion", desc: "Optimizacion de procesos con Python.", color: "orange" },
  { title: "Ciberseguridad", desc: "Auditoria, hardening y proteccion.", color: "rose" },
];

const sites = [
  { name: "HeyDenim", url: "https://heydenim.es/", desc: "Tienda de moda online", tag: "E-commerce" },
  { name: "MG Tech", url: "https://cristiannessi.github.io/MG-Tech/", desc: "Agencia de marketing digital", tag: "Landing" },
  { name: "La Fija", url: "https://www.lafija.com/", desc: "Plataforma de casino online", tag: "Frontend" },
  { name: "Domenico Schiattarella", url: "https://www.domenicoschiattarella.com/", desc: "Sitio profesional personal", tag: "Portfolio" },
  { name: "Alicante Apartments", url: "https://alicanteapartments.es/", desc: "Plataforma turistica", tag: "Web" },
];

const skills = ["JavaScript","TypeScript","React","Next.js","Node.js","Python","Tailwind","PostgreSQL","Docker","Git","Linux","OWASP"];

const colorMap: Record<string, string> = {
  cyan: "border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-cyan-500/10",
  violet: "border-violet-500/20 hover:border-violet-500/40 hover:shadow-violet-500/10",
  emerald: "border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-emerald-500/10",
  blue: "border-blue-500/20 hover:border-blue-500/40 hover:shadow-blue-500/10",
  orange: "border-orange-500/20 hover:border-orange-500/40 hover:shadow-orange-500/10",
  rose: "border-rose-500/20 hover:border-rose-500/40 hover:shadow-rose-500/10",
};

const accentMap: Record<string, string> = {
  cyan: "text-cyan-400", violet: "text-violet-400", emerald: "text-emerald-400",
  blue: "text-blue-400", orange: "text-orange-400", rose: "text-rose-400",
};

const WA = "M16.004 2C8.28 2 2 8.28 2 16.004c0 2.478.648 4.84 1.88 6.916L2 30l7.298-1.858A13.94 13.94 0 0 0 16.004 30C23.72 30 30 23.72 30 16.004 30 8.28 23.72 2 16.004 2zm0 25.538a11.51 11.51 0 0 1-5.87-1.607l-.42-.25-4.332 1.104 1.14-4.21-.275-.43A11.538 11.538 0 1 1 16.004 27.538zm6.326-8.634c-.346-.174-2.048-1.01-2.366-1.126-.317-.115-.548-.174-.778.174-.23.347-.893 1.126-1.095 1.357-.2.23-.403.26-.75.086-.345-.174-1.458-.538-2.777-1.715-1.026-.916-1.72-2.048-1.921-2.394-.2-.347-.022-.534.15-.707.156-.155.346-.404.52-.606.172-.202.23-.347.346-.578.116-.23.058-.433-.028-.606-.087-.174-.779-1.876-1.067-2.568-.28-.673-.566-.58-.778-.59-.2-.01-.43-.012-.66-.012-.23 0-.606.086-.923.433-.317.346-1.21 1.183-1.21 2.884 0 1.7 1.24 3.344 1.413 3.574.173.23 2.44 3.727 5.913 5.225.826.357 1.47.57 1.973.73.828.264 1.583.226 2.179.137.664-.1 2.048-.837 2.337-1.645.289-.808.289-1.5.202-1.645-.086-.144-.317-.23-.663-.404z";

const navLinks = [
  { label: "proyectos", href: "#work" },
  { label: "about", href: "#about" },
  { label: "contacto", href: "#contact" },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060910] text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* Glows ambientales */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px]" />
      </div>

      {/* NAV */}
      <header className="fixed top-0 w-full z-50 bg-[#060910]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-5 py-4 flex justify-between items-center">
          <span className="font-mono text-xs text-white/40 tracking-widest uppercase">Cristian Nessi</span>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-xs text-white/30 hover:text-white/70 transition-colors duration-300 tracking-wide">{l.label}</a>
            ))}
            <a href="/CV.pdf" target="_blank" className="flex items-center gap-1.5 text-xs bg-white/5 hover:bg-white/10 border border-white/8 text-white/50 hover:text-white/80 px-4 py-2 rounded-full transition-all duration-300">
              <Download size={11} /> CV
            </a>
          </nav>

          {/* Mobile burger */}
          <button className="md:hidden text-white/40 hover:text-white/70 transition" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/5 bg-[#060910]/95 backdrop-blur-xl px-5 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm text-white/50 hover:text-white/80 transition py-1">{l.label}</a>
            ))}
            <a href="/CV.pdf" target="_blank" className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition w-fit">
              <Download size={13} /> Descargar CV
            </a>
          </div>
        )}
        <div className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-5 pt-20">
        <div className="max-w-6xl mx-auto w-full">

          {/* Mobile: stack vertical. Desktop: lado a lado */}
          <div className="flex flex-col md:grid md:grid-cols-5 md:gap-0 md:items-center">

            {/* Texto */}
            <motion.div
              className="md:col-span-3 flex flex-col justify-center order-2 md:order-1 pb-8 md:pb-0"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 mb-6 md:mb-10 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400/60 text-xs font-mono tracking-widest">disponible · alicante, es</span>
              </div>

              <div className="mb-5 md:mb-6">
                <h1 className="text-[56px] sm:text-[72px] md:text-[88px] font-black leading-none tracking-tighter text-white/90">
                  Cristian
                </h1>
                <h1 className="text-[56px] sm:text-[72px] md:text-[88px] font-black leading-none tracking-tighter bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(120deg, #22d3ee 0%, #a78bfa 50%, #22d3ee 100%)", backgroundSize: "200% 100%" }}>
                  Nessi
                </h1>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-6 bg-white/20" />
                <span className="text-white/40 text-sm tracking-wider">Full Stack Developer</span>
              </div>

              <p className="text-white/25 text-sm leading-relaxed max-w-sm mb-8 md:mb-10">
                Diseño y desarrollo productos digitales modernos — desde el frontend hasta la infraestructura.
              </p>

              <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-300" style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(167,139,250,0.15))", border: "1px solid rgba(34,211,238,0.2)" }}>
                  Trabajemos juntos
                </a>
                <a href="/CV.pdf" target="_blank" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm text-white/40 hover:text-white/70 border border-white/8 hover:border-white/15 transition-all duration-300">
                  Ver CV <ArrowUpRight size={13} />
                </a>
              </div>

              <div className="flex gap-3">
                {[
                  { href: "https://github.com/CristianNessi", icon: <Github size={14} /> },
                  { href: "https://www.linkedin.com/in/cristian-fnessi/", icon: <Linkedin size={14} /> },
                  { href: "mailto:cristianfernandez.cn@gmail.com", icon: <Mail size={14} /> },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" className="w-8 h-8 rounded-full border border-white/8 hover:border-white/20 flex items-center justify-center text-white/25 hover:text-white/60 transition-all duration-300">{s.icon}</a>
                ))}
              </div>
            </motion.div>

            {/* Foto */}
            <motion.div
              className="md:col-span-2 relative flex items-end justify-center order-1 md:order-2"
              style={{ height: "clamp(260px, 45vw, 520px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.2 }}
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-cyan-500/10 blur-[70px]" />
              </div>
              <img
                src="/profile3.png"
                alt="Cristian Nessi"
                className="relative w-full h-full object-contain object-bottom"
                style={{
                  maskImage: "radial-gradient(ellipse 78% 85% at 50% 42%, black 30%, rgba(0,0,0,0.7) 52%, rgba(0,0,0,0.2) 70%, transparent 84%)",
                  WebkitMaskImage: "radial-gradient(ellipse 78% 85% at 50% 42%, black 30%, rgba(0,0,0,0.7) 52%, rgba(0,0,0,0.2) 70%, transparent 84%)",
                  filter: "brightness(0.82)",
                }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="projects" className="py-20 md:py-24 px-5 relative">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/6 to-transparent mb-16 md:mb-24" />
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 md:mb-16">
            <p className="text-white/20 font-mono text-[10px] tracking-[0.4em] uppercase mb-3">Servicios</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white/80 tracking-tight">Lo que puedo construir</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`group relative rounded-2xl border bg-white/[0.015] p-5 md:p-6 hover:bg-white/[0.03] hover:shadow-xl transition-all duration-500 cursor-default ${colorMap[s.color]}`}>
                <span className={`text-xs font-mono opacity-30 mb-4 block ${accentMap[s.color]}`}>0{i + 1}</span>
                <h3 className={`font-semibold text-sm mb-2 ${accentMap[s.color]}`}>{s.title}</h3>
                <p className="text-white/25 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="work" className="py-20 md:py-24 px-5 relative">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/6 to-transparent mb-16 md:mb-24" />
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 md:mb-16">
            <p className="text-white/20 font-mono text-[10px] tracking-[0.4em] uppercase mb-3">Trabajo real</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white/80 tracking-tight">Sitios publicados</h2>
          </motion.div>
          <div>
            {sites.map((site, i) => (
              <motion.a key={i} href={site.url} target="_blank" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex items-center justify-between py-4 md:py-5 border-b border-white/[0.04] hover:border-white/[0.08] transition-all duration-300 hover:px-2">
                <div className="flex items-center gap-4 min-w-0">
                  <span className="text-white/10 text-[10px] font-mono shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div className="min-w-0">
                    <p className="text-white/65 text-sm font-medium group-hover:text-white/90 transition-colors duration-300 truncate">{site.name}</p>
                    <p className="text-white/20 text-xs mt-0.5 truncate">{site.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-3">
                  <span className="hidden sm:block text-[10px] text-white/15 border border-white/6 px-2.5 py-0.5 rounded-full font-mono">{site.tag}</span>
                  <ArrowUpRight size={13} className="text-white/15 group-hover:text-white/50 transition-all duration-300" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-24 px-5 relative">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/6 to-transparent mb-16 md:mb-24" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-white/20 font-mono text-[10px] tracking-[0.4em] uppercase mb-3">Perfil</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white/80 tracking-tight mb-6 md:mb-8">Sobre mi</h2>
            <p className="text-white/40 text-sm leading-7 mb-5">
              Desarrollador Full Stack con experiencia en proyectos reales — desde eCommerce hasta plataformas con inteligencia artificial.
            </p>
            <p className="text-white/20 text-sm leading-7">
              Trabajo en equipos agiles, con foco en rendimiento, seguridad y experiencia de usuario. Apasionado por la IA aplicada al desarrollo.
            </p>
            <div className="flex items-center gap-2 mt-5 text-white/20 text-xs">
              <MapPin size={11} /><span>Alicante, España</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-white/20 font-mono text-[10px] tracking-[0.4em] uppercase mb-5">Stack</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <span key={i} className="text-xs text-white/30 border border-white/6 hover:border-white/15 hover:text-white/55 px-3.5 py-1.5 rounded-full transition-all duration-300 font-mono cursor-default">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="py-20 md:py-24 px-5 relative">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/6 to-transparent mb-16 md:mb-24" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-white/20 font-mono text-[10px] tracking-[0.4em] uppercase mb-3">Contacto</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
                <span className="text-white/80">Tenes un</span><br />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(120deg, #22d3ee, #a78bfa)" }}>proyecto?</span>
              </h2>
              <p className="text-white/25 text-sm leading-relaxed max-w-xs">
                Disponible para proyectos freelance, colaboraciones y posiciones remotas.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col gap-2">
              {[
                { href: "mailto:cristianfernandez.cn@gmail.com", icon: <Mail size={14} className="text-cyan-400/50" />, title: "Email", sub: "cristianfernandez.cn@gmail.com", hover: "hover:border-cyan-500/15" },
                { href: "https://wa.me/34637059910", icon: <svg viewBox="0 0 32 32" fill="currentColor" className="w-3.5 h-3.5 text-emerald-400/50"><path d={WA}/></svg>, title: "WhatsApp", sub: "+34 637 059 910", hover: "hover:border-emerald-500/15" },
                { href: "https://www.linkedin.com/in/cristian-fnessi/", icon: <Linkedin size={14} className="text-blue-400/50" />, title: "LinkedIn", sub: "cristian-fnessi", hover: "hover:border-blue-500/15" },
                { href: "https://github.com/CristianNessi", icon: <Github size={14} className="text-white/30" />, title: "GitHub", sub: "CristianNessi", hover: "hover:border-white/10" },
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" className={`group flex items-center justify-between px-5 py-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 ${item.hover}`}>
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="shrink-0">{item.icon}</div>
                    <div className="min-w-0">
                      <p className="text-white/55 text-xs font-medium">{item.title}</p>
                      <p className="text-white/20 text-[11px] mt-0.5 truncate">{item.sub}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={12} className="text-white/10 group-hover:text-white/30 transition-all duration-300 shrink-0 ml-2" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-5 relative">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/6 to-transparent mb-8" />
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/15 text-xs font-mono">© 2026 Cristian Nessi</p>
          <div className="flex flex-wrap justify-center gap-5 text-white/15 text-xs">
            <a href="#projects" className="hover:text-white/40 transition-colors duration-300">servicios</a>
            <a href="#work" className="hover:text-white/40 transition-colors duration-300">proyectos</a>
            <a href="#about" className="hover:text-white/40 transition-colors duration-300">about</a>
            <a href="#contact" className="hover:text-white/40 transition-colors duration-300">contacto</a>
            <a href="/CV.pdf" target="_blank" className="hover:text-white/40 transition-colors duration-300">cv</a>
          </div>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a href="https://wa.me/34637059910" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all duration-300">
        <svg viewBox="0 0 32 32" fill="white" className="w-5 h-5"><path d={WA}/></svg>
      </a>

    </div>
  );
}