import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted/30 to-background"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/fondo2.png"
          alt="Instalaciones universitarias"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <div className="space-y-8">

          {/* Identidad institucional */}
          <div className="space-y-2 text-sm md:text-base text-muted-foreground">
            <p className="font-medium text-foreground">
              Universidad Tecnológica de Nezahualcóyotl
            </p>
            <p>División de Informática y Computación</p>
            <p>Ingeniería en Desarrollo y Gestión de Software</p>
          </div>

          {/* Título principal */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight">
            Administración del
            <span className="block font-semibold mt-2">Tiempo</span>
          </h1>

          {/* Descripción */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Plataforma digital donde se concentran los contenidos, temas y
            actividades de la asignatura para fortalecer la organización,
            planeación y productividad académica.
          </p>

          {/* Información académica */}
          <div className="text-sm text-muted-foreground space-y-1">
            <p>
              <span className="font-medium text-foreground">
                Mtro. Fernández Hernández Luis Manuel
              </span>
            </p>
            <p>Cuatrimestre 2026-1 | 7° Cuatrimestre</p>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="#temas">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-base group"
              >
                Ver Temas
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/ejercicios">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 text-base border-2 bg-transparent"
              >
                Ir a Ejercicios
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}