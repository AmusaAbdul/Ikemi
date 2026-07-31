import { useState, useEffect } from "react"
import Header from "./Admin/Header"
import Details from "./Admin/Details"

const AdminPage = () => {
    const [filter, setFilter] = useState("All")
    const [requests, setRequests] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedId, setSelectedId] = useState(requests[0]?.id)

    useEffect(() => {
        fetch('http://localhost:3001/api/requests')
            .then(res => res.json())
            .then(data => { setRequests(data); setLoading(false) })
            .catch((err) => { console.error('Fetch failed:', err); setLoading(false) })
    }, [])

    const updateRequest = (id, updates) => {
        setRequests(prev => prev.map(r => r.id === id ? { ...r, ...updates } : r))
    }

    const requestLength = requests.length
    const pendingCount = requests.filter(r => r.status === "pending_review").length;
    const heldCount = requests.filter(r => r.status === "held").length;
    const confirmedCount = requests.filter(r => r.status === "confirmed").length;
    const declinedCount = requests.filter(r => r.status === "declined").length;

    const deleteRequest = async (id) => {
        try {
            const res = await fetch(`http://localhost:3001/api/requests/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                setRequests(prev => prev.filter(r => r.id !== id));
            }
        } catch (err) {
            console.error('Delete failed:', err);
        }
    };
    return (
        <>
            <Header filter={filter} setFilter={setFilter} heldCount={heldCount} confirmedCount={confirmedCount}
            requestLength={requestLength} pendingCount={pendingCount} declinedCount={declinedCount}
            />
            {loading
                ? <p className="text-center p-10">Loading requests...</p>
                : <Details requests={requests} filter={filter} deleteRequest={deleteRequest} selectedId={selectedId} setSelectedId={setSelectedId} updateRequest={updateRequest} />}
        </>
    )
}

export default AdminPage