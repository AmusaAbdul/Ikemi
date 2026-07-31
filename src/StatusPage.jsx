import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const statusLabel = { pending_review: "PENDING REVIEW", held: "HELD", confirmed: "CONFIRMED", declined: "DECLINED" }

const StatusPage = () => {
    const { id } = useParams()
    const [request, setRequest] = useState(null)
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    const [reply, setReply] = useState("")
    const [imageFile, setImageFile] = useState(null)
    const [sending, setSending] = useState(false)

    const fetchRequest = () => {
        fetch(`http://localhost:3001/api/requests/${id}`)
            .then(res => { if (!res.ok) throw new Error(); return res.json() })
            .then(data => { setRequest(data); setLoading(false) })
            .catch(() => { setNotFound(true); setLoading(false) })
    }

    useEffect(() => { fetchRequest() }, [id])

    const handleReply = async (e) => {
        e.preventDefault()
        if (!reply.trim() && !imageFile) return
        setSending(true)

        const formData = new FormData()
        formData.append('message', reply)
        if (imageFile) formData.append('image', imageFile)

        try {
            const res = await fetch(`http://localhost:3001/api/requests/${id}/message`, {
                method: 'POST',
                body: formData, // no Content-Type header — the browser sets it automatically with the correct boundary
            })
            if (res.ok) {
                setReply("")
                setImageFile(null)
                fetchRequest()
            }
        } finally {
            setSending(false)
        }
    }
    if (loading) return <p className="text-center p-10">Loading your request...</p>
    if (notFound) return <p className="text-center p-10">We couldn't find a request with that link.</p>

    

    return (
        <div className="espressoBackground p-5 flex flex-col items-center gap-8 itemSpan WeekSitting">
            <h1 className="text-custom-gold text-2xl">Your consultation request</h1>
            <div className="lightGold border-2 p-5 w-120 font-mono itemSpan WeekSitting">
                <div className="flex justify-between"><span className="text-custom-gold">Name</span><span>{request.full_name}</span></div>
                <hr className="border-custom-taupe my-4" />
                <div className="flex justify-between"><span className="text-custom-gold">Status</span><span>{statusLabel[request.status]}</span></div>
            </div>

            <div className="w-120 itemSpan WeekSitting">
                <h2 className="text-custom-gold mb-3">Conversation</h2>
                {(!request.request_messages || request.request_messages.length === 0) && (
                    <p className="text-custom-taupe text-sm">No messages yet.</p>
                )}
                {request.request_messages?.map(msg => (
                    <div key={msg.id} className={`mb-4 flex flex-col ${msg.sender === 'admin' ? 'items-start' : 'items-end'}`}>
                        <p className="text-custom-gold text-xs">{msg.sender === 'admin' ? 'Ikemi' : 'You'} · {new Date(msg.created_at).toLocaleString()}</p>
                        {msg.body && <p className="text-custom-taupe-dim">{msg.body}</p>}
                        {msg.image_url && <img src={msg.image_url} alt="Attachment" className=" max-w-xs mt-2 border border-custom-taupe w-40 h-40 object-cover mt-2 rounded-md border" />} 
                    </div>
                ))}
            </div>

            <form onSubmit={handleReply} className="w-120 flex flex-col gap-3 itemSpan WeekSitting">
                <div className="border border-custom-taupe p-2 flex flex-col gap-2 rounded-md">
                    <textarea
                        value={reply}
                        onChange={e => setReply(e.target.value)}
                        className="w-full text-custom-taupe-dim h-20 resize-none bg-transparent focus:outline-none"
                        placeholder="Send a message..."
                    ></textarea>

                    <div className="flex items-center justify-between border-t border-custom-taupe/30 pt-2">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={e => setImageFile(e.target.files[0])}
                            className="cursor-pointer text-custom-taupe-dim text-xs file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-xs file:bg-custom-gold/20 file:text-custom-gold"
                        />
                        {imageFile && (
                            <p className="text-custom-gold text-xs truncate max-w-37.5">
                                Attached: {imageFile.name}
                            </p>
                        )}
                    </div>
                </div>
                <button type="submit" disabled={sending} className="bg-custom-gold p-2 text-sm">
                    {sending ? "SENDING..." : "SEND MESSAGE"}
                </button>
            </form>
        </div>
    )
}

export default StatusPage

