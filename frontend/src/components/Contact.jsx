

export default function Contact(){
    return(
        <div className="mt-10 p-5 gap-10 bg-white">
           <div className="text-center ">
            <h1 className="font-bold text-2xl md:text-4xl p-2">NATIONWIDE COVERAGE</h1>
            <p className="text-gray-600">Serving Restaurants & Cafes Across All Over India</p>

           </div>

           <div className="p-6">

           <h2 className="font-semibold text-2xl md:text-4xl mb-7">📞 Get In Touch Today!</h2>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div className="bg-white rounded-l shadow-lg p-8 tranistion-all duration-300 hover:shadow-2xl">
             <h3 className="font-semibold text-2xl md:text-3xl">OWNER</h3>
           <p className="text-gray-600 text-xl mt-2">Abhishek Kumar Jha</p>
           </div>

           <div className="bg-white rounded-l shadow-lg p-8 tranistion-all duration-300 hover:shadow-2xl">
             <h3 className="font-semibold text-2xl md:text-3xl">MOBILE NUMBER</h3>
           <p className="text-gray-600 text-xl mt-2">+91 8527809078</p>
           </div>

           <div className="bg-white rounded-l shadow-lg p-8 tranistion-all duration-300 hover:shadow-2xl mt-5">
             <h3 className="font-semibold text-2xl md:text-3xl">Address</h3>
           <p className="text-gray-600 text-xl mt-2">Mayur Vihar Phase 1
New Delhi, Delhi</p>
           </div>

           

           </div>

           </div>
        </div>
    )
}