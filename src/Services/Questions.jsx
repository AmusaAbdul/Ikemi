
const Questions = () => {
    const Question = [
        {name: "Bridal party", price: "+#100K per person"},
        {name: "False lash application", price: "+#25K"},
        {name: "Early start (before 6am)", price: "+#60K"}
    ]
  return (
    <div className="bg-custom-taupe flex justify-center p-3">
        <div className="flex flex-col gap-10 mt-10 mb-15">
            <div className="text-center">
                  <p className="text-custom-gold tracking-wider">OFTEN ADDED</p>
                  <h1 className="espresso text-xl tracking-wide">A few things brides ask for</h1>
            </div>
            <div className="bg-custom-taupe-dim">
                {Question.map((q, index) => (
                    <div key={index} className="flex flex-col text-center p-3">
                        <h1 className="espresso tracking-wide text-lg font-bold">{q.name}</h1>
                        <p className="text-custom-gold text-sm tracking-wide">{q.price}</p>
                        <hr className="border-custom-gold border-t my-6" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Questions
