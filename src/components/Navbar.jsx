import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const isCheckout = location.pathname === '/checkout' || location.pathname === '/confirmation'

  const navLinks = isCheckout
    ? [
        { label: 'Home', href: '/' },
        { label: 'My Report', href: '/insights' },
        { label: 'Support', href: '/' },
      ]
    : [
        { label: 'Home', href: '/' },
        { label: 'How It Works', href: '/upload' },
        { label: 'Sample Report', href: '/sample-report' },
      ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 glass-nav border-b border-outline-variant/30">
      <div className="flex justify-between items-center px-8 h-20 max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-2xl font-serif italic tracking-tight hover:opacity-80 transition-opacity gradient-text"
        >
          The Alchemist
        </Link>

        <div className="hidden md:flex space-x-12 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {isCheckout ? (
          <button className="text-on-surface-variant p-2 hover:text-primary rounded-full transition-all">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        ) : (
          <Link
            to="/upload"
            className="editorial-gradient text-white px-8 py-3 rounded-full font-label font-bold text-xs tracking-widest uppercase hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Get Your Reading
          </Link>
        )}

        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  )
}
