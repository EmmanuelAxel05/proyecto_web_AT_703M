import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const unidad1 = [
  {
    title: "Conceptos básicos de administración del tiempo",
    image: "/conseptos.jpg",
    href: "/unidad1/conceptos",
  },
  {
    title: "Herramientas para la administración del tiempo",
    image: "/herramientas.jpg",
    href: "/unidad1/herramientas",
  },
]

const unidad2 = [
  {
    title: "Autoestima",
    image: "/autoestima.jpg",
    href: "/unidad2/autoestima",
  },
  {
    title: "Motivación e inteligencia emocional",
    image: "/motivacion.jpg",
    href: "/unidad2/motivacion",
  },
  {
    title: "Liderazgo transformacional",
    image: "/liderazg.jpg",
    href: "/unidad2/liderazgo",
  },
]

export function PopularPackages() {
  return (
    <section id="temas" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">

        {/* ===================== */}
        {/* TÍTULO GENERAL */}
        {/* ===================== */}
        <div className="text-center space-y-6">
          <h2 className="text-6xl font-light tracking-tight">
            Temas de la <span className="font-semibold">materia</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contenidos organizados por unidades para fortalecer la administración del tiempo
            y el desarrollo de habilidades personales y de liderazgo.
          </p>
        </div>

        {/* ===================== */}
        {/* UNIDAD 1 */}
        {/* ===================== */}
        <div className="text-center">
          <h3 className="text-4xl font-semibold">Unidad 1</h3>
        </div>

        <div className="flex justify-center gap-8 flex-wrap">
          {unidad1.map((item) => (
            <Card
              key={item.title}
              className="
                w-[320px]
                overflow-hidden
                transition-all duration-500
                group
                cursor-pointer
                hover:shadow-2xl
                hover:-translate-y-2
              "
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay NO bloquea el mouse */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>

              <div className="p-6 text-center space-y-4">
                <h3 className="font-semibold">{item.title}</h3>

                <Link href={item.href}>
                  <Button
                    className="
                      rounded-full
                      cursor-pointer
                      transition-all duration-300
                      bg-muted text-foreground
                      group-hover:bg-[#019f60]
                      group-hover:text-white
                      group-hover:shadow-lg
                      group-hover:scale-105
                    "
                  >
                    Explorar ahora
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* ===================== */}
        {/* UNIDAD 2 */}
        {/* ===================== */}
        <div className="text-center">
          <h3 className="text-4xl font-semibold">Unidad 2</h3>
        </div>

        <div className="flex justify-center gap-8 flex-wrap">
          {unidad2.map((item) => (
            <Card
              key={item.title}
              className="
                w-[320px]
                overflow-hidden
                transition-all duration-500
                group
                cursor-pointer
                hover:shadow-2xl
                hover:-translate-y-2
              "
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay NO bloquea el mouse */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>

              <div className="p-6 text-center space-y-4">
                <h3 className="font-semibold">{item.title}</h3>

                <Link href={item.href}>
                  <Button
                    className="
                      rounded-full
                      cursor-pointer
                      transition-all duration-300
                      bg-muted text-foreground
                      group-hover:bg-[#019f60]
                      group-hover:text-white
                      group-hover:shadow-lg
                      group-hover:scale-105
                    "
                  >
                    Explorar ahora
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
