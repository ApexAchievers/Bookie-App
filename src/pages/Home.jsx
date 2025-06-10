import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Star, BarChart3, BookOpen, Users, Shield, CheckCircle, Search, Smile, ArrowRight, Mail, Phone, Globe, Award } from "lucide-react";


export default function Home(){
    return(
        <>
        <Navbar />
        {/* Hero Section */}
      <section className="relative bg-[url(./assets/images/homepage-bgimg.jpg)] bg-cover bg-center py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 items-center">
            <div className="mb-10 lg:mb-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                EZLib Library
                <span className="block text-[#DF912CF1]">Management</span>
                <span className="block">Made Simple</span>
              </h1>
              <p className="font-medium mt-4 sm:mt-6 text-lg sm:text-xl text-white leading-relaxed max-w-2xl">
                Track, organize and manage your books with our comprehensive management system.
                From catalog management to member services, we've got everything covered.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-3 sm:space-y-0">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm sm:text-base text-white font-medium">4.9/5 rating</span>
                </div>
                <div className="text-sm sm:text-base text-white font-medium">Trusted by 500+ libraries</div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-br from-[#D1C4B3A8] to-gray-100 rounded-lg p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Library Dashboard</h3>
                    <BarChart3 className="h-6 w-6 sm:h-7 sm:w-7 text-[#9C5C09D7]" />
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm sm:text-base">Books Available</span>
                      <span className="font-bold text-green-600 text-lg sm:text-xl">12,450</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm sm:text-base">Active Members</span>
                      <span className="font-bold text-violet-600 text-lg sm:text-xl">2,834</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm sm:text-base">Books Borrowed</span>
                      <span className="font-bold text-orange-600 text-lg sm:text-xl">456</span>
                    </div>
                    <div className="mt-4 sm:mt-6">
                      <div className="bg-white rounded-lg p-3 sm:p-4">
                        <div className="text-xs sm:text-sm text-gray-500 mb-2">Today's Activity</div>
                        <div className="flex space-x-2">
                          <div className="flex-1 bg-green-100 rounded h-2"></div>
                          <div className="flex-1 bg-indigo-100 rounded h-2"></div>
                          <div className="flex-1 bg-orange-100 rounded h-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Libraries
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run an efficient library, from small community centers to large academic institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: BookOpen,
                title: "Smart Catalog Management",
                description: "Our catalog system offers quick searches, easy title management, and tracking for physical and digital media."
              },
              {
                icon: Users,
                title: "Member Management",
                description: "Streamline member registration, track borrowing history, and manage membership renewals effortlessly."
              },
              {
                icon: BarChart3,
                title: "Analytics & Reports",
                description: "Gain insights with detailed reports on circulation, popular books, member activity, and more."
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Bank-level security with automated backups and 99.9% uptime guarantee for your peace of mind."
              },
              {
                icon: Search,
                title: "Search & Filter",
                description: "Quickly find any books using smart filter and search options, including title, author, genre, and ISBN."
              },
              {
                icon: Smile,
                title: "User-Friendly Interface",
                description: "Minimal, intuitive layout designed for both admins and users, ensuring a smooth experience."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-[#D1C4B3A8] rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 group">
                <div className="group-hover:bg-[#A78457A2] rounded-lg p-3 w-fit mb-4 transition-colors duration-200">
                  <feature.icon className="h-6 w-6 text-[#9C5C09D7]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 sm:py-20 lg:py-24 bg-[#9C5C09D7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
                Why Libraries Choose EZLib
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {[
                  "Reduces administrative workload by 50%",
                  "Improves member satisfaction with faster service",
                  "Increases circulation by 35% with better discovery",
                  "Saves costs with automated processes",
                  "Ensures data security and compliance"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 mr-3 sm:mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Success Story</h3>
                <blockquote className="text-base sm:text-lg italic mb-4 sm:mb-6 leading-relaxed">
                  "EZLib transformed our operations completely. We've cut our processing time in half and our staff can now focus on what matters most - serving our community."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm sm:text-base">Felicity Bafoaa</div>
                    <div className="text-white/80 text-xs sm:text-sm">Head Librarian, Accra City Library</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { number: "500+", label: "Libraries Served" },
              { number: "2M+", label: "Books Managed" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#9C5C09D7] mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm sm:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#865A20F1] to-gray-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Transform Your Library?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white">
            Join hundreds of libraries already using EZLib to improve their operations and serve their communities better.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-[#9C5C09D7] hover:bg-white/70 border-2 border-[#9C5C09D7] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200 flex items-center justify-center hover:shadow-lg">
              Get Started
              <ArrowRight className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Get in Touch
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Have questions about EZLib? Our team is here to help you find the perfect solution for your library.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#9C5C09D7] mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Email us</div>
                    <div className="text-gray-600 text-sm sm:text-base">hello@ezlib.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-[#9C5C09D7] mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Call us</div>
                    <div className="text-gray-600 text-sm sm:text-base">+233-30-677-0000</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-[#9C5C09D7] mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Visit our website</div>
                    <div className="text-gray-600 text-sm sm:text-base">www.ezlib.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-[#9C5C09D7] mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Awards & Recognition</div>
                    <div className="text-gray-600 text-sm sm:text-base">Library Technology Award Winner 2024</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <form className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">First Name</label>
                    <input type="text" className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-1 focus:border-transparent text-sm sm:text-base" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Last Name</label>
                    <input type="text" className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-1 focus:border-transparent text-sm sm:text-base" />
                  </div>
                </div>
                <div className="mb-4 sm:mb-6">
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Email</label>
                  <input type="email" className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-1 focus:border-transparent text-sm sm:text-base" />
                </div>
                <div className="mb-4 sm:mb-6">
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Library Name</label>
                  <input type="text" className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-1 focus:border-transparent text-sm sm:text-base" />
                </div>
                <div className="mb-4 sm:mb-6">
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Message</label>
                  <textarea rows={4} className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-1 focus:border-transparent text-sm sm:text-base resize-none"></textarea>
                </div>
                <button className="w-full bg-[#9C5C09D7] hover:bg-gray-500 text-white py-2 sm:py-3 px-6 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base hover:shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
        <Footer />
        </>
    );
}
