import Confirmation from "./Confirmation"
import Buttons from "./Butttons"

const Form = ({ form, handleForm, setFilter, filter, state, handleSubmit, submittedData, requestId }) => {

    if (state?.succeeded) {
        return (
            <Confirmation filter={filter} form={submittedData} requestId={requestId} />
        )    
    }
    
    return (
        <>
        <Buttons filter={filter} setFilter={setFilter} />
        <div className="flex justify-center mt-5 p-5">
            <form onSubmit={handleSubmit} action="">
                <div className="flex gap-5 justify-between items-center flex-wrap itemSpan WeekSitting">
                    <span className="itemSpan WeekSitting inputContainer">
                        <label htmlFor="Full Name">FULL NAME</label>
                            <input name="name" required onChange={handleForm} value={form.name || ""} className="formInput itemSpan WeekSitting" type="text" placeholder="Your full name" />
                    </span>
                    <span className="itemSpan WeekSitting inputContainer">
                        <label htmlFor="Email">EMAIL</label>
                            <input name="email" required onChange={handleForm} value={form.email || ""} className="formInput itemSpan WeekSitting" type="email" placeholder="you@gmail.com" />
                    </span>
                    <span className="itemSpan WeekSitting inputContainer">
                        <label htmlFor="Date">PREFERRED DATE</label>
                            <input name="date" required onChange={handleForm} value={form.date || ""} className="formInput itemSpan WeekSitting" type="date" />
                                        </span>
                        <span className="itemSpan WeekSitting inputContainer">
                            <label htmlFor="Time">PREFERRED TIME</label>
                            <input name="time" required onChange={handleForm} value={form.time || ""} className="formInput itemSpan WeekSitting" type="time" />
                        </span>
                    <span className="itemSpan WeekSitting inputContainer">
                        <label htmlFor="Location">LOCATION</label>
                            <input name="location" required onChange={handleForm} value={form.location || ""} className="formInput itemSpan WeekSitting" type="text" placeholder="Venue or city" />
                    </span>
                    <span className="itemSpan WeekSitting inputContainer">
                        <label htmlFor="Info">ANYTHING I SHOULD KNOW</label>
                            <textarea name="info" onChange={handleForm} value={form.info || ""} className="formInput itemSpan WeekSitting" placeholder="Guest count, look references, timing constraint"></textarea>
                    </span>
                </div>
                <div className="flex flex-col space-y-3 justify-center items-center">
                    <button type="submit" disabled={state?.submitting} className="p-2 text-center mt-5 text-sm tracking-wider espressoBackground text-white">SEND CONSULTATION REQUEST</button>
                        {state?.errors && <p className="text-red-400 text-sm">{state.errors}</p>}
                    <p className="lightGold tracking-wide text-center">No payment is taken at this stage. A deposit is only requested once a date is held for you.</p>
                </div>
            </form>

        </div>
        </>
    )
}

export default Form
