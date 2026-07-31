
// const UserRequest = ({filter, form}) => {
//   return (
//       <div className="flex justify-between  gap-5  hover:bg-custom-taupe p-5 flex-wrap">
//           <span className="bg-custom-taupe p-2">
//               <h1 className="text-lg">{form?.name} JOHN DOE</h1>
//               <p className="text-gray-500">Submitted 2 hours ago</p>
//           </span>
//           <h1 className="bg-custom-taupe p-2">{filter}</h1>
//           <h1 className="bg-custom-taupe p-2">{form?.date} 14, 0ct, 2026</h1>
//           <button className="p-1 bg-custom-taupe border text-sm border-custom-taupe">PENDING REVIEW</button>
//       </div>
//   )
// }

// export default UserRequest


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