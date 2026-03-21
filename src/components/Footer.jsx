export default function Footer() {
  return (
    <footer className="w-full py-6 border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 gap-3 max-w-7xl mx-auto">
        <div className="font-serif text-sm italic gradient-text">
          The Celestial Editorial
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {['Privacy Policy', 'Terms of Service', 'Help Center', 'Contact'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[10px] uppercase tracking-widest text-on-surface-variant/50 hover:text-primary transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="text-[10px] uppercase tracking-widest text-on-surface-variant/30">
          &copy; 2025 The Celestial Editorial
        </div>
      </div>
    </footer>
  )
}
