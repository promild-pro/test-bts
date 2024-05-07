import Header from "../../component/header"
// import Input from "../../component/input"
import Checklist from "../../component/cheklist"


const Dashboard = () => {
    const data = [
        {
            id: 1,
            text: 'Disney'
        },
        {
            id: 1,
            text: 'Disney'
        },{
            id: 1,
            text: 'Disney'
        },{
            id: 1,
            text: 'Disney'
        },{
            id: 1,
            text: 'Disney'
        },
    ]
    return(
        <section>
        <Header />
        <div>
            <Checklist data={data}/>
        </div>
        </section>
    )
}

export default Dashboard