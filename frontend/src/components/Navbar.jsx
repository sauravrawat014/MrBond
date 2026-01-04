

export default function Navbar(){
    return(
        <div className="bg-[linear-gradient(135deg,_#0093ee_0%,_#12e3ff_100%)] flex items-center justify-between p-3 border-b border-white/30">
            <p className="text-2xl font-bold text-white">Mr Bond</p>

            <ul className="flex justify-between gap-9 mr-20 text-white text-l">
                <li className="hover:text-gray-200 cursor-pointer px-3">About Us</li>
                <li className="hover:text-gray-200 cursor-pointer px-3">Contact Us</li>
            </ul>

            

        </div>
       
    )
}