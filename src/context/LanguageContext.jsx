import {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";

const LanguageContext = createContext(null);

const DEFAULT_LANGUAGE = "es";

const AVAILABLE_LANGUAGES = [
  {
    code: "es",
    label: "Español",
    short: "ES",
    flag: "🇪🇸",
  },
  {
    code: "en",
    label: "English",
    short: "EN",
    flag: "🇺🇸",
  },
  {
    code: "fr",
    label: "Français",
    short: "FR",
    flag: "🇫🇷",
  },
];

export function LanguageProvider({ children }) {

  const [language, setLanguageState] = useState(() => {

    const saved = localStorage.getItem("language");

    if (
      saved &&
      AVAILABLE_LANGUAGES.some((item) => item.code === saved)
    ) {
      return saved;
    }

    return DEFAULT_LANGUAGE;

  });

  useEffect(() => {

    localStorage.setItem("language", language);

  }, [language]);

  const setLanguage = (code) => {

    if (
      AVAILABLE_LANGUAGES.some((item) => item.code === code)
    ) {
      setLanguageState(code);
    }

  };

  const currentLanguage =
    AVAILABLE_LANGUAGES.find(
      (item) => item.code === language
    ) || AVAILABLE_LANGUAGES[0];

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      languages: AVAILABLE_LANGUAGES,
      currentLanguage,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );

}

export function useLanguage() {

  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage debe utilizarse dentro de LanguageProvider"
    );
  }

  return context;

}