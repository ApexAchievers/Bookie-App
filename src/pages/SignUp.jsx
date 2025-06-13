import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ezliblogo from "../assets/images/Book-ab6.jpg";

export default function SignUp() {
    return (
        <>
            <Navbar />
            <section className="min-h-screen bg-cover bg-center flex items-center justify-center p-6" style={{ backgroundImage: ` linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${ezliblogo})` }}>
                
                <div className="w-full max-w-5xl bg-white rounded-lg shadow-md  grid md:grid-cols-2 gap-6 p-6">

                    {/* User Form */}
                    <form className="space-y-4">
                        <h2 className="text-2xl font-bold mb-4 text-brown">User Access</h2>
                        <input type="text" placeholder="Full Name" className="w-full  border rounded-md border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-brown" />
                        <input type="email" placeholder="Email" className="w-full p-2 border rounded-md  border-gray-300 focus:outline-none focus:ring-1 focus:ring-brown" />
                        <select className=" w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brown">
                            <option value="">Select Role</option>
                            <option value="student">Student</option>
                            <option value="lecturer">Lecturer</option>
                        </select>
                        <button type="submit" className="w-full p-2 bg-primary text-black font-semibold rounded-md hover:bg-secondary transition duration-300">Proceed</button>
                    </form>

                    {/* Admin Form */}
                    <form className="space-y-4">
                        <h2 className="text-2xl font-bold mb-4 text-brown">Admin Panel</h2>
                        <input type="text" placeholder="Full Name" className="w-full p-2 border rounded-md  border-gray-300 focus:outline-none focus:ring-1 focus:ring-brown" />
                        <select className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brown">
                            <option value="">Select Role</option>
                            <option value="student">Libarian</option>
                            <option value="lecturer">Author</option>
                        </select>
                        <input type="text" placeholder="Book Title" className="w-full p-2 border rounded-md  border-gray-300 focus:outline-none focus:ring-1 focus:ring-brown" />
                        <textarea placeholder="Description" className="w-full p-2 border rounded-md  border-gray-300 focus:outline-none focus:ring-1 focus:ring-brown"></textarea>
                        <button type="submit" className="w-full p-2 bg-primary text-black font-semibold rounded-md hover:bg-secondary transition duration-300">Add / Edit Book</button>
                    </form>

                </div>
            </section>
            <Footer />
        </>
    );
}
