import { Link } from "react-router-dom"

const LargeScreen = () => {
  return (
      <div className="hidden lg:flex flex-col">
          <div className="hidden lg:flex espresso justify-between items-center p-5 sm:p-7 text-sm">
              <span className="flex gap-10 justify-center items-center">
                  <Link to={"/portfolio"} className="underline decoration-custom-gold decoration-2 underline-offset-6">PORTFOLIO</Link>
                  <Link to={"/service"} className="underline decoration-custom-gold decoration-2 underline-offset-6">SERVICES</Link>
              </span>
              <h1 className="italic text-2xl text-center font-bold">Ikemi</h1>
              <span className="flex gap-10 justify-center items-center">
                  <a href="#Bookings" className="underline tracking-wide font-bold espresso decoration-custom-gold decoration-2 underline-offset-6">RESERVE A DATE</a>
              </span>
          </div>
          <hr className="espresso border-t" />
      </div>
  )
}

export default LargeScreen
