
const Contact = () => {
    const Contact = [
        {type: "EMAIL", name: "ikemi@gmail.com", note: "Usual reply time: 1-2 business days"},
        {type: "INSTAGRAM", name: "ikemi_concept", note: "Most recent work posted here first"},
        {type: "BASED IN", name: "Egbeda | Ikotun | Ikeja, Lagos", note: "Travels for editorial and destination bridal work"},
        {type: "PRESS & PARTNERSHIPS", name: "ikemi@gmail.com", note: "Please include publication aand timeline"}
    ]
  return (
      <div className="flex justify-center p-5 mt-15">
          <div className="flex justify-between gap-10 flex-wrap ">
              {Contact.map((c, index) => (
                  <div className="space-y-1" key={index}>
                      <h1 className=" text-custom-gold font-bold tracking-wider">{c.type}</h1>
                      <h1 className="text-xl expresso">{c.name}</h1>
                      <h1 className="lightGold">{c.note}</h1>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default Contact
