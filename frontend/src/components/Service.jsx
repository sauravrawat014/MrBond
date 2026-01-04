import bot from "../assets/bot.png";


export default function Service(){
    return(
        <div className=" bg-[linear-gradient(135deg,_#0093ee_0%,_#12e3ff_100%)] text-white p-3 ">
            <div className="flex flex-col justify-center text-center">
            <h1 className="font-bold text-3xl md:text-5xl mb-5">Our Service</h1>

            <p className="text-gray-200 p-3">Mr Bond Water revolutionizes restaurant and cafe marketing through innovative water bottle label advertising. We brand our premium water bottles with your restaurant or cafe logo, name, and contact details, creating a powerful marketing tool that reaches customers directly in their hands.

Every sip is an opportunity for your brand to shine! Our customers carry your advertisement throughout their day, ensuring maximum visibility and brand recall.</p>

             <div className="mt-16 grid grid-cols-1 md:grid-cols-2 max-w-6xl gap-10 mx-auto items-center">
             <img className="w-64 sm:w-90 md:w-[480px] mx-auto transition-all duration-300 hover:-translate-y-2 hover:scale-105
           hover:drop-shadow-2xl animate-[slideLeft_1s_ease-out_forwards]" src={bot}/>

             <div className="bg-white rounded-xl shadow-lg p-8 text-black max-w-5xl mx-auto mt-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl gr animate-[slideRight_1.2s_ease-out_forwards]">

                <h1 className="text-3xl md:text-5xl font-bold mb-5 text-center">Perfect For</h1>
                <ul>
                    <li className="p-2 "><b className="font-semibold">Restaurants & Cafes:</b> <span className="text-gray-600">Increase dine-in and delivery orders with constant brand visibility</span></li>
                    <li className="p-2"><b className="font-semibold">Food Courts: </b><span className="text-gray-600">Stand out among competitors with branded water bottles</span></li>
                    <li className="p-2"><b className="font-semibold">Cloud Kitchens: </b> <span className="text-gray-600">Build brand identity for online food delivery businesses</span></li>
                    <li className="p-2"><b className="font-semibold">Hotel & Hospitality: </b><span className="text-gray-600"> Enhance guest experience and brand recall</span></li>
                    <li className="p-2"><b className="font-semibold">Events & Catering:</b> <span className="text-gray-600">Memorable giveaway that keeps your brand alive</span></li>
                    <li className="p-2"><b className="font-semibold">New Restaurant Launches: </b> <span className="text-gray-600">Create buzz and awareness in your area</span></li>
                    <li className="p-2"><b className="font-semibold">Seasonal Promotions:</b> <span className="text-gray-600">Limited edition bottles for special offers and discounts</span></li>
                </ul>
             </div>
             </div>

            </div>

        </div>
    )
}