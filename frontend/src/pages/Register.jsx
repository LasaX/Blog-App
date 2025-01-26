import { useNavigate,Link } from "react-router-dom"
import { useRegisterUserMutation } from "../redux/features/Auth/authApi"
import { useState } from "react"

function Register() {
        const[userName,setUserName]=useState('')
        const[email,setEmail]=useState('')
        const[password,setPassword]=useState('')
        const[message,setMessage]=useState('')
        const [registerUser,{isLoading}] =useRegisterUserMutation();
        const navigate= useNavigate()

        const handleRegister = async (e)=>{
          e.preventDefault();
          const data = {
            userName,
            email,
            password
          }
          
          try {
            console.log(data)
            await registerUser(data).unwrap();
            alert("Registertion Sucessfully !");
            navigate('/'); //login
            
          } catch (error) {
            setMessage("Registration Failed")
            
          }
        }

  return (
    <div className="max-w-sm bg-white mx-auto p-8 mt-36">
        <h2 className="text-2xl font-semibold pt-5">Please register</h2>
        <form onSubmit={handleRegister} className="space-y-5 max-w-sm mx-auto pt-8">
        <input type="text" value={userName}
            onChange={(e)=> setUserName(e.target.value)}
            placeholder="User Name"
            required
            className="w-full bg-bgPrimary focus:outline-none px-5 py-3" />
            <input type="email" value={email}
             onChange={(e)=> setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full bg-bgPrimary focus:outline-none px-5 py-3" />
            <input type="password" value={password}
             onChange={(e)=> setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full bg-bgPrimary focus:outline-none px-5 py-3" />
            {
                message && <p className="text-red-500">{message}</p>
            }
            <button className="w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium rounded-md">Register</button>
        </form>
         <p className="my-5 text-center"> Already have an account ? <Link to ="/login" className='text-red-700'>Login</Link></p>
    </div>
  )
}
export default Register