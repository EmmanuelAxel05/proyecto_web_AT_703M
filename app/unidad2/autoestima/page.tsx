"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type SectionProps = {
  title: string
  text: React.ReactNode
  img: string
  reverse?: boolean
}

export default function AutoestimaPage() {
  const [showRefs, setShowRefs] = useState(false)

  const Section = ({ title, text, img, reverse = false }: SectionProps) => (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {!reverse && (
        <img
          src={img}
          alt={title}
          className="rounded-2xl shadow-xl w-full"
        />
      )}

      <Card className="p-10 glow-card">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        {text}
      </Card>

      {reverse && (
        <img
          src={img}
          alt={title}
          className="rounded-2xl shadow-xl w-full"
        />
      )}
    </div>
  )

  return (
    <>
      <Navbar />

      <main className="bg-background">

        {/* ================= HERO ================= */}
        <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-muted/30 to-background">
          <img
            src="/autoestima-bg.jpg"
            alt="Autoestima"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />

          <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-4">
            <p className="text-xl tracking-wide text-muted-foreground">Unidad 2</p>

            <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
              Autoestima
            </h1>

            <p className="text-muted-foreground">
              Universidad Tecnológica de Nezahualcóyotl
            </p>

            <p className="text-sm text-muted-foreground">
              Acevedo Herrera Mario Alberto · Alarcón Vázquez David Ricardo ·
              Hilario Monroy Luis Manuel · Perea Reyes Tania
            </p>
          </div>
        </section>

        {/* ================= CONTENIDO ================= */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-28">

            <Section
              title="Autoestima"
              img="/autoestima-definicion.jpg"
              text={
                <p>
                  Es la percepción y valoración subjetiva que una persona tiene de sí misma, basada
                  en la aceptación personal y en el autoconcepto, es decir, cómo se ve, se siente y se
                  evalúa en relación con sus experiencias, habilidades y relaciones interpersonales.
                </p>
              }
            />

            <Section
              title="Importancia de la autoestima"
              img="/importancia-autoestima.jpg"
              reverse
              text={
                <p>
                  La autoestima influye en la motivación y en la forma de enfrentar dificultades.
                  Una autoestima sana genera seguridad y confianza; una autoestima baja provoca
                  inseguridad, miedo al fracaso y dependencia de la aprobación externa.
                </p>
              }
            />

            <Section
              title="Sentido de pertenencia"
              img="/pertenencia.jpg"
              text={
                <>
                  <p>
                  Es la sensación de conexión, seguridad y aceptación que experimenta un individuo
                  al formar parte de un grupo, familia, organización o comunidad.
                </p>
                <ul className="list-disc ml-5 mt-4 space-y-1">
                  <li>Identidad y conexión</li>
                  <li>Seguridad y bienestar</li>
                  <li>Compromiso</li>
                  <li>Influencia</li>
                </ul>
                </>
              }
            />

            <Section
              title="Implicación en el liderazgo"
              img="/liderazgo.jpg"
              reverse
              text={
                <>
                  <p>
                  La autoestima y el sentido de pertenencia son pilares fundamentales para un
                  liderazgo efectivo. Un líder seguro de sí mismo inspira confianza y fomenta un
                  entorno cooperativo.
                </p>
                <p className="mt-4">
                  Una alta autoestima impulsa la toma de decisiones y el manejo de crisis, mientras
                  que el sentido de pertenencia motiva y compromete al equipo.
                </p>
                </>
              }
            />

            <Section
              title="Factores que influyen en la autoestima"
              img="/factores-autoestima.jpg"
              text={
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>Personales:</strong> Se relacionan con la manera en que la persona se percibe a sí misma</li>
                  <li><strong>Familiares:</strong> El entorno familiar es clave, sobre todo en la infancia y adolescencia.</li>
                  <li><strong>Sociales:</strong> Influyen las relaciones con otras personas y la sociedad.</li>
                  <li><strong>Académicos y laborales:</strong> Relacionados con el desempeño y el reconocimiento.</li>
                </ul>
              }
            />

            <Section
              title="Elementos que conforman la autoestima"
              img="/elementos-autoestima.jpg"
              reverse
              text={
                <ul className="space-y-4">
                  <strong>Autoconocimiento</strong> <br />
                  Es la capacidad de conocernos a nosotros mismos. Incluye reconocer nuestras fortalezas y debilidades, identificar nuestras emociones y saber qué nos gusta, qué nos molesta y qué nos motiva.
                  <br /><br />
                  <strong>Autoconcepto</strong><br />
                  Es la imagen que tenemos de nosotros mismos. Se forma con lo que pensamos de quiénes somos, lo que creemos que valemos y la forma en que nos describimos.
                  <br /><br />
                  <strong>Competencia personal</strong><br />
                  Es la confianza que tenemos en nuestras propias habilidades. Tiene que ver con sentirnos capaces de enfrentar desafíos, solucionar problemas y aprender de los fracasos.
                  <br /><br />
                </ul>
              }
            />

            <Section
              title="Fortalecimiento de la autoestima"
              img="/fortalecer-autoestima.jpg"
              text={
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>Autoconocimiento:</strong> Identificar fortalezas y debilidades con honestidad.</li>
                  <li><strong>Autovaloración:</strong> Reconocer logros, aunque sean pequeños</li>
                  <li><strong>Autocuidado:</strong> Mantener hábitos saludables (alimentación, ejercicio, descanso).</li>
                  <li><strong>Pensamiento positivo:</strong> Sustituir la autocrítica excesiva por afirmaciones constructivas.</li>
                  <li><strong>Resiliencia:</strong> Aprender de los errores sin que definan la propia valía.</li>
                </ul>
              }
            />

            <Section
              title="Importancia en la vida personal y académica"
              img="/vida-academica.jpg"
              reverse
              text={
                <ul className="list-disc ml-5 space-y-1">
                  <p>
                  Una autoestima sólida mejora la salud mental, las relaciones y la toma de decisiones.
                  En el ámbito académico, los estudiantes con buena autoestima presentan mayor
                  motivación, mejor rendimiento y resiliencia frente a la frustración.
                  <li><strong>Vida personal: </strong>Una autoestima sólida mejora la salud mental, las relaciones y la toma de decisiones</li>
                  <li><strong>Vida académica: </strong>Estudiantes con buena autoestima muestran mayor motivación, mejor rendimiento y resiliencia frente a la frustración.</li>
                  <li><strong>Desarrollo integral: </strong>Fomenta autonomía, creatividad y capacidad de liderazgo.</li>
                </p>
                </ul>
              }
            />

            {/* VIDEO */}
            <section className="text-center space-y-6">
              <h2 className="text-4xl font-bold">Video explicativo</h2>

              <div className="aspect-video max-w-4xl mx-auto">
                <iframe
                  className="w-full h-full rounded-2xl shadow-xl"
                  src="https://www.youtube.com/embed/k8e9JOmzABo"
                  allowFullScreen
                />
              </div>
            </section>

            {/* REFERENCIAS */}
            <section className="text-center space-y-6">
              <Button
                onClick={() => setShowRefs(!showRefs)}
                className="bg-[#019f60]"
              >
                {showRefs ? "Ocultar referencias" : "Mostrar referencias"}
              </Button>

              {showRefs && (
                <Card className="p-8 glow-card text-sm text-left space-y-4">
                 <p className="apa-ref">
                    Baumeister, R. F., Campbell, J. D., Krueger, J. I., & Vohs, K. D. (2003).
                    Does high self-esteem cause better performance, interpersonal success,
                    happiness, or healthier lifestyles?
                    <em> Psychological Science in the Public Interest, 4</em>(1), 1–44.
                    https://doi.org/10.1111/1529-1006.01431
                  </p>

                  <p className="apa-ref">
                    Branden, N. (1994).
                    <em>Los seis pilares de la autoestima</em>.
                    Paidós.
                    https://www.penguinrandomhouse.com/books/558066/the-six-pillars-of-self-esteem-by-nathaniel-branden/
                  </p>

                  <p className="apa-ref">
                    Coopersmith, S. (1967).
                    <em>The antecedents of self-esteem</em>.
                    W. H. Freeman.
                    https://psycnet.apa.org/record/1968-02406-000
                  </p>

                  <p className="apa-ref">
                    Deci, E. L., & Ryan, R. M. (2000).
                    The “what” and “why” of goal pursuits: Human needs and the self-determination
                    of behavior.
                    <em>Psychological Inquiry, 11</em>(4), 227–268.
                    https://selfdeterminationtheory.org/SDT/documents/2000_DeciRyan_PI.pdf
                  </p>

                  <p className="apa-ref">
                    Maslow, A. H. (1943).
                    A theory of human motivation.
                    <em>Psychological Review, 50</em>(4), 370–396.
                    https://doi.org/10.1037/h0054346
                  </p>

                  <p className="apa-ref">
                    Northouse, P. G. (2021).
                    <em>Leadership: Theory and practice</em> (9th ed.).
                    SAGE Publications.
                    https://us.sagepub.com/en-us/nam/leadership/book258064
                  </p>

                  <p className="apa-ref">
                    Rosenberg, M. (1965).
                    <em>Society and the adolescent self-image</em>.
                    Princeton University Press.
                    https://press.princeton.edu/books/paperback/9780691645408/society-and-the-adolescent-self-image
                  </p>
                </Card>
              )}
            </section>

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
