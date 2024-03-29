import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
return (
  <header className="fixed top-6 left-1/2 mx-auto px-4 max-w-7xl w-full bg-[#68afc4] z-50 transform -translate-x-1/2" style={{"max-width": '1250px'}}>
    <div className="flex justify-between items-center py-3">
      <div className="text-white text-lg font-extrabold tracking-widest">CARRITO ABILU</div>
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-white hover:text-[#a23f49] font-bold">HOME</a>
        <a href="#" className="text-white hover:text-[#a23f49] font-bold">MENU</a>
        <a href="#" className="text-white hover:text-[#a23f49] font-bold">ABOUT US</a>
        <a href="#" className="text-white hover:text-[#a23f49] font-bold">CONTACT US</a>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={handleToggle} className="text-white focus:outline-none focus:text-blue-300">
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
              d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>
      </div>   
    </div>
    <div className={`${isOpen ? 'flex' : 'hidden'} flex-col md:hidden bg-[#68afc4] pb-3`}>
          <a href="#" className="text-white hover:text-[#a23f49] font-bold py-2">HOME</a>
          <a href="#" className="text-white hover:text-[#a23f49] font-bold py-2">MENU</a>
          <a href="#" className="text-white hover:text-[#a23f49] font-bold py-2">ABOUT US</a>
          <a href="#" className="text-white hover:text-[#a23f49] font-bold py-2">CONTACT US</a>
        </div>
  </header>
)
}