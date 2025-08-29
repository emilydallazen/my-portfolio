import { useEffect } from "react"
import Navigation from "../components/Navigation"
import ProjectCard from "../components/ProjectCard"
import Footer from "../components/Footer"
import BackToPortfolioButton from "../components/BackToPortfolioButton"

export default function LogomarcasPage() {
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

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el))
    }
  }, [])
  const projects = [
    {
      id: 1,
      title: "Logo Café Verde",
      category: "Logomarca Alimentícia",
      description: "Identidade visual para cafeteria com conceito sustentável",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=green coffee logo design"
    },
    {
      id: 2,
      title: "Marca Estúdio de Yoga",
      category: "Logomarca Wellness",
      description: "Logo minimalista para estúdio de yoga e meditação",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=yoga studio logo design"
    },
    {
      id: 3,
      title: "Identidade Floricultura",
      category: "Logomarca Floral",
      description: "Marca delicada para loja de flores e arranjos",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=flower shop logo design"
    },
    {
      id: 4,
      title: "Logo Consultoria Digital",
      category: "Logomarca Corporativa",
      description: "Identidade moderna para empresa de consultoria em marketing",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=digital consulting logo design"
    },
    {
      id: 5,
      title: "Marca Artesanato Local",
      category: "Logomarca Artesanal",
      description: "Logo com traços manuais para ateliê de artesanato",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=handcraft artisan logo design"
    },
    {
      id: 6,
      title: "Identidade Pet Shop",
      category: "Logomarca Pet",
      description: "Marca amigável e colorida para loja de produtos pet",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=pet shop logo design"
    }
  ]

  return (
    <div className="min-h-screen vintage-texture">
      <Navigation />
      
      <main className="pt-32">
        <section className="py-20 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-left mb-16">
              <BackToPortfolioButton />
            </div>
            <div className="fade-in text-center mb-16">
              <h1 className="serif-font text-5xl font-bold text-foreground mb-6">Logomarcas</h1>
              <div className="w-24 h-1 bg-accent mx-auto mb-8" />
              <p className="sans-font text-xl text-muted-foreground max-w-2xl mx-auto">
                Criação de identidades visuais únicas e marcantes para diversos tipos de negócios
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
