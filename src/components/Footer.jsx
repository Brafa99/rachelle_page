import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { FaArrowUp, FaArrowRight } from "react-icons/fa";

function Footer() {

  const { language } = useLanguage();

  const scrollTop = () => {

    window.scrollTo({

      top:0,

      behavior:"smooth",

    });

  };

  const scrollContact = () => {

    document
      .getElementById("contact")
      ?.scrollIntoView({

        behavior:"smooth",

      });

  };

  const t={

    es:{

      badge:"Comienza Hoy",

      title1:"¿Listo para hablar",

      title2:"un nuevo idioma?",

      description:
      "Da el primer paso hacia tus objetivos académicos, profesionales o personales. Reserva tu primera clase y diseñemos juntos un plan de aprendizaje adaptado a ti.",

      button:"Reservar una Clase",

    },

    en:{

      badge:"Start Today",

      title1:"Ready to speak",

      title2:"a new language?",

      description:
      "Take the first step toward your academic, professional or personal goals. Book your first lesson and let's build a learning plan tailored to you.",

      button:"Book a Lesson",

    },

    fr:{

      badge:"Commencez Aujourd'hui",

      title1:"Prêt à parler",

      title2:"une nouvelle langue ?",

      description:
      "Faites le premier pas vers vos objectifs personnels, académiques ou professionnels. Réservez votre premier cours et construisons ensemble votre programme.",

      button:"Réserver un Cours",

    }

  };

  const text=t[language];

  return(

<footer
className="
relative
overflow-hidden
bg-[#0B0F14]
border-t
border-white/10
"
>

{/* =====================================================
                    BACKGROUND
===================================================== */}

<div className="absolute inset-0">

  <div
    className="
    absolute
    -top-52
    left-[-180px]
    w-[650px]
    h-[650px]
    rounded-full
    bg-[#D4AF37]/8
    blur-[190px]
    "
  />

  <div
    className="
    absolute
    bottom-[-260px]
    right-[-180px]
    w-[720px]
    h-[720px]
    rounded-full
    bg-[#2C6BED]/10
    blur-[220px]
    "
  />

  <div
    className="
    absolute
    inset-0
    opacity-[0.03]
    bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)]
    [background-size:34px_34px]
    "
  />

</div>

<div
className="
relative
z-10
max-w-7xl
mx-auto
px-6
py-24
"
>

{/* =====================================================
                    FINAL CTA
===================================================== */}

<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:.8}}

className="
relative
overflow-hidden
rounded-[40px]
border
border-white/10
bg-gradient-to-br
from-[#131922]
to-[#0E141B]
px-10
py-16
text-center
"

>

<div
className="
absolute
top-0
left-1/2
-translate-x-1/2
w-[420px]
h-[420px]
bg-[#D4AF37]/10
blur-[140px]
rounded-full
"
/>

<div className="relative z-10">

<span
className="
inline-flex
items-center
gap-3
rounded-full
border
border-[#D4AF37]/25
bg-[#D4AF37]/10
px-6
py-3
text-[#F5D87A]
text-sm
tracking-wide
"
>

✨ {text.badge}

</span>

<h2
className="
mt-8
text-5xl
md:text-6xl
font-black
leading-tight
"
>

<span className="text-white">

{text.title1}

</span>

<br/>

<span
className="
bg-gradient-to-r
from-[#D4AF37]
via-[#FFE28A]
to-[#C89B2A]
bg-clip-text
text-transparent
"
>

{text.title2}

</span>

</h2>

<p
className="
mt-8
max-w-3xl
mx-auto
text-lg
leading-8
text-slate-400
"
>

{text.description}

</p>

<motion.button

whileHover={{
scale:1.04,
y:-2
}}

whileTap={{
scale:.98
}}

onClick={scrollContact}

className="
mt-10
inline-flex
items-center
gap-4
rounded-full
bg-gradient-to-r
from-[#D4AF37]
to-[#FFE28A]
px-8
py-5
font-bold
text-black
shadow-[0_0_50px_rgba(212,175,55,.25)]
"

>

{text.button}

<FaArrowRight/>

</motion.button>

</div>

</motion.div>

</div>
</footer> )}

export default Footer;