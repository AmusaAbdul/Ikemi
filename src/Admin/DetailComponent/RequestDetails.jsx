import { useState, useEffect } from "react"

const RequestDetails = ({ request, updateRequest, deleteRequest }) => {
    const [reply, setReply] = useState("")
    const [newStatus, setNewStatus] = useState(request.status)
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)
    const [messages, setMessages] = useState([])

    const fetchMessages = () => {
        fetch(`http://localhost:3001/api/requests/${request.id}`)
            .then(res => res.json())
            .then(data => setMessages(data.request_messages || []))
    }

    useEffect(() => { fetchMessages() }, [request.id])

    const userRequest = [
        { category: "Event type", value: request.event_type },
        { category: "Preferred date", value: request.preferred_date },
        { category: "Location", value: request.location },
        { category: "Status", value: request.status },
        { category: "Message", value: request.notes },
    ]

    const handleReply = async (e) => {
        e.preventDefault()
        if (!reply.trim()) return
        setSending(true)
        setSent(false)
        try {
            const res = await fetch(`http://localhost:3001/api/requests/${request.id}/reply`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: reply, newStatus }),
            })
            if (res.ok) {
                updateRequest(request.id, { status: newStatus })
                setReply("")
                setSent(true)
                fetchMessages() // pull the real, updated thread
                setTimeout(() => setSent(false), 3000)
            }
        } finally {
            setSending(false)
        }
    }

    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this request?");
        if (confirmDelete) {
            deleteRequest(request.id);
        }
    }
        
    

    return (
        <>
            <div className="space-y-3 itemSpan WeekSitting  reply-width">
                <h1 className="text-custom-gold font-bold">REQUEST DETAILS</h1>
                <div className="lightGold w-120 itemSpan WeekSitting reply-width">
                    {userRequest.map((u, i) => (
                        <div key={i}>
                            <span className="flex justify-between gap-2">
                                <h1 className="text-custom-taupe">{u.category}</h1>
                                <h1 className="text-custom-taupe-dim">{u.value}</h1>
                            </span>
                            <hr className="border-custom-taupe border-t my-6" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-3 itemSpan WeekSitting reply-width">
                <h1 className="text-custom-gold">SEND A REPLY</h1>
                <textarea value={reply} onChange={e => setReply(e.target.value)} className="h-30 w-120 border text-custom-taupe-dim p-1 border-custom-taupe itemSpan WeekSitting reply-width"></textarea>
                <div className="flex gap-5 flex-wrap justify-center itemSpan WeekSitting reply-width">
                    <select value={newStatus} onChange={e => setNewStatus(e.target.value)} className="border itemSpan WeekSitting text-sm border-custom-taupe-dim espressoBackground text-custom-taupe-dim p-1">
                        <option value="pending_review">KEEP: PENDING</option>
                        <option value="held">UPDATE TO HELD</option>
                        <option value="confirmed">UPDATE TO CONFIRMED</option>
                        <option value="declined">UPDATE TO DECLINED</option>
                    </select>
                    <button type="button" disabled={sending} onClick={handleReply} className="p-2 bg-custom-gold w-40 itemSpan WeekSitting text-sm">
                        {sending ? "SENDING..." : "SEND REPLY"}
                    </button>
                </div>
                {sent && <p className="text-custom-gold text-sm mt-2">Reply sent successfully.</p>}
            </div>

            <div className="space-y-1">
                <h1 className="text-custom-gold">CORRESPONDENCE</h1>
                {messages.length === 0 && <p className="text-custom-taupe text-sm">No messages yet.</p>}
                {messages.map((m) => (
                    <div key={m.id} className="mb-3">
                        <h1 className="text-custom-gold text-sm">{m.sender === 'admin' ? 'YOU' : 'CLIENT'} · {new Date(m.created_at).toLocaleTimeString()}</h1>
                        <span className="w-120">
                            <h1 className="text-custom-taupe itemSpan WeekSitting reply-width">{m.body}</h1>
                        </span>
                        {m.image_url && (
                            <img
                                src={m.image_url}
                                alt="attachment"
                                className="mt-2 w-40 h-40 object-cover rounded-md border"
                            />
                        )}
                    </div>
                ))}
            </div>
            <button onClick={handleDelete} type="button" className="bg-red-500 text-sm p-2 text-white">Delete</button>

        </>
    )
}

export default RequestDetails