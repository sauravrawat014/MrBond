import CallNow from "../components/OrderNow";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import ValueSection from "../components/ValueSection";
import Working from "../components/Working";


export default function Home(){
    return(
        <div>

            <Navbar/>
            <Hero/>
            <ValueSection/>
            <Service/>
            <Contact/>
            <Working/>
            <CallNow/>
            <Footer/>

        </div>
    )
}