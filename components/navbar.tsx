"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 🎯 Links dinámicos según scroll
  const linkStyle = `
    text-sm font-medium transition-colors
    ${isScrolled ? "text-white/80 hover:text-white" : "text-black/80 hover:text-black"}
  `

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#019f60] text-white shadow-md"
          : "bg-transparent text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo + Info institucional */}
          <div className="flex items-center gap-3">

            <Image
              src="/logo-escuela.png"
              alt="Logo escuela"
              width={42}
              height={42}
            />

            <div className="leading-tight">
              <p
                className={`text-sm font-semibold transition-colors ${
                  isScrolled ? "text-white" : "text-black"
                }`}
              >
                Universidad Tecnológica de Nezahualcóyotl
              </p>

              <p
                className={`text-xs transition-colors ${
                  isScrolled ? "text-white/80" : "text-black/70"
                }`}
              >
                Administración del Tiempo
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
            <Link href="/" className={linkStyle}>Inicio</Link>
            <a href="#objetivos" className={linkStyle}>Objetivos</a>
            <a href="#temas" className={linkStyle}>Temas</a>
            <Link href="/ejercicios" className={linkStyle}>Ejercicios</Link>
            </div>

          {/* Mobile Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-white" : "text-black"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden border-t transition-colors ${
            isScrolled ? "bg-[#019f60] text-white" : "bg-white text-black"
          }`}
        >
          <div className="px-6 py-6 space-y-4">
            <Link href="/">Inicio</Link>
            <a href="#objetivos" className="block text-base font-medium">Objetivos</a>
            <a href="#temas" className="block text-base font-medium">Temas</a>
            <a href="/ejercicios" className="block text-base font-medium">Ejercicios</a>
          </div>
        </div>
      )}
    </nav>
  )
}
