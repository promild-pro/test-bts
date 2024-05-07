import Input from "../../component/input"

const Login = () => {

    return(
        <section  className=" w-full h-[100vh] flex justify-center items-center">
            <div className=" bg-gray-300 rounded-xl py-5 px-20">
             <Input text="Username"type="text" placeholder="Masukkan Username" />
             <Input text="Password"type="password" placeholder="Masukkan Password" />
             <button className="px-5 py-2 rounded-xl my-5 bg-green-600">Login</button>
            </div>

        </section>
    )
}

export default Login