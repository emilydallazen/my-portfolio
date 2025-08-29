import { useEffect } from "react"
import Navigation from "../components/Navigation"
import ProjectCard from "../components/ProjectCard"
import Footer from "../components/Footer"
import BackToPortfolioButton from "../components/BackToPortfolioButton"

export default function RedesSociaisPage() {
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
      title: "Feed Instagram Café Artesanal",
      category: "Feed Instagram",
      description: "Conjunto de posts para café com identidade visual coesa",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=instagram feed coffee shop design"
    },
    {
      id: 2,
      title: "Stories para Loja de Roupas",
      category: "Stories Instagram",
      description: "Templates de stories para promoções e lançamentos",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=instagram stories fashion design"
    },
    {
      id: 3,
      title: "Carrossel Educativo",
      category: "Post Carrossel",
      description: "Conteúdo educativo sobre sustentabilidade em múltiplos slides",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=educational carousel post design"
    },
    {
      id: 4,
      title: "Post Motivacional",
      category: "Post Único",
      description: "Design inspiracional com tipografia marcante",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=motivational instagram post design"
    },
    {
      id: 5,
      title: "Campanha Dia das Mães",
      category: "Campanha Sazonal",
      description: "Série de posts especiais para data comemorativa",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=mothers day social media campaign"
    },
    {
      id: 6,
      title: "Reels Cover Beauty",
      category: "Capa de Reels",
      description: "Capas padronizadas para reels de beleza e autocuidado",
      image: "/abstract-geometric-shapes.png?height=300&width=400&query=beauty reels cover design"
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
              <h1 className="serif-font text-5xl font-bold text-foreground mb-6">Artes para Redes Sociais</h1>
              <div className="w-24 h-1 bg-accent mx-auto mb-8" />
              <p className="sans-font text-xl text-muted-foreground max-w-2xl mx-auto">
                Criação de conteúdo visual para Instagram, Facebook e outras plataformas digitais
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
