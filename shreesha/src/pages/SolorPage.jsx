import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt, 
  faClock, 
  faSolarPanel, 
  faSun, 
  faBolt, 
  faHome, 
  faCar, 
  faWater 
} from '@fortawesome/free-solid-svg-icons'

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const SolarPage = () => {
  // Create refs for animations
  const heroRef = useRef(null)
  const offeringsRef = useRef(null)
  const benefitsRef = useRef(null)
  const contactRef = useRef(null)
  const partnersRef = useRef(null)

  // Refs for each section's elements
  const heroElementsRef = useRef([])
  const offeringCardsRef = useRef([])
  const benefitItemsRef = useRef([])
  const contactItemsRef = useRef([])
  const benefitsImageRef = useRef(null)
  const formRef = useRef(null)
  const partnerCardsRef = useRef([])

  // GSAP animations setup
  useEffect(() => {
    // Hero section animation
    const heroElements = heroElementsRef.current
    
    gsap.fromTo(heroElements, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5
      }
    )

    // Background zoom effect
    gsap.fromTo(heroRef.current.querySelector('.hero-bg'),
      { scale: 1.1 },
      { scale: 1, duration: 10, ease: "none" }
    )

    // Offerings section animation
    const offeringCards = offeringCardsRef.current
    
    offeringCards.forEach(card => {
      gsap.fromTo(card, 
        { y: 50, opacity: 0 },
        { 
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none none"
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        }
      )
    })

    // Benefits section animations
    const benefitItems = benefitItemsRef.current

    gsap.fromTo(benefitItems, 
      { y: 30, opacity: 0 },
      { 
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top bottom-=100",
        },
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.6,
        ease: "power2.out"
      }
    )

    // Benefits image animation
    gsap.fromTo(benefitsImageRef.current, 
      { x: 50, opacity: 0 },
      { 
        scrollTrigger: {
          trigger: benefitsImageRef.current,
          start: "top bottom-=100",
        },
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out"
      }
    )

    // Contact section animations
    const contactItems = contactItemsRef.current
    
    gsap.fromTo(contactItems, 
      { y: 30, opacity: 0 },
      { 
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top bottom-=100",
        },
        y: 0, 
        opacity: 1, 
        stagger: 0.15, 
        duration: 0.6,
        ease: "power2.out"
      }
    )

    // Contact form animation
    gsap.fromTo(formRef.current, 
      { y: 50, opacity: 0 },
      { 
        scrollTrigger: {
          trigger: formRef.current,
          start: "top bottom-=100",
        },
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power2.out",
        delay: 0.3
      }
    )

    // Partners section animations
    const partnerCards = partnerCardsRef.current
    
    gsap.fromTo(partnerCards, 
      { y: 20, opacity: 0 },
      { 
        scrollTrigger: {
          trigger: partnersRef.current,
          start: "top bottom-=100",
        },
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.5,
        ease: "power2.out"
      }
    )

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Helper function to add elements to refs
  const addToRefs = (ref) => (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el)
    }
  }

  // Helper for hover animations
  const createHoverAnimation = (element) => {
    const hoverIn = () => {
      gsap.to(element, { y: -10, duration: 0.3, ease: "power2.out" })
    }
    
    const hoverOut = () => {
      gsap.to(element, { y: 0, duration: 0.3, ease: "power2.out" })
    }
    
    return { onMouseEnter: hoverIn, onMouseLeave: hoverOut }
  }

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center justify-center bg-gradient-to-br from-green-50 to-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="hero-bg absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 
            ref={addToRefs(heroElementsRef)} 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Rooftop Solar Photovoltaic Systems
          </h1>
          <p 
            ref={addToRefs(heroElementsRef)} 
            className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto"
          >
            Harness the power of the sun and slash your electricity bills
          </p>
          <a
            ref={addToRefs(heroElementsRef)}
            href="#contact"
            className="inline-block px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg"
            onMouseEnter={(e) => {
              gsap.to(e.target, { scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)", duration: 0.3 })
            }}
            onMouseLeave={(e) => {
              gsap.to(e.target, { scale: 1, boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)", duration: 0.3 })
            }}
          >
            Get Your Free Consultation
          </a>
        </div>
      </section>

      {/* Offerings Section */}
      <section ref={offeringsRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Solar Solutions</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: faHome,
                title: "Rooftop Solar Systems",
                description: "Maximize your roof space with efficient solar panels"
              },
              {
                icon: faSun,
                title: "Ground Mounted Systems",
                description: "Ideal for properties with available land space"
              },
              {
                icon: faCar,
                title: "Solar Carports",
                description: "Protect vehicles while generating clean energy"
              },
              {
                icon: faWater,
                title: "Solar Water Pumps",
                description: "Sustainable irrigation for rural areas"
              },
              {
                icon: faBolt,
                title: "Building-integrated PV",
                description: "Seamless solar integration into building materials"
              },
              {
                icon: faSolarPanel,
                title: "Custom Solutions",
                description: "Tailored systems for unique energy needs"
              }
            ].map((item, index) => (
              <div
                key={index}
                ref={addToRefs(offeringCardsRef)}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                {...createHoverAnimation(`#offering-card-${index}`)}
                id={`offering-card-${index}`}
              >
                <div className="text-green-500 text-4xl mb-4">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6" ref={addToRefs(benefitItemsRef)}>
                Why Choose Rooftop Solar?
              </h2>
              <div className="w-20 h-1 bg-green-500 mb-8" ref={addToRefs(benefitItemsRef)} />
              
              <ul className="space-y-4">
                {[
                  "80% reduction in electricity bills",
                  "Quick installation with minimal disruption",
                  "25+ year system lifespan",
                  "Increase property value by 3-5%",
                  "Protection against rising energy costs",
                  "Low maintenance requirements",
                  "Government subsidies available",
                  "Positive environmental impact"
                ].map((benefit, index) => (
                  <li 
                    key={index}
                    className="flex items-start"
                    ref={addToRefs(benefitItemsRef)}
                  >
                    <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                      <FontAwesomeIcon icon={faBolt} className="text-sm" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              ref={benefitsImageRef}
              className="relative h-full min-h-[400px]"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center rounded-xl shadow-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Start Saving Today</h3>
                <p>Average ROI period: 3-5 years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                ref={addToRefs(contactItemsRef)}
              >
                Ready to Go Solar?
              </h2>
              <div className="w-20 h-1 bg-white mb-8" ref={addToRefs(contactItemsRef)} />
              
              <div className="space-y-6">
                <div 
                  className="flex items-start"
                  ref={addToRefs(contactItemsRef)}
                >
                  <div className="bg-white text-green-600 p-3 rounded-full mr-4">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Streams Energy Solutions</h3>
                    <p>Yamonete, Pune - 411040</p>
                    <p>Maharashtra, India</p>
                  </div>
                </div>

                <div 
                  className="flex items-start"
                  ref={addToRefs(contactItemsRef)}
                >
                  <div className="bg-white text-green-600 p-3 rounded-full mr-4">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Call Us</h3>
                    <p>+91 70209 86306</p>
                    <p>+91 68303 62489</p>
                  </div>
                </div>

                <div 
                  className="flex items-start"
                  ref={addToRefs(contactItemsRef)}
                >
                  <div className="bg-white text-green-600 p-3 rounded-full mr-4">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email Us</h3>
                    <p>streamsenergy@gmail.com</p>
                    <p>adhour.joshi@streamsenergy.com</p>
                  </div>
                </div>

                <div 
                  className="flex items-start"
                  ref={addToRefs(contactItemsRef)}
                >
                  <div className="bg-white text-green-600 p-3 rounded-full mr-4">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Working Hours</h3>
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={formRef}
              className="bg-white p-8 rounded-xl shadow-xl text-gray-800"
            >
              <h3 className="text-2xl font-bold mb-6">Get a Free Quote</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Your Mobile Number</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Your Message</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                    rows="4"
                    placeholder="Tell us about your solar needs"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-green-700 transition-colors"
                  onMouseEnter={(e) => gsap.to(e.target, { backgroundColor: "#15803d", duration: 0.3 })}
                  onMouseLeave={(e) => gsap.to(e.target, { backgroundColor: "#16a34a", duration: 0.3 })}
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-100" ref={partnersRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Trusted Partners</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto" />
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {["U-SOLAR", "NAMÈSTE CREDIT", "ORBITIAL", "KOR ENERGY"].map((partner, index) => (
              <div
                key={index}
                ref={addToRefs(partnerCardsRef)}
                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center min-w-[150px]"
                {...createHoverAnimation(`#partner-card-${index}`)}
                id={`partner-card-${index}`}
              >
                <span className="font-bold text-gray-800">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Streams Energy Solutions</h3>
              <p className="text-gray-400">Pioneering sustainable energy solutions for a brighter future.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Rooftop Solar</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Ground Mounted</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Solar Carports</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Solar Water Pumps</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <address className="not-italic text-gray-400 space-y-2">
                <p>Yamonete, Pune - 411040</p>
                <p>Maharashtra, India</p>
                <p>+91 70209 86306</p>
                <p>info@streamsenergy.com</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Streams Energy Solutions. All Rights Reserved.</p>
            <p className="mt-2">Powered By Lunfires Tech Solutions Pvt. Ltd.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SolarPage