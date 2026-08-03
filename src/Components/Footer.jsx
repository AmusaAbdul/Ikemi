import { Link } from "react-router-dom"
const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className="bg-custom-biege flex justify-center mt-10 p-5">
      <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
        <div className="space-y-5 flex flex-col font-bold justify-center items-center tracking-wide">
          <h1 className="text-xl lightGold italic text-center">Ikemi <span className="text-lg">©{year}</span> </h1>
          <p className="text-lg lightGold flex flex-wrap gap-2 justify-center uppercase items-center">
            <span className="text-center">IKEMI</span>
            <span className={`h-2 w-2 rounded-full lightGoldBackground`}></span>
            <span className="text-center">MAKEUP ARTIST</span>
            <span className={`h-2 w-2 rounded-full lightGoldBackground`}></span>
            <span className="text-center">Egbeda | Ikotun | Ikeja, Lagos</span>
          </p>
          <Link to={"/contact"} className="underline decoration-custom-gold decoration-2 underline-offset-6">CONTACT US</Link>
          <h1 className="espresso">BUILT BY <a className=" lightGold underline decoration-custom-gold decoration-2 underline-offset-6" href={"https://wa.me/23408156345656"}>ABDULLAH</a></h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
