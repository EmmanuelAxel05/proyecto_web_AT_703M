"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-32 bg-[#019f60]/10">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">

        <div className="space-y-8">

          {/* Frase motivacional */}
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            El conocimiento se fortalece con la
            <span className="font-semibold block mt-2"> práctica constante</span>
          </h2>

          {/* Texto */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Refuerza lo aprendido en clase mediante actividades interactivas
            y evalúa tu progreso dentro de la plataforma.
          </p>

          {/* Botón */}
          <Link href="/ejercicios">
            <Button
              size="lg"
              className="rounded-full px-10 h-14 text-base gap-2 bg-[#019f60] hover:bg-[#018a54]"
            >
              Ir a ejercicios
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>

        </div>

      </div>
    </section>
  )
}
