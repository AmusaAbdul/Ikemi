
const Event = ({ filter, hover, setHover }) => {
    const firstSize = {
        large: "itemSpan h-105 w-125 border border-custom-gold p-2 flex justify-center items-center",
        medium: "itemSpan h-100 w-120 border border-custom-taupe p-2 flex justify-center items-center",
        small: "itemSpan h-95 w-115 bg-custom-taupe-dim"
    }
    const secondSize = {
        large: "itemSpan h-55 w-125 border border-custom-gold p-2 flex justify-center items-center",
        medium: "itemSpan h-50 w-120 border border-custom-taupe p-2 flex justify-center items-center",
        small: "itemSpan h-45 w-115 bg-custom-taupe"
    }
    const thirdSize = {
        large: "itemSpan h-50 w-50 border border-custom-gold p-2 flex justify-center items-center",
        medium: "itemSpan h-45 w-45 border border-custom-taupe p-2 flex justify-center items-center",
        small: "itemSpan h-40 w-40 bg-custom-taupe-dim"
    }

    const Event = [
        { id: 1, type: "Bridal", firstSize: firstSize.large, secondSize: firstSize.medium, thirdSize: firstSize.small },
        { id: 2, type: "Studio", firstSize: secondSize.large, secondSize: secondSize.medium, thirdSize: secondSize.small },
        { id: 3, type: "Event", firstSize: thirdSize.large, secondSize: thirdSize.medium, thirdSize: thirdSize.small },
        { id: 4, type: "Bridal", firstSize: thirdSize.large, secondSize: thirdSize.medium, thirdSize: thirdSize.small },
        { id: 5, type: "Studio", firstSize: firstSize.large, secondSize: firstSize.medium, thirdSize: firstSize.small },
        { id: 6, type: "Event", firstSize: secondSize.large, secondSize: secondSize.medium, thirdSize: secondSize.small },
        { id: 7, type: "Bridal", firstSize: secondSize.large, secondSize: secondSize.medium, thirdSize: secondSize.small },
        { id: 8, type: "Studio", firstSize: thirdSize.large, secondSize: thirdSize.medium, thirdSize: thirdSize.small },
        { id: 9, type: "Event", firstSize: firstSize.large, secondSize: firstSize.medium, thirdSize: firstSize.small }
    ]

    const filteredEvent =
        filter === "All"
            ? Event
            : Event.filter(p => p.type === filter)

    return (
        <div className="WeekSitting flex flex-col w-full sm:flex-row gap-10 justify-center items-center itemSpan mt-10 p-5">
            <div className="itemSpan flex justify-between items-center flex-wrap gap-5">
                {filteredEvent.map((p) => (
                    <div key={p.id} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} className="itemSpan flex  items-center flex-col gap-1">
                        <div className={`${p.firstSize}`} >
                            <div className={`${p.secondSize}`}>
                                <div className={`${p.thirdSize}`}></div>
                            </div>
                        </div>
                        <p className={`${filter == "Bridal" ? "hidden" : ""} ${filter == "Studio" ? "hidden" : ""} ${filter == "Event" ? "hidden" : ""} ${hover ? "text-center uppercase p-2  mt-5 text-sm bg-custom-burgundy text-white" : ""}`}>{hover ? p.type : ""}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Event


