import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const isCheckout = location.pathname === '/checkout' || location.pathname === '/confirmation'

  const navLinks = isCheckout
    ? [
        { label: 'My Readings', href: '/' },
        { label: 'Rituals', href: '/upload' },
        { label: 'Journal', href: '/insights' },
      ]
    : [
        { label: 'Journey', href: '/' },
        { label: 'Wisdom', href: '/insights' },
        { label: 'Oracle', href: '/upload' },
      ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-8 h-20 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-serif text-indigo-900 italic tracking-tight hover:opacity-80 transition-opacity"
        >
          The Alchemist
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`transition-all duration-300 ease-in-out ${
                  isActive
                    ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600'
                    : 'text-gray-600 hover:text-indigo-500'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* CTA Button */}
        {isCheckout ? (
          <button className="text-indigo-900 p-2 hover:bg-slate-50/50 rounded-full transition-all">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        ) : (
          <Link
            to="/upload"
            className="bg-gradient-to-br from-primary to-primary-dim text-on-primary px-8 py-3 rounded-full font-label font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            Start Reading
          </Link>
        )}

        {/* Mobile Menu Button */}
        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  )
}
