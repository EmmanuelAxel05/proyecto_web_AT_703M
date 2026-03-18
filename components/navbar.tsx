"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, ChevronDown, BookOpen, Wrench, Heart, Brain, Users } from "lucide-react"
import Link from "next/link"

const unidad1Links = [
  { href: "/unidad1/conceptos", label: "Conceptos basicos", icon: BookOpen },
  { href: "/unidad1/herramientas", label: "Herramientas", icon: Wrench },
]

const unidad2Links = [
  { href: "/unidad2/autoestima", label: "Autoestima", icon: Heart },
  { href: "/unidad2/motivacion", label: "Motivacion e inteligencia emocional", icon: Brain },
  { href: "/unidad2/liderazgo", label: "Liderazgo transformacional", icon: Users },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkStyle = `
    text-sm font-medium transition-all duration-300 relative
    after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-current
    after:transition-all after:duration-300 hover:after:w-full
    ${isScrolled ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-foreground"}
  `

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg shadow-primary/20"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo + Info institucional */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo-escuela.png"
                alt="Logo escuela"
                width={44}
                height={44}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="leading-tight">
              <p
                className={`text-sm font-bold transition-colors duration-300 ${
                  isScrolled ? "text-white" : "text-foreground"
                }`}
              >
                Universidad Tecnologica de Nezahualcoyotl
              </p>

              <p
                className={`text-xs transition-colors duration-300 ${
                  isScrolled ? "text-white/80" : "text-muted-foreground"
                }`}
              >
                Administracion del Tiempo
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className={linkStyle}>Inicio</Link>
            <a href="#objetivos" className={linkStyle}>Objetivos</a>
            
            {/* Dropdown Unidad 1 */}
            <div className="relative group">
              <button 
                className={`${linkStyle} flex items-center gap-1`}
                onMouseEnter={() => setActiveDropdown("unidad1")}
              >
                Unidad 1
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              <div 
                className={`absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="bg-card border border-border rounded-xl shadow-xl overflow-hidden min-w-[280px]">
                  {unidad1Links.map((link, index) => (
                    <Link 
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-card-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Dropdown Unidad 2 */}
            <div className="relative group">
              <button 
                className={`${linkStyle} flex items-center gap-1`}
                onMouseEnter={() => setActiveDropdown("unidad2")}
              >
                Unidad 2
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              <div 
                className={`absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="bg-card border border-border rounded-xl shadow-xl overflow-hidden min-w-[320px]">
                  {unidad2Links.map((link, index) => (
                    <Link 
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-card-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <a href="#temas" className={linkStyle}>Temas</a>
            
            <Link 
              href="/ejercicios" 
              className={`
                px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                ${isScrolled 
                  ? "bg-white text-primary hover:bg-white/90 hover:scale-105 shadow-lg" 
                  : "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-md"
                }
              `}
            >
              Ejercicios
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? "text-white hover:bg-white/10" 
                : "text-foreground hover:bg-muted"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                }`} 
              />
              <X 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                }`} 
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`border-t transition-colors duration-300 ${
            isScrolled 
              ? "bg-primary/95 border-white/10 text-white" 
              : "bg-background border-border text-foreground"
          }`}
        >
          <div className="px-6 py-6 space-y-1">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium hover:bg-primary/10 transition-colors"
            >
              Inicio
            </Link>
            <a 
              href="#objetivos" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium hover:bg-primary/10 transition-colors"
            >
              Objetivos
            </a>
            
            {/* Mobile Unidad 1 */}
            <div>
              <button
                onClick={() => toggleDropdown("mobile-unidad1")}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium hover:bg-primary/10 transition-colors"
              >
                Unidad 1
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === "mobile-unidad1" ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === "mobile-unidad1" ? "max-h-40" : "max-h-0"}`}>
                <div className="pl-4 space-y-1 py-2">
                  {unidad1Links.map((link) => (
                    <Link 
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm opacity-80 hover:opacity-100 hover:bg-primary/10 transition-all"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Unidad 2 */}
            <div>
              <button
                onClick={() => toggleDropdown("mobile-unidad2")}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium hover:bg-primary/10 transition-colors"
              >
                Unidad 2
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === "mobile-unidad2" ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === "mobile-unidad2" ? "max-h-48" : "max-h-0"}`}>
                <div className="pl-4 space-y-1 py-2">
                  {unidad2Links.map((link) => (
                    <Link 
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm opacity-80 hover:opacity-100 hover:bg-primary/10 transition-all"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <a 
              href="#temas" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium hover:bg-primary/10 transition-colors"
            >
              Temas
            </a>
            
            <Link 
              href="/ejercicios"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block mt-4 px-4 py-3 rounded-xl text-base font-semibold text-center transition-all ${
                isScrolled 
                  ? "bg-white text-primary" 
                  : "bg-primary text-primary-foreground"
              }`}
            >
              Ir a Ejercicios
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
