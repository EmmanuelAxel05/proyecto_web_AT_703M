"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles, BookOpen } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Newsletter() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
        <div 
          className={`space-y-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Practica lo aprendido
          </div>

          {/* Frase motivacional */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
            El conocimiento se fortalece con la
            <span className="block mt-2 text-primary">practica constante</span>
          </h2>

          {/* Texto */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Refuerza lo aprendido en clase mediante actividades interactivas
            y evalua tu progreso dentro de la plataforma.
          </p>

          {/* Boton */}
          <Link href="/ejercicios">
            <Button
              size="lg"
              className="rounded-full px-10 h-14 text-base font-semibold gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 group"
            >
              <BookOpen className="w-5 h-5" />
              Ir a ejercicios
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

        </div>
      </div>
    </section>
  )
}
