import Hero from"../../components/home/hero1";
import Services from "../../components/home/services"
import About from "../../components/home/about"
import Partner from "../../components/home/partners"
import CustomerExperience from "../../components/home/customerexperience"
import MessageUs from "../../components/home/messageus"

export default function Home() {
    return(
        <>
        <Hero/>
        <Services />
        <About />
        <Partner />
        <CustomerExperience />
        <MessageUs/>
        </>
        
    );
}