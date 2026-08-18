"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowUpRight } from "lucide-react";

const projects = [
  { title: "Dashboard IA", desc: "Visualizacion de datos con inteligencia artificial.", color: "from-cyan-500/20 to-cyan-500/0", accent: "text-cyan-400" },
  { title: "Marketing", desc: "Email marketing y campanas digitales.", color: "from-violet-500/20 to-violet-500/0", accent: "text-violet-400" },
  { title: "Fullstack", desc: "Plataformas modernas con SEO y rendimiento.", color: "from-emerald-500/20 to-emerald-500/0", accent: "text-emerald-400" },
  { title: "E-commerce", desc: "Tiendas online escalables y optimizadas.", color: "from-orange-500/20 to-orange-500/0", accent: "text-orange-400" },
  { title: "Automatizacion", desc: "Optimizacion de procesos con Python.", color: "from-blue-500/20 to-blue-500/0", accent: "text-blue-400" },
  { title: "Ciberseguridad", desc: "Control, auditoria y proteccion.", color: "from-rose-500/20 to-rose-500/0", accent: "text-rose-400" },
];

const sites = [
  { name: "HeyDenim", url: "https://heydenim.es/", desc: "eCommerce de moda", tag: "E-commerce" },
  { name: "MG Tech", url: "https://cristiannessi.github.io/MG-Tech/", desc: "Agencia de marketing", tag: "Landing" },
  { name: "La Fija", url: "https://www.lafija.com/", desc: "Casino online", tag: "Frontend" },
  { name: "Domenico Schiattarella", url: "https://www.domenicoschiattarella.com/", desc: "Landing personal", tag: "Portfolio" },
  { name: "Alicante Apartments", url: "https://alicanteapartments.es/", desc: "Plataforma turistica", tag: "Web" },
];

const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "Tailwind", "SQL", "Docker", "Git"];

export default function Page() {
  return (
    <div className="bg-[#0a0e1a] text-white relative overflow-x-hidden" style={{ fontFamily: "system-ui, sans-serif" }}>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0e1a]/80 backdrop-blur-md border-b border-cyan-500/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <span className="font-mono text-sm text-cyan-400/80">
            <span className="text-white/30">~/</span>cristian-nessi
          </span>
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#work" className="hover:text-cyan-400 transition">proyectos</a>
            <a href="#about" className="hover:text-cyan-400 transition">about</a>
            <a href="#contact" className="hover:text-cyan-400 transition">contacto</a>
            <a href="/CV.pdf" target="_blank" className="hover:text-cyan-400 transition flex items-center gap-1">
              <Download size={14} /> cv
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 pt-24 relative overflow-hidden">
        {/* Glow de fondo */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-mono text-xs">disponible para proyectos</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-2">
              Cristian
            </h1>
            <h1 className="text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              Nessi
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-3">
              Full Stack Developer
            </p>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md mb-10">
              Construyo productos digitales modernos, desde interfaces hasta infraestructura.
            </p>
            <div className="flex items-center gap-4">
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 transition shadow-lg shadow-cyan-500/20">
                Trabajemos juntos
              </a>
              <a href="/CV.pdf" target="_blank" className="text-slate-400 text-sm hover:text-cyan-400 transition flex items-center gap-1 border border-slate-700 px-5 py-3 rounded-full hover:border-cyan-500/40">
                Ver CV <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* IMAGEN CON LLAVES */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.1 }} className="flex justify-center items-center">
            <div className="relative flex items-center gap-3">

              {/* Llave izquierda SVG */}
              <svg viewBox="0 0 50 260" className="w-10 h-64 md:h-80 flex-shrink-0 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38 6 Q14 6 14 28 L14 108 Q14 130 2 130 Q14 130 14 152 L14 232 Q14 254 38 254" stroke="url(#glL)" strokeWidth="2.5" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="glL" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#818cf8"/>
                    <stop offset="50%" stopColor="#22d3ee"/>
                    <stop offset="100%" stopColor="#818cf8"/>
                  </linearGradient>
                </defs>
              </svg>

              {/* Foto sin fondo extra */}
              <div className="relative w-56 h-64 md:w-64 md:h-80 flex-shrink-0">
                {/* Glow detrás de la foto */}
                
                <img
                  src="/Profile2.png"
                  alt="Cristian Nessi"
                  className="relative w-full h-full object-cover object-top"
                  style={{ maskImage: "linear-gradient(to bottom, black 60%, transparent 95%)", WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 95%)" }}
                />
              </div>

              {/* Llave derecha SVG */}
              <svg viewBox="0 0 50 260" className="w-10 h-64 md:h-80 flex-shrink-0 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6 Q36 6 36 28 L36 108 Q36 130 48 130 Q36 130 36 152 L36 232 Q36 254 12 254" stroke="url(#glR)" strokeWidth="2.5" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="glR" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#818cf8"/>
                    <stop offset="50%" stopColor="#22d3ee"/>
                    <stop offset="100%" stopColor="#818cf8"/>
                  </linearGradient>
                </defs>
              </svg>

            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="projects" className="py-32 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-400 font-mono text-xs tracking-[0.3em] mb-4">// servicios</p>
          <h2 className="text-3xl font-bold mb-16 text-white">Lo que puedo construir</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="relative bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition group overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <span className="relative text-slate-600 text-xs font-mono mb-4 block">0{i + 1}</span>
                <h3 className={`relative font-semibold mb-2 ${p.accent}`}>{p.title}</h3>
                <p className="relative text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SITIOS PUBLICADOS */}
      <section id="work" className="py-32 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-400 font-mono text-xs tracking-[0.3em] mb-4">// trabajo_real</p>
          <h2 className="text-3xl font-bold mb-16 text-white">Sitios publicados</h2>
          <div className="flex flex-col divide-y divide-slate-800/60">
            {sites.map((site, i) => (
              <motion.a
                key={i}
                href={site.url}
                target="_blank"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="flex items-center justify-between py-5 group hover:pl-2 transition-all"
              >
                <div className="flex items-center gap-6">
                  <span className="text-slate-700 text-xs font-mono w-6">0{i + 1}</span>
                  <div>
                    <h3 className="text-white font-medium group-hover:text-cyan-400 transition">{site.name}</h3>
                    <p className="text-slate-500 text-sm">{site.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-600 border border-slate-700 px-2 py-0.5 rounded-full hidden md:block">{site.tag}</span>
                  <ArrowUpRight size={16} className="text-slate-600 group-hover:text-cyan-400 transition" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE MI */}
      <section id="about" className="py-32 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-cyan-400 font-mono text-xs tracking-[0.3em] mb-4">// about_me</p>
            <h2 className="text-3xl font-bold mb-6">Sobre mi</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Desarrollador Full Stack con experiencia en proyectos reales, desde eCommerce hasta plataformas con IA.
            </p>
            <p className="text-slate-500 leading-relaxed text-sm">
              Trabajo con metodologias agiles, herramientas modernas y foco en rendimiento, seguridad y experiencia de usuario.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-8">
            {skills.map((s, i) => (
              <span key={i} className="border border-slate-700 text-slate-400 text-xs px-4 py-2 rounded-full hover:border-cyan-500/50 hover:text-cyan-400 transition font-mono">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="py-32 px-6 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-cyan-500/5 to-transparent blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <p className="text-cyan-400 font-mono text-xs tracking-[0.3em] mb-4">// contacto</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Tenes un<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">proyecto?</span>
            </h2>
            <p className="text-slate-500 leading-relaxed max-w-sm">
              Disponible para proyectos freelance, colaboraciones y posiciones remotas.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="mailto:cristianfernandez.cn@gmail.com" className="flex items-center justify-between border border-slate-800 rounded-2xl px-6 py-4 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition group">
              <div className="flex items-center gap-4">
                <Mail size={16} className="text-cyan-400" />
                <div>
                  <p className="text-white text-sm font-medium">Email</p>
                  <p className="text-slate-500 text-xs">cristianfernandez.cn@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-slate-600 group-hover:text-cyan-400 transition" />
            </a>
            <a href="https://wa.me/34637059910" target="_blank" className="flex items-center justify-between border border-slate-800 rounded-2xl px-6 py-4 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition group">
              <div className="flex items-center gap-4">
                <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4 text-emerald-400" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.004 2C8.28 2 2 8.28 2 16.004c0 2.478.648 4.84 1.88 6.916L2 30l7.298-1.858A13.94 13.94 0 0 0 16.004 30C23.72 30 30 23.72 30 16.004 30 8.28 23.72 2 16.004 2zm0 25.538a11.51 11.51 0 0 1-5.87-1.607l-.42-.25-4.332 1.104 1.14-4.21-.275-.43A11.538 11.538 0 1 1 16.004 27.538zm6.326-8.634c-.346-.174-2.048-1.01-2.366-1.126-.317-.115-.548-.174-.778.174-.23.347-.893 1.126-1.095 1.357-.2.23-.403.26-.75.086-.345-.174-1.458-.538-2.777-1.715-1.026-.916-1.72-2.048-1.921-2.394-.2-.347-.022-.534.15-.707.156-.155.346-.404.52-.606.172-.202.23-.347.346-.578.116-.23.058-.433-.028-.606-.087-.174-.779-1.876-1.067-2.568-.28-.673-.566-.58-.778-.59-.2-.01-.43-.012-.66-.012-.23 0-.606.086-.923.433-.317.346-1.21 1.183-1.21 2.884 0 1.7 1.24 3.344 1.413 3.574.173.23 2.44 3.727 5.913 5.225.826.357 1.47.57 1.973.73.828.264 1.583.226 2.179.137.664-.1 2.048-.837 2.337-1.645.289-.808.289-1.5.202-1.645-.086-.144-.317-.23-.663-.404z"/>
                </svg>
                <div>
                  <p className="text-white text-sm font-medium">WhatsApp</p>
                  <p className="text-slate-500 text-xs">+34 637 059 910</p>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-slate-600 group-hover:text-emerald-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/cristian-fnessi/" target="_blank" className="flex items-center justify-between border border-slate-800 rounded-2xl px-6 py-4 hover:border-blue-500/40 hover:bg-blue-500/5 transition group">
              <div className="flex items-center gap-4">
                <Linkedin size={16} className="text-blue-400" />
                <div>
                  <p className="text-white text-sm font-medium">LinkedIn</p>
                  <p className="text-slate-500 text-xs">cristian-fnessi</p>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-slate-600 group-hover:text-blue-400 transition" />
            </a>
            <a href="https://github.com/CristianNessi" target="_blank" className="flex items-center justify-between border border-slate-800 rounded-2xl px-6 py-4 hover:border-slate-600 hover:bg-white/[0.02] transition group">
              <div className="flex items-center gap-4">
                <Github size={16} className="text-slate-400" />
                <div>
                  <p className="text-white text-sm font-medium">GitHub</p>
                  <p className="text-slate-500 text-xs">CristianNessi</p>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-slate-600 group-hover:text-white transition" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-slate-600 font-mono text-sm">// 2026 cristian-nessi</span>
          <div className="flex gap-6 text-slate-600 text-sm font-mono">
            <a href="#projects" className="hover:text-cyan-400 transition">servicios</a>
            <a href="#work" className="hover:text-cyan-400 transition">proyectos</a>
            <a href="#contact" className="hover:text-cyan-400 transition">contacto</a>
            <a href="/CV.pdf" target="_blank" className="hover:text-cyan-400 transition">cv</a>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a href="https://wa.me/34637059910" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-3.5 rounded-full shadow-lg shadow-emerald-500/20 hover:scale-110 transition" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" fill="white" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.004 2C8.28 2 2 8.28 2 16.004c0 2.478.648 4.84 1.88 6.916L2 30l7.298-1.858A13.94 13.94 0 0 0 16.004 30C23.72 30 30 23.72 30 16.004 30 8.28 23.72 2 16.004 2zm0 25.538a11.51 11.51 0 0 1-5.87-1.607l-.42-.25-4.332 1.104 1.14-4.21-.275-.43A11.538 11.538 0 1 1 16.004 27.538zm6.326-8.634c-.346-.174-2.048-1.01-2.366-1.126-.317-.115-.548-.174-.778.174-.23.347-.893 1.126-1.095 1.357-.2.23-.403.26-.75.086-.345-.174-1.458-.538-2.777-1.715-1.026-.916-1.72-2.048-1.921-2.394-.2-.347-.022-.534.15-.707.156-.155.346-.404.52-.606.172-.202.23-.347.346-.578.116-.23.058-.433-.028-.606-.087-.174-.779-1.876-1.067-2.568-.28-.673-.566-.58-.778-.59-.2-.01-.43-.012-.66-.012-.23 0-.606.086-.923.433-.317.346-1.21 1.183-1.21 2.884 0 1.7 1.24 3.344 1.413 3.574.173.23 2.44 3.727 5.913 5.225.826.357 1.47.57 1.973.73.828.264 1.583.226 2.179.137.664-.1 2.048-.837 2.337-1.645.289-.808.289-1.5.202-1.645-.086-.144-.317-.23-.663-.404z"/>
        </svg>
      </a>

    </div>
  );
}