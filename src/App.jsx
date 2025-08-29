import { useState, useEffect } from 'react'
import Portfolio from './pages/Portfolio'
import SitesPage from './pages/SitesPage'
import ConvitesPage from './pages/ConvitesPage'
import RedesSociaisPage from './pages/RedesSociaisPage'
import LogomarcasPage from './pages/LogomarcasPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    // Função para navegar entre páginas
    window.navigateTo = (page) => {
      setCurrentPage(page)
      window.history.pushState({ page }, '', page === 'home' ? '/' : `/portfolio/${page}`)
    }

    // Lidar com botão voltar do navegador
    const handlePopState = (event) => {
      const page = event.state?.page || 'home'
      setCurrentPage(page)
    }

    window.addEventListener('popstate', handlePopState)

    // Verificar URL inicial
    const path = window.location.pathname
    if (path.includes('/portfolio/sites')) {
      setCurrentPage('sites')
    } else if (path.includes('/portfolio/convites')) {
      setCurrentPage('convites')
    } else if (path.includes('/portfolio/redes-sociais')) {
      setCurrentPage('redes-sociais')
    } else if (path.includes('/portfolio/logomarcas')) {
      setCurrentPage('logomarcas')
    }

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'sites':
        return <SitesPage />
      case 'convites':
        return <ConvitesPage />
      case 'redes-sociais':
        return <RedesSociaisPage />
      case 'logomarcas':
        return <LogomarcasPage />
      default:
        return <Portfolio />
    }
  }

  return renderPage()
}

export default App
