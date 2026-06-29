import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

import {

  FaArrowUp,

  FaWhatsapp,

  FaEnvelope,

} from "react-icons/fa";

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

  const footerLinks = {

  es: {
    title: "Navegación",
    home: "Inicio",
    about: "Sobre mí",
    services: "Servicios",
    certifications: "Certificaciones",
    contact: "Contacto",
  },

  en: {
    title: "Navigation",
    home: "Home",
    about: "About",
    services: "Services",
    certifications: "Certifications",
    contact: "Contact",
  },

  fr: {
    title: "Navigation",
    home: "Accueil",
    about: "À propos",
    services: "Services",
    certifications: "Certifications",
    contact: "Contact",
  },

};

const navText = footerLinks[language];


  const t = {

  es:{

    brand:"Rachelle",

    subtitle:"Profesora de Francés e Inglés",

    description:
    "Clases personalizadas para estudiantes de todos los niveles. Aprende con un plan diseñado según tus objetivos personales, académicos o profesionales.",

    contact:"Contacto",

    powered:"Desarrollado por",

    rights:"Todos los derechos reservados.",

    backTop:"Volver arriba",

  },

  en:{

    brand:"Rachelle",

    subtitle:"French & English Teacher",

    description:
    "Personalized lessons for students of every level. Learn with a study plan adapted to your personal, academic or professional goals.",

    contact:"Contact",

    powered:"Powered by",

    rights:"All rights reserved.",

    backTop:"Back to top",

  },

  fr:{

    brand:"Rachelle",

    subtitle:"Professeure de Français et d'Anglais",

    description:
    "Cours personnalisés pour tous les niveaux avec un programme adapté à vos objectifs académiques, personnels et professionnels.",

    contact:"Contact",

    powered:"Développé par",

    rights:"Tous droits réservés.",

    backTop:"Retour en haut",

  }

};


  const text=t[language];

  return (

<footer
className="
relative
overflow-hidden
bg-[#0B0F14]
border-t
border-white/10
"
>

{/* BACKGROUND */}

<div className="absolute inset-0">

  


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
py-20
"
>

{/* ================================================= */}

<div
className="
grid
lg:grid-cols-3
gap-16
"
>

{/* ================================================= */}
{/* LEFT */}
{/* ================================================= */}

<div>

<h2
className="
text-4xl
font-black
leading-tight
"
>

<span className="text-white">

Rachelle

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

Pasteur Arnoux

</span>

</h2>

<p
className="
mt-6
text-slate-400
leading-8
max-w-md
"
>

{language==="es"

? "Clases personalizadas de francés e inglés para estudiantes de todos los niveles. Un aprendizaje práctico, moderno y adaptado a tus objetivos."

:language==="en"

? "Personalized French and English lessons for students of all levels. Practical, modern learning adapted to your goals."

:"Cours personnalisés de français et d'anglais pour tous les niveaux. Un apprentissage moderne adapté à vos objectifs."}

</p>

</div>

{/* ================================================= */}
{/* CENTER */}
{/* ================================================= */}

<div>

<h3
className="
text-white
font-bold
text-xl
mb-6
"
>

{language==="es"
?"Contacto"
:language==="en"
?"Contact"
:"Contact"}

</h3>

<div className="space-y-5">

<div>

<p className="text-slate-500 text-sm">

WhatsApp

</p>

<p className="text-white font-medium">

+591 77212188

</p>

</div>

<div>

<p className="text-slate-500 text-sm">

Email

</p>

<p className="text-white font-medium">

rachelle@gmail.com

</p>

</div>

<div>

<p className="text-slate-500 text-sm">

{language==="es"

?"Horario"

:language==="en"

?"Availability"

:"Disponibilité"}

</p>

<p className="text-white">

{language==="es"

?"Lunes a Domingo"

:language==="en"

?"Monday to Sunday"

:"Lundi au Dimanche"}

</p>

</div>

</div>

</div>

{/* ================================================= */}
{/* RIGHT */}
{/* ================================================= */}

<div>

<h3
className="
text-white
font-bold
text-xl
mb-6
"
>

{language==="es"

?"Navegación"

:language==="en"

?"Navigation"

:"Navigation"}

</h3>

<div className="space-y-4">

  <h4 className="text-white font-semibold mb-5">
    {navText.home}
  </h4>

  {[
    ["about", navText.about],
    ["services", navText.services],
    // ["certifications", navText.certifications],
    ["contact", navText.contact],
  ].map(([id, label]) => (

    <button
      key={id}
      onClick={() =>
        document
          .getElementById(id)
          ?.scrollIntoView({
            behavior: "smooth",
          })
      }
      className="
        block
        text-slate-400
        hover:text-[#D4AF37]
        transition-all
      "
    >
      {label}
    </button>

  ))}

</div>

</div>

</div>

{/* ================================================= */}

<div
className="
mt-20
border-t
border-white/10
pt-10
flex
flex-col
md:flex-row
items-center
justify-between
gap-8
"
>

<div>

<p
className="
text-slate-500
text-sm
text-center
md:text-left
"
>

© 2026 Rachelle P. Arnoux.

</p>

<p
className="
text-slate-500
text-sm
text-center
md:text-left
"
>

{language==="es"

?"Todos los derechos reservados."

:language==="en"

?"All Rights Reserved."

:"Tous droits réservés."}
</p>



</div>

<motion.div

initial={{ opacity:0, y:10 }}

whileInView={{ opacity:1, y:0 }}

viewport={{ once:true }}

transition={{ delay:.25 }}

className="flex flex-col items-center"

>

<p
className="
text-[11px]
uppercase
tracking-[5px]
text-slate-500
mb-3
"
>

Powered by

</p>

<div
className="
group
relative
overflow-hidden
rounded-2xl
border
border-[#D4AF37]/20
bg-white/[0.04]
backdrop-blur-xl
px-7
py-3
shadow-[0_0_30px_rgba(212,175,55,.08)]
"
>

{/* Glow */}

<div
className="
absolute
inset-0
opacity-0
group-hover:opacity-100
transition-all
duration-500
bg-gradient-to-r
from-[#D4AF37]/10
via-transparent
to-[#2C6BED]/10
"
/>

{/* Shine */}

<motion.div

animate={{
x:["-120%","480%"]
}}

transition={{
duration:5,
repeat:Infinity,
ease:"linear"
}}

className="
absolute
top-0
left-0
h-full
w-10
rotate-12
bg-white/20
blur-md
"
/>

<h4
className="
relative
z-10
text-xl
font-black
tracking-[4px]
bg-gradient-to-r
from-[#D4AF37]

to-[#D4AF37]
bg-clip-text
text-center
text-transparent
"
>

BrafaCorp

</h4>

<p
className="
relative
z-10
mt-1
text-[10px]
tracking-[3px]
uppercase
text-slate-300
text-center
"
>

Soluciones Digitales

</p>

</div>

</motion.div>

<motion.button
  whileHover={{ y: -3, scale: 1.04 }}
  whileTap={{ scale: 0.95 }}
  onClick={scrollTop}
  className="
    grid
    place-items-center
    w-14
    h-14
    rounded-full
    bg-gradient-to-r
    from-[#D4AF37]
    to-[#FFE28A]
    text-black
    shadow-[0_0_35px_rgba(212,175,55,.25)]
  "
>
  <FaArrowUp className="text-lg" />
</motion.button>

</div>

</div>

</footer>

)};

export default Footer;