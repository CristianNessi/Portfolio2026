"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowUpRight } from "lucide-react";

const projects = [
  { title: "Dashboard IA", desc: "Visualizacion de datos con inteligencia artificial." },
  { title: "Marketing", desc: "Email marketing y campanas digitales." },
  { title: "Fullstack", desc: "Plataformas modernas con SEO y rendimiento." },
  { title: "E-commerce", desc: "Tiendas online escalables y optimizadas." },
  { title: "Automatizacion", desc: "Optimizacion de procesos con Python." },
  { title: "Ciberseguridad", desc: "Control, auditoria y proteccion." },
];

const sites = [
  { name: "HeyDenim", url: "https://heydenim.es/", desc: "eCommerce de moda" },
  { name: "MG Tech", url: "https://cristiannessi.github.io/MG-Tech/", desc: "Agencia de marketing" },
  { name: "La Fija", url: "https://www.lafija.com/", desc: "Casino online" },
  { name: "Domenico Schiattarella", url: "https://www.domenicoschiattarella.com/", desc: "Landing personal" },
  { name: "Alicante Apartments", url: "https://alicanteapartments.es/", desc: "Plataforma turistica" },
];

const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "Tailwind", "SQL", "Docker", "Git"];

export default function Page() {
  return (
    <div className="bg-[#080808] text-white relative overflow-x-hidden" style={{ fontFamily: "system-ui, sans-serif" }}>

      <nav className="fixed top-0 w-full z-50 bg-[#080808]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <span className="font-semibold text-sm tracking-widest text-white/60 uppercase">Cristian Nessi</span>
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#work" className="hover:text-white transition">Proyectos</a>
            <a href="#about" className="hover:text-white transition">Sobre mi</a>
            <a href="#contact" className="hover:text-white transition">Contacto</a>
            <a href="/CV.pdf" target="_blank" className="hover:text-white transition flex items-center gap-1">
              <Download size={14} /> CV
            </a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center px-6 pt-24">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-white/30 text-xs uppercase tracking-[0.3em] mb-6">Full Stack Developer - AI-Assisted</p>
            <h1 className="text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              Cristian<br />
              <span className="text-white/20">Nessi</span>
            </h1>
            <p className="text-white/40 text-lg leading-relaxed max-w-md mb-10">
              Construyo productos digitales modernos, desde interfaces hasta infraestructura.
            </p>
            <div className="flex items-center gap-4">
              <a href="#contact" className="bg-white text-black text-sm font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition">
                Trabajemos juntos
              </a>
              <a href="/CV.pdf" target="_blank" className="text-white/40 text-sm hover:text-white transition flex items-center gap-1">
                Ver CV <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.1 }} className="flex justify-center">
            <div className="relative flex flex-col items-center gap-2 select-none">

              {/* Llave apertura */}
              <div className="flex items-center gap-3 self-start">
                <span className="text-indigo-400/60 font-mono text-5xl font-thin leading-none">{`{`}</span>
                <span className="text-white/10 font-mono text-xs tracking-widest">developer</span>
              </div>

              {/* Imagen */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 mx-6">
                <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-indigo-500/30 via-transparent to-purple-500/20" />
                <img
                  src="/profile1.jpeg"
                  alt="Cristian Nessi"
                  className="relative w-full h-full rounded-2xl object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* Linea decorativa izquierda */}
                <div className="absolute -left-3 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-indigo-500/40 to-transparent" />
                {/* Dot top-left */}
                <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-indigo-500/50" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-purple-500/50" />
              </div>

              {/* Llave cierre */}
              <div className="flex items-center gap-3 self-end">
                <span className="text-white/10 font-mono text-xs tracking-widest">profile</span>
                <span className="text-indigo-400/60 font-mono text-5xl font-thin leading-none">{`}`}</span>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-white/20 text-xs uppercase tracking-[0.3em] mb-4">Servicios</p>
          <h2 className="text-3xl font-bold mb-16 text-white/80">Lo que puedo construir</h2>
          <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {projects.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4, delay: i * 0.07 }} viewport={{ once: true }} className="bg-[#080808] p-8 hover:bg-white/[0.03] transition">
                <span className="text-white/10 text-xs font-mono mb-4 block">0{i + 1}</span>
                <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-white/20 text-xs uppercase tracking-[0.3em] mb-4">Trabajo real</p>
          <h2 className="text-3xl font-bold mb-16 text-white/80">Sitios publicados</h2>
          <div className="flex flex-col divide-y divide-white/5">
            {sites.map((site, i) => (
              <motion.a key={i} href={site.url} target="_blank" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.07 }} viewport={{ once: true }} className="flex items-center justify-between py-6 group hover:pl-2 transition-all">
                <div className="flex items-center gap-6">
                  <span className="text-white/10 text-xs font-mono w-6">0{i + 1}</span>
                  <div>
                    <h3 className="text-white font-medium group-hover:text-white/70 transition">{site.name}</h3>
                    <p className="text-white/30 text-sm">{site.desc}</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-white/20 group-hover:text-white/60 transition" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-white/20 text-xs uppercase tracking-[0.3em] mb-4">Perfil</p>
            <h2 className="text-3xl font-bold mb-6 text-white/80">Sobre mi</h2>
            <p className="text-white/40 leading-relaxed mb-4">
              Desarrollador Full Stack con experiencia en proyectos reales, desde eCommerce hasta plataformas con IA.
            </p>
            <p className="text-white/30 leading-relaxed text-sm">
              Trabajo con metodologias agiles, herramientas modernas y foco en rendimiento, seguridad y experiencia de usuario.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-8">
            {skills.map((s, i) => (
              <span key={i} className="border border-white/10 text-white/40 text-xs px-4 py-2 rounded-full hover:border-white/30 hover:text-white/60 transition">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-white/20 text-xs uppercase tracking-[0.3em] mb-4">Contacto</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white/80">
              Tenes un<br />proyecto?
            </h2>
            <p className="text-white/30 leading-relaxed max-w-sm">
              Disponible para proyectos freelance, colaboraciones y posiciones remotas.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a href="mailto:cristianfernandez.cn@gmail.com" className="flex items-center justify-between border border-white/10 rounded-2xl px-6 py-5 hover:border-white/30 hover:bg-white/[0.03] transition group">
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-white/30" />
                <div>
                  <p className="text-white/60 text-sm font-medium">Email</p>
                  <p className="text-white/30 text-xs">cristianfernandez.cn@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-white/20 group-hover:text-white/50 transition" />
            </a>
            <a href="https://wa.me/34637059910" target="_blank" className="flex items-center justify-between border border-white/10 rounded-2xl px-6 py-5 hover:border-green-500/30 hover:bg-green-500/5 transition group">
              <div className="flex items-center gap-4">
                <svg viewBox="0 0 32 32" fill="currentColor" className="w-[18px] h-[18px] text-white/30 group-hover:text-green-400 transition" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.004 2C8.28 2 2 8.28 2 16.004c0 2.478.648 4.84 1.88 6.916L2 30l7.298-1.858A13.94 13.94 0 0 0 16.004 30C23.72 30 30 23.72 30 16.004 30 8.28 23.72 2 16.004 2zm0 25.538a11.51 11.51 0 0 1-5.87-1.607l-.42-.25-4.332 1.104 1.14-4.21-.275-.43A11.538 11.538 0 1 1 16.004 27.538zm6.326-8.634c-.346-.174-2.048-1.01-2.366-1.126-.317-.115-.548-.174-.778.174-.23.347-.893 1.126-1.095 1.357-.2.23-.403.26-.75.086-.345-.174-1.458-.538-2.777-1.715-1.026-.916-1.72-2.048-1.921-2.394-.2-.347-.022-.534.15-.707.156-.155.346-.404.52-.606.172-.202.23-.347.346-.578.116-.23.058-.433-.028-.606-.087-.174-.779-1.876-1.067-2.568-.28-.673-.566-.58-.778-.59-.2-.01-.43-.012-.66-.012-.23 0-.606.086-.923.433-.317.346-1.21 1.183-1.21 2.884 0 1.7 1.24 3.344 1.413 3.574.173.23 2.44 3.727 5.913 5.225.826.357 1.47.57 1.973.73.828.264 1.583.226 2.179.137.664-.1 2.048-.837 2.337-1.645.289-.808.289-1.5.202-1.645-.086-.144-.317-.23-.663-.404z"/>
                </svg>
                <div>
                  <p className="text-white/60 text-sm font-medium">WhatsApp</p>
                  <p className="text-white/30 text-xs">+34 637 059 910</p>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-white/20 group-hover:text-green-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/cristian-fnessi/" target="_blank" className="flex items-center justify-between border border-white/10 rounded-2xl px-6 py-5 hover:border-blue-500/30 hover:bg-blue-500/5 transition group">
              <div className="flex items-center gap-4">
                <Linkedin size={18} className="text-white/30 group-hover:text-blue-400 transition" />
                <div>
                  <p className="text-white/60 text-sm font-medium">LinkedIn</p>
                  <p className="text-white/30 text-xs">cristian-fnessi</p>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-white/20 group-hover:text-blue-400 transition" />
            </a>
            <a href="https://github.com/CristianNessi" target="_blank" className="flex items-center justify-between border border-white/10 rounded-2xl px-6 py-5 hover:border-white/30 hover:bg-white/[0.03] transition group">
              <div className="flex items-center gap-4">
                <Github size={18} className="text-white/30" />
                <div>
                  <p className="text-white/60 text-sm font-medium">GitHub</p>
                  <p className="text-white/30 text-xs">CristianNessi</p>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-white/20 group-hover:text-white/50 transition" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-white/20 text-sm">2026 Cristian Nessi</span>
          <div className="flex gap-6 text-white/20 text-sm">
            <a href="#projects" className="hover:text-white/50 transition">Servicios</a>
            <a href="#work" className="hover:text-white/50 transition">Proyectos</a>
            <a href="#contact" className="hover:text-white/50 transition">Contacto</a>
            <a href="/CV.pdf" target="_blank" className="hover:text-white/50 transition">CV</a>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/34637059910" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-3.5 rounded-full shadow-lg hover:scale-110 transition" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" fill="white" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.004 2C8.28 2 2 8.28 2 16.004c0 2.478.648 4.84 1.88 6.916L2 30l7.298-1.858A13.94 13.94 0 0 0 16.004 30C23.72 30 30 23.72 30 16.004 30 8.28 23.72 2 16.004 2zm0 25.538a11.51 11.51 0 0 1-5.87-1.607l-.42-.25-4.332 1.104 1.14-4.21-.275-.43A11.538 11.538 0 1 1 16.004 27.538zm6.326-8.634c-.346-.174-2.048-1.01-2.366-1.126-.317-.115-.548-.174-.778.174-.23.347-.893 1.126-1.095 1.357-.2.23-.403.26-.75.086-.345-.174-1.458-.538-2.777-1.715-1.026-.916-1.72-2.048-1.921-2.394-.2-.347-.022-.534.15-.707.156-.155.346-.404.52-.606.172-.202.23-.347.346-.578.116-.23.058-.433-.028-.606-.087-.174-.779-1.876-1.067-2.568-.28-.673-.566-.58-.778-.59-.2-.01-.43-.012-.66-.012-.23 0-.606.086-.923.433-.317.346-1.21 1.183-1.21 2.884 0 1.7 1.24 3.344 1.413 3.574.173.23 2.44 3.727 5.913 5.225.826.357 1.47.57 1.973.73.828.264 1.583.226 2.179.137.664-.1 2.048-.837 2.337-1.645.289-.808.289-1.5.202-1.645-.086-.144-.317-.23-.663-.404z"/>
        </svg>
      </a>

    </div>
  );
}