"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, ChevronDown, ExternalLink, Play } from "lucide-react"
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

export default function LiderazgoPage() {
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
              src="/liderazg.jpg"
              alt="Liderazgo Transformacional"
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
              <Users className="w-4 h-4" />
              Unidad 2
            </div>

            <h1 
              className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance transition-all duration-500 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Liderazgo{" "}
              <span className="text-primary">Transformacional</span>
            </h1>

            <p 
              className={`text-muted-foreground transition-all duration-500 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Universidad Tecnologica de Nezahualcoyotl
            </p>

            <p 
              className={`text-sm text-muted-foreground transition-all duration-500 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Cervantes Melgarejo Daniela | Garcia Perez Marco Antonio | Perez Sandoval Israel Adan | Romero Guerrero Estrella | Valencia Ruiz Mitzi Lizeth
            </p>
          </div>
        </section>

        {/* CONTENIDO */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">

            <ContentSection 
              title="Introduccion" 
              image="/Introduccion.jpg"
              imagePosition="left"
              index={0}
            >
              <p>
                El liderazgo es una de las habilidades mas importantes dentro de un grupo, ya que influye directamente en la forma en que las personas trabajan, se comunican y alcanzan objetivos.
              </p>
            </ContentSection>

            <ContentSection 
              title="Estilos de Liderazgo" 
              image="/estilos.jpg"
              imagePosition="right"
              index={1}
            >
              <ul className="space-y-3 text-sm">
                <li><strong className="text-foreground">Liderazgo Autocratico:</strong> El lider toma todas las decisiones sin consultar al equipo, ejerciendo un control estricto.</li>
                <li><strong className="text-foreground">Liderazgo Democratico:</strong> El lider fomenta la participacion del equipo, escucha opiniones y toma decisiones considerando las ideas de los demas.</li>
                <li><strong className="text-foreground">Liderazgo Transaccional:</strong> Modelo basado en el intercambio entre lider y seguidor, utilizando recompensas y sanciones.</li>
                <li><strong className="text-foreground">Liderazgo Laissez-Faire:</strong> Los lideres permiten a sus seguidores autonomia para tomar sus propias decisiones.</li>
                <li><strong className="text-foreground">Liderazgo Situacional:</strong> Se adapta su estilo segun el nivel de competencia y motivacion de cada colaborador.</li>
                <li><strong className="text-foreground">Liderazgo Transformacional:</strong> Inspira y motiva a las personas para lograr cambios positivos y crecimiento.</li>
              </ul>
            </ContentSection>

            <ContentSection 
              title="Diferencia entre Lider y Jefe" 
              image="/lidyjefe.jpg"
              imagePosition="left"
              index={2}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="font-bold text-foreground mb-2">Lider</p>
                  <p className="text-sm">Guia y motiva a su equipo</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <p className="font-bold text-foreground mb-2">Jefe</p>
                  <p className="text-sm">Ordena y controla usando su autoridad</p>
                </div>
              </div>
            </ContentSection>

            <ContentSection 
              title="Habilidades de un Lider Transformacional" 
              image="/habilidades.jpg"
              imagePosition="right"
              index={3}
            >
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Inspirar y motivar a las personas para lograr cambios positivos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Enfocarse en las fortalezas de cada integrante del equipo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Crear una vision clara que oriente a todos hacia un mismo objetivo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Impulsar el crecimiento personal y profesional del equipo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Fomentar la innovacion, impulsando nuevas ideas y soluciones.</span>
                </li>
              </ul>
            </ContentSection>

            <ContentSection 
              title="Generar Cultura de Innovacion Continua" 
              image="/culturadeinov.jpg"
              imagePosition="left"
              index={4}
            >
              <p>
                Generar una cultura de innovacion continua consiste en fomentar un ambiente donde las personas propongan ideas nuevas, mejoren procesos y se adapten al cambio de forma constante.
              </p>
              <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="font-semibold text-foreground mb-2">Claves para lograrlo:</p>
                <ul className="text-sm space-y-1">
                  <li>- Mentalidad abierta al cambio</li>
                  <li>- Participacion de todos</li>
                  <li>- Aprendizaje continuo</li>
                  <li>- Aprender del error</li>
                  <li>- Comunicacion abierta</li>
                  <li>- Reconocer la innovacion</li>
                </ul>
              </div>
            </ContentSection>

            <ContentSection 
              title="Enfoque en Fortalezas" 
              image="/enfoque.jpg"
              imagePosition="right"
              index={5}
            >
              <p>
                El enfoque en fortalezas consiste en identificar y potenciar las habilidades, talentos y conocimientos de cada persona para impulsar la innovacion continua.
              </p>
              <p className="mt-4">
                Cuando se aprovechan las fortalezas individuales y del equipo, se generan mejores ideas, mayor creatividad y soluciones mas efectivas.
              </p>
            </ContentSection>

            <ContentSection 
              title="Construccion de una Cultura de Colaboracion y Servicio" 
              image="/construccion.jpg"
              imagePosition="left"
              index={6}
            >
              <p>
                La construccion de una cultura de colaboracion y servicio consiste en fomentar el trabajo en equipo, la ayuda mutua y la orientacion hacia apoyar a los demas.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="font-semibold text-foreground mb-2">Por que es importante?</p>
                  <ul className="text-sm space-y-1">
                    <li>- Mejora la convivencia</li>
                    <li>- Fomenta el respeto</li>
                    <li>- Reduce conflictos</li>
                    <li>- Forma personas integras</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                  <p className="font-semibold text-foreground mb-2">Como fomentarla?</p>
                  <ul className="text-sm space-y-1">
                    <li>- Ejemplo desde lideres</li>
                    <li>- Respetar normas</li>
                    <li>- Trabajo en equipo</li>
                    <li>- Dialogo y empatia</li>
                  </ul>
                </div>
              </div>
            </ContentSection>

            <ContentSection 
              title="Rejilla Administrativa" 
              image="/interesytareas.png"
              imagePosition="right"
              index={7}
            >
              <p>
                La rejilla administrativa, tambien llamada malla gerencial, es un modelo desarrollado por Robert Blake y Jane Mouton que evalua estilos de liderazgo en una cuadricula de 9x9.
              </p>
              <ul className="space-y-2 mt-4 text-sm">
                <li><strong className="text-foreground">1,1 Administracion empobrecida:</strong> minimo esfuerzo.</li>
                <li><strong className="text-foreground">9,1 Administracion autocratica:</strong> alta produccion, baja en personas.</li>
                <li><strong className="text-foreground">1,9 Club campestre:</strong> alta en personas, baja en produccion.</li>
                <li><strong className="text-foreground">5,5 Mitad de camino:</strong> equilibrio moderado.</li>
                <li><strong className="text-foreground">9,9 Estilo de equipo (ideal):</strong> alta en ambas dimensiones.</li>
              </ul>
            </ContentSection>

            <ContentSection 
              title="Empowerment" 
              image="/empowerment.png"
              imagePosition="left"
              index={8}
            >
              <p>
                El empowerment es una tecnica o estrategia utilizada en las organizaciones para dar poder a los empleados, haciendolos sentir motivados mediante la delegacion de autonomia y responsabilidad.
              </p>
              <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="font-semibold text-foreground mb-2">Sus beneficios:</p>
                <ul className="text-sm space-y-1">
                  <li>- Desarrollo de la confianza en uno mismo</li>
                  <li>- Capacidad para tomar decisiones</li>
                  <li>- Autonomia y responsabilidad personal</li>
                  <li>- Participacion activa en la sociedad</li>
                  <li>- Uso de habilidades para lograr metas</li>
                </ul>
              </div>
              <p className="mt-4 text-sm italic">
                El empowerment permite a las personas creer en si mismas y transformar su realidad.
              </p>
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
                  src="https://www.youtube.com/embed/w7NokCYHmik"
                  allowFullScreen
                  title="Video explicativo sobre liderazgo transformacional"
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
                    EAE Business School. (2025). <em>Que es el empowerment y como puede beneficiar a una empresa.</em> https://www.eaeprogramas.es/blog/negocio/empresa/que-es-el-empowerment-y-como-puede-beneficiar-una-empresa
                  </p>
                  <p className="pl-8 -indent-8">
                    ESIC Business & Marketing School. (s.f.). <em>Que es el liderazgo situacional? Caracteristicas y ventajas.</em> https://www.esic.edu/rethink/business/liderazgo-situacional-que-es-caracteristicas-y-ventajas-c
                  </p>
                  <p className="pl-8 -indent-8">
                    GoConqr. (2024). <em>Rejilla administrativa o grill gerencial.</em> https://www.goconqr.com/mapamental/1061857/rejilla-administrativa-grill-gerencial
                  </p>
                  <p className="pl-8 -indent-8">
                    Kuspit. (2025, junio 10). <em>Cultura organizacional basada en valores: Como alinearlos en las empresas.</em> https://blog.kuspit.com/notas/cultura-organizacional-basada-en-valores
                  </p>
                  <p className="pl-8 -indent-8">
                    National Society of Leadership and Success. (2022, July 21). <em>What is laissez-faire leadership?</em> https://www.nsls.org/blog/what-is-lassiez-faire-leadership
                  </p>
                  <p className="pl-8 -indent-8">
                    Repsol. (2023, septiembre 11). <em>Que es el liderazgo transformacional y sus caracteristicas.</em> https://www.repsol.com/es/energia-avanzar/personas/liderazgo-transformacional/index.cshtml
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
