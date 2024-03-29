import { useState, useEffect } from "react";
import { isOpenMenu, toggleMenu } from "../menuStore.js";

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(isOpenMenu.get());

  useEffect(() => {
    const unsubscribe = isOpenMenu.subscribe(setIsOpen);
    return () => unsubscribe();
  }, []);
  return (
    <div className="relative">
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-[#68afc4] text-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <button
          onClick={() => isOpenMenu.set(!isOpen)}
          className={`absolute tracking-widest font-extrabold text-xl hover:text-2xl top-1/2 left-4 z-50 rotate-90 transform -translate-x-full transition-transform duration-500 ease-in-out ${
            isOpen ? "hidden" : "block"
          }`}
        >
          MENÚ
        </button>
        <div className="relative flex items-center justify-between p-4 border-b border-gray-600">
          <h2 className="text-lg font-bold tracking-widest uppercase">
            Menú de Comidas
          </h2>
          <button
            onClick={() => toggleMenu()}
            className="text-white text-4xl hover:text-[#a23f49] absolute top-0 right-2"
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-col">
          <a href="#" className="p-4 hover:text-[#a23f49]">
            Sándwiches de Lomito
          </a>
          <a href="#" className="p-4 hover:text-[#a23f49]">
            Hamburguesas
          </a>
          <a href="#" className="p-4 hover:text-[#a23f49]">
            Mollejas
          </a>
          <a href="#" className="p-4 hover:text-[#a23f49]">
            Milanesas
          </a>
          <a href="#" className="p-4 hover:text-[#a23f49]">
            Pizzas
          </a>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => isOpenMenu.set(!isOpen)}
        ></div>
      )}
    </div>
  );
}
