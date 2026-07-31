import {Link} from "react-router-dom"

const Bookings = () => {
    const service = [
        {id: 1, name: "Bridal sitting", price: "from #300k"},
        {id: 2, name: "Studio session", price: "from #120k" },
        {id: 3, name: "Event glam", price: "#75k" },
        {id: 4, name: "Travel", price: "quoted" }
    ]
  return (
    <div id="Bookings" className="espressoBackground flex justify-center mt-20 p-5">
        <div className="flex flex-col sm:flex-row gap-10 justify-center items-center ">
            <div className="space-y-5">
                <p className="text-custom-gold tracking-wider">RESERVE A DATE</p>
                <h1 className="text-4xl text-custom-taupe-dim">A limited number of sittings, each season.</h1>
                  <p className="lightGold tracking-wide">Consultations happen first, always. Once a date is held, it's only for you</p>
                  <Link to={"/consult"} onClick={() => window.scrollTo(0, 0)} className="underline mt-10 mb-5 tracking-wider text-custom-taupe-dim  decoration-custom-gold decoration-2 underline-offset-6">
                      START A CONSULTATION
                  </Link>
            </div>
            <div className="lightGold border-2 p-3 w-120 itemSpan WeekSitting font-mono">
                {service.map((serv) => (
                    <div key={serv.id}>
                    <span className="flex justify-between gap-5 text-lg font-thin ">
                        <h1 className="text-custom-taupe-dim">{serv.name}</h1>
                        <h1 className="text-custom-gold">{serv.price}</h1>
                    </span>
                    <hr className="border-custom-taupe border-t my-6" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Bookings
