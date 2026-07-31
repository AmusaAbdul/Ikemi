import {Link} from "react-router-dom"
const WeekSitting = () => {
    return (
        <div className="bg-custom-taupe WeekSitting flex flex-col w-full sm:flex-row gap-10 justify-center items-center itemSpan mt-10 p-5">
            <div className="itemSpan">
                <div className="itemSpan h-145 w-145 border border-custom-burgundy p-2 flex justify-center items-center">
                    <div className="itemSpan h-140 w-140 border lightGoldBorder p-2 flex justify-center items-center">
                        <div className="itemSpan bg-custom-gold h-135 w-135"></div>
                    </div>
                </div>
                <button className="p-2 text-center mt-5 text-sm bg-custom-burgundy text-white">LOOK OF THE WEEK</button>
            </div>
            <div className="max-width space-y-4">
                <p className="text-custom-gold">THIS WEEK'S SITTING</p>
                <h1 className="text-4xl espresso">The autumn bride</h1>
                <p className="lightGold tracking-wide">A muted, warm-toned bridal look built around low light and a single garden ceremony. Full notes and product list on request.</p>
                <Link to={"/portfolio"} className="underline mt-10 mb-5 tracking-wide espresso decoration-custom-gold decoration-2 underline-offset-6">SEE THE FULL SITTING</Link>
            </div>
        </div>
    )
}

export default WeekSitting
