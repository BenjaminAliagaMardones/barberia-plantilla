import { useState } from 'react';

export default function Navbar({ logo = 'Logo', links = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  // Links por defecto si no se proporcionan
  const defaultLinks = [
    { text: 'Inicio', href: '#inicio' },
    { text: 'Servicios', href: '#servicios' },
    { text: 'Nosotros', href: '#nosotros' },
    { text: 'Contacto', href: '#contacto' },
  ];

  const navLinks = links.length > 0 ? links : defaultLinks;

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-heading font-bold text-primary-600">
              {logo}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {link.text}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
            >
              Cotizar
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
              aria-label="Menú"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </a>
            ))}
            <a
              href="#contacto"
              className="block px-3 py-2 rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700 text-center transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Cotizar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
