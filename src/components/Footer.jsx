import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-gray-50 border-t border-gray-200/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 space-y-4 md:space-y-0 max-w-7xl mx-auto">
        <div className="font-serif text-lg text-gray-900 italic">
          The Celestial Editorial
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#"
            className="font-sans text-xs uppercase tracking-widest text-gray-500 hover:text-indigo-500 transition-colors ease-linear"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="font-sans text-xs uppercase tracking-widest text-gray-500 hover:text-indigo-500 transition-colors ease-linear"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="font-sans text-xs uppercase tracking-widest text-gray-500 hover:text-indigo-500 transition-colors ease-linear"
          >
            Help Center
          </a>
          <a
            href="#"
            className="font-sans text-xs uppercase tracking-widest text-gray-500 hover:text-indigo-500 transition-colors ease-linear"
          >
            Contact
          </a>
        </div>
        <div className="font-sans text-xs uppercase tracking-widest text-gray-400">
          © 2025 The Celestial Editorial. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
