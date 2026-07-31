
const Price = () => {
    const Price = [
        {
            name: "Bridal sitting", 
            content: "Full bridal makeup application on the day, including a pre-scheduled trial session. Touch-up kit left with you or your maid of honor.",
            range: "STARTING AT",
            price: "#300k"
        },
        {
            name: "Studio session",
            content: "On-set makeup for photo or film, including look changes as needed through the day. Rate scales with number of looks and shoot length.",
            range: "STARTING AT",
            price: "#120K"
        },
        {
            name: "Event glam ",
            content: " A standalone event glam trial, perfect for choosing your artist or locking in your look early.",

            range: "FLAT RATE",
            price: "#75K"
        },
        {
            name: "Travel",
            content: "Quoted per event based on distance and any overnight saty required. Included automatically in your consultation.",
            range: "RATE",
            price: "Quoted"
        }
    ]
    return (
        <div className="flex justify-center p-3">
            <div className="flex flex-col gap-10 ">
                <hr className="border-custom-gold border-t my-6" />
                {Price.map((p, index) => (
                    <div className="space-y-1" key={index}>
                        <h1 className="espresso text-2xl">{p.name}</h1>
                        <h1 className="lightGold">{p.content}</h1>
                        <h1 className="text-sm text-custom-taupe">{p.range}</h1>
                        <h1 className="text-custom-gold text-lg">{p.price}</h1>
                    </div>
                ))}
                <hr className="border-custom-gold border-t my-6" />
            </div>
        </div>
    )
}

export default Price
