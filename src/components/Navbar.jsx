import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  HiOutlineMenuAlt3,
  HiX
} from "react-icons/hi";

import {
  FiGlobe,
  FiChevronDown,
} from "react-icons/fi";

import { useLanguage } from "../context/LanguageContext";

function Navbar() {

  const {
    language,
    setLanguage,
    languages,
    currentLanguage,
  } = useLanguage();

  const [active, setActive] = useState("home");

  const [menuOpen, setMenuOpen] = useState(false);

  const [languageOpen, setLanguageOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 30);

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  useEffect(() => {

    document.body.style.overflow =
      menuOpen ? "hidden" : "auto";

    return () => {

      document.body.style.overflow = "auto";

    };

  }, [menuOpen]);

  const navigation = useMemo(() => ({

    es: [
      { id: "home", label: "Inicio" },
      { id: "about", label: "Sobre mí" },
      { id: "services", label: "Servicios" },
      { id: "certifications", label: "Certificaciones" },
      { id: "contact", label: "Contacto" },
    ],

    en: [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "services", label: "Services" },
      { id: "certifications", label: "Certifications" },
      { id: "contact", label: "Contact" },
    ],

    fr: [
      { id: "home", label: "Accueil" },
      { id: "about", label: "À propos" },
      { id: "services", label: "Services" },
      { id: "certifications", label: "Certifications" },
      { id: "contact", label: "Contact" },
    ],

  }), []);

  const navLinks = navigation[language];

  const scrollTo = (id) => {

    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

      setActive(id);

    }

  };

    return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-500

          ${
            scrolled
              ? "bg-[#0D1117]/75 backdrop-blur-2xl border-b border-white/10 shadow-[0_15px_50px_rgba(0,0,0,.45)]"
              : "bg-transparent"
          }
        `}
      >
        {/* Glow */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="h-24 flex items-center justify-between">

            {/* ================= LOGO ================= */}

            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => scrollTo("home")}
              className="cursor-pointer select-none"
            >

              {/* Desktop */}

              <h1 className="hidden md:block text-2xl font-black tracking-wide">

                <span className="text-[#D4AF37]">
                  Rachelle
                </span>

                <span className="text-[#D4AF37]">
                  {" "}Pasteur Arnoux
                </span>

              </h1>

              {/* Mobile */}

              <h1 className="md:hidden text-xl font-black">

                <span lassName="text-[#D4AF37]">
                  Rachelle
                </span>

                <span className="text-[#D4AF37]">
                  {" "}P. Arnoux
                </span>

              </h1>

              <p className="mt-1 uppercase tracking-[5px] text-[10px] text-slate-400">

                French • English Language Coach

              </p>

            </motion.div>

            {/* ================= DESKTOP MENU ================= */}

            <div className="hidden lg:flex items-center gap-10">

              {navLinks.map((item) => (

                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="relative group"
                >

                  <span
                    className={`
                      text-[15px]
                      font-medium
                      transition-all
                      duration-300

                      ${
                        active === item.id
                          ? "text-[#D4AF37]"
                          : "text-slate-300 group-hover:text-white"
                      }
                    `}
                  >

                    {item.label}

                  </span>

                  <span
                    className={`
                      absolute
                      left-0
                      -bottom-2
                      h-[2px]
                      rounded-full
                      bg-[#D4AF37]
                      transition-all
                      duration-300

                      ${
                        active === item.id
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />

                </button>

              ))}

            </div>

            {/* ================= RIGHT ================= */}

            <div className="hidden lg:flex items-center gap-4">

              {/* Language */}

              <div className="relative">

                <button
                  onClick={() =>
                    setLanguageOpen(!languageOpen)
                  }
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-full
                    px-5
                    py-3
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    hover:border-[#D4AF37]/50
                    transition-all
                  "
                >

                  <span className="text-lg">

                    {currentLanguage.flag}

                  </span>

                  <span className="text-sm text-white font-medium">

                    {currentLanguage.short}

                  </span>

                  <FiChevronDown
                    className={`
                      transition-transform

                      ${
                        languageOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />

                </button>

                <AnimatePresence>

                  {languageOpen && (

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 12,
                      }}
                      className="
                        absolute
                        right-0
                        mt-3
                        w-52
                        rounded-3xl
                        overflow-hidden
                        border
                        border-white/10
                        bg-[#151A21]/95
                        backdrop-blur-2xl
                        shadow-2xl
                      "
                    >

                      {languages.map((item) => (

                        <button
                          key={item.code}
                          onClick={() => {

                            setLanguage(item.code);

                            setLanguageOpen(false);

                          }}
                          className={`
                            w-full
                            px-5
                            py-4
                            flex
                            items-center
                            gap-4
                            text-left
                            transition-all

                            ${
                              language === item.code
                                ? "bg-[#D4AF37]/15 text-[#D4AF37]"
                                : "text-slate-300 hover:bg-white/5"
                            }
                          `}
                        >

                          <span className="text-xl">

                            {item.flag}

                          </span>

                          <span>

                            {item.label}

                          </span>

                        </button>

                      ))}

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

              {/* CTA */}

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: .98,
                }}
                className="
                  rounded-full
                  px-7
                  py-3.5
                  font-semibold
                  text-[#111]
                  bg-gradient-to-r
                  from-[#D4AF37]
                  to-[#F3D57A]
                  shadow-[0_0_35px_rgba(212,175,55,.25)]
                  hover:shadow-[0_0_45px_rgba(212,175,55,.45)]
                  transition-all
                "
              >

                {language === "es"
                  ? "Reservar Clase"
                  : language === "en"
                  ? "Book a Lesson"
                  : "Réserver un cours"}

              </motion.button>

            </div>

            {/* ================= MOBILE BUTTON ================= */}

            <button
              onClick={() => setMenuOpen(true)}
              className="
                lg:hidden
                w-12
                h-12
                rounded-full
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                flex
                items-center
                justify-center
                text-white
                hover:border-[#D4AF37]
                transition-all
              "
            >

              <HiOutlineMenuAlt3 size={26} />

            </button>

          </div>

        </div>

      </motion.header>
    
            <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[#0B0F14] lg:hidden"
          >

            {/* Background Effects */}

            <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#2F6DB5]/15 blur-[120px]" />

            <div className="relative h-full flex flex-col justify-between pt-28 pb-10 px-8">

              {/* TOP */}

              <div>

                {/* <div className="mb-14">

                  <h2 className="text-3xl font-black text-white">

                    Rachelle

                  </h2>

                  <h3 className="text-xl font-semibold text-[#D4AF37] mt-1">

                    P. Arnoux

                  </h3>

                  <p className="uppercase tracking-[5px] text-xs text-slate-500 mt-3">

                    French • English Language Coach

                  </p>

                </div> */}

                <div className="flex flex-col gap-8">

                  {navLinks.map((item) => (

                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`
                        text-left
                        text-2xl
                        font-semibold
                        transition-all

                        ${
                          active === item.id
                            ? "text-[#D4AF37]"
                            : "text-slate-300 hover:text-white"
                        }
                      `}
                    >

                      {item.label}

                    </button>

                  ))}

                </div>

              </div>

              {/* BOTTOM */}

              <div>

                {/* <p className="uppercase tracking-[4px] text-xs text-slate-500 mb-4">

                  Language

                </p> */}

                <div className="grid grid-cols-3 gap-3 mb-8">

                  {languages.map((item) => (

                    <button
                      key={item.code}
                      onClick={() => setLanguage(item.code)}
                      className={`
                        rounded-xl
                        py-3
                        border
                        transition-all

                        ${
                          language === item.code
                            ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                            : "border-white/10 bg-white/5 text-white"
                        }
                      `}
                    >

                      <div className="text-xl">

                        {item.flag}

                      </div>

                      <div className="text-xs mt-1">

                        {item.short}

                      </div>

                    </button>

                  ))}

                </div>

                <motion.button

                  whileHover={{ scale: 1.02 }}

                  whileTap={{ scale: .98 }}

                  className="
                    w-full
                    rounded-2xl
                    py-4
                    font-semibold
                    text-black
                    bg-gradient-to-r
                    from-[#D4AF37]
                    to-[#F3D57A]
                    shadow-[0_0_30px_rgba(212,175,55,.35)]
                  "

                >

                  {language === "es"
                    ? "Reservar una Clase"
                    : language === "en"
                    ? "Book a Lesson"
                    : "Réserver un cours"}

                </motion.button>

                <div className="mt-10 border-t border-white/10 pt-8">

                  <p className="text-center text-slate-400 text-sm">

                    French • English

                  </p>

                  <p className="text-center text-slate-500 text-xs mt-3">

                    Premium Language Coaching

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>

  );

}

export default Navbar;
