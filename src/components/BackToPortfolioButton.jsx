export default function BackToPortfolioButton() {
  const handleBackClick = () => {
    if (window.navigateTo) {
      window.navigateTo('home')
    }
  }

  return (
    <div className="w-full mb-12">
      <button 
        onClick={handleBackClick}
        className="sans-font bg-primary text-primary-foreground px-6 py-3 vintage-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-lg font-medium"
      >
        ← Voltar ao Portfólio
      </button>
    </div>
  )
}
