"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function HerramientasPage() {
  const [showRefs, setShowRefs] = useState(false)

  const Section = ({ title, text, img, reverse = false }: any) => (
    <div className={`grid md:grid-cols-2 gap-10 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
      {!reverse && <img src={img} className="rounded-2xl shadow-xl" />}
      <Card className="p-10 glow-card">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <p className="whitespace-pre-line">{text}</p>
      </Card>
      {reverse && <img src={img} className="rounded-2xl shadow-xl" />}
    </div>
  )

  return (
    <>
      <Navbar />

      <main className="bg-background">


        {/* ================= HERO ================= */}
        <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-muted/30 to-background">

        {/* Imagen fondo */}
        <img
            src="/fondoherramientas.jpg"
            alt="Herramientas del tiempo"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* Contenido */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-4">

            {/* Unidad */}
            <p className="text-xl tracking-wide text-muted-foreground">
            Unidad 1
            </p>

            {/* Título en negritas */}
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            Herramientas para la Administración del Tiempo
            </h1>

            {/* Universidad */}
            <p className="text-muted-foreground">
            Universidad Tecnológica de Nezahualcóyotl
            </p>

            {/* Integrantes */}
            <p className="text-sm text-muted-foreground">
            Alonso Ramírez Erika Quetzalli · Duran Rodriguez Fernando Daniel ·
            Delgado Pineda Sergio Alberto · González Martínez Luis Enrique · Manjarrez Vázquez Alfredo de Jesús
            </p>

        </div>
        </section>


        {/* ================= CONTENIDO ================= */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6 space-y-28">


            <Section
              title="Introducción"
              img="/intro.jpg"
              text={`La administración del tiempo es esencial para organizar actividades,
cumplir plazos y mejorar el rendimiento académico de forma eficiente.`}
            />


            <Section
              title="Enfoques del tiempo"
              img="/enfoques.jpg"
              reverse
              text={`Existen dos enfoques principales:
• Tiempo de respuesta
• Tiempo discrecional

Ambos influyen directamente en la productividad.`}
            />


            <Section
              title="Tiempo de respuesta vs discrecional"
              img="/comparacion.jpg"
              text={`Tiempo de respuesta:
• Situaciones imprevistas
• Reactivo
• Genera presión

Tiempo discrecional:
• Planeado
• Enfoque consciente
• Orientado a objetivos`}
            />


            <Section
              title="Organización → Ejecución → Resultado"
              img="/organizacion.jpg"
              reverse
              text={`Organización: priorizar tareas y planificar actividades.
Ejecución: trabajar por bloques y reducir distracciones.
Resultado: menos estrés y mejor rendimiento.`}
            />


            <Section
              title="Principio 10–90"
              img="/pareto.jpg"
              text={`Solo el 10% de las tareas genera el 90% de los resultados.
Por ello se deben priorizar actividades de alto impacto.`}
            />


            <Section
              title="Ciclo de productividad"
              img="/ciclo.jpg"
              reverse
              text={`Alternar concentración intensa con descansos cortos.
Evita agotamiento y mantiene un rendimiento sostenido.`}
            />


            <Section
              title="Ley de Parkinson"
              img="/parkinson.jpg"
              text={`El trabajo se expande para llenar el tiempo disponible.
Solución:
• Establecer plazos cortos
• Dividir tareas
• Evitar tiempos excesivos`}
            />


            <Section
              title="Herramientas de gestión"
              img="/delegacion.jpg"
              reverse
              text={`• Delegación
• Manejo de interrupciones
• Asertividad
• Gestión del estrés
• Solución de problemas`}
            />


            <Section
              title="Reuniones de trabajo efectivas"
              img="/reuniones.jpg"
              text={`Características clave:
• Horarios definidos
• Objetivo claro
• Agenda estructurada
• Información previa
• Requerimientos listos
• Minuta de acuerdos
• Cierre formal`}
            /> 

            {/* VIDEO */}
            <section className="text-center space-y-6">
              <h2 className="text-4xl font-bold">Video explicativo</h2>

              <div className="aspect-video max-w-4xl mx-auto">
                <iframe
                  className="w-full h-full rounded-2xl shadow-xl"
                  src="https://www.youtube.com/embed/RRdr5GHtcKk"
                  allowFullScreen
                />
              </div>
            </section>

            {/* REFERENCIAS */}
              <section className="space-y-6">
                <div className="text-center">
                  <Button
                    onClick={() => setShowRefs(!showRefs)}
                    className="bg-[#019f60]"
                  >
                    {showRefs ? "Ocultar referencias" : "Mostrar referencias"}
                  </Button>
                </div>

                {showRefs && (
                  <Card className="p-8 glow-card text-sm text-left space-y-4">

                    <p className="pl-8 -indent-8">
                      Guías BibUpo. (s. f.). <em>Planificación y gestión del tiempo: Herramientas,
                      aplicaciones y software</em>.
                      https://guiasbib.upo.es/planificacion-y-gestiondel-tiempo/herramientas-aplicaciones-y-software
                    </p>

                    <p className="pl-8 -indent-8">
                      33 herramientas de productividad y gestión del tiempo. (s. f.).
                      https://cultumatica.com/herramientasproductividad-gestion-tiempo/
                    </p>

                    <p className="pl-8 -indent-8">
                      Drucker, P. F. (2007). <em>La gestión eficaz</em> (Ed. revisada).
                      Editorial Sudamericana.
                    </p>

                    <p className="pl-8 -indent-8">
                      Allen, D. (2015). <em>Organízate con eficacia: Getting Things Done</em>
                      (Ed. actualizada). Ediciones Urano.
                    </p>

                    <p className="pl-8 -indent-8">
                      Macan, T. H. (1994). Time management: Test of a process model.
                      <em> Journal of Applied Psychology</em>.
                    </p>

                    <p className="pl-8 -indent-8">
                      Claessens, B. J. C., van Eerde, W., Rutte, C. G., & Roe, R. A. (2007).
                      A review of the time management literature.
                      <em> Personnel Review</em>.
                    </p>

                    <p className="pl-8 -indent-8">
                      Laoyan, S. (2025, febrero 21). Qué es el principio de Pareto o la regla 80/20.
                      <em> Asana</em>.
                      https://asana.com/es/resources/pareto-principle-80-20-rule
                    </p>

                    <p className="pl-8 -indent-8">
                      Ortiz, N. (2025, noviembre 20). Gestión del tiempo en el trabajo:
                      La guía definitiva de técnicas y estrategias.
                      <em> WorkMeter</em>.
                      https://www.workmeter.com/blog/gestion-deltiempo-trabajo/
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
