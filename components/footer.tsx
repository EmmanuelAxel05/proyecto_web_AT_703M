import Image from "next/image"
import Link from "next/link"

const linkStyle =
  "text-sm text-muted-foreground hover:text-[#019f60] transition-all duration-200 hover:translate-x-1"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          {/* ===================== */}
          {/* IDENTIDAD */}
          {/* ===================== */}
          <div className="space-y-6">

            <Image
              src="/logo-escuela.png"
              alt="Logo universidad"
              width={160}
              height={160}
              className="object-contain"
            />

            <div>
              <h3 className="text-xl font-semibold">
                Universidad Tecnológica de Nezahualcóyotl
              </h3>

              <p className="text-sm text-muted-foreground mt-2">
                Administración del Tiempo — Plataforma académica diseñada para
                fortalecer la organización personal, la productividad y el liderazgo.
              </p>
            </div>

          </div>


          {/* ===================== */}
          {/* UNIDADES */}
          {/* ===================== */}
          <div>
            <h4 className="font-semibold mb-4">Unidades</h4>

            <ul className="space-y-2">

              <li className="font-medium text-foreground">Unidad 1</li>
              <li><Link href="/unidad1/conceptos" className={linkStyle}>Conceptos básicos</Link></li>
              <li><Link href="/unidad1/herramientas" className={linkStyle}>Herramientas del tiempo</Link></li>

              <li className="font-medium text-foreground mt-3">Unidad 2</li>
              <li><Link href="/unidad2/autoestima" className={linkStyle}>Autoestima</Link></li>
              <li><Link href="/unidad2/motivacion" className={linkStyle}>Motivación e inteligencia emocional</Link></li>
              <li><Link href="/unidad2/liderazgo" className={linkStyle}>Liderazgo transformacional</Link></li>

            </ul>
          </div>


          {/* ===================== */}
          {/* NAVEGACIÓN */}
          {/* ===================== */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>

            <ul className="space-y-3">
              <li><Link href="/" className={linkStyle}>Inicio</Link></li>
              <li><Link href="#objetivos" className={linkStyle}>Objetivos</Link></li>
              <li><Link href="/ejercicios" className={linkStyle}>Ejercicios</Link></li>
            </ul>
          </div>

        </div>


        {/* Barra inferior */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2026 Derechos Reservados al Equipo 6: <br />
          Campos Ramírez José Antonio · Corona García Enrique Ernesto · Reyes Rodríguez Oscar · Vargas Torrijos Emmanuel Axel · Zavala Espinosa Nicolle Chiquinkira <br />
          Proyecto Académico
        </div>

      </div>

    </footer>
  )
}
