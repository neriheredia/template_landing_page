import { useState, useEffect } from "react";
import { isOpenMenu, toggleMenu } from "../menuStore.js";
import ProductCard from "./ProductCard.jsx";

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(isOpenMenu.get());

  const menuCooks = [
    {
      id: 1,
      title: "Sándwiches de Lomito",
      imageUrl: "./lomito.jpeg",
      description: "Sandwich de lomito con lechuga, tomate y mayonesa",
    },
    {
      id: 2,
      title: "Sándwiches de Milanesa",
      imageUrl: "./mila.jpeg",
      description:
        "Sandwich de milanesa de lomo con lechuga, tomate y mayonesa.",
    },
    {
      id: 3,
      title: "Hamburguesa",
      imageUrl: "./hamburguesa.jpeg",
      description: "Sandwich de hamburguesa con lechuga, tomate y mayonesa.",
    },
    {
      id: 4,
      title: "Molleja",
      imageUrl: "./molleja.jpeg",
      description: "Sandwich de molleja con lechuga, tomate y mayonesa",
    },
    {
      id: 5,
      title: "Pizzas",
      imageUrl: "./pizza.jpeg",
      description: "Pizza de jamón y morrones",
    },
  ];

  useEffect(() => {
    const unsubscribe = isOpenMenu.subscribe(setIsOpen);
    return () => unsubscribe();
  }, []);

  return (
    <div className="relative">
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => toggleMenu()}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-[#52a9c4] text-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => toggleMenu()}
          className="text-white text-4xl hover:text-[#a23f49] absolute top-0 right-2"
        >
          &times;
        </button>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-600">
            <h2 className="text-lg font-bold tracking-widest uppercase">
              Menú de Comidas
            </h2>
          </div>

          {/* Área desplazable para los ProductCard */}
          <div className="overflow-y-scroll">
            {menuCooks.map((item) => (
              <ProductCard
                key={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <button
          onClick={() => isOpenMenu.set(!isOpen)}
          className={`absolute top-1/2 left-5 transform -translate-y-1/2 -translate-x-full z-50 transition-transform duration-500 ease-in-out ${
            isOpen ? "hidden" : "block"
          } tracking-widest font-extrabold text-xl hover:text-2xl rotate-90`}
        >
          MENÚ
        </button>
      </div>
    </div>
  );
}
