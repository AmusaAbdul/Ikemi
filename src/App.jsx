import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState, useEffect } from 'react'
import RoutePages from "./RoutePages"
import Consultation from "./Consultation"
import ServicePage from "./ServicePage"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import AdminPage from "./AdminPage"
import StatusPage from "./StatusPage"

function App() {
  const [state, setState] = useState({ submitting: false, succeeded: false, errors: null })
  const [filter, setFilter] = useState(() => {
    return localStorage.getItem("filter") || ""
  })

  useEffect(() => {
    localStorage.setItem("filter", filter)
  }, [filter])

  useEffect(() => {
    if (state.succeeded) {
      localStorage.removeItem("filter")
    }
  }, [state.succeeded])

  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem("form")
    return saved ? JSON.parse(saved) : {
      name: "",
      email: "",
      date: "",
      time: "",
      location: "",
      info: "",
    }
  })

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(form))
  }, [form])

  useEffect(() => {
    if (state.succeeded) {
      localStorage.removeItem("form")
    }
  }, [state.succeeded])

  const handleForm = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const [submittedData, setSubmittedData] = useState(null)
  const [requestId, setRequestId] = useState(null)

  const getFriendlyError = (rawError) => {
    if (!rawError) return 'Something went wrong. Please try again.'
    const msg = rawError.toLowerCase()

    if (msg.includes('event_type') || msg.includes('invalid input value for enum')) {
      return 'Please select an event type.'
    }
    if (msg.includes('email')) {
      return 'Please enter a valid email address.'
    }
    if (msg.includes('full_name') || msg.includes('null value')) {
      return 'Please fill in your name .'
    }
    if (msg.includes('preferred_date') || msg.includes('null value')) {
      return 'Please fill in the date.'
    }
    if (msg.includes('preferred_time') || msg.includes('null value')) {
      return 'Please fill in the date.'
    }
    return 'Something went wrong. Please try again.'
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    if (!filter) {
      setState({ submitting: false, succeeded: false, errors: 'Please select an event type.' })
      return
    }
   
    setSubmittedData(form)
    setState({ submitting: true, succeeded: false, errors: null })

    
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.name,
          email: form.email,
          eventType: filter.toLowerCase(),
          preferredDate: form.date,
          preferredTime: form.time,
          location: form.location,
          notes: form.info,
        }),
      })

      if (!res.ok) {
        const errorData = await res.json()
        setState({ submitting: false, succeeded: false, errors: getFriendlyError(errorData.error) || 'Something went wrong' })
        return
      }

      const data = await res.json()
      setRequestId(data.request.id) 
      setState({ submitting: false, succeeded: true, errors: null })
    } catch (err) {
      setState({ submitting: false, succeeded: false, errors: 'Network error, check your connection' })
    }
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RoutePages />} />
      <Route path="/consult" element={<Consultation 
          form={form} setFilter={setFilter} setForm={setForm}
          filter={filter} handleForm={handleForm} state={state}
          submittedData={submittedData} handleSubmit={handleFormSubmit} requestId={requestId}
      />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<AdminPage />} />
        <Route path="/status/:id" element={<StatusPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
