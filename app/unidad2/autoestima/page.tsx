"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, ChevronDown, ExternalLink, Play } from "lucide-react"
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

export default function AutoestimaPage() {
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
              src="/autoestima-bg.jpg"
              alt="Autoestima"
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
              <Heart className="w-4 h-4" />
              Unidad 2
            </div>

            <h1 
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance transition-all duration-500 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-primary">Autoestima</span>
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
              Acevedo Herrera Mario Alberto | Alarcón Vázquez David Ricardo |
              Hilario Monroy Luis Manuel | Perea Reyes Tania
            </p>
          </div>
        </section>

        {/* CONTENIDO */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">

            <ContentSection 
              title="Autoestima" 
              image="/autoestima-definicion.jpg"
              imagePosition="left"
              index={0}
            >
              <p>
                Es la percepción y valoración subjetiva que una persona tiene de sí misma, basada
                en la aceptación personal y en el autoconcepto, es decir, cómo se ve, se siente y se
                evalúa en relación con sus experiencias, habilidades y relaciones interpersonales.
              </p>
            </ContentSection>

            <ContentSection 
              title="Importancia de la autoestima" 
              image="/importancia-autoestima.jpg"
              imagePosition="right"
              index={1}
            >
              <p>
                La autoestima influye en la motivación y en la forma de enfrentar dificultades.
                Una autoestima sana genera seguridad y confianza; una autoestima baja provoca
                inseguridad, miedo al fracaso y dependencia de la aprobación externa.
              </p>
            </ContentSection>

            <ContentSection 
              title="Sentido de pertenencia" 
              image="/pertenencia.jpg"
              imagePosition="left"
              index={2}
            >
              <p>
                Es la sensación de conexión, seguridad y aceptación que experimenta un individuo
                al formar parte de un grupo, familia, organización o comunidad.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Identidad y conexión
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Seguridad y bienestar
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Compromiso
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Influencia
                </li>
              </ul>
            </ContentSection>

            <ContentSection 
              title="Implicación en el liderazgo" 
              image="/liderazgo.jpg"
              imagePosition="right"
              index={3}
            >
              <p>
                La autoestima y el sentido de pertenencia son pilares fundamentales para un
                liderazgo efectivo. Un líder seguro de sí mismo inspira confianza y fomenta un
                entorno cooperativo.
              </p>
              <p className="mt-4">
                Una alta autoestima impulsa la toma de decisiones y el manejo de crisis, mientras
                que el sentido de pertenencia motiva y compromete al equipo.
              </p>
            </ContentSection>

            <ContentSection 
              title="Factores que influyen en la autoestima" 
              image="/factores-autoestima.jpg"
              imagePosition="left"
              index={4}
            >
              <ul className="space-y-3">
                <li><strong className="text-foreground">Personales:</strong> Se relacionan con la manera en que la persona se percibe a sí misma.</li>
                <li><strong className="text-foreground">Familiares:</strong> El entorno familiar es clave, sobre todo en la infancia y adolescencia.</li>
                <li><strong className="text-foreground">Sociales:</strong> Influyen las relaciones con otras personas y la sociedad.</li>
                <li><strong className="text-foreground">Académicos y laborales:</strong> Relacionados con el desempeño y el reconocimiento.</li>
              </ul>
            </ContentSection>

            <ContentSection 
              title="Elementos que conforman la autoestima" 
              image="/elementos-autoestima.jpg"
              imagePosition="right"
              index={5}
            >
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="font-semibold text-foreground mb-2">Autoconocimiento</p>
                  <p className="text-sm">Es la capacidad de conocernos a nosotros mismos. Incluye reconocer nuestras fortalezas y debilidades, identificar nuestras emociones y saber qué nos gusta, qué nos molesta y qué nos motiva.</p>
                </div>
                <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                  <p className="font-semibold text-foreground mb-2">Autoconcepto</p>
                  <p className="text-sm">Es la imagen que tenemos de nosotros mismos. Se forma con lo que pensamos de quiénes somos, lo que creemos que valemos y la forma en que nos describimos.</p>
                </div>
                <div className="p-4 rounded-xl bg-chart-2/5 border border-chart-2/10">
                  <p className="font-semibold text-foreground mb-2">Competencia personal</p>
                  <p className="text-sm">Es la confianza que tenemos en nuestras propias habilidades. Tiene que ver con sentirnos capaces de enfrentar desafíos, solucionar problemas y aprender de los fracasos.</p>
                </div>
              </div>
            </ContentSection>

            <ContentSection 
              title="Fortalecimiento de la autoestima" 
              image="/fortalecer-autoestima.jpg"
              imagePosition="left"
              index={6}
            >
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground">Autoconocimiento:</strong> Identificar fortalezas y debilidades con honestidad.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground">Autovaloración:</strong> Reconocer logros, aunque sean pequeños.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground">Autocuidado:</strong> Mantener hábitos saludables (alimentación, ejercicio, descanso).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground">Pensamiento positivo:</strong> Sustituir la autocrítica excesiva por afirmaciones constructivas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground">Resiliencia:</strong> Aprender de los errores sin que definan la propia valía.</span>
                </li>
              </ul>
            </ContentSection>

            <ContentSection 
              title="Importancia en la vida personal y academica" 
              image="/vida-academica.jpg"
              imagePosition="right"
              index={7}
            >
              <p>
                Una autoestima sólida mejora la salud mental, las relaciones y la toma de decisiones.
                En el ámbito académico, los estudiantes con buena autoestima presentan mayor
                motivación, mejor rendimiento y resiliencia frente a la frustración.
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Vida personal:</strong> Una autoestima sólida mejora la salud mental, las relaciones y la toma de decisiones.</li>
                <li><strong className="text-foreground">Vida académica:</strong> Estudiantes con buena autoestima muestran mayor motivación, mejor rendimiento y resiliencia frente a la frustración.</li>
                <li><strong className="text-foreground">Desarrollo integral:</strong> Fomenta autonomía, creatividad y capacidad de liderazgo.</li>
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
                  src="https://www.youtube.com/embed/k8e9JOmzABo"
                  allowFullScreen
                  title="Video explicativo sobre autoestima"
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

              <div className={`overflow-hidden transition-all duration-500 ${showRefs ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                <Card className="p-8 glow-card text-sm space-y-4">
                  <p className="pl-8 -indent-8">
                    Baumeister, R. F., Campbell, J. D., Krueger, J. I., & Vohs, K. D. (2003). Does high self-esteem cause better performance, interpersonal success, happiness, or healthier lifestyles? <em>Psychological Science in the Public Interest, 4</em>(1), 1-44. https://doi.org/10.1111/1529-1006.01431
                  </p>
                  <p className="pl-8 -indent-8">
                    Branden, N. (1994). <em>Los seis pilares de la autoestima</em>. Paidos. https://www.penguinrandomhouse.com/books/558066/the-six-pillars-of-self-esteem-by-nathaniel-branden/
                  </p>
                  <p className="pl-8 -indent-8">
                    Coopersmith, S. (1967). <em>The antecedents of self-esteem</em>. W. H. Freeman. https://psycnet.apa.org/record/1968-02406-000
                  </p>
                  <p className="pl-8 -indent-8">
                    Deci, E. L., & Ryan, R. M. (2000). The "what" and "why" of goal pursuits: Human needs and the self-determination of behavior. <em>Psychological Inquiry, 11</em>(4), 227-268. https://selfdeterminationtheory.org/SDT/documents/2000_DeciRyan_PI.pdf
                  </p>
                  <p className="pl-8 -indent-8">
                    Maslow, A. H. (1943). A theory of human motivation. <em>Psychological Review, 50</em>(4), 370-396. https://doi.org/10.1037/h0054346
                  </p>
                  <p className="pl-8 -indent-8">
                    Northouse, P. G. (2021). <em>Leadership: Theory and practice</em> (9th ed.). SAGE Publications. https://us.sagepub.com/en-us/nam/leadership/book258064
                  </p>
                  <p className="pl-8 -indent-8">
                    Rosenberg, M. (1965). <em>Society and the adolescent self-image</em>. Princeton University Press. https://press.princeton.edu/books/paperback/9780691645408/society-and-the-adolescent-self-image
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
