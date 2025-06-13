import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Star, BarChart3, BookOpen, Users, Shield, CheckCircle, Search, Smile, ArrowRight, Mail, Phone, Globe, Award } from "lucide-react";
import { Link } from "react-router";
import bookopened from "../assets/images/bookopened.PNG"
import bookstack from "../assets/images/bookstack.PNG"
import google from "../assets/images/Google.png"
import harvard from "../assets/images/harvard.PNG"
import cambridge from "../assets/images/cambridge.PNG"
import unesco from "../assets/images/unesco.PNG"
import nickelodeon from "../assets/images/nickelodeon.PNG"
import disney from "../assets/images/disney.PNG"
import feliimg from "../assets/images/feli.JPG"
import jerushaimg from "../assets/images/jerusha.jpg"
import stellaimg from "../assets/images/stella.jpg"


export default function Home() {

  // Team members data
  const teamMembers = [
    {
      name: "Jerusha",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 5+ years in library technology and digital transformation.",
      image: jerushaimg

    },
    {
      name: "Prince",
      role: "Chief Technology Officer",
      bio: "Passionate about building scalable library management in the system.",
      image: "",

    },
    {
      name: "Felicity",
      role: "Head of Product Design",
      bio: "UX/UI expert dedicated to creating intuitive and accessible library experiences.",
      image: feliimg

    },
    {
      name: "Stella",
      role: "User Experience & Access Strategist",
      bio: "Focuses on the navigation flow to make our system easy to use.",
      image: stellaimg

    },
    {
      name: "Comfort",
      role: "Back-End Systems Architect",
      bio: "Dedicated to backend services, including API logic for borrowing, returning and storing records.",
      image: "",

    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[url(./assets/images/homepage-bgimg.jpg)] bg-cover bg-center py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 items-center">
            <div className="mb-10 lg:mb-0">

              <h1 className="swipe-in-left text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mt-10 font-bold text-white leading-tight" style={{ animationDelay: "0.5s" }}>
                Easy and Effective
                <span className="block">Library Management</span>
                <span className="block">with <span className="text-[#DF912CF1]">EZLib</span></span>
              </h1>
              <p className="swipe-in-left font-medium mt-4 sm:mt-6 text-lg sm:text-xl text-white leading-relaxed max-w-2xl" style={{ animationDelay: "0.5s" }}>
                Track, organize and manage your books with our comprehensive management system.
                From catalog management to member services, we've got everything covered.
              </p>
              <div className="swipe-in-left mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-3 sm:space-y-0" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300 fill-current" />
                    ))}
                    <span className="relative h-4 w-4 sm:h-5 sm:w-5 inline-block">
                      <Star className="absolute top-0 left-0 h-4 w-4 sm:h-5 sm:w-5 text-white fill-current" />
                      <Star
                        className="absolute top-0 left-0 h-4 w-4 sm:h-5 sm:w-5 text-yellow-300 fill-current"
                        style={{ clipPath: 'inset(0 50% 0 0)' }}
                      />
                    </span>
                  </div>
                  <span className="ml-2 text-sm sm:text-base text-white font-medium">4.5/5 rating</span>
                </div>
                <div className="text-sm sm:text-base text-white font-medium">Trusted by 200+ libraries</div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 transform rotate-0 hover:rotate-2 transition-transform duration-300">
                <div className="bg-gradient-to-br from-[#D1C4B3A8] to-gray-100 rounded-lg p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Library Dashboard</h3>
                    <BarChart3 className="h-6 w-6 sm:h-7 sm:w-7 text-[#9C5C09D7]" />
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm sm:text-base">Books Available</span>
                      <span className="font-bold text-green-600 text-lg sm:text-xl">9,450</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm sm:text-base">Active Members</span>
                      <span className="font-bold text-violet-600 text-lg sm:text-xl">1,834</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm sm:text-base">Books Borrowed</span>
                      <span className="font-bold text-orange-600 text-lg sm:text-xl">156</span>
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
              Our Powerful Features
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
      <section id="benefits" className="py-16 sm:py-20 lg:py-24 bg-[#9e651bd7] text-white">
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

      {/* Customer Celebration Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url(./assets/images/Book-ab4.jpg)]"
        >
          <div className="absolute inset-0 bg-amber-100/80"></div>
        </div>

        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="w-64 h-64 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full flex items-center justify-center shadow-2xl">
            <div className="text-center">

              <div className="w-32 h-32 bg-[#f8a941d7] rounded-full mx-auto mb-4 relative">

                <div className="absolute top-8 left-6 w-4 h-4 bg-black rounded-full"></div>
                <div className="absolute top-8 right-6 w-4 h-4 bg-black rounded-full"></div>

                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-6 border-b-4 border-black rounded-full"></div>
              </div>

              <div className="flex justify-center space-x-2">
                <div className="w-6 h-8 bg-blue-500 rounded transform -rotate-12"></div>
                <div className="w-6 h-8 bg-red-500 rounded transform rotate-12"></div>
                <div className="w-6 h-8 bg-green-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:max-w-2xl">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mr-4">
                  Over 5,000
                </h2>
                <div className="text-4xl sm:text-5xl">🎉</div>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Customers Served Worldwide!
              </h3>

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl">
                We're incredibly proud to have helped over 5,000 library professionals and millions of readers
                access knowledge more efficiently. From small community libraries to major academic institutions,
                our platform has transformed how libraries operate and serve their communities.
              </p>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">4K+</div>
                    <div className="text-gray-600 font-medium text-sm sm:text-base">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">8K+</div>
                    <div className="text-gray-600 font-medium text-sm sm:text-base">Books Accessed</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">85%</div>
                    <div className="text-gray-600 font-medium text-sm sm:text-base">Satisfaction Rate</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#reviews">
                  <button className="border-2 border-gray-700 text-gray-700 hover:bg-gray-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200">
                    Read Success Stories
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from libraries and librarians who love EZLib.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <div className="mb-4">
                <Smile className="h-8 w-8 text-yellow-400 mx-auto" />
              </div>
              <blockquote className="italic text-gray-700 mb-4">
                "EZLib has made our daily operations so much easier. Our members love the new system and our staff is more productive than ever!"
              </blockquote>
              <div className="font-semibold text-gray-900">Kwame Mensah</div>
              <div className="text-gray-500 text-sm">Librarian, Kumasi Public Library</div>
            </div>

            <div className="bg-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <div className="mb-4">
                <Star className="h-8 w-8 text-yellow-400 mx-auto" />
              </div>
              <blockquote className="italic text-gray-700 mb-4">
                "The analytics and reporting features are a game changer. We can now track our most popular books and improve our collection."
              </blockquote>
              <div className="font-semibold text-gray-900">Linda Owusu</div>
              <div className="text-gray-500 text-sm">Head Librarian, Cape Coast University</div>
            </div>

            <div className="bg-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <div className="mb-4">
                <CheckCircle className="h-8 w-8 text-green-400 mx-auto" />
              </div>
              <blockquote className="italic text-gray-700 mb-4">
                "We’ve seen a 40% increase in member satisfaction since switching to EZLib. Highly recommended for any library!"
              </blockquote>
              <div className="font-semibold text-gray-900">Aisha Sule</div>
              <div className="text-gray-500 text-sm">Community Librarian, Tamale</div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#865A20F1] to-gray-500 text-white relative">
        <img src={bookopened} alt="Book left" className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 w-32 sm:w-40 lg:w-48 xl:w-56" style={{ zIndex: 1 }} />

        <img src={bookstack} alt="Book right" className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 w-32 sm:w-40 lg:w-48 xl:w-56" style={{ zIndex: 1 }} />

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
              <ArrowRight className="ml-3 h-4 w-4 sm:h-5 sm:w-5" /> 
            </button>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to revolutionizing library management and empowering communities through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-primary rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">

                  <div className="relative mb-6">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow-lg group-hover:ring-[#D1C4B3A8] transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="bg-brown text-white p-2 rounded-full shadow-lg group-hover:bg-brown transition-colors duration-300">
                        <Users className="h-4 w-4" />
                      </div>
                    </div>
                  </div>


                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-brown transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-brown font-semibold text-sm sm:text-base mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Trusted by Leading Brands & Universities
            </h2>
            <p className="text-lg text-gray-700">
              Libraries and organizations around the world rely on EZLib
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <img
              src={google}
              alt="Google"
              className="h-20"
              style={{ background: "transparent" }}
            />
            <img
              src={harvard}
              alt="Harvard University"
              className="h-20"
              style={{ background: "transparent" }}
            />
            <img
              src={unesco}
              alt="UNESCO"
              className="h-20"
              style={{ background: "transparent" }}
            />
            <img
              src={cambridge}
              alt="Cambridge University"
              className="h-30"
              style={{ background: "transparent" }}
            />
            <img
              src={disney}
              alt="Disney"
              className="h-20"
              style={{ background: "transparent" }}
            />
            <img
              src={nickelodeon}
              alt="Nickelodeon"
              className="h-20"
              style={{ background: "transparent" }}
            />
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
                    <div className="text-gray-600 text-sm sm:text-base">
                      <a href="mailto:freddyflourishk@gmail.com">hello@ezlib.com</a></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-[#9C5C09D7] mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Call us</div>
                    <div className="text-gray-600 text-sm sm:text-base">
                      <a href="tel:+233553220002" rel="noopener noreferrer">+233-55-322-0002</a></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-[#9C5C09D7] mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Visit our website</div>
                    <div className="text-gray-600 text-sm sm:text-base">
                      <a href="https://jocular-khapse-9cdc90.netlify.app/">www.ezlib.com</a></div>
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
                    <input type="text" required className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-1 focus:border-transparent text-sm sm:text-base" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Last Name</label>
                    <input type="text" className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-1 focus:border-transparent text-sm sm:text-base" />
                  </div>
                </div>
                <div className="mb-4 sm:mb-6">
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Email</label>
                  <input type="email" required className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-1 focus:border-transparent text-sm sm:text-base" />
                </div>
                <div className="mb-4 sm:mb-6">
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Library Name</label>
                  <input type="text" required className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-1 focus:border-transparent text-sm sm:text-base" />
                </div>
                <div className="mb-4 sm:mb-6">
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Message</label>
                  <textarea rows={4} required className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-1 focus:border-transparent text-sm sm:text-base resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#2C1C0C] hover:bg-gray-500 text-white py-2 sm:py-3 px-6 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base hover:shadow-lg">
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
