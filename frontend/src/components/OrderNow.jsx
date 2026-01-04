import { useNavigate } from "react-router-dom";

export default function CallNow(){
    const navigate = useNavigate();
    return(
        <div className="bg-white text-center p-5 mb-10">
            <h2 className="font-bold text-2xl md:text-4xl mb-5">Transform Your Marketing Today!</h2>
            <p className="text-gray-600 text-lg mb-5">Give your restaurant the advertising edge it deserves. Contact Mr Bond Water now for a customized quote and strategy session.</p>
            <button onClick={()=> navigate('/order')} className="bg-blue-300 px-6 py-3 rounded-4xl hover:bg-blue-600 transition hover:text-white">Order Now</button>

        </div>
    )
}