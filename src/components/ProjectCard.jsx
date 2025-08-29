export default function ProjectCard({ project }) {
  return (
    <div className="fade-in group">
      <div className="vintage-border polaroid-shadow bg-card p-4 transform hover:scale-105 transition-all duration-300 hover:rotate-1">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="text-center">
          <span className="inline-block bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-xs sans-font font-medium mb-2">
            {project.category}
          </span>
          <h3 className="serif-font text-lg font-semibold text-foreground mb-2">{project.title}</h3>
          <p className="sans-font text-sm text-muted-foreground mb-4">{project.description}</p>
          <button className="sans-font bg-secondary text-secondary-foreground px-4 py-2 vintage-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-lg text-sm font-medium">
            Acessar Site
          </button>
        </div>
      </div>
    </div>
  )
}
