import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home(){
    return(
        <>
        <Navbar />
        <h1 className="font-black text-5xl bg-black">Welcome to our page </h1>
        <Footer />
        </>
    );
}