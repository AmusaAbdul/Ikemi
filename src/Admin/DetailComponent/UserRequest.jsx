const statusLabel = { pending_review: "PENDING REVIEW", held: "HELD", confirmed: "CONFIRMED", declined: "DECLINED" }

const UserRequest = ({ request, onClick }) => {
    return (
        <div onClick={onClick} className="flex justify-between items-center  gap-10 lightGoldBackground hover:bg-custom-taupe-dim p-5 flex-wrap cursor-pointer">
            <span className="">
                <h1 className="text-lg">{request?.full_name}</h1>
                <p className="text-gray-500">{new Date(request.created_at).toLocaleDateString()}</p>
            </span>
            <h1 className="">{request.event_type}</h1>
            <span className="">
                <h1 className="text-lg">{request.preferred_date}</h1>
                <p className="text-gray-500">{request.preferred_time}</p>
            </span>
            <h1 className=" text-sm ">{statusLabel[request.status]}</h1>
            <button>&#9655;</button>

        </div>
    )
}

export default UserRequest