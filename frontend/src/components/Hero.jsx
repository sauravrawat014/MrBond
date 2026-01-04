import bottle from "../assets/bottle.png";

export default function Hero(){
    return(
        <section className=" bg-[linear-gradient(135deg,_#0093ee_0%,_#12e3ff_100%)] min-h-[80vh] flex items-center px-6 md:px-10  pt-24 md:pt-0">
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* left */}
            <div className="text-white mx-10 animate-[slideLeft_1s_ease-out_forwards]">
                <h1 className="text-4xl font-bold md:text-7xl">Pure Hydration</h1>
                <p className="text-xl mt-4 text-gray-200">Creative Resturant & Cafe Advertising Solutions</p>

            </div>

            {/* right */}
            <div className="flex justify-center md:justify-end animate-[slideRight_1.2s_ease-out_forwards]">
                <img className="w-100 drop-shadow-2xl"src={bottle}/>

            </div>

            
        </div>
        </section>
    )
}