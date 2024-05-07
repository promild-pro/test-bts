const Input = ({text, type, placeholder, onChange}) => {
    return(
        <section className="">
            <h1 className="py-2 italic">{text}</h1>
            <input type={type} placeholder={placeholder} className="p-2 outline-none bg-slate-100 rounded-sm" onChange={onChange} />
        </section>
    )
}



export default Input