import React, { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import DarkModeToggle from './dark_mode'


// Componentes para diferentes "páginas"
const Home = () => (
  <div>
    
    <h2 className="text-2xl font-bold mb-4 dark:text-slate-100 transition-colors duration-300 ease-in-out"> PSBP (Pedro santarosa Brutcho picoli) </h2>
    <p className='dark:text-white transition-colors duration-300 ease-in-out'>Bem vindo a o meu portifolio!, use a barra lateral para se navegar </p>
  </div>
)

const About = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4 transition-colors duration-300 ease-in-out dark:text-white">Sobre</h2>
    <p className='transition-colors duration-300 ease-in-out dark:text-white'>Esta é a página sobre nossa empresa.</p>
  </div>
)

const Contact = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4 transition-colors duration-300 ease-in-out dark:text-white">Contato</h2>
    <p className='transition-colors duration-300 ease-in-out dark:text-white'>Entre em contato conosco através deste formulário.</p>
  </div>
)

export default function DynamicContent() {
  const [currentPage, setCurrentPage] = useState('home')

  // Função para renderizar o conteúdo baseado na página atual
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-slate-600 transition-colors duration-300 ease-in-out">
      {/* Sidebar */}
      <aside className=" w-64 bg-white shadow-md dark: bg-white transition-colors duration-300 ease-in-out dark:bg-slate-600 white:bg-white">
        <nav className="p-4 transition-colors duration-300 ease-in-out">
        <DarkModeToggle />
          <ul>
            <li className="mb-2 transition-colors duration-300 ease-in-out">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setCurrentPage('home')
                }}
                className="text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-300 ease-in-out"
              >
                PSBP
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setCurrentPage('about')
                }}
                className="text-xl font-semibold text-gray-800 transition-colors duration-300 ease-in-out dark:text-white"
              >
                Sobre
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setCurrentPage('contact')
                }}
                className="text-xl font-semibold text-gray-800 transition-colors duration-300 ease-in-out dark:text-white"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
        
      </aside>
      

      {/* Linha divisória preta */}
      <div className="w-px bg-black"></div>

      {/* Área de conteúdo principal */}
      <main className="flex-1 p-8 overflow-y-auto transition-colors duration-300 ease-in-out">
        {renderContent()}
      </main>
    </div>
  )
}

