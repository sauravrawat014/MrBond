

export default function Working(){
    return(
        <div className="bg-[linear-gradient(135deg,_#0093ee_0%,_#12e3ff_100%)]">
            <div>
                <h1 className="p-5 font-bold text-2xl md:text-4xl text-white">How It Works</h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 p-5 gap-6 md:gap-10">

                <div className="bg-white/70 rounded-xl text-center shadow-lg p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <p className="bg-white border-2 mb-2 inline-block px-2 py-1 font-semibold">1</p>
                    <p className="font-semibold text-xl">Discuss Your Brand</p>
                    <p className="text-gray-600">Share your restaurant details, logo, and messaging preferences</p>
                </div>

                
                <div className="bg-white/70 rounded-xl text-center shadow-lg p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <p className="bg-white border-2 mb-2 inline-block px-2 py-1 font-semibold">2</p>
                    <p className="font-semibold text-xl">Custom Design</p>
                    <p className="text-gray-600">We create attractive, eye-catching bottle labels specifically for your brand</p>
                </div>

                
                <div className="bg-white/70 rounded-xl text-center shadow-lg p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <p className="bg-white border-2 mb-2 inline-block px-2 py-1 font-semibold">3</p>
                    <p className="font-semibold text-xl">Production</p>
                    <p className="text-gray-600">High-quality water bottles with premium label printing and branding</p>
                </div>

                
                <div className="bg-white/70 rounded-xl text-center shadow-lg p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <p className="bg-white border-2 mb-2 inline-block px-2 py-1 font-semibold">4</p>
                    <p className="font-semibold text-xl">Distribution</p>
                    <p className="text-gray-600">Supply to your restaurant or event for maximum customer reach</p>
                </div>

                 

            </div>

        </div>
    )
}