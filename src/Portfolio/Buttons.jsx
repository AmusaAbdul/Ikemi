const Butttons = ({ filter, setFilter }) => {

    return (
        <div className="flex justify-center mt-12">
            <div className="flex gap-5 justify-center items-center flex-wrap">
                <button onClick={() => setFilter("All")} value={"All"}
                    className={`${filter === "All" ? "underline decoration-custom-gold decoration-2 underline-offset-6 espresso" : "lightGold"}`}>
                    All
                </button>
                <button onClick={() => setFilter("Bridal")} value={"Bridal"}
                    className={`${filter === "Bridal" ? "underline decoration-custom-gold decoration-2 underline-offset-6 espresso" : "lightGold"}`}>
                    BRIDAL
                </button>
                <button onClick={() => setFilter("Studio")} value={"Studio"}
                    className={`${filter === "Studio" ? "underline decoration-custom-gold decoration-2 underline-offset-6 espresso" : "lightGold"} `}>
                    STUDIO SESSION
                </button>
                <button onClick={() => setFilter("Event")} value={"Event"}
                    className={`${filter === "Event" ? "underline decoration-custom-gold decoration-2 underline-offset-6 espresso" : "lightGold"} `}>
                    EVENTS GLAM
                </button>
            </div>
        </div>
    )
}

export default Butttons
