"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowUpRight, MapPin } from "lucide-react";

const services = [
  { title: "Frontend", desc: "Interfaces modernas con React y Next.js.", icon: "⬡", color: "cyan" },
  { title: "Backend", desc: "APIs robustas con Node.js y Express.", icon: "⬡", color: "violet" },
  { title: "E-commerce", desc: "Tiendas online escalables y optimizadas.", icon: "⬡", color: "emerald" },
  { title: "Dashboard IA", desc: "Visualizacion de datos con inteligencia artificial.", icon: "⬡", color: "blue" },
  { title: "Automatizacion", desc: "Optimizacion de procesos con Python.", icon: "⬡", color: "orange" },
  { title: "Ciberseguridad", desc: "Auditoria, hardening y proteccion.", icon: "⬡", color: "rose" },
];

const sites = [
  { name: "HeyDenim", url: "https://heydenim.es/", desc: "Tienda de moda online", tag: "E-commerce" },
  { name: "MG Tech", url: "https://cristiannessi.github.io/MG-Tech/", desc: "Agencia de marketing digital", tag: "Landing" },
  { name: "La Fija", url: "https://www.lafija.com/", desc: "Plataforma de casino online", tag: "Frontend" },
  { name: "Domenico Schiattarella", url: "https://www.domenicoschiattarella.com/", desc: "Sitio profesional personal", tag: "Portfolio" },
  { name: "Alicante Apartments", url: "https://alicanteapartments.es/", desc: "Plataforma turistica", tag: "Web" },
];

const skills = [
  { label: "JavaScript", cat: "lang" },
  { label: "TypeScript", cat: "lang" },
  { label: "React", cat: "front" },
  { label: "Next.js", cat: "front" },
  { label: "Node.js", cat: "back" },
  { label: "Python", cat: "lang" },
  { label: "Tailwind", cat: "front" },
  { label: "PostgreSQL", cat: "db" },
  { label: "Docker", cat: "devops" },
  { label: "Git", cat: "devops" },
  { label: "Linux", cat: "devops" },
  { label: "OWASP", cat: "sec" },
];

const colorMap: Record<string, string> = {
  cyan: "border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-cyan-500/10",
  violet: "border-violet-500/20 hover:border-violet-500/40 hover:shadow-violet-500/10",
  emerald: "border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-emerald-500/10",
  blue: "border-blue-500/20 hover:border-blue-500/40 hover:shadow-blue-500/10",
  orange: "border-orange-500/20 hover:border-orange-500/40 hover:shadow-orange-500/10",
  rose: "border-rose-500/20 hover:border-rose-500/40 hover:shadow-rose-500/10",
};

const accentMap: Record<string, string> = {
  cyan: "text-cyan-400",
  violet: "text-violet-400",
  emerald: "text-emerald-400",
  blue: "text-blue-400",
  orange: "text-orange-400",
  rose: "text-rose-400",
};

const WA = "M16.004 2C8.28 2 2 8.28 2 16.004c0 2.478.648 4.84 1.88 6.916L2 30l7.298-1.858A13.94 13.94 0 0 0 16.004 30C23.72 30 30 23.72 30 16.004 30 8.28 23.72 2 16.004 2zm0 25.538a11.51 11.51 0 0 1-5.87-1.607l-.42-.25-4.332 1.104 1.14-4.21-.275-.43A11.538 11.538 0 1 1 16.004 27.538zm6.326-8.634c-.346-.174-2.048-1.01-2.366-1.126-.317-.115-.548-.174-.778.174-.23.347-.893 1.126-1.095 1.357-.2.23-.403.26-.75.086-.345-.174-1.458-.538-2.777-1.715-1.026-.916-1.72-2.048-1.921-2.394-.2-.347-.022-.534.15-.707.156-.155.346-.404.52-.606.172-.202.23-.347.346-.578.116-.23.058-.433-.028-.606-.087-.174-.779-1.876-1.067-2.568-.28-.673-.566-.58-.778-.59-.2-.01-.43-.012-.66-.012-.23 0-.606.086-.923.433-.317.346-1.21 1.183-1.21 2.884 0 1.7 1.24 3.344 1.413 3.574.173.23 2.44 3.727 5.913 5.225.826.357 1.47.57 1.973.73.828.264 1.583.226 2.179.137.664-.1 2.048-.837 2.337-1.645.289-.808.289-1.5.202-1.645-.086-.144-.317-.23-.663-.404z";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#060910] text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* Glows ambientales fijos */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-cyan-600/5 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 -right-60 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] bg-blue-600/4 rounded-full blur-[120px]" />
      </div>

      {/* NAV */}
      <header className="fixed top-0 w-full z-50">
        <div className="mx-auto max-w-6xl px-6 py-5 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-mono text-xs text-white/40 tracking-widest uppercase">Cristian Nessi</span>
          </motion.div>
          <motion.nav initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-8">
            {["proyectos", "about", "contacto"].map((item) => (
              <a key={item} href={`#${item === "proyectos" ? "work" : item === "about" ? "about" : "contact"}`} className="text-xs text-white/30 hover:text-white/70 transition-colors duration-300 tracking-wide">{item}</a>
            ))}
            <a href="/CV.pdf" target="_blank" className="flex items-center gap-1.5 text-xs bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/15 text-white/50 hover:text-white/80 px-4 py-2 rounded-full transition-all duration-300">
              <Download size={11} /> CV
            </a>
          </motion.nav>
        </div>
        {/* Línea superior degradada */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="max-w-6xl mx-auto w-full px-6 grid md:grid-cols-5 gap-0 items-center pt-20">

          {/* Texto — 3 columnas */}
          <motion.div
            className="md:col-span-3 flex flex-col justify-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-10 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400/60 text-xs font-mono tracking-widest">disponible · alicante, es</span>
            </div>

            {/* Título */}
            <div className="mb-6">
              <h1 className="text-[80px] md:text-[96px] font-black leading-none tracking-tighter text-white/90 mb-0">
                Cristian
              </h1>
              <h1 className="text-[80px] md:text-[96px] font-black leading-none tracking-tighter bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(120deg, #22d3ee 0%, #a78bfa 50%, #22d3ee 100%)", backgroundSize: "200% 100%" }}>
                Nessi
              </h1>
            </div>

            {/* Rol */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-white/20" />
              <span className="text-white/40 text-sm tracking-wider">Full Stack Developer</span>
            </div>

            <p className="text-white/25 text-sm leading-relaxed max-w-sm mb-10">
              Diseño y desarrollo productos digitales modernos — desde el frontend hasta la infraestructura.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white transition-all duration-300" style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(167,139,250,0.15))", border: "1px solid rgba(34,211,238,0.2)" }}>
                Trabajemos juntos
              </a>
              <a href="/CV.pdf" target="_blank" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm text-white/40 hover:text-white/70 border border-white/8 hover:border-white/15 transition-all duration-300">
                Ver CV <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Sociales */}
            <div className="flex gap-4 mt-10">
              {[
                { href: "https://github.com/CristianNessi", icon: <Github size={15} /> },
                { href: "https://www.linkedin.com/in/cristian-fnessi/", icon: <Linkedin size={15} /> },
                { href: "mailto:cristianfernandez.cn@gmail.com", icon: <Mail size={15} /> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" className="w-9 h-9 rounded-full border border-white/8 hover:border-white/20 flex items-center justify-center text-white/25 hover:text-white/60 transition-all duration-300">
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Foto — 2 columnas */}
          <motion.div
            className="md:col-span-2 relative flex items-end justify-center h-[560px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.3 }}
          >
            {/* Glow detrás */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 rounded-full bg-cyan-500/10 blur-[80px]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-40 h-40 rounded-full bg-violet-500/8 blur-[60px]" />
            </div>

            <img
              src="/profile3.png"
              alt="Cristian Nessi"
              className="relative w-full max-w-[360px] h-auto object-contain object-bottom"
              style={{
                maskImage: "radial-gradient(ellipse 78% 85% at 50% 42%, black 30%, rgba(0,0,0,0.7) 52%, rgba(0,0,0,0.2) 70%, transparent 84%)",
                WebkitMaskImage: "radial-gradient(ellipse 78% 85% at 50% 42%, black 30%, rgba(0,0,0,0.7) 52%, rgba(0,0,0,0.2) 70%, transparent 84%)",
                filter: "brightness(0.82)",
              }}
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white animate-pulse" />
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/6 to-transparent mb-24" />
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <p className="text-white/20 font-mono text-[10px] tracking-[0.4em] uppercase mb-3">Servicios</p>
            <h2 className="text-4xl font-bold text-white/80 tracking-tight">Lo que puedo construir</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-3">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`group relative rounded-2xl border bg-white/[0.015] p-6 hover:bg-white/[0.03] hover:shadow-xl transition-all duration-500 cursor-default ${colorMap[s.color]}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-mono opacity-30 ${accentMap[s.color]}`}>0{i + 1}</span>
                </div>
                <h3 className={`font-semibold text-sm mb-2 ${accentMap[s.color]}`}>{s.title}</h3>
                <p className="text-white/25 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="work" className="py-24 px-6 relative">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/6 to-transparent mb-24" />
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <p className="text-white/20 font-mono text-[10px] tracking-[0.4em] uppercase mb-3">Trabajo real</p>
            <h2 className="text-4xl font-bold text-white/80 tracking-tight">Sitios publicados</h2>
          </motion.div>

          <div>
            {sites.map((site, i) => (
              <motion.a
                key={i}
                href={site.url}
                target="_blank"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex items-center justify-between py-5 border-b border-white/[0.04] hover:border-white/[0.08] transition-all duration-300 hover:px-2"
              >
                <div className="flex items-center gap-5">
                  <span className="text-white/10 text-[10px] font-mono">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-white/65 text-sm font-medium group-hover:text-white/90 transition-colors duration-300">{site.name}</p>
                    <p className="text-white/20 text-xs mt-0.5">{site.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden md:block text-[10px] text-white/15 border border-white/6 px-2.5 py-0.5 rounded-full font-mono">{site.tag}</span>
                  <ArrowUpRight size={13} className="text-white/15 group-hover:text-white/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 relative">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/6 to-transparent mb-24" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-white/20 font-mono text-[10px] tracking-[0.4em] uppercase mb-3">Perfil</p>
            <h2 className="text-4xl font-bold text-white/80 tracking-tight mb-8">Sobre mi</h2>
            <p className="text-white/40 text-sm leading-7 mb-5">
              Desarrollador Full Stack con experiencia en proyectos reales — desde eCommerce hasta plataformas con inteligencia artificial.
            </p>
            <p className="text-white/20 text-sm leading-7">
              Trabajo en equipos agiles, con foco en rendimiento, seguridad y experiencia de usuario. Apasionado por la IA aplicada al desarrollo.
            </p>
            <div className="flex items-center gap-2 mt-6 text-white/20 text-xs">
              <MapPin size={11} />
              <span>Alicante, España</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-white/20 font-mono text-[10px] tracking-[0.4em] uppercase mb-6">Stack</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <span key={i} className="text-xs text-white/30 border border-white/6 hover:border-white/15 hover:text-white/55 px-3.5 py-1.5 rounded-full transition-all duration-300 font-mono cursor-default">{s.label}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/6 to-transparent mb-24" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-cyan-500/4 to-transparent blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-white/20 font-mono text-[10px] tracking-[0.4em] uppercase mb-3">Contacto</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
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
                  <div className="flex items-center gap-3.5">
                    {item.icon}
                    <div>
                      <p className="text-white/55 text-xs font-medium">{item.title}</p>
                      <p className="text-white/20 text-[11px] mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={12} className="text-white/10 group-hover:text-white/30 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 relative">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/6 to-transparent mb-8" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/15 text-xs font-mono">© 2026 Cristian Nessi</p>
          <div className="flex gap-7 text-white/15 text-xs">
            <a href="#projects" className="hover:text-white/40 transition-colors duration-300">servicios</a>
            <a href="#work" className="hover:text-white/40 transition-colors duration-300">proyectos</a>
            <a href="#about" className="hover:text-white/40 transition-colors duration-300">about</a>
            <a href="#contact" className="hover:text-white/40 transition-colors duration-300">contacto</a>
            <a href="/CV.pdf" target="_blank" className="hover:text-white/40 transition-colors duration-300">cv</a>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a href="https://wa.me/34637059910" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-7 right-7 z-50 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20 hover:scale-105 hover:shadow-emerald-500/30 transition-all duration-300">
        <svg viewBox="0 0 32 32" fill="white" className="w-5 h-5"><path d={WA}/></svg>
      </a>

    </div>
  );
}