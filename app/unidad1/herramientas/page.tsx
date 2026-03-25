"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Wrench, ChevronDown, ExternalLink, Play } from "lucide-react"
import { useRouter } from "next/navigation"

function ContentSection({ 
  title, 
  children, 
  image, 
  imagePosition = "left",
  index 
}: { 
  title: string
  children: React.ReactNode
  image: string
  imagePosition?: "left" | "right"
  index: number
}) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100)
    return () => clearTimeout(timer)
  }, [index])

  const imageElement = (
    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
      {!imageLoaded && (
        <div className="absolute inset-0 shimmer aspect-[4/3]" />
      )}
      <img 
        src={image} 
        alt={title}
        onLoad={() => setImageLoaded(true)}
        className={`w-full aspect-[4/3] object-cover transition-all duration-700 group-hover:scale-105 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  )

  const contentElement = (
    <Card className="p-8 md:p-10 glow-card h-full">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-balance">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-4">
        {children}
      </div>
    </Card>
  )

  return (
    <div 
      className={`grid md:grid-cols-2 gap-8 items-stretch transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {imagePosition === "left" ? (
        <>
          {imageElement}
          {contentElement}
        </>
      ) : (
        <>
          {contentElement}
          {imageElement}
        </>
      )}
    </div>
  )
}

export default function HerramientasPage() {
  const router = useRouter()
  const [showRefs, setShowRefs] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <Navbar />

      <main className="bg-background">

        {/* HERO */}
        <section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/fondoherramientas.jpg"
              alt="Herramientas del tiempo"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 space-y-6">
            <Button
              variant="outline"
              onClick={() => router.back()}
              className={`group hover:border-primary hover:text-primary transition-all duration-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Volver
            </Button>

            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium transition-all duration-500 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Wrench className="w-4 h-4" />
              Unidad 1
            </div>

            <h1 
              className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance transition-all duration-500 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Herramientas para la{" "}
              <span className="text-primary">Administración del Tiempo</span>
            </h1>

            <p 
              className={`text-muted-foreground transition-all duration-500 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Universidad Tecnológica de Nezahualcóyotl
            </p>

            <p 
              className={`text-sm text-muted-foreground transition-all duration-500 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Alonso Ramírez Erika Quetzalli | Durán Rodríguez Fernando Daniel |
              Delgado Pineda Sergio Alberto | González Martínez Luis Enrique | Manjarrez Vázquez Alfredo de Jesús
            </p>
          </div>
        </section>

        {/* CONTENIDO */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">

            <ContentSection 
              title="Introducción" 
              image="/intro.jpg"
              imagePosition="left"
              index={0}
            >
              <p>
                La administración del tiempo es esencial para organizar actividades,
                cumplir plazos y mejorar el rendimiento académico de forma eficiente.
              </p>
            </ContentSection>

            <ContentSection 
              title="Enfoques del tiempo" 
              image="/enfoques.jpg"
              imagePosition="right"
              index={1}
            >
              <p>Existen dos enfoques principales:</p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Tiempo de respuesta
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Tiempo discrecional
                </li>
              </ul>
              <p className="mt-4">Ambos influyen directamente en la productividad.</p>
            </ContentSection>

            <ContentSection 
              title="Tiempo de respuesta vs discrecional" 
              image="/comparacion.jpg"
              imagePosition="left"
              index={2}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/10">
                  <p className="font-bold text-foreground mb-2">Tiempo de respuesta</p>
                  <ul className="text-sm space-y-1">
                    <li>- Situaciones imprevistas</li>
                    <li>- Reactivo</li>
                    <li>- Genera presion</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="font-bold text-foreground mb-2">Tiempo discrecional</p>
                  <ul className="text-sm space-y-1">
                    <li>- Planeado</li>
                    <li>- Enfoque consciente</li>
                    <li>- Orientado a objetivos</li>
                  </ul>
                </div>
              </div>
            </ContentSection>

            <ContentSection 
              title="Organización - Ejecución - Resultado" 
              image="/organizacion.jpg"
              imagePosition="right"
              index={3}
            >
              <div className="space-y-3">
                <p><strong className="text-foreground">Organización:</strong> priorizar tareas y planificar actividades.</p>
                <p><strong className="text-foreground">Ejecución:</strong> trabajar por bloques y reducir distracciones.</p>
                <p><strong className="text-foreground">Resultado:</strong> menos estrés y mejor rendimiento.</p>
              </div>
            </ContentSection>

            <ContentSection 
              title="Principio 10-90" 
              image="/pareto.jpg"
              imagePosition="left"
              index={4}
            >
              <p>
                Solo el 10% de las tareas genera el 90% de los resultados.
                Por ello se deben priorizar actividades de alto impacto.
              </p>
            </ContentSection>

            <ContentSection 
              title="Ciclo de productividad" 
              image="/ciclo.jpg"
              imagePosition="right"
              index={5}
            >
              <p>
                Alternar concentracion intensa con descansos cortos.
                Evita agotamiento y mantiene un rendimiento sostenido.
              </p>
            </ContentSection>

            <ContentSection 
              title="Ley de Parkinson" 
              image="/parkinson.jpg"
              imagePosition="left"
              index={6}
            >
              <p>El trabajo se expande para llenar el tiempo disponible.</p>
              <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="font-semibold text-foreground mb-2">Solución:</p>
                <ul className="text-sm space-y-1">
                  <li>- Establecer plazos cortos</li>
                  <li>- Dividir tareas</li>
                  <li>- Evitar tiempos excesivos</li>
                </ul>
              </div>
            </ContentSection>

            <ContentSection 
              title="Herramientas de gestión" 
              image="/delegacion.jpg"
              imagePosition="right"
              index={7}
            >
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Delegación
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Manejo de interrupciones
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Asertividad
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Gestión del estrés
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Solución de problemas
                </li>
              </ul>
            </ContentSection>

            <ContentSection 
              title="Reuniones de trabajo efectivas" 
              image="/reuniones.jpg"
              imagePosition="left"
              index={8}
            >
              <p className="font-semibold text-foreground mb-3">Características clave:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Horarios definidos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Objetivo claro
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Agenda estructurada
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Informacion previa
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Requerimientos listos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Minuta de acuerdos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Cierre formal
                </li>
              </ul>
            </ContentSection>

            {/* VIDEO */}
            <section className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Play className="w-4 h-4" />
                Video Explicativo
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold">Aprende visualmente</h2>

              <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/RRdr5GHtcKk"
                  allowFullScreen
                  title="Video explicativo sobre herramientas"
                />
              </div>
            </section>

            {/* REFERENCIAS */}
            <section className="space-y-6">
              <div className="text-center">
                <Button
                  onClick={() => setShowRefs(!showRefs)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  {showRefs ? "Ocultar referencias" : "Mostrar referencias"}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showRefs ? "rotate-180" : ""}`} />
                </Button>
              </div>

              <div className={`overflow-hidden transition-all duration-500 ${showRefs ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <Card className="p-8 glow-card text-sm space-y-4">
                  <p className="pl-8 -indent-8">
                    Guías BibUpo. (s. f.). <em>Planificación y gestión del tiempo: Herramientas, aplicaciones y software</em>.
                    https://guiasbib.upo.es/planificacion-y-gestiondel-tiempo/herramientas-aplicaciones-y-software
                  </p>
                  <p className="pl-8 -indent-8">
                    33 herramientas de productividad y gestion del tiempo. (s. f.). https://cultumatica.com/herramientasproductividad-gestion-tiempo/
                  </p>
                  <p className="pl-8 -indent-8">
                    Drucker, P. F. (2007). <em>La gestión eficaz</em> (Ed. revisada). Editorial Sudamericana.
                  </p>
                  <p className="pl-8 -indent-8">
                    Allen, D. (2015). <em>Organízate con eficacia: Getting Things Done</em> (Ed. actualizada). Ediciones Urano.
                  </p>
                  <p className="pl-8 -indent-8">
                    Macan, T. H. (1994). Time management: Test of a process model. <em>Journal of Applied Psychology</em>.
                  </p>
                  <p className="pl-8 -indent-8">
                    Claessens, B. J. C., van Eerde, W., Rutte, C. G., & Roe, R. A. (2007). A review of the time management literature. <em>Personnel Review</em>.
                  </p>
                  <p className="pl-8 -indent-8">
                    Laoyan, S. (2025, febrero 21). Qué es el principio de Pareto o la regla 80/20. <em>Asana</em>. https://asana.com/es/resources/pareto-principle-80-20-rule
                  </p>
                  <p className="pl-8 -indent-8">
                    Ortiz, N. (2025, noviembre 20). Gestión del tiempo en el trabajo: La guía definitiva de técnicas y estrategias. <em>WorkMeter</em>. https://www.workmeter.com/blog/gestion-deltiempo-trabajo/
                  </p>
                </Card>
              </div>
            </section>

          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
