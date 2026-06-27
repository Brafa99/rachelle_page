import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

import {
  FaWhatsapp,
  FaEnvelope,
  FaPaperPlane,
  FaUser,
  FaGlobeEurope,
  FaGraduationCap,
  FaLanguage,
} from "react-icons/fa";

import teacher from "../assets/teacher.png";

function Contact() {

  const { language } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    email: "",
    languageToLearn: "French",
    currentLevel: "A1",
    objective: "",
    preferredLanguage: "Español",
    channel: "whatsapp",
  });

  const [sending, setSending] = useState(false);

  const t = {

    es:{

      badge:"Reserva tu Primera Clase",

      title1:"Comienza tu",

      title2:"Aprendizaje Hoy",

      description:
      "Completa el formulario y recibirás un mensaje listo para enviar por WhatsApp o correo electrónico. Así podremos responderte mucho más rápido.",

      name:"Nombre",

      email:"Correo",

      language:"Idioma que deseas aprender",

      level:"Nivel actual",

      objective:"Objetivo",

      interface:"Idioma de comunicación",

      contact:"Canal de contacto",

      placeholder:
      "Cuéntanos un poco más sobre tus objetivos...",

      sendWhats:"Continuar por WhatsApp",

      sendMail:"Continuar por Correo",

      processing:"Preparando tu solicitud",

    },

    en:{

      badge:"Book your First Lesson",

      title1:"Start your",

      title2:"Learning Journey",

      description:
      "Fill out the form and we'll prepare a ready-to-send WhatsApp or email message so we can answer you faster.",

      name:"Full Name",

      email:"Email",

      language:"Language to Learn",

      level:"Current Level",

      objective:"Goal",

      interface:"Preferred Communication Language",

      contact:"Contact Channel",

      placeholder:
      "Tell us more about your goals...",

      sendWhats:"Continue with WhatsApp",

      sendMail:"Continue with Email",

      processing:"Preparing your request",

    },

    fr:{

      badge:"Réservez votre Premier Cours",

      title1:"Commencez votre",

      title2:"Nouvelle Aventure",

      description:
      "Remplissez le formulaire et nous préparerons automatiquement votre message WhatsApp ou e-mail.",

      name:"Nom",

      email:"E-mail",

      language:"Langue à apprendre",

      level:"Niveau actuel",

      objective:"Objectif",

      interface:"Langue de communication",

      contact:"Canal de contact",

      placeholder:
      "Parlez-nous de vos objectifs...",

      sendWhats:"Continuer avec WhatsApp",

      sendMail:"Continuer par E-mail",

      processing:"Préparation de votre demande",

    }

  };

  const text = t[language];

  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });

  };



const PHONE = "59177212188";
const EMAIL = "rachelle@gmail.com";

const handleSubmit = () => {

  setSending(true);

  const message =

language==="es"

?`Hola Rachelle.

Mi nombre es ${form.name}.

Quiero aprender: ${form.languageToLearn}

Nivel actual: ${form.currentLevel}

Objetivo:
${form.objective}

Idioma de comunicación:
${form.preferredLanguage}
`

:language==="en"

?`Hello Rachelle.

My name is ${form.name}.

Language:
${form.languageToLearn}

Current Level:
${form.currentLevel}

Goal:
${form.objective}

Preferred Language:
${form.preferredLanguage}
`

:`Bonjour Rachelle.

Je m'appelle ${form.name}.

Je souhaite apprendre :
${form.languageToLearn}

Niveau :
${form.currentLevel}

Objectif :
${form.objective}

Langue :
${form.preferredLanguage}
`;

setTimeout(()=>{

    setSending(false);

    if(form.channel==="whatsapp"){

        window.open(

`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`,

"_blank"

);

    }

    else{

        window.location.href=

`mailto:${EMAIL}?subject=Lesson Reservation&body=${encodeURIComponent(message)}`;

    }

},1800);

};


return (

<section
  id="contact"
  className="
    relative
    overflow-hidden
    bg-[#0B0F14]
    py-24
  "
>

{/* ================= BACKGROUND ================= */}

<div className="absolute inset-0">

  {/* Gold Glow */}

  <div
    className="
      absolute
      -top-56
      left-[-180px]
      w-[700px]
      h-[700px]
      rounded-full
      bg-[#D4AF37]/8
      blur-[200px]
    "
  />

  {/* Blue Glow */}


  {/* Grid */}

  <div
    className="
      absolute
      inset-0
      opacity-[0.035]
      bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)]
      [background-size:34px_34px]
    "
  />

</div>

{/* ================= CONTENT ================= */}

<div
  className="
    relative
    z-10
    max-w-7xl
    mx-auto
    px-6
  "
>

{/* ================= HEADER ================= */}

<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:.8}}

className="text-center"

>

<div
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
backdrop-blur-xl
"
>

<span className="text-[#D4AF37] text-lg">

✉️

</span>

<span className="text-[#F5D87A] text-sm tracking-wide">

{language==="es"

? "Reserva tu Primera Clase"

:language==="en"

? "Book Your First Lesson"

:"Réservez votre Premier Cours"}

</span>

</div>

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

{language==="es"

? "Comienza tu"

:language==="en"

? "Start Your"

:"Commencez Votre"}

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

{language==="es"

? "Aprendizaje Hoy"

:language==="en"

? "Learning Journey"

:"Apprentissage Aujourd'hui"}

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

{language==="es"

? "Completa el formulario y elige el medio de contacto que prefieras. Prepararemos automáticamente tu solicitud para que solo tengas que enviarla."

:language==="en"

? "Complete the form and choose your preferred contact method. We'll prepare your request automatically so you only need to send it."

:"Complétez le formulaire et choisissez votre moyen de contact préféré. Nous préparerons automatiquement votre demande afin que vous n'ayez plus qu'à l'envoyer."}

</p>

</motion.div>

{/* ================= PREMIUM INFO BAR ================= */}

<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{delay:.15}}

className="
mt-20
rounded-[34px]
overflow-hidden
border
border-white/10
bg-white/[0.04]
backdrop-blur-xl
"

>

<div className="grid md:grid-cols-4">

{[

{

icon:"⚡",

value:
language==="es"
?"< 24h"
:language==="en"
?"< 24h"
:"< 24h",

label:
language==="es"
?"Respuesta rápida"
:language==="en"
?"Fast Response"
:"Réponse Rapide",

},

{

icon:"🌐",

value:
language==="es"
?"Online"
:language==="en"
?"Online"
:"En Ligne",

label:
language==="es"
?"Clases en vivo"
:language==="en"
?"Live Lessons"
:"Cours en Direct",

},

{

icon:"🌍",

value:
language==="es"
?"FR • EN"
:language==="en"
?"FR • EN"
:"FR • EN",

label:
language==="es"
?"Idiomas disponibles"
:language==="en"
?"Languages"
:"Langues",

},

{

icon:"🎯",

value:
language==="es"
?"A1 → C2"
:language==="en"
?"A1 → C2"
:"A1 → C2",

label:
language==="es"
?"Todos los niveles"
:language==="en"
?"All Levels"
:"Tous Niveaux",

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
text-2xl
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

{/* ================= FORM SECTION ================= */}

<div
  className="
    mt-20
    gap-10

  "
>

{/* =========================================================
                        FORMULARIO
========================================================= */}

<motion.div

initial={{opacity:0,x:-40}}

whileInView={{opacity:1,x:0}}

viewport={{once:true}}

transition={{duration:.8}}

className="
relative
rounded-[38px]
border
border-white/10
bg-[#131922]
backdrop-blur-xl
overflow-hidden
"

>

<div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-[#2C6BED]/5"/>

<div className="relative z-10 p-8 lg:p-10">

<h3 className="text-3xl font-black text-white mb-8">

{language==="es"

? "Completa tu solicitud"

:language==="en"

? "Complete your request"

:"Complétez votre demande"}

</h3>

{/* Nombre */}

<div className="mb-6">

<label className="text-slate-300 text-sm mb-2 block">

{text.name}

</label>

<div className="relative">

<FaUser
className="
absolute
left-5
top-1/2
-translate-y-1/2
text-[#D4AF37]
"
/>

<input

name="name"

value={form.name}

onChange={handleChange}

className="
w-full
rounded-2xl
bg-white/5
border
border-white/10
pl-14
pr-5
py-4
text-white
outline-none
focus:border-[#D4AF37]
transition-all
"

placeholder={text.name}

/>

</div>

</div>

{/* Email */}

<div className="mb-6">

<label className="text-slate-300 text-sm mb-2 block">

{text.email}

</label>

<div className="relative">

<FaEnvelope
className="
absolute
left-5
top-1/2
-translate-y-1/2
text-[#D4AF37]
"
/>

<input

type="email"

name="email"

value={form.email}

onChange={handleChange}

className="
w-full
rounded-2xl
bg-white/5
border
border-white/10
pl-14
pr-5
py-4
text-white
outline-none
focus:border-[#D4AF37]
"

placeholder="email@example.com"

/>

</div>

</div>

{/* Idioma */}

<div className="grid md:grid-cols-2 gap-6 mb-6">

<div>

<label className="text-slate-300 text-sm mb-2 block">

{text.language}

</label>

<select

name="languageToLearn"

value={form.languageToLearn}

onChange={handleChange}

className="
w-full
rounded-2xl
bg-[#1A212C]
border
border-white/10
px-5
py-4
text-white
focus:border-[#D4AF37]
"

>

<option>French</option>

<option>English</option>

</select>

</div>

<div>

<label className="text-slate-300 text-sm mb-2 block">

{text.level}

</label>

<select

name="currentLevel"

value={form.currentLevel}

onChange={handleChange}

className="
w-full
rounded-2xl
bg-[#1A212C]
border
border-white/10
px-5
py-4
text-white
focus:border-[#D4AF37]
"

>

<option>A1</option>
<option>A2</option>
<option>B1</option>
<option>B2</option>
<option>C1</option>
<option>C2</option>

</select>

</div>

</div>

{/* Objetivo */}

<div className="mb-6">

<label className="text-slate-300 text-sm mb-2 block">

{text.objective}

</label>

<textarea

rows={5}

name="objective"

value={form.objective}

onChange={handleChange}

placeholder={text.placeholder}

className="
w-full
rounded-2xl
bg-white/5
border
border-white/10
p-5
text-white
resize-none
outline-none
focus:border-[#D4AF37]
"

/>

</div>

{/* Canal */}



{/* =========================================================
                    CONTACT CHANNEL
========================================================= */}

<div className="mb-8">

  <label className="text-slate-300 text-sm mb-4 block">

    {text.contact}

  </label>

  <div className="grid md:grid-cols-2 gap-5">

    {/* ================= WHATSAPP ================= */}

    <motion.button

      whileHover={{ y:-4 }}

      whileTap={{ scale:.98 }}

      type="button"

      onClick={()=>setForm({...form,channel:"whatsapp"})}

      className={`
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      p-6
      text-left
      transition-all
      duration-500

      ${
      form.channel==="whatsapp"

      ?

      "border-[#25D366] bg-[#25D366]/10 shadow-[0_0_40px_rgba(37,211,102,.15)]"

      :

      "border-white/10 bg-white/5 hover:border-[#25D366]/40"
      }
      `}
    >

      <div className="flex items-start gap-4">

        <div
          className="
          w-14
          h-14
          rounded-2xl
          bg-green-500/10
          border
          border-green-500/20
          flex
          items-center
          justify-center
          shrink-0
          "
        >

          <FaWhatsapp className="text-2xl text-[#25D366]" />

        </div>

        <div className="flex-1">

          <h4 className="text-white font-bold text-lg">

            WhatsApp

          </h4>

          <p className="text-slate-400 text-sm mt-1">

            {language==="es"

            ?"Respuesta rápida"

            :language==="en"

            ?"Fast response"

            :"Réponse rapide"}

          </p>

          <p className="mt-3 text-[#25D366] font-semibold">

            +591 77212188

          </p>

        </div>

      </div>

      {form.channel==="whatsapp" && (

        <div
          className="
          absolute
          top-5
          right-5
          w-8
          h-8
          rounded-full
          bg-[#25D366]
          text-black
          font-bold
          flex
          items-center
          justify-center
          "
        >

          ✓

        </div>

      )}

    </motion.button>

    {/* ================= EMAIL ================= */}

    <motion.button

      whileHover={{ y:-4 }}

      whileTap={{ scale:.98 }}

      type="button"

      onClick={()=>setForm({...form,channel:"email"})}

      className={`
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      p-6
      text-left
      transition-all
      duration-500

      ${
      form.channel==="email"

      ?

      "border-[#D4AF37] bg-[#D4AF37]/10 shadow-[0_0_40px_rgba(212,175,55,.15)]"

      :

      "border-white/10 bg-white/5 hover:border-[#D4AF37]/40"
      }
      `}
    >

      <div className="flex items-start gap-4">

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
          shrink-0
          "
        >

          <FaEnvelope className="text-2xl text-[#D4AF37]" />

        </div>

        <div className="flex-1">

          <h4 className="text-white font-bold text-lg">

            Email

          </h4>

          <p className="text-slate-400 text-sm mt-1">

            {language==="es"

            ?"Respuesta formal"

            :language==="en"

            ?"Formal contact"

            :"Contact par e-mail"}

          </p>

          <p className="mt-3 text-[#D4AF37] font-semibold">

            rachelle@gmail.com

          </p>

        </div>

      </div>

      {form.channel==="email" && (

        <div
          className="
          absolute
          top-5
          right-5
          w-8
          h-8
          rounded-full
          bg-[#D4AF37]
          text-black
          font-bold
          flex
          items-center
          justify-center
          "
        >

          ✓

        </div>

      )}

    </motion.button>

  </div>

</div>

{/* ================= SEND BUTTON ================= */}

<motion.button

whileHover={{scale:1.02}}

whileTap={{scale:.98}}

disabled={sending}

onClick={handleSubmit}

className="
w-full
rounded-full
py-5
font-bold
text-black
bg-gradient-to-r
from-[#D4AF37]
via-[#FFE28A]
to-[#D4AF37]
shadow-[0_0_50px_rgba(212,175,55,.25)]
disabled:opacity-70
disabled:cursor-not-allowed
transition-all
"

>

<FaPaperPlane className="inline mr-3"/>

{

sending

? text.processing

: form.channel==="whatsapp"

? (language==="es"

? "Abrir conversación en WhatsApp"

:language==="en"

? "Open WhatsApp Conversation"

:"Ouvrir WhatsApp")

: (language==="es"

? "Preparar correo electrónico"

:language==="en"

? "Prepare Email"

:"Préparer l'e-mail")

}

</motion.button>

{/* ================= INFO ================= */}

<p
className="
mt-6
text-center
text-sm
text-slate-500
leading-7
"
>

{

language==="es"

?

"Tu información no se almacena. Prepararemos el mensaje automáticamente para que solo tengas que enviarlo. Normalmente responderemos en 24 horas"

:language==="en"

?

"Your information is not stored. We'll prepare the message automatically so you only need to send it. Usually we responded in 24 hours."

:

"Vos informations ne sont pas enregistrées. Nous préparons simplement votre message."

}

</p>


</div>

</motion.div>


{/* =========================================================
                    LIVE PREVIEW CARD
========================================================= */}

{/* <motion.div

  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: .8 }}
  className="sticky top-28"
> */}

{/* <div
className="
relative
overflow-hidden
rounded-[38px]
border
border-white/10
bg-[#131922]
backdrop-blur-xl
"
> */}

{/* Glow */}
{/* 
<div
className="
absolute
inset-0
bg-gradient-to-br
from-[#D4AF37]/8
via-transparent
to-[#2C6BED]/8
"
/> */}

{/* Floating glow */}

{/* <div
className="
absolute
top-[-120px]
right-[-80px]
w-[260px]
h-[260px]
rounded-full
bg-[#D4AF37]/12
blur-[120px]
"
/> */}

<div className="relative z-10 p-8">

{/* Header */}

{/* <div className="flex items-center gap-4"> */}

{/* <div
className="
w-16
h-16
rounded-2xl
bg-[#D4AF37]/10
border
border-[#D4AF37]/20
flex
items-center
justify-center
text-3xl
"
>

👩🏻‍🏫

<img
src={teacher}
/>

</div> */}

{/* <div> */}

{/* <p className="text-slate-400 text-sm">

{language==="es"
?"Profesora"
:language==="en"
?"Teacher"
:"Professeure"}

</p> */}

{/* <h3 className="text-2xl font-black text-white">

Rachelle Pasteur Arnoux

</h3> */}

{/* </div> */}

{/* </div> */}

{/* Divider

<div className="mt-8 h-px bg-white/10"/> */}

{/* Preview */}

{/* <h4
className="
mt-8
text-lg
font-bold
text-[#D4AF37]
"
>

{language==="es"
?"Vista previa del mensaje"
:language==="en"
?"Message Preview"
:"Aperçu du message"}

</h4> */}

{/* <div
className="
mt-5
rounded-3xl
bg-black/25
border
border-white/10
p-6
"
>

<p className="text-slate-300 leading-8 whitespace-pre-line">

{language==="es"
?`Hola Rachelle.

Mi nombre es ${form.name || "________"}.

Quisiera aprender:

${form.languageToLearn}

Nivel:

${form.currentLevel}

Objetivo:

${form.objective || "..."}

Espero información sobre disponibilidad y horarios.`

:language==="en"

?`Hello Rachelle.

My name is ${form.name || "________"}.

I would like to learn:

${form.languageToLearn}

Current Level:

${form.currentLevel}

Goal:

${form.objective || "..."}

I would like information about schedules.`

:`Bonjour Rachelle.

Je m'appelle ${form.name || "________"}.

Je souhaite apprendre :

${form.languageToLearn}

Niveau :

${form.currentLevel}

Objectif :

${form.objective || "..."}

Je souhaite recevoir des informations sur les horaires.`}

</p>

</div> */}

{/* Status */}

{/* <motion.div

animate={{
opacity:[.6,1,.6]
}}

transition={{
repeat:Infinity,
duration:2
}}

className="
mt-8
rounded-2xl
bg-[#D4AF37]/10
border
border-[#D4AF37]/20
p-5
"

>

<div className="flex items-center gap-3">

<div className="w-3 h-3 rounded-full bg-[#D4AF37]" />

<p className="text-[#F5D87A] font-medium">

{text.processing}

</p>

</div>

</motion.div> */}





{/* Benefits */}

<div className="mt-10 space-y-4">

{/* {[
language==="es"
?"✓ Respuesta normalmente en menos de 24 horas"
:language==="en"
?"✓ Usually answered within 24 hours"
:"✓ Réponse généralement sous 24 heures",

language==="es"
?"✓ Clases adaptadas a tu nivel"
:language==="en"
?"✓ Lessons adapted to your level"
:"✓ Cours adaptés à votre niveau",

language==="es"
?"✓ Preparación para certificaciones internacionales"
:language==="en"
?"✓ International exam preparation"
:"✓ Préparation aux certifications internationales",

language==="es"
?"✓ Horarios flexibles"
:language==="en"
?"✓ Flexible schedules"
:"✓ Horaires flexibles",

].map((item,index)=>( */}

{/* <div
key={index}
className="flex items-center gap-3"
>

<div className="text-[#D4AF37]">

✓

</div>

<p className="text-slate-300">

{item}

</p>

</div> */}

{/* ))} */}



{/* </div> */}

{/* </div> */}

</div>

</div>

</div>

</div>
</section>
)
}
export default Contact;