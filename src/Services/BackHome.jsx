import { useNavigate } from "react-router-dom"

const BackHome = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/");
    };

    return (
        <div >
            <div className="flex justify-between items-center p-5">
                <h1 className="italic text-2xl text-center font-bold">SERVICES</h1>
                <div className="space-y-5">
                    <div onClick={handleClick} className="flex flex-col items-end gap-1 cursor-pointer">
                        <div className="h-1 w-6 bg-custom-gold"></div>
                        <div className="h-1 w-5 bg-custom-gold"></div>
                        <div className="h-1 w-4 bg-custom-gold"></div>
                    </div>
                </div>
            </div>
            <hr className="border-custom-gold border-t" />
        </div>
    )
}

export default BackHome
