import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

import {
  FaGlobeEurope,
  FaArrowRight,
  FaCheckCircle,
  FaAward,
  FaUniversity,
  FaLanguage,
  FaBookOpen,
} from "react-icons/fa";

import pic2 from "../assets/pic9.png";

function Hero() {

  const { language } = useLanguage();

  const texts = {

    es: {

  badge: "Profesora Internacional de Idiomas",

  title1: "Domina el",

  title2: "Francés e Inglés",

  description:
    "Formación personalizada para estudiantes, profesionales y empresas. Aprende con metodología práctica y prepárate para obtener certificaciones internacionales reconocidas.",

  reserve: "Reservar Clase",

  services: "Ver Servicios",

  rotating: [

    "Preparación DELF • DALF",

    "Cambridge • IELTS • TOEFL",

    "Francés e Inglés para todos los niveles",

    "Clases particulares y empresariales",

  ],

  coach: "Profesora Internacional",

  photoText:
    "Especialista en preparación para exámenes internacionales DELF, DALF, Cambridge, IELTS y TOEFL, con clases personalizadas orientadas a resultados reales.",

},


    en: {

  badge: "International Language Coach",

  title1: "Master",

  title2: "French & English",

  description:
    "Personalized language training for students, professionals and companies with a practical approach and preparation for internationally recognized certifications.",

  reserve: "Book a Lesson",

  services: "Explore Services",

  rotating: [

    "DELF • DALF Preparation",

    "Cambridge • IELTS • TOEFL",

    "French & English for all levels",

    "Private & Corporate Lessons",

  ],

  coach: "International Language Coach",

  photoText:
    "Specialist in DELF, DALF, Cambridge, IELTS and TOEFL preparation through personalized lessons focused on measurable progress.",

},

    fr: {

  badge: "Professeure Internationale",

  title1: "Maîtrisez le",

  title2: "Français & Anglais",

  description:
    "Cours personnalisés destinés aux étudiants, professionnels et entreprises avec préparation aux certifications internationales.",

  reserve: "Réserver",

  services: "Découvrir",

  rotating: [

    "Préparation DELF • DALF",

    "Cambridge • IELTS • TOEFL",

    "Français & Anglais tous niveaux",

    "Cours particuliers et entreprises",

  ],

  coach: "Professeure Internationale",

  photoText:
    "Spécialiste de la préparation aux examens DELF, DALF, Cambridge, IELTS et TOEFL avec un accompagnement personnalisé.",

},

  };

  const certifications = [

  {
    icon: <FaAward />,
    title: "DELF",
    subtitle: "A1 • B2",
  },

  {
    icon: <FaUniversity />,
    title: "DALF",
    subtitle: "C1 • C2",
  },

  {
    icon: <FaLanguage />,
    title: "Cambridge",
    subtitle: "CAE",
  },

  {
    icon: <FaBookOpen />,
    title: "IELTS / TOEFL",
    subtitle: "Academic",
  },

];

  const t = texts[language];

  const [index, setIndex] = useState(0);

  useEffect(() => {

    setIndex(0);

    const timer = setInterval(() => {

      setIndex((prev) => (prev + 1) % t.rotating.length);

    }, 2600);

    return () => clearInterval(timer);

  }, [language]);

  const scrollTo = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

  };

  

  return (

<section
id="home"
className="relative overflow-hidden bg-[#0B0F14] min-h-screen pt-36 lg:pt-42"
>

{/* BACKGROUND */}


<div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:34px_34px]" />

<div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">

{/* ---------- LEFT ---------- */}

<div>

<div className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-3">

<FaGlobeEurope className="text-[#D4AF37]" />

<span className="text-[#F6DA84]">

{t.badge}

</span>

</div>

<h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">

<span className="text-white">

{t.title1}

</span>

<br/>

<span className="bg-gradient-to-r from-[#D4AF37] via-[#FFE18B] to-[#B8860B] bg-clip-text text-transparent">

{t.title2}

</span>

</h1>

<div className="h-16 mt-8">

<AnimatePresence mode="wait">

<motion.h2
key={t.rotating[index]}
initial={{opacity:0,y:25}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-25}}
transition={{duration:.45}}
className="text-3xl font-semibold text-[#D4AF37]"
>

{t.rotating[index]}

</motion.h2>

</AnimatePresence>

</div>

<p className="mt-8 text-slate-400 text-lg leading-8 max-w-xl">

{t.description}

</p>

<div className="mt-10 flex flex-col sm:flex-row gap-5">

<button
onClick={()=>scrollTo("contact")}
className="rounded-full px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4D67A] text-black font-bold hover:scale-105 transition"
>

{t.reserve}

</button>

<button
onClick={()=>scrollTo("services")}
className="rounded-full border border-white/10 px-8 py-4 text-white hover:border-[#D4AF37] transition flex items-center gap-3 justify-center"
>

{t.services}

<FaArrowRight/>

</button>

</div>


<div className="grid grid-cols-2 gap-5 mt-14">

  {certifications.map((item) => (

    <motion.div
      key={item.title}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        p-6
        transition-all
        hover:border-[#D4AF37]
        hover:bg-white/[0.06]
      "
    >

      <div
        className="
          w-12
          h-12
          rounded-2xl
          bg-[#D4AF37]/15
          flex
          items-center
          justify-center
          text-[#D4AF37]
          text-xl
          group-hover:scale-110
          transition-all
        "
      >

        {item.icon}

      </div>

      <h3 className="mt-5 text-white font-bold text-lg">

        {item.title}

      </h3>

      <p className="mt-1 text-sm text-slate-400">

        {item.subtitle}

      </p>

    </motion.div>

  ))}

</div>


</div>

{/* ---------- RIGHT ---------- */}

<div className="relative flex justify-center">


<motion.div
whileHover={{
scale:1.03,
y:-8
}}
className="
relative
rounded-[40px]
overflow-hidden
border
border-white/10
bg-[#151A22]
shadow-[0_35px_90px_rgba(0,0,0,.65)]
hover:shadow-[0_45px_120px_rgba(212,175,55,.18)]
transition-all
duration-500
before:absolute
before:inset-0
before:rounded-[40px]
before:p-[1px]
before:bg-gradient-to-br
before:from-[#D4AF37]/60
before:via-transparent
before:to-[#2C6BED]/40
before:opacity-40
"
>

<img
src={pic2}
alt="Rachelle"
className="w-[420px] lg:w-[470px] h-[620px] object-cover"
/>

{/* Glow interno */}

<div
  className="
    absolute
    inset-0
    rounded-[40px]
    bg-gradient-to-br
    from-[#D4AF37]/10
    via-transparent
    to-[#2C6BED]/10
    pointer-events-none
  "
/>

<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent" />

<div
  className="
    absolute
    bottom-0
    left-0
    w-full
    p-5
    sm:p-7
    lg:p-8
  "
>


  <h2
    className="
      mt-3
      text-[28px]
      sm:text-[34px]
      lg:text-[46px]
      font-black
      leading-[1.05]
      tracking-[-0.02em]
      text-[#0C0C0C]
      drop-shadow-[0_2px_8px_rgba(255,255,255,.25)]
    "
  >
    <span className="block">
      Rachelle
    </span>

    <span className="block">
      Pasteur Arnoux
    </span>
  </h2>

<div
    className="
      mt-4
      w-16
      sm:w-20
      lg:w-24
      h-[2px]
      rounded-full
      bg-gradient-to-r
      from-[#D4AF37]
      via-[#FFE28A]
      to-transparent
    "
  />

<p className="mt-5 text-slate-300">

{t.photoText}

</p>

</div>

</motion.div>

</div>

</div>

</section>

  );

}

export default Hero;