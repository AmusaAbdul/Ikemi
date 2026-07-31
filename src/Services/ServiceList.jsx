
const ServiceList = () => {
    const List = [
        {
            id: "01", type: "Consultation",
            content: "A short call or in-person meeting to talk through your day, your skin, and what 'you, but rested' actually looks like"
        },
        {
            id: "02", type: "Trail",
            content: "One full look, tested weeks ahead, refined until it's right, not just approved on the day"
        },
        {
            id: "03", type: "The day itself",
            content: "I arrive early. work quietly, and stay close enough for a midday touch-up if you need one"
        }
    ]
    return (
        <div className="flex justify-center p-3">
            <div className="flex flex-col gap-10 ">
                {List.map((l, index) => (
                    <div className="space-y-1" key={index}>
                        <h1 className="italic text-custom-gold text-4xl">{l.id}</h1>
                        <h1 className="text-2xl expresso">{l.type}</h1>
                        <h1 className="text-xl lightGold">{l.content}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServiceList
