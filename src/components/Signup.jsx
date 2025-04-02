import { getAuth,createUserWithEmailAndPassword } from "firebase/auth"
import {app} from "../firebase"
import { useState } from "react"
function SignUp(){
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const auth=getAuth(app)

const createUser=()=>{
    createUserWithEmailAndPassword(auth,email,password).then(()=>alert("User Created")).catch((error)=>{
        alert(error.message)
    })
}
    return(
        <>
        <div className="flex flex-col  justify-center items-center  mt-3 ">
            <div className="border flex flex-col p-6 rounded-lg bg-white">
        <label>Email</label>
        <input 
        onChange={(e)=>{
            setEmail(e.target.value)
        }} 
        type="email" 
        value={email} 
        placeholder="Enter Email"
        className="border mt-2 pr-7 px-7 py-2"/>
        
        <label>Password</label>
        <input 
        className="border mt-2 p-2 "
        type="password" 
        onChange={(e)=>{
            setPassword(e.target.value)
        }} value={password}
        placeholder="Enter password"/>
        <button className="bg-yellow-500 rounded-xl mt-3 px-3 py-2 text-black cursor-pointer" onClick={createUser}>Signup</button>
        </div>
        </div>
        </>
    )
}
export default SignUp