import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="espressoBackground flex justify-center mt-20 p-3">
            <div className="flex flex-col space-y-3 mt-10 text-center">
                <p className="text-custom-gold tracking-wider">READY TO TALK IT THROUGH?</p>
                <h1 className="text-2xl text-custom-taupe-dim tracking-wide">Let's start with a conversation.</h1>
                <Link to={"/consult"} onClick={() => window.scrollTo(0, 0)} className="underline tracking-wider mt-3 text-custom-taupe-dim  decoration-custom-gold decoration-2 underline-offset-6">
                    START A CONSULTATION
                </Link>
            </div>
        </div>
    )
}

export default Footer
