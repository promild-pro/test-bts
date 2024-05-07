import { useNavigate } from "react-router-dom"

export const Header = () => {
    const navigate = useNavigate()
    return (
        <section className=" bg-slate-400 flex ">
            <div className="px-5">
                <button className="p-2 mx-2 rounded-xl  hover:bg-slate-600" onClick={navigate('/login')}>Cheklist</button>
                <button className="p-2 mx-2 rounded-xl  hover:bg-slate-600">Edit Cheklist</button>
                <button className="p-2 mx-2 rounded-xl  hover:bg-slate-600">Cheklist</button>
            </div>
            <div className=" absolute right-1 py-1">
                <h1>Profile</h1>
            </div>
        </section>
    )
}