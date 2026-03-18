"use client"

import { Card } from "@/components/ui/card"
import { Target, Lightbulb, Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function FeaturedDestinations() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="objetivos" className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">

        {/* OBJETIVO GENERAL */}
        <div 
          className={`max-w-4xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            Objetivo General
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Objetivo de la{" "}
            <span className="text-primary">Asignatura</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            El alumno construira un estilo de liderazgo para dirigir organizaciones
            con eficacia.
          </p>
        </div>


        {/* OBJETIVOS UNIDADES */}
        <div className="grid md:grid-cols-2 gap-8">

          <Card 
            className={`p-8 bg-card border-border hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold">Unidad 1</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              El alumno administrara eficientemente el tiempo para mejorar el desempeno
              y cumplimiento de objetivos personales y organizacionales.
            </p>
          </Card>

          <Card 
            className={`p-8 bg-card border-border hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold">Unidad 2</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              El alumno desarrollara habilidades de liderazgo a traves de identificar
              sus fortalezas y areas de oportunidad para su aplicacion personal y organizacional.
            </p>
          </Card>

        </div>


        {/* IMPORTANCIA */}
        <div 
          className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-95" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          
          <div className="relative p-10 md:p-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white text-sm font-medium mb-8">
              <Clock className="w-4 h-4" />
              Conoce mas
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white text-balance">
              La importancia de la Administracion del Tiempo
            </h3>

            <p className="max-w-3xl mx-auto leading-relaxed text-white/90 text-lg">
              La administracion del tiempo es el recurso mas valioso para el exito personal y profesional.
              Gestionarlo efectivamente no significa trabajar mas rapido, sino de forma inteligente,
              priorizando lo que aporta valor. Dominar esta habilidad aumenta la productividad,
              reduce el estres y transforma intenciones en logros tangibles.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {[
                { icon: Target, label: "Mayor productividad" },
                { icon: Lightbulb, label: "Menos estres" },
                { icon: Clock, label: "Logros tangibles" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white text-sm"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
