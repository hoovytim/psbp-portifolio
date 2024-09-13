import React, { ReactNode } from 'react'

interface SidebarLayoutProps {
  children: ReactNode;
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">PSBP</h2>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#" className="text-gray-700 hover:text-gray-900">Sobre</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#" className="text-gray-700 hover:text-gray-900">Projetos</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#" className="text-gray-700 hover:text-gray-900">Contato</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Linha divisória preta */}
      <div className="w-px bg-black"></div>

      {/* Área de conteúdo principal */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Conteúdo Principal</h1>
        {children}
      </main>
    </div>
  )
}