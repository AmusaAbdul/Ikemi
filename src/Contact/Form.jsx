import {Link} from "react-router-dom"

const Form = ({ form, handleForm, handleBookings }) => {

    return (
        <div className="flex justify-center mt-5 p-5">
            <form onSubmit={handleBookings} action="">
                <div className="flex gap-5 justify-center items-center flex-wrap ">
                    <span className="itemSpan WeekSitting inputContainer">
                        <label htmlFor="Name">YOUR NAME</label>
                        <input name="name" onChange={handleForm} value={form.name || ""} className="formInput itemSpan" type="text" placeholder="Your name" />
                    </span>
                    <span className="itemSpan WeekSitting inputContainer">
                        <label htmlFor="Email">EMAIL</label>
                        <input name="email" onChange={handleForm} value={form.email} className="formInput itemSpan" type="email" placeholder="you@gmail.com" />
                    </span>
                    <span className="itemSpan WeekSitting inputContainer">
                        <label htmlFor="reason">REASON FOR REACHING OUT</label>
                        <input name="reason" onChange={handleForm} value={form.reason} className="formInput itemSpan" type="text" placeholder="Press, collaboration, general question" />
                    </span>
                    <span className="itemSpan WeekSitting inputContainer">
                        <label htmlFor="message">MESSAGE</label>
                        <textarea name="message" onChange={handleForm} value={form.message} className="formInput itemSpan" placeholder="Tell us a little about what you need"></textarea>
                    </span>
                </div>
                <div className="flex flex-col space-y-3 justify-center items-center">
                    <button type="submit" className="p-2 text-center mt-5 text-sm tracking-wider espressoBackground text-white">SEND MESSAGE</button>
                    <p className="lightGold tracking-wide text-center">For wedding or shoot date requests, please use the consultation form instead - it routes to the right.</p>
                    <Link to={"/consult"} onClick={() => window.scrollTo(0, 0)} className="underline mt-3 mb-5 tracking-wider text-custom-gold  decoration-custom-gold decoration-2 underline-offset-6">
                        START A CONSULTATION
                    </Link>
                </div>
            </form>

        </div>
    )
}

export default Form
