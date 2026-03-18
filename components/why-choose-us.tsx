"use client"

import {
  BookOpen,
  ClipboardCheck,
  BarChart3,
  Clock,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: BookOpen,
    title: "Contenido organizado",
    description:
      "Accede a los temas divididos por unidades para estudiar de forma estructurada y progresiva.",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: ClipboardCheck,
    title: "Ejercicios practicos",
    description:
      "Actividades interactivas que refuerzan el aprendizaje y permiten aplicar los conceptos vistos en clase.",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: BarChart3,
    title: "Seguimiento de progreso",
    description:
      "Visualiza tu desempeno y puntajes para identificar fortalezas y areas de mejora.",
    color: "from-chart-2/20 to-chart-2/5",
    iconColor: "text-chart-2",
  },
  {
    icon: Clock,
    title: "Acceso 24/7",
    description:
      "Consulta el material en cualquier momento y desde cualquier dispositivo, a tu propio ritmo.",
    color: "from-chart-4/20 to-chart-4/5",
    iconColor: "text-chart-4",
  },
]

export function WhyChooseUs() {
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
    <section ref={sectionRef} id="beneficios" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4" />
            Beneficios
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Beneficios de la{" "}
            <span className="text-primary">Plataforma</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Esta aplicacion esta disenada para apoyar tu aprendizaje,
            mejorar tu organizacion y fortalecer tus habilidades de liderazgo
            mediante recursos digitales y actividades practicas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative space-y-4">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
