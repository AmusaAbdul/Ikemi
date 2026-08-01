import { useEffect } from "react";

const Intro = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex justify-center mt-20">
            <div className="flex flex-col justify-center items-center">
                <div className="text-center p-5 space-y-5">
                    <p className="text-custom-gold tracking-wider text-sm sm:text-base">CONTACT</p>
                    <h1 className="text-4xl sm:text-5xl espresso">Questions, <span className="text-custom-gold italic">press, collaborations.</span></h1>
                    <p className="text-lg lightGold tracking-wide">For date requests, use "Reserve a date" instead - this is for everything else.</p>
                </div>
            </div>
        </div>

    )
}

export default Intro
