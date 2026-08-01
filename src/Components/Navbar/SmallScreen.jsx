import { Link } from "react-router-dom"

const SmallScreen = ({isOpen, setIsOpen, handleTouchEnd, handleTouchMove, handleTouchStart, isDragging}) => {
  return (
      <div className="lg:hidden">
          <div className="flex justify-between items-center p-5">
              <h1 className="italic text-2xl text-center font-bold">Ikemi</h1>
              <div onClick={() => setIsOpen(!isOpen)} className="flex flex-col items-end gap-1 cursor-pointer z-1002 w-fit">
                  <div className="h-1 w-6 bg-custom-gold"></div>
                  <div className="h-1 w-5 bg-custom-gold"></div>
                  <div className="h-1 w-4 bg-custom-gold"></div>
              </div>
              {isOpen && (<div className="fixed inset-0 bg-black/50 z-998" onClick={() => setIsOpen(false)} />)}
              <aside className={`${isOpen ? "block" : "hidden"} z-999 p-7 pt-10 text-base fixed top-0 right-0 h-full w-[80%] flex flex-col gap-7 transform transition-transform duration-300 ease-in-out bg-custom-gold`}
                  onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}
                  style={{
                      transform: isOpen
                          ? `translateX(${translateX}px)`
                          : `translateX(-100%)`,
                      transition: isDragging ? "none" : "transform 0.3s ease",
                  }} onClick={() => setIsOpen(false)}

              >
                  <Link onClick={(e) => e.stopPropagation()} to={"/portfolio"} className=" border p-1  text-center cursor-pointer decoration-2 underline-offset-6">PORTFOLIO</Link>
                  <Link onClick={(e) => e.stopPropagation()} to={"/service"} className="border p-1 text-center cursor-pointer decoration-2 underline-offset-6">SERVICES</Link>
                  <Link onClick={(e) => e.stopPropagation()} to={"/contact"} className="border p-1 text-center cursor-pointer decoration-2 underline-offset-6">CONTACT US</Link>
                  <a onClick={(e) => e.stopPropagation()} href="#Bookings" className=" tracking-wide border p-1 text-center cursor-pointer font-bold espresso decoration-custom-gold decoration-2 underline-offset-6">RESERVE A DATE</a>
              </aside>
          </div>
          <hr className="espresso border-t" />
      </div>
  )
}

export default SmallScreen
