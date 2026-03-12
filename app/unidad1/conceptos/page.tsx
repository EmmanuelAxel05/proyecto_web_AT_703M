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
            src="/time-bg.jpg"
            alt="Administración del tiempo"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />

          {/* Contenido */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-4">

            {/* Unidad 1 normal */}
            <p className="text-xl tracking-wide text-muted-foreground">
              Unidad 1
            </p>

            {/* Título en negritas */}
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
              Conceptos Básicos de Administración del Tiempo
            </h1>

            {/* Universidad */}
            <p className="text-muted-foreground">
              Universidad Tecnológica de Nezahualcóyotl
            </p>

            {/* Integrantes */}
            <p className="text-sm text-muted-foreground">
              Barrera González Angelica Yolotzin · Hernandez Ruiz Luis Enrique ·
              Melgar Angeles Gabriela Sarahi · Mercado Méndez Estefani
            </p>
          </div>
        </section>



        {/* ================= CONTENIDO ================= */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-28">


            {/* DEFINICIÓN */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img src="/time-definition.jpg" className="rounded-2xl shadow-xl" />

              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  ¿Qué es la administración del tiempo?
                </h2>

                <p>
                  La administración del tiempo es el proceso de organizar y utilizar el tiempo de manera adecuada para cumplir actividades, responsabilidades y objetivos de forma eficiente, evitando el desperdicio de tiempo. <br /><br />
                  <strong>- Objetivos:</strong> Definir qué se quiere lograr a corto, mediano y largo plazo<br />
                  <strong>- Organización:</strong> Ordenar actividades usando agendas, horarios o listas.<br />
                  <strong>- Prioridades:</strong> Identificar qué tareas son más importantes o urgentes.<br />
                  <strong>- Beneficios:</strong> Mayor productividad, mejor rendimiento y menos estrés.
                </p>
              </Card>
            </div>



            {/* BENEFICIOS */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Beneficios
                </h2>

                <ul className="list-disc ml-5 space-y-2">
                  <li>Mayor productividad</li>
                  <li>Mejor rendimiento académico</li>
                  <li>Menor estrés</li>
                  <li>Cumplimiento de metas</li>
                </ul>
              </Card>

              <img src="/benefits.jpg" className="rounded-2xl shadow-xl" />
            </div>



            {/* EFICIENCIA */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img src="/efficiency.jpg" className="rounded-2xl shadow-xl" />

              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Eficiencia
                </h2>

                <p>
                  Es la capacidad de realizar tareas o actividades de la mejor manera posible, utilizando la menor cantidad de recursos (como tiempo, energía o dinero). Se centra en hacer las cosas correctamente y de manera rápida. <br /><br />
                  <strong>Identifica lo que tienes que hacer -</strong> Por ejemplo: tareas, estudiar y trabajos.<br/><br/>
                  <strong>Ordena las actividades por importancia -</strong> Primero lo urgente y lo más importante.<br/><br/>
                  <strong>Asigna un tiempo a cada actividad -</strong> Decide cuánto tiempo dedicarás a cada una.<br/><br/>
                  <strong>Evita distracciones -</strong> Guarda el celular y concéntrate solo en una tarea.<br/><br/>
                  <strong>Cumple la actividad y revisa el resultado -</strong> Así terminas a tiempo y con buena calidad.<br/>
                </p>
              </Card>
            </div>



            {/* EFECTIVIDAD */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Efectividad
                </h2>

                <p>
                  Es la capacidad de alcanzar los resultados deseados o cumplir los objetivos. Se enfoca en hacer las cosas correctas, es decir, realizar actividades que realmente conduzcan a la consecución de las metas.
                <br /><br /><strong>Ejemplo</strong><br />
                Si un estudiante quiere aprobar un examen, es efectivo cuando dedica su tiempo a estudiar los temas importantes y a practicar, en lugar de pasar horas haciendo actividades que no le ayudan. Así logra su objetivo.
                </p>
              </Card>

              <img src="/effectiveness.jpg" className="rounded-2xl shadow-xl" />
            </div>



            {/* URGENTE VS IMPORTANTE */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img src="/priorities.jpg" className="rounded-2xl shadow-xl" />

              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Urgente vs Importante
                </h2>

                <p>
                  <strong>Urgente</strong> <br />
                  Es todo aquello que: <br />
- Requiere atención inmediata <br />
- Tiene un plazo cercano <br />
- Genera presión <br />
                  <br />
                  <strong>Importante</strong> <br />
                  Es todo aquello que: <br /> 
- Contribuye a metas u objetivos <br />
- Tiene impacto a largo plazo <br />
- No siempre es inmediato 

                </p>
              </Card>
            </div>

             {/* Mitos del tiempo */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Mitos del tiempo
                </h2>

                <p>
                  Creencia o idea aceptada socialmente como verdadera, carece de fundamento real o comprobación objetiva.
                <br /><br /><strong>Ejemplo</strong><br />
“No tengo tiempo” <br />
Cuando en realidad no organizamos bien nuestras actividades.
<br /><br />

“Si estoy ocupado todo el día, soy productivo”<br />
Aunque no siempre se logran buenos resultados.
<br /><br />

“Trabajo mejor bajo presión”<br />
Cuando el estrés puede afectar la calidad del trabajo.
                </p>
              </Card>

              <img src="/mitos.jpg" className="rounded-2xl shadow-xl" />
            </div>


            {/* Planeación del tiempo */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img src="/planeacion.jpg" className="rounded-2xl shadow-xl" />

              <Card className="p-10 glow-card">
                <h2 className="text-4xl font-bold mb-6">
                  Planeación del tiempo
                </h2>

                <p>
                  La planeación del tiempo es el proceso de organizar las actividades antes de realizarlas para aprovechar mejor cada día; consiste en establecer objetivos claros, definir prioridades y asignar tiempos a cada tarea. Planear permite evitar la improvisación y reducir el estrés al tener mayor control de las actividades además ayuda a cumplir responsabilidades de forma ordenada. Una buena planeación mejora la productividad y el logro de metas. <br /> <br />
                  <strong>Herramientas de Administración del Tiempo</strong><br />
                  -  Agenda ejecutiva <br />
                  - Matriz de administración del tiempo <br />
                  - Los cuatro cuadrantes de la matriz del tiempo <br />
                </p>
              </Card>
            </div>


            {/* VIDEO */}
            <section className="text-center space-y-6">
              <h2 className="text-4xl font-bold">Video explicativo</h2>

              <div className="aspect-video max-w-4xl mx-auto">
                <iframe
                  className="w-full h-full rounded-2xl shadow-xl"
                  src="https://www.youtube.com/embed/9pPd7S8R96c"
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
                  Allen, D. (2015). <em>Organízate con eficacia (Getting Things Done)</em>.
                  Urano.
                </p>

                <p className="pl-8 -indent-8">
                  Covey, S. R. (2013). <em>Los 7 hábitos de la gente altamente efectiva</em>.
                  Paidós. https://www.planetadelibros.com
                </p>

                <p className="pl-8 -indent-8">
                  Drucker, P. F. (2002). <em>La efectividad ejecutiva</em>.
                  HarperCollins. https://www.harpercollins.com
                </p>

                <p className="pl-8 -indent-8">
                  Drucker, P. F. (2004). <em>La efectividad ejecutiva</em>.
                  HarperCollins.
                </p>

                <p className="pl-8 -indent-8">
                  Lago, S. (2010). <em>Gestión eficaz del tiempo</em>.
                  Ediciones Díaz de Santos.
                </p>

                <p className="pl-8 -indent-8">
                  Macan, T. H. (1994). Time management: Test of a process model.
                  <em> Journal of Applied Psychology, 79</em>(3), 381–391.
                </p>

                <p className="pl-8 -indent-8">
                  ProfeSaw. (2024, 14 de septiembre). Administración del tiempo.
                  <em> LASH UTRNG</em>. Recuperado el 17 de enero de 2026, de
                  https://lash.utrng.edu.mx/?p=3582
                </p>

                <p className="pl-8 -indent-8">
                  Urrutia, S. M. (2013). Elementos del planificador – Administración del tiempo
                  [Presentación]. <em>SlideShare</em>.
                  https://es.slideshare.net/slideshow/admon-tiempo-elementos-planificador/27007636
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
