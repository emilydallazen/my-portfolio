
import { useEffect, useState } from "react"
import Navigation from "../components/Navigation"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import PortfolioSection from "../components/PortfolioSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    // Fade in animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const fadeElements = document.querySelectorAll(".fade-in")
    fadeElements.forEach((el) => observer.observe(el))

    // Smooth scrolling for navigation
    const handleNavClick = (e) => {
      const target = e.target 
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
          setActiveSection(target.hash.slice(1))
        }
      }
    }

    const navLinks = document.querySelectorAll('nav a[href^="#"]')
    navLinks.forEach((link) => link.addEventListener("click", handleNavClick))

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el))
      navLinks.forEach((link) => link.removeEventListener("click", handleNavClick))
    }
  }, [])

  return (
    <div className="min-h-screen vintage-texture">
      <Navigation activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
