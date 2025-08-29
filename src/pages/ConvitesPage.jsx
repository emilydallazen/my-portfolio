import { useEffect } from "react"
import Navigation from "../components/Navigation"
import ProjectCard from "../components/ProjectCard"
import Footer from "../components/Footer"
import BackToPortfolioButton from "../components/BackToPortfolioButton"

export default function ConvitesPage() {
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
      title: "Convite de Casamento Vintage",
      category: "Convite de Casamento",
      description: "Convite elegante com elementos florais e tipografia clássica",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=vintage wedding invitation design"
    },
    {
      id: 2,
      title: "Festa de Aniversário Infantil",
      category: "Convite Infantil",
      description: "Convite colorido e divertido para festa temática de unicórnios",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=children birthday party invitation"
    },
    {
      id: 3,
      title: "Evento Corporativo",
      category: "Convite Empresarial",
      description: "Material gráfico para lançamento de produto empresarial",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=corporate event invitation design"
    },
    {
      id: 4,
      title: "Chá de Bebê Botanical",
      category: "Convite Chá de Bebê",
      description: "Design delicado com ilustrações botânicas e tons pastéis",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=botanical baby shower invitation"
    },
    {
      id: 5,
      title: "Festa de Formatura",
      category: "Convite de Formatura",
      description: "Convite elegante para celebração de conclusão de curso",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=graduation party invitation design"
    },
    {
      id: 6,
      title: "Workshop de Arte",
      category: "Divulgação de Evento",
      description: "Material promocional para workshop de técnicas artísticas",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=art workshop promotional design"
    }
  ]

  return (
    <div className="min-h-screen vintage-texture">
      <Navigation />
      
      <main className="pt-32">
        <section className="py-20 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="fade-in text-center mb-16">
              <h1 className="serif-font text-5xl font-bold text-foreground mb-6">Convites e Divulgações</h1>
              <div className="w-24 h-1 bg-accent mx-auto mb-8" />
              <p className="sans-font text-xl text-muted-foreground max-w-2xl mx-auto">
                Criação de convites personalizados e materiais de divulgação para eventos especiais
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
