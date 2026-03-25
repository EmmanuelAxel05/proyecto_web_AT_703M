"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Brain, ChevronDown, ExternalLink, Play } from "lucide-react"
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

export default function MotivacionPage() {
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
              src="/motivacion.jpg"
              alt="Motivacion e Inteligencia Emocional"
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
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium transition-all duration-500 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Brain className="w-4 h-4" />
              Unidad 2
            </div>

            <h1 
              className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance transition-all duration-500 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Motivacion e{" "}
              <span className="text-primary">Inteligencia Emocional</span>
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
              Barrera Pérez Marco Antonio | Castillo Alonso Javier |
              Cuín Arvizu Víctor Rey | Mello Corona Ángel Uriel | Solano Miranda Juan Jonathan
            </p>
          </div>
        </section>

        {/* CONTENIDO */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">

            <ContentSection 
              title="¿Qué es la Inteligencia Emocional? (IE)" 
              image="/def.jpg"
              imagePosition="left"
              index={0}
            >
              <p>
                Es la capacidad de percibir, comprender y manejar emociones propias y de otras personas.
              </p>
              <p className="mt-4 font-semibold text-foreground">Capacidad para:</p>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Reconocer nuestras emociones
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Comprender las emociones de los demás
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Regular nuestras reacciones
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Usar las emociones para tomar mejores decisiones
                </li>
              </ul>
            </ContentSection>

            <ContentSection 
              title="Características de la Inteligencia Emocional" 
              image="/caracteristicasie.jpg"
              imagePosition="right"
              index={1}
            >
              <ul className="space-y-3">
                <li><strong className="text-foreground">Autoconciencia:</strong> reconocer lo que siento y por qué.</li>
                <li><strong className="text-foreground">Autorregulación:</strong> controlar impulsos y reacciones.</li>
                <li><strong className="text-foreground">Empatía:</strong> comprender emociones de otras personas.</li>
                <li><strong className="text-foreground">Habilidades sociales:</strong> comunicación, trabajo en equipo y resolución de conflictos.</li>
                <li><strong className="text-foreground">Motivación interna:</strong> deseo de mejorar y alcanzar metas.</li>
              </ul>
            </ContentSection>

            <ContentSection 
              title="Influencia de la IE en el trabajo" 
              image="/influenciaIE.jpg"
              imagePosition="left"
              index={2}
            >
              <p className="font-semibold text-foreground mb-3">La inteligencia emocional favorece:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Mejor comunicación
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Menor conflicto laboral
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Mayor colaboración en equipos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Liderazgo más efectivo
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Mejor manejo del estrés
                </li>
              </ul>
            </ContentSection>

            <ContentSection 
              title="¿Qué es la motivación?" 
              image="/mot.jpg"
              imagePosition="right"
              index={3}
            >
              <p>
                La motivación es lo que activa, dirige y mantiene nuestra conducta hacia una meta. En el trabajo se refleja en energía, constancia, iniciativa, calidad del esfuerzo y compromiso.
              </p>
              <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="font-semibold text-foreground mb-2">Es la fuerza que:</p>
                <p className="text-sm">Mantiene la constancia hacia una meta</p>
              </div>
              <div className="mt-3 p-4 rounded-xl bg-accent/5 border border-accent/10">
                <p className="font-semibold text-foreground mb-2">En el trabajo se refleja en:</p>
                <p className="text-sm">Compromiso e Iniciativa</p>
              </div>
            </ContentSection>

            <ContentSection 
              title="Importancia de la Motivación en el Ámbito Laboral" 
              image="/importanciaIE.jpg"
              imagePosition="left"
              index={4}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="font-bold text-foreground mb-2">Cuando hay motivación:</p>
                  <ul className="text-sm space-y-1">
                    <li>- Aumenta la productividad</li>
                    <li>- Mejora la calidad del trabajo</li>
                    <li>- Hay mayor compromiso</li>
                    <li>- Disminuye la rotación de personal</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/10">
                  <p className="font-bold text-foreground mb-2">Cuando no hay motivación:</p>
                  <ul className="text-sm space-y-1">
                    <li>- Desinterés</li>
                    <li>- Conflictos</li>
                    <li>- Bajo desempeño</li>
                  </ul>
                </div>
              </div>
            </ContentSection>

            <ContentSection 
              title="Relación entre IE y liderazgo" 
              image="/relacionIEyLid.jpg"
              imagePosition="right"
              index={5}
            >
              <p className="font-semibold text-foreground mb-3">Un líder con inteligencia emocional:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Escucha y genera confianza
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Maneja conflictos sin dañar al equipo
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Da retroalimentación respetuosa
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Motiva y guía a su equipo
                </li>
              </ul>
              <p className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10 text-sm italic">
                El liderazgo no es mandar, es influir positivamente.
              </p>
            </ContentSection>

            <ContentSection 
              title="Oportunidades y Estrategias para la IE" 
              image="/oporyestrat.jpg"
              imagePosition="left"
              index={6}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="font-semibold text-foreground mb-2">Áreas de oportunidad en IE</p>
                  <ul className="text-sm space-y-1">
                    <li>- Autoconciencia emocional</li>
                    <li>- Control de impulsos</li>
                    <li>- Empatía</li>
                    <li>- Comunicación asertiva</li>
                    <li>- Manejo de conflictos</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                  <p className="font-semibold text-foreground mb-2">Estrategias para fortalecer la IE</p>
                  <ul className="text-sm space-y-1">
                    <li>- Autoevaluación emocional</li>
                    <li>- Pausas antes de reaccionar</li>
                    <li>- Escucha activa</li>
                    <li>- Retroalimentación respetuosa</li>
                    <li>- Práctica de la empatía</li>
                  </ul>
                </div>
              </div>
            </ContentSection>

            <ContentSection 
              title="Valores del Ser aplicados al tema" 
              image="/valoresIE.jpg"
              imagePosition="right"
              index={7}
            >
              <ul className="space-y-3">
                <li><strong className="text-foreground">Proactivo:</strong> propone soluciones y se anticipa.</li>
                <li><strong className="text-foreground">Respeto:</strong> regula emociones para no humillar ni explotar.</li>
                <li><strong className="text-foreground">Responsabilidad:</strong> cumple acuerdos y reconoce errores.</li>
                <li><strong className="text-foreground">Iniciativa:</strong> actua sin esperar empujon constante.</li>
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
                  src="https://www.youtube.com/embed/r0xbTr_18bs"
                  allowFullScreen
                  title="Video explicativo sobre motivacion e inteligencia emocional"
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

              <div className={`overflow-hidden transition-all duration-500 ${showRefs ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                <Card className="p-8 glow-card text-sm space-y-4">
                  <p className="pl-8 -indent-8">
                    Córdova, D. G., Flores, E. N., García, R. R., & Salvador, J. C. R. (s. f.). <em>¿Por qué es importante la inteligencia emocional? Ciencia UNAM. Recuperado el 10 de febrero de 2026,</em> de https://ciencia.unam.mx/leer/1504/-por-que-es-importante-lainteligencia-emocional
                  </p>
                  <p className="pl-8 -indent-8">
                    Equipo, N. (2025, October 24). <em>What is emotional intelligence and how does it apply to the workplace? Mental Health America.</em> https://mhanational.org/es/resources/what-is-emotional-intelligence-and-how-does-it-apply-to-theworkplace/
                  </p>
                  <p className="pl-8 -indent-8">
                    Regader, B. (2015, mayo 29). <em>¿Qué es la Inteligencia Emocional? Psicología y Mente.</em> https://psicologiaymente.com/inteligencia/inteligencia-emocional
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
