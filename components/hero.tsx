"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Clock, Target, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <img
          src="/fondo2.png"
          alt="Instalaciones universitarias"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        
        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <div className="space-y-8">

          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Cuatrimestre 2026-1 | 7mo Cuatrimestre
          </div>

          {/* Identidad institucional */}
          <div 
            className={`space-y-2 text-sm md:text-base text-muted-foreground transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="font-semibold text-foreground tracking-wide">
              Universidad Tecnologica de Nezahualcoyotl
            </p>
            <p className="text-muted-foreground">Division de Informatica y Computacion</p>
            <p className="text-muted-foreground">Ingenieria en Desarrollo y Gestion de Software</p>
          </div>

          {/* Titulo principal */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
              <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
                Administracion del
              </span>
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Tiempo
              </span>
            </h1>
          </div>

          {/* Descripcion */}
          <p 
            className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Plataforma digital donde se concentran los contenidos, temas y
            actividades de la asignatura para fortalecer la organizacion,
            planeacion y productividad academica.
          </p>

          {/* Informacion academica */}
          <div 
            className={`flex items-center justify-center gap-2 text-sm text-muted-foreground transition-all duration-700 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p>
              <span className="font-semibold text-foreground">
                Mtro. Fernandez Hernandez Luis Manuel
              </span>
            </p>
          </div>

          {/* Botones */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link href="#temas">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-base font-semibold group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
              >
                <Target className="mr-2 h-5 w-5" />
                Ver Temas
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/ejercicios">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 text-base font-semibold border-2 bg-transparent hover:bg-primary/5 hover:border-primary hover:scale-105 transition-all duration-300"
              >
                <Clock className="mr-2 h-5 w-5" />
                Ir a Ejercicios
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div 
            className={`grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto transition-all duration-700 delay-600 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {[
              { value: "2", label: "Unidades" },
              { value: "5", label: "Temas" },
              { value: "3+", label: "Actividades" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <p className="text-xs uppercase tracking-widest">Scroll</p>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
