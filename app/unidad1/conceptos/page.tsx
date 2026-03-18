"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, ChevronDown, ExternalLink, Play } from "lucide-react"
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
    const timer = setTimeout(() => setIsVisible(true), index * 150)
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

export default function ConceptosPage() {
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
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="/time-bg.jpg"
              alt="Administracion del tiempo"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>

          {/* Content */}
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
              <BookOpen className="w-4 h-4" />
              Unidad 1
            </div>

            <h1 
              className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance transition-all duration-500 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Conceptos Basicos de{" "}
              <span className="text-primary">Administracion del Tiempo</span>
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
              Barrera Gonzalez Angelica Yolotzin | Hernandez Ruiz Luis Enrique |
              Melgar Angeles Gabriela Sarahi | Mercado Mendez Estefani
            </p>
          </div>
        </section>

        {/* CONTENIDO */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">

            <ContentSection 
              title="Que es la administracion del tiempo?" 
              image="/time-definition.jpg"
              imagePosition="left"
              index={0}
            >
              <p>
                La administracion del tiempo es el proceso de organizar y utilizar el tiempo de manera adecuada para cumplir actividades, responsabilidades y objetivos de forma eficiente, evitando el desperdicio de tiempo.
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Objetivos:</strong> Definir que se quiere lograr a corto, mediano y largo plazo</li>
                <li><strong className="text-foreground">Organizacion:</strong> Ordenar actividades usando agendas, horarios o listas.</li>
                <li><strong className="text-foreground">Prioridades:</strong> Identificar que tareas son mas importantes o urgentes.</li>
                <li><strong className="text-foreground">Beneficios:</strong> Mayor productividad, mejor rendimiento y menos estres.</li>
              </ul>
            </ContentSection>

            <ContentSection 
              title="Beneficios" 
              image="/benefits.jpg"
              imagePosition="right"
              index={1}
            >
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Mayor productividad
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Mejor rendimiento academico
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Menor estres
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Cumplimiento de metas
                </li>
              </ul>
            </ContentSection>

            <ContentSection 
              title="Eficiencia" 
              image="/efficiency.jpg"
              imagePosition="left"
              index={2}
            >
              <p>
                Es la capacidad de realizar tareas o actividades de la mejor manera posible, utilizando la menor cantidad de recursos (como tiempo, energia o dinero). Se centra en hacer las cosas correctamente y de manera rapida.
              </p>
              <div className="space-y-3 mt-4">
                <p><strong className="text-foreground">Identifica lo que tienes que hacer</strong> - Por ejemplo: tareas, estudiar y trabajos.</p>
                <p><strong className="text-foreground">Ordena las actividades por importancia</strong> - Primero lo urgente y lo mas importante.</p>
                <p><strong className="text-foreground">Asigna un tiempo a cada actividad</strong> - Decide cuanto tiempo dedicaras a cada una.</p>
                <p><strong className="text-foreground">Evita distracciones</strong> - Guarda el celular y concentrate solo en una tarea.</p>
                <p><strong className="text-foreground">Cumple la actividad y revisa el resultado</strong> - Asi terminas a tiempo y con buena calidad.</p>
              </div>
            </ContentSection>

            <ContentSection 
              title="Efectividad" 
              image="/effectiveness.jpg"
              imagePosition="right"
              index={3}
            >
              <p>
                Es la capacidad de alcanzar los resultados deseados o cumplir los objetivos. Se enfoca en hacer las cosas correctas, es decir, realizar actividades que realmente conduzcan a la consecucion de las metas.
              </p>
              <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="font-semibold text-foreground mb-2">Ejemplo</p>
                <p>Si un estudiante quiere aprobar un examen, es efectivo cuando dedica su tiempo a estudiar los temas importantes y a practicar, en lugar de pasar horas haciendo actividades que no le ayudan. Asi logra su objetivo.</p>
              </div>
            </ContentSection>

            <ContentSection 
              title="Urgente vs Importante" 
              image="/priorities.jpg"
              imagePosition="left"
              index={4}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/10">
                  <p className="font-bold text-foreground mb-2">Urgente</p>
                  <p>Es todo aquello que:</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>- Requiere atencion inmediata</li>
                    <li>- Tiene un plazo cercano</li>
                    <li>- Genera presion</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="font-bold text-foreground mb-2">Importante</p>
                  <p>Es todo aquello que:</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>- Contribuye a metas u objetivos</li>
                    <li>- Tiene impacto a largo plazo</li>
                    <li>- No siempre es inmediato</li>
                  </ul>
                </div>
              </div>
            </ContentSection>

            <ContentSection 
              title="Mitos del tiempo" 
              image="/mitos.jpg"
              imagePosition="right"
              index={5}
            >
              <p>
                Creencia o idea aceptada socialmente como verdadera, carece de fundamento real o comprobacion objetiva.
              </p>
              <div className="space-y-4 mt-4">
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="font-medium text-foreground">"No tengo tiempo"</p>
                  <p className="text-sm">Cuando en realidad no organizamos bien nuestras actividades.</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="font-medium text-foreground">"Si estoy ocupado todo el dia, soy productivo"</p>
                  <p className="text-sm">Aunque no siempre se logran buenos resultados.</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="font-medium text-foreground">"Trabajo mejor bajo presion"</p>
                  <p className="text-sm">Cuando el estres puede afectar la calidad del trabajo.</p>
                </div>
              </div>
            </ContentSection>

            <ContentSection 
              title="Planeacion del tiempo" 
              image="/planeacion.jpg"
              imagePosition="left"
              index={6}
            >
              <p>
                La planeacion del tiempo es el proceso de organizar las actividades antes de realizarlas para aprovechar mejor cada dia; consiste en establecer objetivos claros, definir prioridades y asignar tiempos a cada tarea.
              </p>
              <p className="mt-4">
                Planear permite evitar la improvisacion y reducir el estres al tener mayor control de las actividades ademas ayuda a cumplir responsabilidades de forma ordenada. Una buena planeacion mejora la productividad y el logro de metas.
              </p>
              <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="font-semibold text-foreground mb-2">Herramientas de Administracion del Tiempo</p>
                <ul className="space-y-1 text-sm">
                  <li>- Agenda ejecutiva</li>
                  <li>- Matriz de administracion del tiempo</li>
                  <li>- Los cuatro cuadrantes de la matriz del tiempo</li>
                </ul>
              </div>
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
                  src="https://www.youtube.com/embed/9pPd7S8R96c"
                  allowFullScreen
                  title="Video explicativo sobre administracion del tiempo"
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
                    Allen, D. (2015). <em>Organizate con eficacia (Getting Things Done)</em>. Urano.
                  </p>
                  <p className="pl-8 -indent-8">
                    Covey, S. R. (2013). <em>Los 7 habitos de la gente altamente efectiva</em>. Paidos. https://www.planetadelibros.com
                  </p>
                  <p className="pl-8 -indent-8">
                    Drucker, P. F. (2002). <em>La efectividad ejecutiva</em>. HarperCollins. https://www.harpercollins.com
                  </p>
                  <p className="pl-8 -indent-8">
                    Drucker, P. F. (2004). <em>La efectividad ejecutiva</em>. HarperCollins.
                  </p>
                  <p className="pl-8 -indent-8">
                    Lago, S. (2010). <em>Gestion eficaz del tiempo</em>. Ediciones Diaz de Santos.
                  </p>
                  <p className="pl-8 -indent-8">
                    Macan, T. H. (1994). Time management: Test of a process model. <em>Journal of Applied Psychology, 79</em>(3), 381-391.
                  </p>
                  <p className="pl-8 -indent-8">
                    ProfeSaw. (2024, 14 de septiembre). Administracion del tiempo. <em>LASH UTRNG</em>. Recuperado el 17 de enero de 2026, de https://lash.utrng.edu.mx/?p=3582
                  </p>
                  <p className="pl-8 -indent-8">
                    Urrutia, S. M. (2013). Elementos del planificador - Administracion del tiempo [Presentacion]. <em>SlideShare</em>. https://es.slideshare.net/slideshow/admon-tiempo-elementos-planificador/27007636
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
