import { useEffect } from "react"
import Navigation from "../components/Navigation"
import ProjectCard from "../components/ProjectCard"
import Footer from "../components/Footer"
import BackToPortfolioButton from "../components/BackToPortfolioButton"

export default function SitesPage() {
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
      title: "Site Estúdio de Yoga",
      category: "Site Institucional",
      description: "Site responsivo para estúdio de yoga com agendamento online",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=yoga studio website design"
    },
    {
      id: 2,
      title: "Portfólio Fotógrafo",
      category: "Site Portfólio",
      description: "Galeria online para exibir trabalhos de fotografia profissional",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=photographer portfolio website"
    },
    {
      id: 3,
      title: "Site Cafeteria Artesanal",
      category: "Site Comercial",
      description: "Website para cafeteria com cardápio digital e sistema de pedidos",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=coffee shop website design"
    },
    {
      id: 4,
      title: "Landing Page Curso Online",
      category: "Landing Page",
      description: "Página de conversão para curso de design gráfico online",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=online course landing page"
    },
    {
      id: 5,
      title: "Site Consultoria Empresarial",
      category: "Site Corporativo",
      description: "Website profissional para empresa de consultoria em negócios",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=business consulting website"
    },
    {
      id: 6,
      title: "Portfólio Artista Plástico",
      category: "Site Artístico",
      description: "Galeria online para exposição de obras de arte contemporânea",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=artist portfolio website design"
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
              <h1 className="serif-font text-5xl font-bold text-foreground mb-6">Sites</h1>
              <div className="w-24 h-1 bg-accent mx-auto mb-8" />
              <p className="sans-font text-xl text-muted-foreground max-w-2xl mx-auto">
                Desenvolvimento de sites modernos, responsivos e funcionais para diversos tipos de negócios
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
