import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

import {
  FaGraduationCap,
  FaAward,
  FaLanguage,
  FaUserGraduate,
  FaCheckCircle,
} from "react-icons/fa";

function Services() {

  const scrollTo = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

  };

  const { language } = useLanguage();

  const t = {

    es:{

      badge:"Servicios Profesionales",

      title1:"Aprende con un",

      title2:"Plan Personalizado",

      description:
      "Cada estudiante tiene objetivos distintos. Las clases se adaptan a tu nivel, tu ritmo y tus metas, desde conversación hasta certificaciones internacionales.",

      stats:[
        {
          value:"A1 → C2",
          label:"Todos los niveles",
        },
        {
          value:"Online",
          label:"Clases en vivo",
        },
        {
          value:"1 : 1",
          label:"Personalizadas",
        },
        {
          value:"DELF • IELTS",
          label:"Exámenes",
        },
      ]

    },

    en:{

      badge:"Professional Services",

      title1:"Learn with a",

      title2:"Personalized Plan",

      description:
      "Every student has different goals. Lessons are tailored to your level, pace and objectives, from conversation practice to international certifications.",

      stats:[
        {
          value:"A1 → C2",
          label:"All Levels",
        },
        {
          value:"Online",
          label:"Live Lessons",
        },
        {
          value:"1 : 1",
          label:"Personalized",
        },
        {
          value:"DELF • IELTS",
          label:"Exams",
        },
      ]

    },

    fr:{

      badge:"Services Professionnels",

      title1:"Apprenez avec un",

      title2:"Programme Personnalisé",

      description:
      "Chaque étudiant est unique. Les cours sont adaptés à votre niveau, votre rythme et vos objectifs jusqu'aux certifications internationales.",

      stats:[
        {
          value:"A1 → C2",
          label:"Tous niveaux",
        },
        {
          value:"En ligne",
          label:"Cours en direct",
        },
        {
          value:"1 : 1",
          label:"Personnalisé",
        },
        {
          value:"DELF • IELTS",
          label:"Examens",
        },
      ]

    }

  };

  const text = t[language];


  return(

<section
id="services"
className="relative overflow-hidden bg-[#0B0F14] min-h-screen pt-36 lg:pt-42"
>

{/* ================= BACKGROUND ================= */}

<div className="absolute inset-0">

  <div
    className="
      absolute
      -top-52
      -left-40
      w-[620px]
      h-[620px]
      rounded-full
      bg-[#D4AF37]/8
      blur-[180px]
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

{/* ================= CONTENT ================= */}

<div className="relative z-10 max-w-7xl mx-auto px-6">

  {/* HEADER */}

  <motion.div

    initial={{ opacity:0,y:40 }}

    whileInView={{ opacity:1,y:0 }}

    viewport={{ once:true }}

    transition={{ duration:.7 }}

    className="text-center"

  >

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

      <FaGraduationCap />

      {text.badge}

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

  </motion.div>

  {/* ================= PREMIUM BAR ================= */}

  <motion.div

    initial={{ opacity:0,y:40 }}

    whileInView={{ opacity:1,y:0 }}

    viewport={{ once:true }}

    transition={{ delay:.15 }}

    className="
      mt-20
      rounded-[32px]
      border
      border-white/10
      bg-white/[0.04]
      backdrop-blur-xl
      overflow-hidden
    "

  >

    <div className="grid md:grid-cols-4">

      {[
        {
          icon:<FaLanguage/>,
          ...text.stats[0]
        },
        {
          icon:<FaUserGraduate/>,
          ...text.stats[1]
        },
        {
          icon:<FaGraduationCap/>,
          ...text.stats[2]
        },
        {
          icon:<FaAward/>,
          ...text.stats[3]
        },

      ].map((item,index)=>(

        <motion.div

          key={index}

          whileHover={{
            backgroundColor:"rgba(255,255,255,.03)"
          }}

          className="
            relative
            p-8
            flex
            items-center
            gap-5
            border-b
            md:border-b-0
            md:border-r
            last:border-r-0
            border-white/10
            transition-all
          "

        >

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-[#D4AF37]/10
              border
              border-[#D4AF37]/20
              flex
              items-center
              justify-center
              text-[#D4AF37]
              text-xl
              shrink-0
            "
          >

            {item.icon}

          </div>

          <div>

            <h3 className="text-white font-bold text-lg">

              {item.value}

            </h3>

            <p className="text-slate-400 text-sm mt-1">

              {item.label}

            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </motion.div>

  {/* ================= SERVICES GRID ================= */}

  {/* ================= SERVICES GRID ================= */}

<div className="grid lg:grid-cols-2 gap-8 mt-20">

  {[
    {
      icon: "🇫🇷",
      color: "#2C6BED",

      title:
        language === "es"
          ? "Francés Nativo • Inglés Avanzado"
          : language === "en"
          ? "Native French • Advanced English"
          : "Français Natif • Englais avancé",

      subtitle:
        language === "es"
          ? "Desde nivel A1 hasta C2"
          : language === "en"
          ? "From A1 to C2"
          : "Du niveau A1 au C2",

      items:
        language === "es"
          ? [
              "Conversación",
              "Gramática",
              "Pronunciación",
              "Comprensión Oral",
              "Expresión Escrita",
            ]
          : language === "en"
          ? [
              "Conversation",
              "Grammar",
              "Pronunciation",
              "Listening",
              "Writing",
            ]
          : [
              "Conversation",
              "Grammaire",
              "Prononciation",
              "Compréhension",
              "Expression écrite",
            ],
    },

    {
      icon: "🏆",
      color: "#D4AF37",

      title:
        language === "es"
          ? "Certificaciones"
          : language === "en"
          ? "International Exams"
          : "Certifications",

      subtitle:
        language === "es"
          ? "Preparación Oficial"
          : language === "en"
          ? "Official Preparation"
          : "Préparation Officielle",

      items:[
        "DELF",
        "DALF",
        "IELTS",
        "TOEFL",
        "Cambridge",
      ],
    },

    {
      icon:"💻",

      color:"#4F9CF9",

      title:
        language==="es"
        ? "Clases Online"
        :language==="en"
        ? "Online Lessons"
        :"Cours en Ligne",

      subtitle:
        language==="es"
        ? "Flexibilidad Total"
        :language==="en"
        ? "Flexible Schedule"
        :"Horaires Flexibles",

      items:
        language==="es"
        ?[
          "Zoom",
          "Google Meet",
          "Material Digital",
          "Seguimiento",
          "Horarios Flexibles",
        ]
        :language==="en"
        ?[
          "Zoom",
          "Google Meet",
          "Digital Material",
          "Progress Tracking",
          "Flexible Schedule",
        ]
        :[
          "Zoom",
          "Google Meet",
          "Supports Numériques",
          "Suivi",
          "Horaires Flexibles",
        ],
    },

    {
      icon:"🎯",

      color:"#FFFFFF",

      title:
        language==="es"
        ? "Clases Personalizadas"
        :language==="en"
        ? "Private Lessons"
        :"Cours Personnalisés",

      subtitle:
        language==="es"
        ? "Objetivos Específicos"
        :language==="en"
        ? "Specific Goals"
        :"Objectifs Personnels",

      items:
        language==="es"
        ?[
          "Viajes",
          "Trabajo",
          "Universidad",
          "Entrevistas",
          "Refuerzo Escolar",
        ]
        :language==="en"
        ?[
          "Travel",
          "Work",
          "University",
          "Interviews",
          "School Support",
        ]
        :[
          "Voyages",
          "Travail",
          "Université",
          "Entretiens",
          "Soutien Scolaire",
        ],
    },

  ].map((service,index)=>(

    <motion.div

      key={index}

      initial={{opacity:0,y:40}}

      whileInView={{opacity:1,y:0}}

      viewport={{once:true}}

      transition={{delay:index*.08}}

      whileHover={{
        y:-10,
        scale:1.02
      }}

      className="
      group
      relative
      overflow-hidden
      rounded-[34px]
      border
      border-white/10

      backdrop-blur-xl
      p-8
      transition-all
      duration-500
      hover:border-[#D4AF37]/50
      hover:shadow-[0_25px_70px_rgba(212,175,55,.15)]
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
        bg-gradient-to-br
        from-[#D4AF37]/10
        via-transparent
        to-[#2C6BED]/10
        "
      />

      {/* Shine */}

      <div
        className="
        absolute
        top-0
        -left-[140%]
        h-full
        w-24
        rotate-12
        bg-white/10
        blur-xl
        group-hover:left-[150%]
        transition-all
        duration-1000
        "
      />

      <div className="relative z-10">

        <div
          className="
          w-16
          h-16
          rounded-2xl
          bg-white/5
          border
          border-white/10
          flex
          items-center
          justify-center
          text-3xl
          mb-6
          "
        >
          {service.icon}
        </div>

        <h3 className="text-3xl font-black text-white">

          {service.title}

        </h3>

        <p className="text-[#D4AF37] mt-2 font-medium">

          {service.subtitle}

        </p>

        <div className="space-y-3 mt-8">

          {service.items.map((item,i)=>(

            <motion.div

              key={i}

              whileHover={{x:8}}

              className="flex items-center gap-3"

            >

              <FaCheckCircle
                style={{color:service.color}}
              />

              <span className="text-slate-300">

                {item}

              </span>

            </motion.div>

          ))}

        </div>

        <motion.button
          onClick={()=>scrollTo("contact")}
          whileHover={{scale:1.04}}

          whileTap={{scale:.98}}

          className="
          mt-10
          rounded-full
          bg-[#D4AF37]
          text-black
          font-semibold
          px-7
          py-3
          shadow-[0_0_35px_rgba(212,175,55,.25)]
          "

        >

          {language==="es"
            ? "Reservar Clase"
            :language==="en"
            ? "Book Lesson"
            :"Réserver"}

        </motion.button>

      </div>

    </motion.div>

  ))}

</div>

{/* ================= PROCESS ================= */}

{/* <motion.div

  initial={{opacity:0,y:40}}

  whileInView={{opacity:1,y:0}}

  viewport={{once:true}}

  transition={{delay:.2}}

  className="
  mt-24
  rounded-[36px]
  border
  border-white/10
  bg-gradient-to-r
  from-[#131922]
  to-[#0F141C]
  p-10
  "

>

  <h3 className="text-center text-3xl font-black text-white">

    {language==="es"
      ? "¿Cómo son las clases?"
      :language==="en"
      ? "How do lessons work?"
      :"Comment se déroulent les cours ?"}

  </h3>

  <div className="grid md:grid-cols-4 gap-10 mt-12 text-center">

    {[
      {
        icon:"📅",
        es:"Agenda",
        en:"Schedule",
        fr:"Planifier",
      },
      {
        icon:"🎓",
        es:"Aprende",
        en:"Learn",
        fr:"Apprendre",
      },
      {
        icon:"📝",
        es:"Practica",
        en:"Practice",
        fr:"Pratiquer",
      },
      {
        icon:"🏆",
        es:"Certifícate",
        en:"Get Certified",
        fr:"Certifiez-vous",
      },

    ].map((step,index)=>(

      <motion.div

        key={index}

        whileHover={{y:-6}}

      >

        <div className="text-5xl">

          {step.icon}

        </div>

        <h4 className="mt-4 text-white font-bold">

          {step[language]}

        </h4>

      </motion.div>

    ))}

  </div>

</motion.div> */}

</div>

</section>

  )
}

export default Services;