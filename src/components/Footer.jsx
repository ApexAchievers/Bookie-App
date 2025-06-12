import { Linkedin, Instagram, Facebook, Contact, Mail } from "lucide-react";
import { Link } from "react-router"
import ezliblogo from "../assets/images/ezliblogo.png"
import gray from "../assets/images/resized.png"



export default function Footer() {
    return (
        <footer className="bg-brown text-white mb-6 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center md:text-left ">
                    <img src={gray} className="h-20 w-auto object-contain mt-6 mx-auto md:mx-0" />
                    <span className="text-2xl font-bold text-gray-400 ml-2 ">EZLib</span>
                    <p className="text-sm text-white mt-2 max-w-xs mx-auto md:mx-0">A user-friendly digital library that lets students and book lovers easily explore, add, and manage books through a simple, responsive interface.</p>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="font-semibold mb-2 mt-8">Product</h3>
                    <ul className="space-y-1 text-sm text-white-300">
                        <li><Link to="/" className="hover:text-gray-400">Dashboard</Link></li>
                        <li><Link to="Books" className="hover:text-gray-400">Books</Link></li>
                        <li><Link to="AddBook" className="hover:text-gray-400">Add-Book</Link></li>
                        <li><Link to="ViewBook" className="hover:text-gray-400">View-Book</Link></li>
                        <li><Link to="EditBook" className="hover:text-gray-400">Edit-Book</Link></li>
                    </ul>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="font-semibold mb-4 mt-8">Support</h3>
                    <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
                        <Contact className="text-gray-400 h-4 w-4" />
                        <a href="tel:+233553220002" rel="noopener noreferrer" className="text-sm">Contact Us</a>
                    </div>
                    <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
                        <Mail className="text-gray-400 h-4 w-4" />
                        <a href="mailto:freddyflourishk@gmail.com" className="text-sm">E-mail</a>
                    </div>
                    <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 w-4 h-4" fill="currentColor"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                        <a href="https://wa.me/233553220002" target="_blank" rel="noopener noreferrer" className="text-sm">WhatsApp</a>
                    </div>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="font-semibold mb-2 mt-8">Company</h3>
                    <ul className="space-y-1 text-sm text-white-300">
                        <li>About</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center gap-4 mt-6">
                <Linkedin className="w-5 h-5 text-white hover:text-blue-400 cursor-pointer" />
                <Instagram className="w-5 h-5 text-white hover:text-pink-400 cursor-pointer" />
                <Facebook className="w-5 h-5 text-white hover:text-blue-500 cursor-pointer" />
            </div>
            <div className="text-center text-sm text-white mt-10 border-t border-white pt-4">
                Non-Copyright© 2025 EZLib. All rights reserved.
            </div>
        </footer>




    );
}