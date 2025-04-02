import {useState} from 'react'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import {app} from '../firebase'
const auth=getAuth(app)
function Signin(){
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const signin=()=>{
    signInWithEmailAndPassword(auth,email,password).then(()=>{
        alert("User Signed In").catch((err)=>{
            alert(err.message)
        })
    })
}
    return(
        <>
        <div className="flex flex-col  justify-center items-center  mt-3 ">
            <div className="border flex flex-col p-6 rounded-lg bg-white">
<label >Email</label>
<input type="email" className="border mt-2 pr-7 px-7 py-2" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
<label >Password</label>
<input type="password" className="border mt-2 pr-7 px-7 py-2" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
<button className='bg-yellow-500 rounded-xl mt-3 px-3 py-2 text-black cursor-pointer' onClick={signin}>Sign In</button>

            </div>
        </div>
        </>
    )
}
export default Signin