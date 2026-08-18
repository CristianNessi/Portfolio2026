"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowUpRight } from "lucide-react";

const projects = [
  { title: "Dashboard IA", desc: "Visualizacion de datos con inteligencia artificial.", glow: "group-hover:shadow-cyan-500/20", border: "group-hover:border-cyan-500/30", accent: "text-cyan-400", num: "text-cyan-500/20" },
  { title: "Marketing", desc: "Email marketing y campanas digitales.", glow: "group-hover:shadow-violet-500/20", border: "group-hover:border-violet-500/30", accent: "text-violet-400", num: "text-violet-500/20" },
  { title: "Fullstack", desc: "Plataformas modernas con SEO y rendimiento.", glow: "group-hover:shadow-emerald-500/20", border: "group-hover:border-emerald-500/30", accent: "text-emerald-400", num: "text-emerald-500/20" },
  { title: "E-commerce", desc: "Tiendas online escalables y optimizadas.", glow: "group-hover:shadow-orange-500/20", border: "group-hover:border-orange-500/30", accent: "text-orange-400", num: "text-orange-500/20" },
  { title: "Automatizacion", desc: "Optimizacion de procesos con Python.", glow: "group-hover:shadow-blue-500/20", border: "group-hover:border-blue-500/30", accent: "text-blue-400", num: "text-blue-500/20" },
  { title: "Ciberseguridad", desc: "Control, auditoria y proteccion.", glow: "group-hover:shadow-rose-500/20", border: "group-hover:border-rose-500/30", accent: "text-rose-400", num: "text-rose-500/20" },
];

const sites = [
  { name: "HeyDenim", url: "https://heydenim.es/", desc: "eCommerce de moda", tag: "E-commerce" },
  { name: "MG Tech", url: "https://cristiannessi.github.io/MG-Tech/", desc: "Agencia de marketing", tag: "Landing" },
  { name: "La Fija", url: "https://www.lafija.com/", desc: "Casino online", tag: "Frontend" },
  { name: "Domenico Schiattarella", url: "https://www.domenicoschiattarella.com/", desc: "Landing personal", tag: "Portfolio" },
  { name: "Alicante Apartments", url: "https://alicanteapartments.es/", desc: "Plataforma turistica", tag: "Web" },
];

const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "Tailwind", "SQL", "Docker", "Git"];

const WA_PATH = "M16.004 2C8.28 2 2 8.28 2 16.004c0 2.478.648 4.84 1.88 6.916L2 30l7.298-1.858A13.94 13.94 0 0 0 16.004 30C23.72 30 30 23.72 30 16.004 30 8.28 23.72 2 16.004 2zm0 25.538a11.51 11.51 0 0 1-5.87-1.607l-.42-.25-4.332 1.104 1.14-4.21-.275-.43A11.538 11.538 0 1 1 16.004 27.538zm6.326-8.634c-.346-.174-2.048-1.01-2.366-1.126-.317-.115-.548-.174-.778.174-.23.347-.893 1.126-1.095 1.357-.2.23-.403.26-.75.086-.345-.174-1.458-.538-2.777-1.715-1.026-.916-1.72-2.048-1.921-2.394-.2-.347-.022-.534.15-.707.156-.155.346-.404.52-.606.172-.202.23-.347.346-.578.116-.23.058-.433-.028-.606-.087-.174-.779-1.876-1.067-2.568-.28-.673-.566-.58-.778-.59-.2-.01-.43-.012-.66-.012-.23 0-.606.086-.923.433-.317.346-1.21 1.183-1.21 2.884 0 1.7 1.24 3.344 1.413 3.574.173.23 2.44 3.727 5.913 5.225.826.357 1.47.57 1.973.73.828.264 1.583.226 2.179.137.664-.1 2.048-.837 2.337-1.645.289-.808.289-1.5.202-1.645-.086-.144-.317-.23-.663-.404z";

export default function Page() {
  return (
    <div className="bg-[#080d18] text-white relative overflow-x-hidden" style={{ fontFamily: "system-ui, sans-serif" }}>

      {/* Ambient glow global */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed top-1/3 right-0 w-[400px] h-[400px] bg-violet-500/3 rounded-full blur-[100px] pointer-events-none" />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#080d18]/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <span className="font-mono text-sm">
            <span className="text-cyan-400/50">~/</span>
            <span className="text-white/70">cristian-nessi</span>
          </span>
          <div className="flex gap-8 text-sm text-white/30">
            <a href="#work" className="hover:text-cyan-400 transition duration-300">proyectos</a>
            <a href="#about" className="hover:text-cyan-400 transition duration-300">about</a>
            <a href="#contact" className="hover:text-cyan-400 transition duration-300">contacto</a>
            <a href="/CV.pdf" target="_blank" className="hover:text-cyan-400 transition duration-300 flex items-center gap-1">
              <Download size={13} /> cv
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 pt-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center relative z-10">

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
              <span className="text-emerald-400/70 font-mono text-xs tracking-widest">disponible para proyectos</span>
            </div>

            <h1 className="text-7xl md:text-8xl font-bold leading-none tracking-tighter mb-2 text-white">
              Cristian
            </h1>
            <h1 className="text-7xl md:text-8xl font-bold leading-none tracking-tighter mb-8" style={{ backgroundImage: "linear-gradient(135deg, #22d3ee, #818cf8, #22d3ee)", backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent", backgroundSize: "200%", animation: "shimmer 4s linear infinite" }}>
              Nessi
            </h1>

            <p className="text-white/50 text-base mb-1 font-light tracking-wide">Full Stack Developer</p>
            <p className="text-white/25 text-sm leading-relaxed max-w-sm mb-10">
              Construyo productos digitales modernos, desde interfaces hasta infraestructura.
            </p>

            <div className="flex items-center gap-3">
              <a href="#contact" className="relative overflow-hidden group bg-gradient-to-r from-cyan-500/80 to-violet-500/80 text-white text-sm font-medium px-7 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                <span className="relative z-10">Trabajemos juntos</span>
              </a>
              <a href="/CV.pdf" target="_blank" className="text-white/30 text-sm hover:text-white/70 transition duration-300 flex items-center gap-1.5 border border-white/10 px-5 py-3 rounded-full hover:border-white/20">
                Ver CV <ArrowUpRight size={13} />
              </a>
            </div>
          </motion.div>

          {/* FOTO */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.2 }} className="flex justify-center items-end relative -mb-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-cyan-400/8 blur-[80px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-violet-400/8 blur-[60px] pointer-events-none" />
            <img
              src="/Profile2.png"
              alt="Cristian Nessi"
              className="relative w-80 md:w-[480px] h-auto object-contain"
              style={{
                maskImage: "radial-gradient(ellipse 75% 80% at 50% 38%, black 25%, rgba(0,0,0,0.85) 48%, rgba(0,0,0,0.3) 68%, transparent 82%)",
                WebkitMaskImage: "radial-gradient(ellipse 75% 80% at 50% 38%, black 25%, rgba(0,0,0,0.85) 48%, rgba(0,0,0,0.3) 68%, transparent 82%)",
              }}
            />
          </motion.div>

        </div>
      </section>

      {/* SERVICIOS */}
      <section id="projects" className="py-28 px-6 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p className="text-cyan-400/60 font-mono text-xs tracking-[0.3em] mb-3">// servicios</p>
            <h2 className="text-3xl font-bold mb-14 text-white/80">Lo que puedo construir</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-3">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 transition-all duration-500 group cursor-default hover:bg-white/[0.04] hover:shadow-xl ${p.glow} ${p.border}`}
              >
                <span className={`text-2xl font-bold font-mono mb-4 block opacity-20 ${p.num}`}>0{i + 1}</span>
                <h3 className={`font-semibold mb-2 ${p.accent}`}>{p.title}</h3>
                <p className="text-white/25 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SITIOS PUBLICADOS */}
      <section id="work" className="py-28 px-6 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p className="text-cyan-400/60 font-mono text-xs tracking-[0.3em] mb-3">// trabajo_real</p>
            <h2 className="text-3xl font-bold mb-14 text-white/80">Sitios publicados</h2>
          </motion.div>
          <div className="flex flex-col">
            {sites.map((site, i) => (
              <motion.a
                key={i}
                href={site.url}
                target="_blank"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="flex items-center justify-between py-5 border-b border-white/[0.04] group hover:px-2 transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <span className="text-white/10 text-xs font-mono w-5">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-white/70 font-medium text-sm group-hover:text-cyan-400 transition duration-300">{site.name}</h3>
                    <p className="text-white/25 text-xs mt-0.5">{site.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden md:block text-[10px] font-mono text-white/15 border border-white/5 px-2.5 py-0.5 rounded-full">{site.tag}</span>
                  <ArrowUpRight size={14} className="text-white/15 group-hover:text-cyan-400 transition duration-300" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE MI */}
      <section id="about" className="py-28 px-6 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p className="text-cyan-400/60 font-mono text-xs tracking-[0.3em] mb-3">// about_me</p>
            <h2 className="text-3xl font-bold mb-6 text-white/80">Sobre mi</h2>
            <p className="text-white/40 leading-relaxed mb-4 text-sm">
              Desarrollador Full Stack con experiencia en proyectos reales, desde eCommerce hasta plataformas con IA.
            </p>
            <p className="text-white/20 leading-relaxed text-sm">
              Trabajo con metodologias agiles, herramientas modernas y foco en rendimiento, seguridad y experiencia de usuario.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <span key={i} className="border border-white/5 text-white/30 text-xs px-4 py-2 rounded-full hover:border-cyan-500/30 hover:text-cyan-400/70 transition duration-300 font-mono cursor-default">{s}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="py-28 px-6 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gradient-to-t from-cyan-500/4 to-transparent blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p className="text-cyan-400/60 font-mono text-xs tracking-[0.3em] mb-3">// contacto</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5 text-white/80">
              Tenes un<br />
              <span style={{ backgroundImage: "linear-gradient(135deg, #22d3ee, #818cf8)", backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}>proyecto?</span>
            </h2>
            <p className="text-white/25 text-sm leading-relaxed max-w-xs">
              Disponible para proyectos freelance, colaboraciones y posiciones remotas.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="flex flex-col gap-2.5">
            {[
              { href: "mailto:cristianfernandez.cn@gmail.com", icon: <Mail size={15} className="text-cyan-400/60" />, label: "Email", sub: "cristianfernandez.cn@gmail.com", hover: "hover:border-cyan-500/20 hover:bg-cyan-500/3" },
              { href: "https://wa.me/34637059910", icon: <svg viewBox="0 0 32 32" fill="currentColor" className="w-[15px] h-[15px] text-emerald-400/60"><path d={WA_PATH}/></svg>, label: "WhatsApp", sub: "+34 637 059 910", hover: "hover:border-emerald-500/20 hover:bg-emerald-500/3" },
              { href: "https://www.linkedin.com/in/cristian-fnessi/", icon: <Linkedin size={15} className="text-blue-400/60" />, label: "LinkedIn", sub: "cristian-fnessi", hover: "hover:border-blue-500/20 hover:bg-blue-500/3" },
              { href: "https://github.com/CristianNessi", icon: <Github size={15} className="text-white/40" />, label: "GitHub", sub: "CristianNessi", hover: "hover:border-white/10 hover:bg-white/[0.02]" },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" className={`flex items-center justify-between border border-white/5 rounded-xl px-5 py-4 transition-all duration-300 group ${item.hover}`}>
                <div className="flex items-center gap-3">
                  {item.icon}
                  <div>
                    <p className="text-white/60 text-sm font-medium leading-none mb-1">{item.label}</p>
                    <p className="text-white/20 text-xs">{item.sub}</p>
                  </div>
                </div>
                <ArrowUpRight size={13} className="text-white/10 group-hover:text-white/30 transition duration-300" />
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative px-6 py-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-white/15 font-mono text-xs">// 2026 cristian-nessi</span>
          <div className="flex gap-6 text-white/15 text-xs font-mono">
            <a href="#projects" className="hover:text-cyan-400/60 transition duration-300">servicios</a>
            <a href="#work" className="hover:text-cyan-400/60 transition duration-300">proyectos</a>
            <a href="#contact" className="hover:text-cyan-400/60 transition duration-300">contacto</a>
            <a href="/CV.pdf" target="_blank" className="hover:text-cyan-400/60 transition duration-300">cv</a>
          </div>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a href="https://wa.me/34637059910" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-3.5 rounded-full hover:scale-105 transition duration-300 shadow-lg shadow-emerald-500/20" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" fill="white" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
          <path d={WA_PATH}/>
        </svg>
      </a>

    </div>
  );
}