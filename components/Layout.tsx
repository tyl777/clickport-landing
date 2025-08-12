import Link from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/router";

// Иконки
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import ReactCountryFlag from "react-country-flag";

type LayoutProps = {
  children: ReactNode;
  lang: "ru" | "en" | "kk";
};

export default function Layout({ children, lang }: LayoutProps) {
  const router = useRouter();
  const path = router.pathname;

  // Получаем путь для переключения языка
  const getLangPath = (targetLang: "ru" | "en" | "kk") => {
    if (targetLang === "ru") {
      if (path.startsWith("/about")) return "/about";
      if (path.startsWith("/about-en")) return "/about";
      if (path.startsWith("/about-kk")) return "/about";
      if (path === "/en" || path === "/kk") return "/";
      return "/";
    }
    if (targetLang === "en") {
      if (path.startsWith("/about")) return "/about-en";
      if (path.startsWith("/about-kk")) return "/about-en";
      if (path === "/" || path === "/kk") return "/en";
      return "/en";
    }
    if (targetLang === "kk") {
      if (path.startsWith("/about")) return "/about-kk";
      if (path.startsWith("/about-en")) return "/about-kk";
      if (path === "/" || path === "/en") return "/kk";
      return "/kk";
    }
    return "/";
  };

  // Главная
  const getHomePath = () => {
    if (lang === "ru") return "/";
    if (lang === "en") return "/en";
    if (lang === "kk") return "/kk";
    return "/";
  };

  const getHomeLabel = () => {
    if (lang === "ru") return "Главная";
    if (lang === "en") return "Home";
    if (lang === "kk") return "Басты бет";
    return "Главная";
  };

  const getAboutLabel = () => {
    if (lang === "ru") return "О нас";
    if (lang === "en") return "About";
    if (lang === "kk") return "Біз туралы";
    return "О нас";
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <GiWorld className="text-2xl" /> ClickPort
        </h1>
        <nav className="flex gap-6 items-center">
          {/* Главная */}
          <Link href={getHomePath()} className="flex items-center gap-1 hover:text-gray-300">
            <FaHome /> {getHomeLabel()}
          </Link>

          {/* О нас */}
          {lang === "ru" && (
            <Link href="/about" className="flex items-center gap-1 hover:text-gray-300">
              <FaInfoCircle /> {getAboutLabel()}
            </Link>
          )}
          {lang === "en" && (
            <Link href="/about-en" className="flex items-center gap-1 hover:text-gray-300">
              <FaInfoCircle /> {getAboutLabel()}
            </Link>
          )}
          {lang === "kk" && (
            <Link href="/about-kk" className="flex items-center gap-1 hover:text-gray-300">
              <FaInfoCircle /> {getAboutLabel()}
            </Link>
          )}

          {/* Языки с флагами */}
          <Link href={getLangPath("ru")} className="flex items-center gap-1 hover:text-gray-300">
            <ReactCountryFlag countryCode="RU" svg style={{ width: "1.5em", height: "1.5em" }} /> RU
          </Link>
          <Link href={getLangPath("en")} className="flex items-center gap-1 hover:text-gray-300">
            <ReactCountryFlag countryCode="US" svg style={{ width: "1.5em", height: "1.5em" }} /> EN
          </Link>
          <Link href={getLangPath("kk")} className="flex items-center gap-1 hover:text-gray-300">
            <ReactCountryFlag countryCode="KZ" svg style={{ width: "1.5em", height: "1.5em" }} /> KK
          </Link>
        </nav>
      </header>

      {/* Page content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center mt-12">
        {lang === "ru" && <p>© 2025 Clickport.link — Мастерская ИИ Коммуникаций</p>}
        {lang === "en" && <p>© 2025 Clickport.link — AI Communications Studio</p>}
        {lang === "kk" && <p>© 2025 Clickport.link — ЖИ Коммуникациялар Студиясы</p>}
      </footer>
    </div>
  );
}
