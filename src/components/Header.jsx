import { useState, useEffect } from "react";
import { toggleMenu } from "../menuStore.js";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  let lastScrollY = window.scrollY;
  const width = window.innerWidth;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (width < 768) {
        if (currentScrollY > lastScrollY) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
      } else {
        setShowHeader(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 md:top-3 left-1/2 mx-auto px-4 max-w-7xl w-full bg-[#68afc4] z-30 transform -translate-x-1/2 ${
        showHeader ? "" : "-translate-y-full"
      }`}
      style={{ "max-width": "1250px" }}
    >
      <div className="flex justify-between items-center py-3">
        <div className="text-white text-lg font-extrabold tracking-widest">
          CARRITO ABILU
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-[#a23f49] font-bold">
            NOSOTROS
          </a>
          <a
            href="#"
            className="text-white hover:text-[#a23f49] font-bold"
            onClick={toggleMenu}
          >
            MENU
          </a>
          <a
            href="https://maps.app.goo.gl/7VFFitJdzjDQzLC28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#a23f49] font-bold"
          >
            UBICACION
          </a>
          <a href="#" className="text-white hover:text-[#a23f49] font-bold">
            CONTACTO
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={handleToggle}
            className="text-white focus:outline-none focus:text-blue-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:hidden bg-[#68afc4] pb-3`}
      >
        <a
          href="#"
          className="text-white hover:text-[#a23f49] font-bold py-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          NOSOTROS
        </a>
        <a
          href="#"
          className="text-white hover:text-[#a23f49] font-bold py-2"
          onClick={() => {
            setIsOpen(!isOpen);
            toggleMenu();
          }}
        >
          MENU
        </a>
        <a
          href="https://maps.app.goo.gl/7VFFitJdzjDQzLC28"
          className="text-white hover:text-[#a23f49] font-bold py-2"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(!isOpen)}
        >
          UBICACION
        </a>
        <a
          href="#"
          className="text-white hover:text-[#a23f49] font-bold py-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          CONTACTO
        </a>
      </div>
    </header>
  );
}
