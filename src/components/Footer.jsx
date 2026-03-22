import { Link } from 'react-router-dom'

export default function Footer() {
  const links = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '#' },
  ]

  return (
    <footer className="w-full py-6 border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 gap-3 max-w-7xl mx-auto">
        <div className="font-serif text-sm italic gradient-text">
          The Alchemist
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {links.map((link) =>
            link.href.startsWith('/') ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-[10px] uppercase tracking-widest text-on-surface-variant/50 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-[10px] uppercase tracking-widest text-on-surface-variant/50 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            )
          )}
        </div>
        <div className="text-[10px] uppercase tracking-widest text-on-surface-variant/30">
          &copy; 2026 The Alchemist
        </div>
      </div>
    </footer>
  )
}
