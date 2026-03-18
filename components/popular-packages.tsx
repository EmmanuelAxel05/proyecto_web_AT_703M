"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, Wrench, Heart, Brain, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const unidad1 = [
  {
    title: "Conceptos basicos de administracion del tiempo",
    image: "/conseptos.jpg",
    href: "/unidad1/conceptos",
    icon: BookOpen,
  },
  {
    title: "Herramientas para la administracion del tiempo",
    image: "/herramientas.jpg",
    href: "/unidad1/herramientas",
    icon: Wrench,
  },
]

const unidad2 = [
  {
    title: "Autoestima",
    image: "/autoestima.jpg",
    href: "/unidad2/autoestima",
    icon: Heart,
  },
  {
    title: "Motivacion e inteligencia emocional",
    image: "/motivacion.jpg",
    href: "/unidad2/motivacion",
    icon: Brain,
  },
  {
    title: "Liderazgo transformacional",
    image: "/liderazg.jpg",
    href: "/unidad2/liderazgo",
    icon: Users,
  },
]

function TopicCard({ item, index, isVisible }: { item: typeof unidad1[0], index: number, isVisible: boolean }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Card
      className={`w-full max-w-[360px] overflow-hidden transition-all duration-700 group cursor-pointer hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-3 border-border ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-52 overflow-hidden">
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 shimmer" />
        )}
        
        <img
          src={item.image}
          alt={item.title}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
        
        {/* Icon badge */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <item.icon className="w-5 h-5 text-primary" />
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="font-bold text-lg leading-tight text-balance">{item.title}</h3>

        <Link href={item.href}>
          <Button
            className="w-full rounded-xl cursor-pointer transition-all duration-300 bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:scale-[1.02]"
          >
            Explorar tema
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </Card>
  )
}

export function PopularPackages() {
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
    <section ref={sectionRef} id="temas" className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

        {/* TITULO GENERAL */}
        <div 
          className={`text-center space-y-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <BookOpen className="w-4 h-4" />
            Contenido Academico
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">
            Temas de la{" "}
            <span className="text-primary">materia</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Contenidos organizados por unidades para fortalecer la administracion del tiempo
            y el desarrollo de habilidades personales y de liderazgo.
          </p>
        </div>

        {/* UNIDAD 1 */}
        <div className="space-y-10">
          <div 
            className={`flex items-center justify-center gap-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-border" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">1</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Unidad 1</h3>
            </div>
            <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-border" />
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            {unidad1.map((item, index) => (
              <TopicCard key={item.title} item={item} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>

        {/* UNIDAD 2 */}
        <div className="space-y-10">
          <div 
            className={`flex items-center justify-center gap-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-border" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">2</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Unidad 2</h3>
            </div>
            <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-border" />
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            {unidad2.map((item, index) => (
              <TopicCard key={item.title} item={item} index={index + 2} isVisible={isVisible} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
