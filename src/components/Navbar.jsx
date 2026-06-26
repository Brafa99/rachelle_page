import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FiGlobe } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const navLinks = [
    {
      id: "home",
      label: language === "es" ? "Inicio" : "Home",
    },
    {
      id: "about",
      label: language === "es" ? "Sobre mí" : "About",
    },
    {
      id: "services",
      label: language === "es" ? "Servicios" : "Services",
    },
    {
      id: "exams",
      label: language === "es" ? "Exámenes" : "Exams",
    },
    {
      id: "contact",
      label: language === "es" ? "Contacto" : "Contact",
    },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/85 backdrop-blur-2xl border-b border-slate-200 shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="h-20 flex items-center justify-between">

            {/* LOGO */}

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer"
            >

              <h1
                className={`text-2xl font-black transition-colors ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                Rachelle
                <span className="text-[#1D4E89]">
                  {" "}Pasteur
                </span>
              </h1>

              <p
                className={`uppercase tracking-[4px] text-[10px] mt-1 transition-colors ${
                  scrolled
                    ? "text-slate-500"
                    : "text-white/70"
                }`}
              >
                Language Coach
              </p>

            </motion.div>

            {/* DESKTOP MENU */}

            <div className="hidden lg:flex items-center gap-10">

              {navLinks.map((item) => (

                <Link
                  key={item.id}
                  to={item.id}
                  smooth
                  spy
                  offset={-80}
                  duration={600}
                  onSetActive={() => setActive(item.id)}
                  className="cursor-pointer relative group"
                >

                  <span
                    className={`font-medium transition-all duration-300 ${
                      active === item.id
                        ? "text-[#1D4E89]"
                        : scrolled
                        ? "text-slate-700 hover:text-[#1D4E89]"
                        : "text-white hover:text-[#F4C95D]"
                    }`}
                  >
                    {item.label}
                  </span>

                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-[#F4C95D] transition-all duration-300 ${
                      active === item.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />

                </Link>

              ))}

            </div>

            {/* RIGHT SIDE */}

            <div className="hidden lg:flex items-center gap-4">

              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 border ${
                  scrolled
                    ? "border-slate-300 bg-white text-slate-700 hover:border-[#1D4E89]"
                    : "border-white/20 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20"
                }`}
              >

                <FiGlobe size={17} />

                {language === "es"
                  ? "ES"
                  : "EN"}

              </button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: .98 }}
                className="
                  px-6
                  py-3
                  rounded-full
                  bg-[#1D4E89]
                  text-white
                  font-semibold
                  shadow-xl
                  hover:bg-[#163d70]
                  transition-all
                "
              >
                {language === "es"
                  ? "Book a Lesson"
                  : "Book a Lesson"}
              </motion.button>

            </div>

            {/* MOBILE */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                scrolled
                  ? "bg-white border border-slate-200 text-slate-800"
                  : "bg-white/10 backdrop-blur-xl border border-white/20 text-white"
              }`}
            >
              {menuOpen
                ? <HiX size={28}/>
                : <HiOutlineMenuAlt3 size={28}/>}
            </button>

          </div>

        </div>

      </motion.nav>

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: .35 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
                        <div className="flex flex-col h-full justify-between pt-28 pb-10 px-8">

              {/* TOP */}

              <div>

                <div className="mb-12">

                  <h2 className="text-3xl font-black text-[#1D4E89]">
                    Rachel Pasteur
                  </h2>

                  <p className="uppercase tracking-[4px] text-xs text-slate-500 mt-2">
                    Language Coach
                  </p>

                </div>

                <div className="flex flex-col gap-8">

                  {navLinks.map((item) => (

                    <Link
                      key={item.id}
                      to={item.id}
                      smooth
                      duration={600}
                      offset={-80}
                      onClick={() => {
                        setMenuOpen(false);
                        setActive(item.id);
                      }}
                      className="cursor-pointer"
                    >

                      <motion.div
                        whileTap={{ scale: .96 }}
                        className={`text-2xl font-semibold transition-all ${
                          active === item.id
                            ? "text-[#1D4E89]"
                            : "text-slate-700"
                        }`}
                      >

                        {item.label}

                      </motion.div>

                    </Link>

                  ))}

                </div>

              </div>

              {/* BOTTOM */}

              <div>

                <button
                  onClick={toggleLanguage}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-300
                    py-4
                    flex
                    items-center
                    justify-center
                    gap-3
                    text-slate-700
                    hover:border-[#1D4E89]
                    hover:text-[#1D4E89]
                    transition-all
                  "
                >

                  <FiGlobe size={18}/>

                  {language === "es"
                    ? "Español"
                    : "English"}

                </button>

                <motion.button

                  whileHover={{
                    scale:1.02
                  }}

                  whileTap={{
                    scale:.98
                  }}

                  className="
                    mt-5
                    w-full
                    rounded-2xl
                    bg-[#1D4E89]
                    py-4
                    text-white
                    font-semibold
                    shadow-xl
                    hover:bg-[#163d70]
                    transition-all
                  "
                >

                  {language==="es"
                    ? "Reservar una Clase"
                    : "Book a Lesson"}

                </motion.button>

                <div className="mt-10 border-t border-slate-200 pt-8">

                  <p className="text-center text-slate-400 text-sm">

                    French • English

                  </p>

                  <p className="text-center text-slate-400 text-xs mt-3">

                    Native French Teacher

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