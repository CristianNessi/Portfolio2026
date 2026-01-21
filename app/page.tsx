"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <span className="font-bold text-xl">Cristian Nessi</span>
          <div className="flex gap-6 text-gray-300">
            <a href="#projects" className="hover:text-white">Proyectos</a>
            <a href="#about" className="hover:text-white">Sobre mí</a>
            <a href="/CV.pdf" target="_blank" className="hover:text-indigo-400 flex items-center gap-1">
              <Download size={16} /> CV
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

        {/* FONDO DECORATIVO */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center"
        >

          {/* TEXTO */}
          <div className="text-center md:text-left">
            <span className="text-indigo-400 font-semibold tracking-wide uppercase">
              Portafolio
            </span>

            <h1 className="text-6xl md:text-7xl xl:text-8xl font-extrabold leading-tight mt-4 mb-6">
              Desarrollador <br />
              <span className="text-indigo-400">Full Stack</span>
            </h1>

            <p className="text-gray-400 text-xl max-w-xl mb-10">
              Creo productos digitales modernos, escalables y orientados a resultados,
              combinando diseño, rendimiento y tecnología.
            </p>

            <div className="flex gap-6 justify-center md:justify-start">
              <a
                href="https://github.com/CristianNessi"
                target="_blank"
                className="border border-gray-600 p-4 rounded-xl hover:bg-gray-800 transition"
              >
                <Github size={22} />
              </a>

              <a
                href="www.linkedin.com/in/cristian-fnessi"
                target="_blank"
                className="border border-gray-600 p-4 rounded-xl hover:bg-gray-800 transition"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="mailto:cristianfenandez.cn@gmail.com"
                className="border border-gray-600 p-4 rounded-xl hover:bg-gray-800 transition"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* FOTO */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-indigo-500/30 blur-2xl" />
              <img
                src="/profile.jpg"
                alt="Cristian Nessi"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border border-gray-700 shadow-2xl"
              />
            </div>
          </div>

        </motion.div>
      </section>

      {/* PROYECTOS */}
      <section id="projects" className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">Proyectos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Dashboard IA", desc: "Visualización de datos con inteligencia artificial." },
            { title: "Marketing", desc: "Email marketing y campañas digitales" },
            { title: "Fullstack", desc: "Desarrollo de plataformas, optimizacion, SEO." },
            { title: "E-commerce", desc: "Plataforma moderna de ventas online." },
            { title: "Automatización", desc: "Optimización de procesos con Python." },
            { title: "Control y seguridad", desc: "Control e implementacion de ciberseguridad." },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-400 mb-4">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SITIOS PUBLICADOS */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Sitios Publicados
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Mg TECH",
              url: "https://cristiannessi.github.io/MG-Tech/",
              desc: "Landing page de agencia de marketing."
            },
            {
              name: "La Fija",
              url: "https://www.lafija.com/",
              desc: "Plataforma de apuestas y casino online."
            },
            {
              name: "Web Profecional",
              url: "https://www.domenicoschiattarella.com/",
              desc: "Lading page de presentacion."
            },
            {
              name: "Apartaments/hosteleria",
              url: "https://alicanteapartments.es/",
              desc: "Optimizada y rediseñada."
            },
          ].map((site, i) => (
            <motion.a
              key={i}
              href={site.url}
              target="_blank"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="block bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-indigo-500 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{site.name}</h3>
              <p className="text-gray-400 mb-2">{site.desc}</p>
              <span className="text-indigo-400 text-sm">{site.url}</span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* SOBRE MI */}
      <section id="about" className="max-w-4xl mx-auto py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg mb-10"
        >
          Soy desarrollador full stack enfocado en crear productos digitales
          eficientes, escalables y con excelente experiencia de usuario.
          Me especializo en transformar ideas en soluciones reales.
        </motion.p>

        {/* SKILLS */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Python",
            "Tailwind CSS",
            "SQL",
            "Git",
            "SEO",
          ].map((skill, i) => (
            <span
              key={i}
              className="border border-gray-700 px-4 py-2 rounded-full text-sm text-gray-300 hover:border-indigo-400 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 py-12 border-t border-gray-800">
        © 2026 CristianNessi · Portafolio
      </footer>

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

    </div>
  );
}
