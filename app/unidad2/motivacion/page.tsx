"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ConceptosPage() {
  const [showRefs, setShowRefs] = useState(false)

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Navbar />

      <main className="bg-background">


        {/* ================================================= */}
        {/* HERO CON IMAGEN + TEXTO ORIGINAL (COMO PEDISTE) */}
        {/* ================================================= */}
        <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-muted/30 to-background">

          {/* Imagen de fondo */}
          <img
            src="/motivacion.jpg"
            alt="Administración del tiempo"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />

          {/* Contenido */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-4">

            {/* Unidad 1 normal */}
            <p className="text-xl tracking-wide text-muted-foreground">
              Unidad 2
            </p>

            {/* Título en negritas */}
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
              Motivación e Inteligencia Emocional
            </h1>

            {/* Universidad */}
            <p className="text-muted-foreground">
              Universidad Tecnológica de Nezahualcóyotl
            </p>

            {/* Integrantes */}
            <p className="text-sm text-muted-foreground">
              Barrera Pérez Marco Antonio · Castillo Alonso Javier ·
              Cuin Arvizu Víctor Rey · Mello Corona Ángel Uriel · Solano Miranda Juan Jonathan
            </p>
          </div>
        </section>



        {/* ================= CONTENIDO ================= */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-28">


            {/* DEFINICIÓN */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img src="/def.jpg" className="rounded-2xl shadow-xl" />

              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  ¿Qué es la Inteligencia Emocional? (IE)
                </h2>
                <p>
                 Es la capacidad de percibir, comprender y manejar emociones propias y de otras personas. <br /><br />Capacidad para: <br /><br />
                  <strong>- Reconocer nuestras emociones:</strong> <br />
                  <strong>- Comprender las emociones de los demás:</strong><br />
                  <strong>- Regular nuestras reacciones:</strong><br />
                  <strong>- Usar las emociones para tomar mejores decisiones:</strong>
                </p>
              </Card>
            </div>



            {/* CARACTERISTICAS */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Características de la Inteligencia Emocional
                </h2>

                <ul className="list-disc ml-5 space-y-2">
                  <li><strong>Autoconciencia:</strong> reconocer lo que siento y ¿porqué?</li>
                  <li><strong>Autorregulación:</strong> controlar impulsos y reacciones</li>
                  <li><strong>Empatía:</strong> comprender emociones de otras personas</li>
                  <li><strong>Habilidades sociales:</strong> comunicación, trabajo en equipo y resolución de conflictos</li>
                  <li><strong>Motivación interna:</strong> deseo de mejorar y alcanzar metas</li>
                </ul>
              </Card>

              <img src="/caracteristicasie.jpg" className="rounded-2xl shadow-xl" />
            </div>



            {/* INFLUENCIA */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img src="/influenciaIE.jpg" className="rounded-2xl shadow-xl" />

              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Influencia de la IE en el trabajo
                </h2>

                <p>
                  La inteligencia emocional favorece: <br /><br />
                  <strong>Mejor comunicación</strong><br/><br/>
                  <strong>Menor conflicto laboral</strong><br/><br/>
                  <strong>Mayor colaboración en equipos</strong><br/><br/>
                  <strong>Liderazgo más efectivo</strong><br/><br/>
                  <strong>Mejor manejo del estrés</strong><br/>
                </p>
              </Card>
            </div>



            {/* MOTIVACION */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  ¿Qué es la motivación?
                </h2>

                <p>
                  La motivación es lo que activa, dirige y mantiene nuestra conducta hacia una meta. En el trabajo se refleja en energía, constancia, iniciativa, calidad del esfuerzo y compromiso.
                <br /><br /><strong>Es la fuerza que:</strong><br />
                    - Mantiene la constancia hacia una meta
                <br /><br /><strong>En el trabajo se refleja en:</strong><br />
                    - Compromiso <br />
                    - Iniciativa
                </p>
              </Card>

              <img src="/mot.jpg" className="rounded-2xl shadow-xl" />
            </div>



            {/* IMPORTACIA */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img src="/importanciaIE.jpg" className="rounded-2xl shadow-xl" />

              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Importancia de la Motivación en el Ámbito Laboral
                </h2>

                <p>
                  <strong>Cuando hay motivación:</strong> <br />
                    - Aumenta la productividad <br />
                    - Mejora la calidad del trabajo <br />
                    - Hay mayor compromiso <br />
                    - Disminuye la rotación de personal <br />
                  <br />
                  <strong>Cuando no hay motivación:</strong> <br />
                    - Desinterés <br /> 
                    - Conflictos <br />
                    - Bajo desempeño <br />
                </p>
              </Card>
            </div>

             {/* Relación entre IE y liderazgo */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Relación entre IE y liderazgo
                </h2>

                <p>
                <strong>Un líder con inteligencia emocional:</strong><br />
                - Escucha y genera confianza <br />
                - Maneja conflictos sin dañar al equipo<br />
                - Da retroalimentación respetuosa<br />
                - Motiva y guía a su equipo<br />
                <br />
                El liderazgo no es mandar, es influir positivamente.
                </p>
              </Card>

              <img src="/relacionIEyLid.jpg" className="rounded-2xl shadow-xl" />
            </div>


            {/* Areas de Oportunidad */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img src="/oporyestrat.jpg" className="rounded-2xl shadow-xl" />

              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Oportunidades y Estrategias para la IE
                </h2>

                <p>
                    <strong>Áreas de oportunidad en IE</strong> <br />
                  <ul>
                    <li>- Autoconciencia emocional</li>
                    <li>- Control de impulsos</li>
                    <li>- Empatía</li>
                    <li>- Comunicación asertiva</li>
                    <li>- Manejo de conflictos</li>
                  </ul> <br /><br />
                  <strong>Estrategias para fortalecer la IE</strong> <br />
                  <ul>
                    <li>- Autoevaluación emocional</li>
                    <li>- Pausas antes de reaccionar</li>
                    <li>- Escucha activa</li>
                    <li>- Retroalimentación respetuosa</li>
                    <li>- Práctica de la empatía</li>
                  </ul>
                </p>
              </Card>
            </div>

             {/* Valores */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Valores del “Ser” aplicados al tema
                </h2>
                <p>
                - Proactivo: propone soluciones y se anticipa. <br />
                - Respeto: regula emociones para no humillar ni explotar.<br />
                - Responsabilidad: cumple acuerdos y reconoce errores.<br />
                - Iniciativa: actúa sin esperar “empujón” constante.<br />
                </p>
              </Card>

              <img src="/valoresIE.jpg" className="rounded-2xl shadow-xl" />
            </div>

            {/* VIDEO */}
            <section className="text-center space-y-6">
              <h2 className="text-4xl font-bold">Video explicativo</h2>

              <div className="aspect-video max-w-4xl mx-auto">
                <iframe
                  className="w-full h-full rounded-2xl shadow-xl"
                  src="https://www.youtube.com/embed/r0xbTr_18bs"
                  allowFullScreen
                />
              </div>
            </section>

          {/* REFERENCIAS */}
          <section className="space-y-6">
            <div className="text-center">
              <Button
                onClick={() => setShowRefs(!showRefs)}
                className="bg-[#019f60] hover:bg-[#018a54]"
              >
                {showRefs ? "Ocultar referencias" : "Mostrar referencias"}
              </Button>
            </div>

            {showRefs && (
              <Card className="p-8 glow-card text-sm text-left space-y-4">

                <p className="pl-8 -indent-8">
                  Cordova, D. G., Flores, E. N., García, R. R., & Salvador, J. C. R. (n.d.).<em>¿Por qué es importante la inteligencia emocional?
Ciencia UNAM. Retrieved February 10, 2026,</em>.from https://ciencia.unam.mx/leer/1504/-por-que-es-importante-lainteligencia-emocional
                </p>

                <p className="pl-8 -indent-8">
                  Equipo, N. (2025, October 24). <em>What is emotional intelligence and how does it apply to the workplace? Mental Health
America.</em>.https://mhanational.org/es/resources/what-is-emotional-intelligence-and-how-does-it-apply-to-theworkplace/
                </p>

                <p className="pl-8 -indent-8">
                  Regader, B. (2015, May 29). <em>¿Qué es la Inteligencia Emocional? pymOrganization.</em>.
                  https://psicologiaymente.com/inteligencia/inteligencia-emocional
                </p>
              </Card>
            )}
          </section>

          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  )
}
