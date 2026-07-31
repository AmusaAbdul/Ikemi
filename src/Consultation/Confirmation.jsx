
const Confirmation = ({ form, filter, requestId }) => {
    const statusLink = `${window.location.origin}/status/${requestId}`

    const userRequest = [
        { category: "Event type", value: filter },
        { category: "Preferred date", value: form?.date },
        { category: "Location", value: form?.location },
        { category: "Status", value: "Pending review" }
    ]

    return (
        <div id="requestPage" className="espressoBackground flex justify-center mt-10 p-5">
            <div className="flex flex-col gap-10 justify-center items-center">
                <div className="text-center mt-10">
                    <p className="lightGold tracking-wide text-sm">CONFIRMATION STATE - SHOWN AFTER SUBMIT</p>
                    <hr className="border-custom-gold border-t my-6" />
                </div>
                <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
                    <div className="space-y-4 text-center">
                        <h1 className="text-custom-gold font-bold tracking-wider">IKEMI</h1>
                        <h1 className="text-3xl text-custom-taupe-dim">Your request has been sent</h1>
                        <p className="lightGold tracking-wide">
                            Thank you {form?.name}. Save this link to check your status and replies any time, there's no need to wait for an email.
                        </p>
                        <a href={statusLink} className="text-custom-gold underline break-all block">{statusLink}</a>
                    </div>
                    <div className="lightGold border-2 p-5 w-120 itemSpan WeekSitting font-mono">
                        {userRequest.map((user, index) => (
                            <div key={index}>
                                <span className="flex justify-between gap-5 text-xl font-thin">
                                    <h1 className="text-custom-gold">{user.category}</h1>
                                    <h1 className="text-custom-taupe-dim">{user.value}</h1>
                                </span>
                                <hr className="border-custom-taupe border-t my-6" />
                            </div>
                        ))}
                    </div>
                </div>
                <button className="p-2 text-center mt-5 text-sm tracking-wider bg-custom-burgundy text-white">NOT YET CONFIRMED</button>
            </div>
        </div>
    )
}

export default Confirmation
