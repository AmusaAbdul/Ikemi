
const Header = ({ filter, setFilter, requestLength, pendingCount, heldCount, confirmedCount, declinedCount }) => {
    return (
        <div className="p-3 sm:p-10">
            <div className=" WeekSitting w-full flex flex-col sm:flex-row gap-5 justify-between items-center itemSpan">
                <h1 className="espresso text-2xl">Consultation requests</h1>
                <span className="flex gap-3 flex-wrap">
                    <div className="flex gap-5 justify-center items-center flex-wrap text-base">
                        <button onClick={() => setFilter("All")} value={"All"}
                            className={`${filter === "All" ? "underline decoration-custom-gold decoration-2 underline-offset-6 espresso" : "lightGold"}`}>
                            All{"(" + requestLength  + ")"}
                        </button>
                        <button onClick={() => setFilter("Pending")} value={"Pending"}
                            className={`${filter === "Pending" ? "underline decoration-custom-gold decoration-2 underline-offset-6 espresso" : "lightGold"}`}>
                            PENDING{"(" + pendingCount + ")"}
                        </button>
                        <button onClick={() => setFilter("Held")} value={"Held"}
                            className={`${filter === "Held" ? "underline decoration-custom-gold decoration-2 underline-offset-6 espresso" : "lightGold"} `}>
                            HELD{"(" + heldCount + ")"}
                        </button>
                        <button onClick={() => setFilter("Confirmed")} value={"Confirmed"}
                            className={`${filter === "Confirmed" ? "underline decoration-custom-gold decoration-2 underline-offset-6 espresso" : "lightGold"} `}>
                            CONFIRMED{"(" + confirmedCount + ")"}
                        </button>
                        <button onClick={() => setFilter("Declined")} value={"Declined"}
                            className={`${filter === "Declined" ? "underline decoration-custom-gold decoration-2 underline-offset-6 espresso" : "lightGold"} `}>
                            DECLINED{"(" + declinedCount + ")"}
                        </button>
                    </div>
                </span>
            </div>
            <hr className="border-custom-gold border-t my-6" />
        </div>
    )
}

export default Header
