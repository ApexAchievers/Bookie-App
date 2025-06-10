import { Linkedin, Instagram, Facebook } from "lucide-react";


export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white mt-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Branding + Description */}
                <div>
                    <h2 className="text-xl font-bold mb-2">📘 Bookie App</h2>
                    <p className="text-sm text-white">Getting Informations The Mordern Way</p>
                </div>

                {/* Product Links */}
                <div>
                    <h3 className="font-semibold mb-2">Product</h3>
                    <ul className="space-y-1 text-sm text-gray-300">
                        <li>Books</li>
                        <li>View Books</li>
                        <li>Add Books</li>
                        <li>Edit Books</li>
                    </ul>
                </div>

                {/* Support Links */}
                <div>
                    <h3 className="font-semibold mb-2">Support</h3>
                    <ul className="space-y-1 text-sm text-gray-300">
                        <li>Contact Us</li>
                        <li>E-mail</li>
                    </ul>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="font-semibold mb-2">Company</h3>
                    <ul className="space-y-1 text-sm text-gray-300">
                        <li>About</li>
                    </ul>
                </div> 
            </div>
            <div className="flex justify-center gap-4 mt-6">
                <Linkedin className="w-5 h-5 text-white hover:text-blue-400 cursor-pointer" />
                <Instagram className="w-5 h-5 text-white hover:text-pink-400 cursor-pointer" />
                <Facebook className="w-5 h-5 text-white hover:text-blue-500 cursor-pointer" />
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-sm text-white mt-10 border-t border-white pt-4">
                Non-Copyright© 2025 BookieApp. All rights reserved.
            </div>
        </footer>

        


    );
}