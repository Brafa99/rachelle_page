import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useLanguage } from "../context/LanguageContext";

import {
  FaGlobeEurope,
  FaGraduationCap,
  FaLanguage,
  FaArrowRight,
} from "react-icons/fa";

import pic2 from "../assets/pic9.png";

function Hero() {
  const { language } = useLanguage();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

return (
<section
  id="home"
  className="
relative
min-h-screen
overflow-hidden
pt-36
lg:pt-44
  "
>

  {/* ================= BACKGROUND ================= */}

  {/* Halo azul principal */}
  <div
    className="
      absolute
      -top-72
      -left-72
      w-[900px]
      h-[900px]
      rounded-full
      bg-blue-600/30
      blur-[220px]
    "
  />

  {/* Halo celeste */}
  <div
    className="
      absolute
      bottom-[-250px]
      left-1/4
      w-[800px]
      h-[800px]
      rounded-full
      bg-sky-400/25
      blur-[220px]
    "
  />

  {/* Halo dorado */}
  <div
    className="
      absolute
      top-[-120px]
      right-[-220px]
      w-[650px]
      h-[650px]
      rounded-full
      bg-yellow-300/30
      blur-[180px]
    "
  />

  {/* Halo detrás de la fotografía */}
  <div
    className="
      absolute
      right-[6%]
      top-1/2
      -translate-y-1/2
      w-[650px]
      h-[650px]
      rounded-full
      bg-[#1D4E89]/20
      blur-[150px]
    "
  />

  {/* Patrón de puntos */}
  <div
    className="
      absolute
      inset-0
      opacity-[0.08]
      bg-[radial-gradient(circle,#1D4E89_1.2px,transparent_1.2px)]
      [background-size:32px_32px]
    "
  />

  {/* Líneas decorativas */}
  <svg
    className="absolute inset-0 w-full h-full opacity-20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 180 C250 80 450 320 720 180 S1200 150 1600 250"
      stroke="#1D4E89"
      strokeWidth="2"
      fill="none"
    />

    <path
      d="M0 520 C280 430 520 650 820 520 S1300 500 1700 620"
      stroke="#D4AF37"
      strokeWidth="2"
      fill="none"
    />
  </svg>

  {/* Círculos decorativos */}
  <div className="absolute left-20 top-32 w-7 h-7 rounded-full bg-blue-500/30" />
  <div className="absolute left-56 top-64 w-4 h-4 rounded-full bg-yellow-400/40" />
  <div className="absolute right-32 top-40 w-8 h-8 rounded-full bg-sky-400/30" />
  <div className="absolute right-52 bottom-24 w-5 h-5 rounded-full bg-blue-600/30" />
  <div className="absolute left-1/3 bottom-20 w-6 h-6 rounded-full bg-yellow-300/30" />

  {/* Contenido */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .9 }}
        >

          <div className="inline-flex items-center gap-3 rounded-full bg-[#1D4E89]/10 border border-[#1D4E89]/20 px-5 py-2 mb-8 ">

            <FaGlobeEurope className="text-[#1D4E89]" />

            <span className="text-[#1D4E89] text-sm font-semibold">

              {language === "es"
                ? "Profesora Internacional"
                : "International Language Coach"}

            </span>

          </div>

          <h1
  className="
    text-5xl
    md:text-6xl
    font-black
    leading-tight
    bg-gradient-to-r
    from-[#1D4E39]
    via-[#2F6495]
    to-[#5B8FD6]
    bg-clip-text
    text-transparent
  "
>

            {language === "es"
              ? "Aprende Francés e Inglés con Confianza"
              : "Learn French & English with Confidence"}

          </h1>

          <div className="mt-8 h-[70px] text-2xl md:text-3xl font-semibold text-[#1D4E89]">

            <TypeAnimation
              key={language}
              sequence={[
                language === "es"
                  ? "Francés para principiantes"
                  : "French for Beginners",
                1800,

                language === "es"
                  ? "Preparación DELF"
                  : "DELF Preparation",
                1800,

                language === "es"
                  ? "Preparación DALF"
                  : "DALF Preparation",
                1800,

                language === "es"
                  ? "Clases personalizadas"
                  : "Private Lessons",
                1800,

                language === "es"
                  ? "Inglés Académico"
                  : "Academic English",
                1800,

                language === "es"
                  ? "Conversación Fluida"
                  : "Conversation Practice",
                1800,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl">

            {language === "es"
              ? "Clases dinámicas y personalizadas para estudiantes de todos los niveles. Aprende idiomas con una profesora nativa, desarrolla confianza al comunicarte y prepárate para certificaciones internacionales."
              : "Personalized lessons for students of every level. Learn with a native French teacher, build confidence when speaking and prepare successfully for international language certifications."}

          </p>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-5 mt-10">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .98 }}
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 rounded-full bg-[#1D4E89] text-white font-semibold shadow-xl hover:bg-[#16396b] transition-all"
            >

              {language === "es"
                ? "Reservar una Clase"
                : "Book a Lesson"}

            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .98 }}
              onClick={() => scrollToSection("services")}
              className="px-8 py-4 rounded-full border border-[#1D4E89]/20 text-[#1D4E89] font-semibold hover:bg-[#1D4E89] hover:text-white transition-all flex items-center gap-3"
            >

              {language === "es"
                ? "Explorar Servicios"
                : "Explore Services"}

              <FaArrowRight />

            </motion.button>

          </div>

          {/* FEATURES */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16">

            <div className="rounded-3xl bg-white shadow-lg border border-slate-100 p-6">

              <FaLanguage className="text-3xl text-[#1D4E89] mb-4" />

              <h3 className="font-bold text-slate-900">

                {language === "es"
                  ? "Francés Nativo"
                  : "Native French"}

              </h3>

            </div>

            <div className="rounded-3xl bg-white shadow-lg border border-slate-100 p-6">

              <FaGraduationCap className="text-3xl text-[#D4AF37] mb-4" />

              <h3 className="font-bold text-slate-900">

                DELF / DALF

              </h3>

            </div>

            <div className="rounded-3xl bg-white shadow-lg border border-slate-100 p-6">

              <FaGlobeEurope className="text-3xl text-[#1D4E89] mb-4" />

              <h3 className="font-bold text-slate-900">

                {language === "es"
                  ? "Clases Online"
                  : "Online Lessons"}

              </h3>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .9 }}
          className="relative flex justify-center"
        >

                 {/* Decorative circles */}

          <div className="absolute w-[520px] h-[520px] rounded-full border border-[#1D4E89]/10" />

          <div className="absolute w-[400px] h-[400px] rounded-full border border-[#D4AF37]/20" />

          {/* Main Card */}

          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: .3 }}
            className="
              relative
              w-[320px]
              sm:w-[360px]
              lg:w-[420px]
              rounded-[40px]
              overflow-hidden
              bg-white
              border
              border-slate-200
              shadow-[0_30px_80px_rgba(29,78,137,.18)]
            "
          >

            <img
              src={pic2}
              alt="Rachel Pasteur"
              className="w-full h-[560px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#1D4E89]/90 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-8">

              <span className="uppercase tracking-[4px] text-xs text-[#D4AF37]">

                {language === "es"
                  ? "Profesora Nativa"
                  : "Native French Teacher"}

              </span>

              <h2 className="mt-2 text-3xl font-black text-white">

                Rachel Pasteur

              </h2>

              <p className="text-white/80 mt-2">

                French • English Coach

              </p>

            </div>

          </motion.div>

          {/* Floating Card */}

          <motion.div

            animate={{
              y: [0,-10,0]
            }}

            transition={{
              repeat:Infinity,
              duration:4
            }}

            className="
              absolute
              -left-10
              top-12
              bg-white
              rounded-3xl
              shadow-xl
              border
              border-slate-100
              px-6
              py-5
            "

          >

            <p className="text-xs uppercase tracking-[3px] text-slate-500">

              French

            </p>

            <h3 className="text-2xl font-bold text-[#1D4E89]">

              DELF

            </h3>

          </motion.div>

          <motion.div

            animate={{
              y:[0,12,0]
            }}

            transition={{
              repeat:Infinity,
              duration:5
            }}

            className="
              absolute
              -right-10
              top-24
              bg-white
              rounded-3xl
              shadow-xl
              border
              border-slate-100
              px-6
              py-5
            "

          >

            <p className="text-xs uppercase tracking-[3px] text-slate-500">

              French

            </p>

            <h3 className="text-2xl font-bold text-[#D4AF37]">

              DALF

            </h3>

          </motion.div>

          <motion.div

            animate={{
              y:[0,-8,0]
            }}

            transition={{
              repeat:Infinity,
              duration:4.5
            }}

            className="
              absolute
              left-0
              bottom-14
              bg-white
              rounded-3xl
              shadow-xl
              border
              border-slate-100
              px-6
              py-5
            "

          >

            <p className="text-xs uppercase tracking-[3px] text-slate-500">

              English

            </p>

            <h3 className="font-bold text-[#1D4E89]">

              Proficiency

            </h3>

          </motion.div>

          <motion.div

            animate={{
              y:[0,10,0]
            }}

            transition={{
              repeat:Infinity,
              duration:4
            }}

            className="
              absolute
              -right-4
              bottom-0
              bg-white
              rounded-3xl
              shadow-xl
              border
              border-slate-100
              px-6
              py-5
            "

          >

            <p className="text-xs uppercase tracking-[3px] text-slate-500">

              Learning

            </p>

            <h3 className="font-bold text-[#1D4E89]">

              Online Lessons

            </h3>

          </motion.div>

          <motion.div

            animate={{
              scale:[1,.95,1]
            }}

            transition={{
              repeat:Infinity,
              duration:3
            }}

            className="
              absolute
              right-24
              -bottom-10
              bg-[#1D4E89]
              text-white
              rounded-full
              px-8
              py-4
              shadow-2xl
            "

          >

            🌍  Worldwide

          </motion.div>

        </motion.div>

      </div>

    </section>

  );

}

export default Hero;