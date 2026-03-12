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
            src="/liderazg.jpg"
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
               Liderazgo Transformacional
            </h1>

            {/* Universidad */}
            <p className="text-muted-foreground">
              Universidad Tecnológica de Nezahualcóyotl
            </p>

            {/* Integrantes */}
            <p className="text-sm text-muted-foreground">
              Cervantes Melgarejo Daniela · García Pérez Marco Antonio · Pérez Sandoval Israel Adán · Romero Guerrero Estrella · Valencia Ruíz Mitzi Lizeth
            </p>
          </div>
        </section>



        {/* ================= CONTENIDO ================= */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-28">


            {/* Introduccion */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img src="/Introduccion.jpg" className="rounded-2xl shadow-xl" />

              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Introducción
                </h2>
                <p>
                 El liderazgo es una de las habilidades más importantes dentro de un grupo, ya que influye directamente en la forma en que las personas trabajan, se comunican y alcanzan objetivos.
                </p>
              </Card>
            </div>



            {/* Estilos */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Estilos de Liderazgo
                </h2>

                <ul className="list-disc ml-5 space-y-2">
                  <li><strong>Liderazgo Autocrático:</strong> Es un estilo en el que el líder toma todas las decisiones sin consultar al equipo, ejerciendo un control estricto sobre las actividades y procesos.</li>
                  <li><strong>Liderazgo Democrático:</strong> Es un estilo de liderazgo en el que el líder fomenta la participación del equipo, escucha opiniones y toma decisiones considerando las ideas de los demás, aunque la decisión final sigue siendo del líder.</li>
                  <li><strong>Liderazgo Transaccional:</strong> El liderazgo transaccional es un modelo de gestión basado en el intercambio (transacción) entre líder y seguidor, donde se utilizan recompensas y sanciones para motivar el cumplimiento de objetivos claros, estructurados y a corto plazo.</li>
                  <li><strong>Liderazgo Laissez-Faire:</strong> Los líderes permiten a sus seguidores la autonomía para tomar sus propias decisiones y gestionar sus propios equipos.</li>
                  <li><strong>Liderazgo Situacional:</strong> En este se adapta su estilo según el nivel de competencia y motivación de cada colaborador.</li>
                  <li><strong>Liderazgo Transformacional:</strong> Es un estilo de liderazgo que inspira y motiva a las personas para lograr cambios positivos, fomentar la innovación y crecer tanto personal como profesionalmente.</li>
                </ul>
              </Card>

              <img src="/estilos.jpg" className="rounded-2xl shadow-xl" />
            </div>



            {/* Diferencia */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img src="/lidyjefe.jpg" className="rounded-2xl shadow-xl" />

              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Diferencia entre Líder y Jefe
                </h2>

                <p>
                  Un líder guía y motiva a su equipo <br /><br />
                  Un jefe ordena y controla usando su autoridad.
                </p>
              </Card>
            </div>



            {/* Habilidades */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Habilidades de un Líder Transformacional
                </h2>
                <ul>
                  <li><strong>• </strong>Inspirar y motivar a las personas para lograr cambios positivos.</li>
                  <li><strong>• </strong>Enfocarse en las fortalezas de cada integrante del equipo.</li>
                  <li><strong>• </strong>Crear una visión clara que oriente a todos hacia un mismo objetivo.</li>
                  <li><strong>• </strong>Impulsar el crecimiento personal y profesional del equipo.</li>
                  <li><strong>• </strong>Fomentar la innovación, impulsando nuevas ideas y soluciones.</li>
                </ul>
              </Card>

              <img src="/habilidades.jpg" className="rounded-2xl shadow-xl" />
            </div>



            {/* generar cultura */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img src="/culturadeinov.jpg" className="rounded-2xl shadow-xl" />

              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Generar Cultura de Innovación Continua
                </h2>

                <p>
                  Generar una cultura de innovación continua consiste en fomentar un ambiente donde las personas propongan ideas nuevas, mejoren procesos y se adapten al cambio de forma constante.
                  No se trata solo de innovar una vez, sino de hacerlo todo el tiempo, aprendiendo de los errores y buscando siempre mejores soluciones.
                  <br /><br />
                  Claves para lograrlo:
                  <ul className="list-disc ml-5 space-y-2">
                  <li><strong>Mentalidad abierta al cambio:</strong> aceptar nuevas ideas y formas de trabajar.</li>
                  <li><strong>Participación de todos:</strong> cualquier persona puede proponer mejoras.</li>
                  <li><strong>Aprendizaje continuo:</strong> capacitarse y actualizarse constantemente.</li>
                  <li><strong>Aprender del error:</strong> los errores se ven como oportunidades de mejora.</li>
                  <li><strong>Comunicación abierta:</strong> compartir ideas sin miedo.</li>
                  <li><strong>Reconocer la innovación:</strong> valorar y motivar las propuestas creativas.</li>
                  </ul>
                </p>
              </Card>
            </div>

             {/* enfoque */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Enfoque en Fortalezas
                </h2>

                <p>
                <strong>El enfoque en fortalezas consiste en identificar y potenciar las habilidades, talentos y conocimientos de cada persona para impulsar la innovación continua.
                        Cuando se aprovechan las fortalezas individuales y del equipo, se generan mejores ideas, mayor creatividad y soluciones más efectivas. </strong>
                </p>
              </Card>

              <img src="/enfoque.jpg" className="rounded-2xl shadow-xl" />
            </div>


            {/* Construcción de una Cultura */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img src="/construccion.jpg" className="rounded-2xl shadow-xl" />

              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Construcción de una Cultura de Colaboración y Servicio
                </h2>

                <p>
                  La construcción de una cultura de colaboración y servicio consiste en fomentar el trabajo en equipo, la ayuda mutua y la orientación hacia apoyar a los demás.
                  Implica que las personas compartan conocimientos, se comuniquen de manera abierta y trabajen juntas para lograr objetivos comunes, siempre con una actitud de servicio.
                  <br /><br />
                  <strong>Crear Cultura de Valores</strong><br />
                  Conjunto de principios que guían la conducta y la convivencia. <br /><br />
                  <strong>¿Por qué es importante?</strong>
                  <ul className="list-disc ml-5 space-y-2">
                  <li>Mejora la convivencia.</li>
                  <li>Fomenta el respeto.</li>
                  <li>Reduce conflictos.</li>
                  <li>Forma personas íntegras.</li>
                  </ul> <br />
                  <strong>¿Cómo fomentar una cultura de valores?</strong>
                  <ul className="list-disc ml-5 space-y-2">
                  <li>Promover el ejemplo desde líderes, docentes o autoridades.</li>
                  <li>Respetar normas.</li>
                  <li>Trabajo en equipo.</li>
                  <li>Diálogo y empatía.</li>
                  <li>Reconocer buenas acciones.</li>
                  </ul>
                </p>
              </Card>
            </div>

             {/* Rejilla Administrativa */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Rejilla Administrativa
                </h2>
                <p>
                  La rejilla administrativa, también llamada malla gerencial, es un modelo desarrollado por Robert Blake y Jane Mouton que evalúa estilos de liderazgo en una cuadrícula de 9x9, basándose en dos dimensiones:
                  <br /><br />
                  <strong>Interés por la producción (eje X).</strong><br />
                  <strong>Interés por las personas (eje Y).</strong><br />
                  <br />
                  <strong>Principales estilos de la rejilla (1-9):</strong>
                  <ul className="list-disc ml-5 space-y-2">
                  <li><strong>1,1 Administración empobrecida:</strong> mínimo esfuerzo, busca evitar problemas y mantener el puesto.</li>
                  <li><strong>9,1 Administración autocrática de tareas: </strong>alta prioridad en producción, baja en personas (liderazgo autocrático).</li>
                  <li><strong>1,9 Administración de club campestre: </strong>alta prioridad en personas, baja en producción (enfocado en un ambiente cómodo).</li>
                  <li><strong>5,5 Mitad de camino: </strong>equilibrio moderado sin maximizar ninguna de las dos áreas.</li>
                  <li><strong>9,9 Estilo de equipo (ideal): </strong>alta preocupación tanto por la producción como por las personas, fomenta el compromiso y la confianza.</li>
                  </ul>
                </p>
              </Card>

              <img src="/interesytareas.png" className="rounded-2xl shadow-xl" />
            </div>

            {/* Empowerment */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img src="/empowerment.png" className="rounded-2xl shadow-xl" />

              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Empowerment
                </h2>

                <p>
                  El empowerment es una técnica, herramienta o estrategia utilizada en las organizaciones para dar poder a los empleados, haciéndolos sentir motivados mediante la delegación de autonomía y responsabilidad.
                  <br /><br />
                  <strong>Sus beneficios:</strong><br />
                  
                  <ul className="list-disc ml-5 space-y-2">
                  <li>Desarrollo de la confianza en uno mismo.</li>
                  <li>Capacidad para tomar decisiones.</li>
                  <li>Autonomía y responsabilidad personal.</li>
                  <li>Participación activa en la sociedad.</li>
                  <li>Uso de habilidades para lograr metas.</li>
                  </ul>
                  <br />
                  El empowerment permite a las personas creer en sí mismas y transformar su realidad.
                </p>
              </Card>
            </div>

            {/* VIDEO */}
            <section className="text-center space-y-6">
              <h2 className="text-4xl font-bold">Video explicativo</h2>

              <div className="aspect-video max-w-4xl mx-auto">
                <iframe
                  className="w-full h-full rounded-2xl shadow-xl"
                  src="https://www.youtube.com/embed/w7NokCYHmik"
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
                    EAE Business School. (2025). 
                    <em>Qué es el empowerment y cómo puede beneficiar a una empresa.</em> 
                    https://www.eaeprogramas.es/blog/negocio/empresa/que-es-el-empowerment-y-como-puede-beneficiar-una-empresa
                  </p>

                  <p className="pl-8 -indent-8">
                    ESIC Business & Marketing School. (s.f.). 
                    <em>¿Qué es el liderazgo situacional? Características y ventajas.</em> 
                    https://www.esic.edu/rethink/business/liderazgo-situacional-que-es-caracteristicas-y-ventajas-c
                  </p>

                  <p className="pl-8 -indent-8">
                    GoConqr. (2024). 
                    <em>Rejilla administrativa o grill gerencial.</em> 
                    https://www.goconqr.com/mapamental/1061857/rejilla-administrativa-grill-gerencial
                  </p>

                  <p className="pl-8 -indent-8">
                    Kuspit. (2025, junio 10). 
                    <em>Cultura organizacional basada en valores: Cómo alinearlos en las empresas.</em> 
                    https://blog.kuspit.com/notas/cultura-organizacional-basada-en-valores
                  </p>

                  <p className="pl-8 -indent-8">
                    National Society of Leadership and Success. (2022, July 21). 
                    <em>What is laissez-faire leadership?</em> 
                    https://www.nsls.org/blog/what-is-lassiez-faire-leadership
                  </p>

                  <p className="pl-8 -indent-8">
                    Repsol. (2023, septiembre 11). 
                    <em>Qué es el liderazgo transformacional y sus características.</em> 
                    https://www.repsol.com/es/energia-avanzar/personas/liderazgo-transformacional/index.cshtml
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
