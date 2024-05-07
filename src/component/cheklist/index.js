const Checklist = ({data}) => {
    return(
        <section>
            {data.map((items,index) => (
                <div key={index}>
                <div className="flex">
                    <input type="checkbox" checked/>
                    <h2>{items.text}</h2>
                </div>
            </div>
            ))}
        </section>
    )
}
export default Checklist