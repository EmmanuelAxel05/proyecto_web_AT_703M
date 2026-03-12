import {
  BookOpen,
  ClipboardCheck,
  BarChart3,
  Clock,
} from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Contenido organizado",
    description:
      "Accede a los temas divididos por unidades para estudiar de forma estructurada y progresiva.",
  },
  {
    icon: ClipboardCheck,
    title: "Ejercicios prácticos",
    description:
      "Actividades interactivas que refuerzan el aprendizaje y permiten aplicar los conceptos vistos en clase.",
  },
  {
    icon: BarChart3,
    title: "Seguimiento de progreso",
    description:
      "Visualiza tu desempeño y puntajes para identificar fortalezas y áreas de mejora.",
  },
  {
    icon: Clock,
    title: "Acceso 24/7",
    description:
      "Consulta el material en cualquier momento y desde cualquier dispositivo, a tu propio ritmo.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="beneficios" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
            Beneficios de la <span className="font-semibold">Plataforma</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Esta aplicación está diseñada para apoyar tu aprendizaje,
            mejorar tu organización y fortalecer tus habilidades de liderazgo
            mediante recursos digitales y actividades prácticas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">

              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#019f60]/10 text-[#019f60]">
                <feature.icon className="h-8 w-8" />
              </div>

              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
