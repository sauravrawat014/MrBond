import { useState } from "react"
import axios from 'axios'



export default function Order(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [quantity, setQuantity] = useState('');

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{

            await axios.post(`${backendUrl}/api/order`, {name,email,number,quantity});
            console.log("clicked");

        } catch(error){
            console.log(error);

        }

    }
    return(

        <div className="bg-[linear-gradient(135deg,_#0093ee_0%,_#12e3ff_100%)] flex justify-center min-h-screen items-center">
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white p-8 rounded-xl w-[90%] max-w-md">
                <h1 className="font-bold flex justify-center text-3xl">ORDER FORM</h1>
                <input className="border-none outline-none bg-gray-100 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500" type='text' placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)} value={name}/>
                <input className="border-none outline-none bg-gray-100 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500" type="email" placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <input className="border-none outline-none bg-gray-100 px-4 py-3 focus:ring-2 focus:ring-blue-500" type="number" placeholder="Enter Your Phone Number" onChange={(e)=>setNumber(e.target.value)} value={number}/>
                <input className="border-none outline-none bg-gray-100 px-4 py-3 focus:ring-2 focus:ring-blue-500" type="number" placeholder="Enter Quantity" onChange={(e)=>setQuantity(e.target.value)} value={quantity}/>
                <button className="bg-blue-300 rounded-xl px-6 py-4 hover:bg-blue-600 hover:text-white" type="submit">Submit Order Details</button>
            </form>
            
        </div>
    )
}