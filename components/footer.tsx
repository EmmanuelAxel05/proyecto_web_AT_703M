"use client"

import Image from "next/image"
import Link from "next/link"
import { BookOpen, Wrench, Heart, Brain, Users, Home, Target, ClipboardCheck, ArrowUpRight } from "lucide-react"

const unidad1Links = [
  { href: "/unidad1/conceptos", label: "Conceptos básicos", icon: BookOpen },
  { href: "/unidad1/herramientas", label: "Herramientas del tiempo", icon: Wrench },
]

const unidad2Links = [
  { href: "/unidad2/autoestima", label: "Autoestima", icon: Heart },
  { href: "/unidad2/motivacion", label: "Motivación e inteligencia emocional", icon: Brain },
  { href: "/unidad2/liderazgo", label: "Liderazgo transformacional", icon: Users },
]

const navLinks = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "#objetivos", label: "Objetivos", icon: Target },
  { href: "/ejercicios", label: "Ejercicios", icon: ClipboardCheck },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* IDENTIDAD */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo-escuela.png"
                alt="Logo universidad"
                width={140}
                height={140}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <div>
              <h3 className="text-lg font-bold mb-2">
                Universidad Tecnológica de Nezahualcóyotl
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Administración del Tiempo - Plataforma académica diseñada para
                fortalecer la organización personal, la productividad y el liderazgo.
              </p>
            </div>
          </div>


          {/* UNIDAD 1 */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">1</span>
              </div>
              <h4 className="font-bold">Unidad 1</h4>
            </div>

            <ul className="space-y-3">
              {unidad1Links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200"
                  >
                    <link.icon className="w-4 h-4" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* UNIDAD 2 */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">2</span>
              </div>
              <h4 className="font-bold">Unidad 2</h4>
            </div>

            <ul className="space-y-3">
              {unidad2Links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200"
                  >
                    <link.icon className="w-4 h-4" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* NAVEGACION */}
          <div>
            <h4 className="font-bold mb-5">Navegación</h4>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200"
                  >
                    <link.icon className="w-4 h-4" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>


        {/* Barra inferior */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>2026 Derechos Reservados - Proyecto Academico</p>
            
            <div className="flex flex-wrap justify-center gap-2">
              {["Campos Ramirez Jose Antonio", "Corona Garcia Enrique Ernesto", "Reyes Rodriguez Oscar", "Vargas Torrijos Emmanuel Axel", "Zavala Espinosa Nicolle Chiquinkira"].map((name, index) => (
                <span key={name} className="inline-flex items-center">
                  <span className="px-2 py-1 rounded-md bg-secondary text-xs">{name}</span>
                  {index < 4 && <span className="mx-1 text-border">|</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

    </footer>
  )
}
