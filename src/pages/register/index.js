// const { default: Input } = require("../../component/input")
import Input from "../../component/input"

const Register = () => {
    // const [username, setUsername] = useState('')
    // const [noHp, setNo] = useState('')
    // const [password, setPassword] = useState('')
    // const [konfPassword, setKonfPassword] = useState('')
    return(
        <section  className=" w-full h-[100vh] flex justify-center items-center">
            {/* <Input /> */}
            <div className=" bg-gray-300 rounded-xl py-5 px-20">
             <Input text="Masukkan email"type="email" placeholder="Masukkan Email" />
             <Input text="Username"type="text" placeholder="Masukkan Username" />
             <Input text="Password"type="password" placeholder="Masukkan Password" />
             <button className="px-5 py-2 my-5 rounded-xl  bg-green-600">Register</button>
            </div>

        </section>
    )
}

export default Register