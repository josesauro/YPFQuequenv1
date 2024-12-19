import React from 'react';

export function Header() {
  return (
    <header className="bg-[#136fb7] text-white py-4 px-4 fixed w-full z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">YPF Quequén</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#benefits" className="hover:text-gray-200 transition-colors">
                Beneficios
              </a>
            </li>
            <li>
              <a href="#calculator" className="hover:text-gray-200 transition-colors">
                Calculadora
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-200 transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}