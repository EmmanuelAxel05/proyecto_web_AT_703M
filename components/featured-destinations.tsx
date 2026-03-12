import { Card } from "@/components/ui/card"

export function FeaturedDestinations() {
  return (
    <section id="objetivos" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">

        {/* ===================== */}
        {/* OBJETIVO GENERAL */}
        {/* ===================== */}
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
            Objetivo de la <span className="font-semibold">Asignatura</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            El alumno construirá un estilo de liderazgo para dirigir organizaciones
            con eficacia.
          </p>
        </div>


        {/* ===================== */}
        {/* OBJETIVOS UNIDADES */}
        {/* ===================== */}
        <div className="grid md:grid-cols-2 gap-8">

          <Card className="p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Unidad 1</h3>
            <p className="text-muted-foreground leading-relaxed">
              El alumno administrará eficientemente el tiempo para mejorar el desempeño
              y cumplimiento de objetivos personales y organizacionales.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Unidad 2</h3>
            <p className="text-muted-foreground leading-relaxed">
              El alumno desarrollará habilidades de liderazgo a través de identificar
              sus fortalezas y áreas de oportunidad para su aplicación personal y organizacional.
            </p>
          </Card>

        </div>


        {/* ===================== */}
        {/* IMPORTANCIA */}
        {/* ===================== */}
        <div className="rounded-2xl p-10 text-center bg-[#25b87a] text-white">
          <h3 className="text-3xl font-semibold mb-6">
            La importancia de la Administración del Tiempo
          </h3>

          <p className="max-w-3xl mx-auto leading-relaxed text-white/95">
            La administración del tiempo es el recurso más valioso para el éxito personal y profesional.
            Gestionarlo efectivamente no significa trabajar más rápido, sino de forma inteligente,
            priorizando lo que aporta valor. Dominar esta habilidad aumenta la productividad,
            reduce el estrés y transforma intenciones en logros tangibles.
          </p>
        </div>

      </div>
    </section>
  )
}
