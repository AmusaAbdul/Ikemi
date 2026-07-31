
import Message from "./Consultation/Message"
import Form from "./Consultation/Form"

const Consultation = ({form, setForm, filter, state, submittedData, setFilter, handleForm, handleSubmit, requestId}) => {
    return (
        <>
            <Message />
            <Form form={form} setFilter={setFilter} setForm={setForm}
                filter={filter} handleForm={handleForm} state={state}
                submittedData={submittedData} handleSubmit={handleSubmit} requestId={requestId} />
        </>
    )
}

export default Consultation
