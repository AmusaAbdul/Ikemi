import {useState} from "react"
import Intro from "./Contact/Intro"
import ContactDetails from "./Contact/Contact"
import Form from "./Contact/Form"
import Footer from "./Contact/Footer"

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        reason: "",
        message: "",
    })
    const [forms, setForms] = useState(null)
    const handleForm = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }
    const handleBookings = (e) => {
        e.preventDefault()
        if (!form.name.trim() || !form.email || !form.reason || !form.message) {
            alert("Input fields are empty")
            return
        }
        setForms(form)
        alert(`Thank you ${form.name}, your message has been sent`)
        setForm({ name: "", email: "", reason: "", message: "" })
    }
  return (
    <div>
      <Intro />
      <hr className="border-custom-gold border-t my-6" />
      <ContactDetails />
      <Form form={form} setForm={setForm} handleForm={handleForm} handleBookings={handleBookings} />
      <Footer />
    </div>
  )
}

export default Contact
