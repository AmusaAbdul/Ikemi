
const Butttons = ({filter, setFilter}) => {

  return (
    
    <div className="flex justify-center mt-12">
          <div className="flex gap-5 justify-center items-center flex-wrap">
            <button onClick={() => setFilter("Bridal")} value={"Bridal"} 
                className={`${filter === "Bridal" ? "border-custom-gold text-custom-gold" : "border-custom-taupe espresso"} border p-3`}>
                BRIDAL
            </button>
            <button onClick={() => setFilter("Studio")} value={"Studio"} 
                  className={`${filter === "Studio" ? "border-custom-gold text-custom-gold" : "border-custom-taupe espresso"} not-first:not-last:border p-3`}>
                STUDIO SESSION
            </button>
            <button onClick={() => setFilter("Event")} value={"Event"}  
                  className={`${filter === "Event" ? "border-custom-gold text-custom-gold" : "border-custom-taupe espresso"} border p-3`}>
                EVENT GLAM
            </button>
        </div>
    </div>
  )
}

export default Butttons
