"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <span className="font-bold text-xl">Cristian Nessi</span>
          <div className="flex gap-6 text-gray-300">
            <a href="#projects" className="hover:text-white">Proyectos</a>
            <a href="#work" className="hover:text-white">Sitios</a>
            <a href="#about" className="hover:text-white">Sobre mí</a>
            <a href="/CV.pdf" target="_blank" className="hover:text-indigo-400 flex items-center gap-1">
              <Download size={16} /> CV
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center pt-32"
        >
          <div>
            <span className="text-indigo-400 uppercase tracking-widest text-sm font-semibold">
              Portafolio profesional
            </span>

            <h1 className="text-6xl md:text-7xl xl:text-8xl font-extrabold leading-tight mt-4 mb-6">
              Desarrollador <br />
              <span className="text-indigo-400">Full Stack</span>
            </h1>

            <p className="text-gray-400 text-xl max-w-xl mb-10">
              Creo productos digitales modernos, escalables y orientados a resultados.
            </p>

            <div className="flex gap-6">
              <a href="https://github.com/CristianNessi" target="_blank" className="border border-gray-600 p-4 rounded-xl hover:bg-gray-800 transition">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/cristian-fnessi/" target="_blank" className="border border-gray-600 p-4 rounded-xl hover:bg-gray-800 transition">
                <Linkedin />
              </a>
              <a href="mailto:cristianfenandez.cn@gmail.com" className="border border-gray-600 p-4 rounded-xl hover:bg-gray-800 transition">
                <Mail />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-indigo-500/30 blur-2xl" />
              <img
                src="/profile.jpg"
                alt="Cristian Nessi"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border border-gray-700 shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROYECTOS */}
      <section id="projects" className="relative py-32 px-6 overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <span className="text-indigo-400 uppercase tracking-widest text-sm font-semibold block text-center">
            Servicios
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
            Lo que puedo construir para ti
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Dashboard IA", desc: "Visualización de datos con inteligencia artificial." },
              { title: "Marketing", desc: "Email marketing y campañas digitales." },
              { title: "Fullstack", desc: "Plataformas modernas con SEO y rendimiento." },
              { title: "E-commerce", desc: "Tiendas online escalables y optimizadas." },
              { title: "Automatización", desc: "Optimización de procesos con Python." },
              { title: "Ciberseguridad", desc: "Control, auditoría y protección." },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="
            group
            relative
            bg-gray-900/60
            backdrop-blur
            border border-gray-700
            rounded-3xl
            p-8
            shadow-xl
            transition
          "
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition" />

                <h3 className="relative text-2xl font-semibold mb-4 text-indigo-400">
                  {p.title}
                </h3>

                <p className="relative text-gray-400 leading-relaxed">
                  {p.desc}
                </p>


              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* SITIOS */}
      <section id="work" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <span className="text-indigo-400 uppercase tracking-widest text-sm font-semibold block text-center">
            Trabajo real
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Sitios publicados
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { name: "MG TECH", url: "https://cristiannessi.github.io/MG-Tech/", desc: "Landing de marketing." },
              { name: "La Fija", url: "https://www.lafija.com/", desc: "Casino online." },
              { name: "Web Profesional", url: "https://www.domenicoschiattarella.com/", desc: "Landing personal." },
              { name: "Alicante Apartments", url: "https://alicanteapartments.es/", desc: "Hostelería." },
            ].map((site, i) => (
              <motion.a
                key={i}
                href={site.url}
                target="_blank"
                whileHover={{ scale: 1.03 }}
                className="bg-gray-900/60 backdrop-blur border border-gray-700 rounded-3xl p-8 hover:border-indigo-400 transition"
              >
                <h3 className="text-2xl font-semibold mb-3 text-indigo-400">
                  {site.name}
                </h3>
                <p className="text-gray-400 mb-2">{site.desc}</p>
                <span className="text-indigo-400 text-sm break-all">
                  {site.url}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE MI */}
      <section id="about" className="relative py-32 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-indigo-400 uppercase tracking-widest text-sm font-semibold">
            Perfil profesional
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
            Sobre mí
          </h2>

          <p className="text-gray-400 text-xl mb-12">
            Desarrollador full stack especializado en crear productos digitales modernos,
            eficientes y escalables.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "Tailwind", "SQL", "Git", "SEO"].map((s, i) => (
              <span key={i} className="bg-gray-900/60 border border-gray-700 px-5 py-2 rounded-full text-sm hover:border-indigo-400 transition">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/34637059910"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
        aria-label="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          width="26"
          height="26"
        >
          <path d="M16 .5C7.5.5.5 7.3.5 15.7c0 2.8.7 5.4 2.1 7.7L.4 31.5l8.4-2.2c2.2 1.2 4.7 1.9 7.2 1.9 8.5 0 15.5-6.8 15.5-15.2C31.5 7.3 24.5.5 16 .5z" />
        </svg>
      </a>

      {/* FOOTER */}
      <footer className="relative py-16 px-6 border-t border-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-bold text-white">Cristian Nessi</h3>
            <p className="text-gray-400 mt-2 text-sm max-w-xs">
              Desarrollador Full Stack especializado en crear productos digitales
              modernos, escalables y orientados a resultados.
            </p>
          </div>

          {/* LINKS */}
          <div className="flex justify-center gap-8 text-gray-400">
            <a href="#projects" className="hover:text-white transition">Proyectos</a>
            <a href="#about" className="hover:text-white transition">Sobre mí</a>
            <a href="/CV.pdf" target="_blank" className="hover:text-white transition">CV</a>
          </div>

          {/* SOCIAL */}
          <div className="flex justify-end gap-4">
            <a href="https://github.com/CristianNessi" target="_blank" className="border border-gray-700 p-3 rounded-xl hover:bg-gray-800 transition">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/cristian-fnessi/" target="_blank" className="border border-gray-700 p-3 rounded-xl hover:bg-gray-800 transition">
              <Linkedin size={18} />
            </a>
            <a href="mailto:cristianfenandez.cn@gmail.com" className="border border-gray-700 p-3 rounded-xl hover:bg-gray-800 transition">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="relative z-10 text-center text-gray-500 text-sm mt-12">
          © {new Date().getFullYear()} Cristian Nessi · Todos los derechos reservados
        </div>
      </footer>


    </div>
  );
}
