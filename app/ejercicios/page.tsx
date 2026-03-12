"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"

import { initializeApp } from "firebase/app"
import { getDatabase, ref as dbRef, push } from "firebase/database"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"

// 🔥 CONFIG FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBAyjWyV652haZ2oSJM45WKinwgjpeBOKQ",
  authDomain: "emma9points.firebaseapp.com",
  databaseURL: "https://emma9points-default-rtdb.firebaseio.com",
  projectId: "emma9points",
  storageBucket: "emma9points.appspot.com",
  messagingSenderId: "915417335821",
  appId: "1:915417335821:web:09afb0aa895c93a1f0ad44",
  measurementId: "G-DTDLL5H3X1",
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const storage = getStorage(app)

export default function EjerciciosPage() {
  const router = useRouter()

  const [nombreAlumno, setNombreAlumno] = useState("")
  const [archivoA2, setArchivoA2] = useState<File | null>(null)

  const [nombreEquipo, setNombreEquipo] = useState("")
  const [archivoA3, setArchivoA3] = useState<File | null>(null)

  const [mensaje, setMensaje] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [progreso, setProgreso] = useState(0)

  // ================= FUNCIÓN SUBIR =================
  const subirArchivo = async (
    archivo: File,
    carpeta: string,
    nodoDB: string,
    datosExtra: any
  ) => {
    setLoading(true)
    setProgreso(0)

    const storageRef = ref(storage, `${carpeta}/${Date.now()}-${archivo.name}`)
    const uploadTask = uploadBytesResumable(storageRef, archivo)

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgreso(Math.round(progress))
      },
      (error) => {
        console.error(error)
        setError("Error al subir el archivo")
        setLoading(false)
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref)

        await push(dbRef(database, nodoDB), {
          ...datosExtra,
          archivoURL: url,
          fecha: new Date().toISOString(),
        })

        setMensaje("Actividad subida correctamente ✅")
        setLoading(false)
        setProgreso(0)

        setTimeout(() => setMensaje(""), 4000)
      }
    )
  }

  return (
    <>
      <Navbar />

      <main className="bg-background min-h-screen py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* BOTÓN BACK */}
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="mb-6 hover:scale-105 transition-all"
          >
            ← Volver
          </Button>

          <h1 className="text-5xl font-bold text-center">
            Apartado de Ejercicios
          </h1>

          {/* ERROR */}
          {error && (
            <div className="text-center p-4 bg-red-100 text-red-600 rounded-xl animate-pulse">
              {error}
            </div>
          )}

          {/* ÉXITO */}
          {mensaje && (
            <div className="text-center p-4 bg-green-100 text-green-700 rounded-xl animate-pulse">
              {mensaje}
            </div>
          )}

          {/* BARRA DE PROGRESO */}
          {loading && (
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-[#019f60] h-3 rounded-full transition-all duration-300"
                style={{ width: `${progreso}%` }}
              ></div>
            </div>
          )}

          {/* ================= ACTIVIDAD 2 ================= */}
          <Card className="p-10 glow-card space-y-6">
            <h2 className="text-3xl font-bold">
              Actividad 2 – Evaluación del Líder
            </h2>

            <input
              type="text"
              placeholder="Nombre del alumno"
              value={nombreAlumno}
              onChange={(e) => setNombreAlumno(e.target.value)}
              className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-[#019f60] transition-all ${
                error && !nombreAlumno ? "border-red-500" : ""
              }`}
            />

            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 cursor-pointer hover:border-[#019f60] hover:bg-green-50 transition-all">
              <span className="text-sm text-gray-600">
                {archivoA2 ? archivoA2.name : "Seleccionar archivo"}
              </span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => setArchivoA2(e.target.files?.[0] || null)}
              />
            </label>

            <Button
              disabled={loading}
              onClick={() => {
                if (!nombreAlumno || !archivoA2) {
                  setError(
                    "Completa los campos correspondientes y adjunta el archivo"
                  )
                  return
                }
                setError("")
                subirArchivo(archivoA2, "actividad2", "actividad2", {
                  nombre: nombreAlumno,
                })
              }}
              className="bg-[#019f60] hover:bg-[#018a54] hover:scale-105 transition-all"
            >
              Enviar Actividad 2
            </Button>
          </Card>

          {/* ================= ACTIVIDAD 3 ================= */}
          <Card className="p-10 glow-card space-y-6">
            <h2 className="text-3xl font-bold">
              Actividad 3 – Evaluación Interequipos
            </h2>

            <input
              type="text"
              placeholder="Nombre del equipo"
              value={nombreEquipo}
              onChange={(e) => setNombreEquipo(e.target.value)}
              className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-[#019f60] transition-all ${
                error && !nombreEquipo ? "border-red-500" : ""
              }`}
            />

            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 cursor-pointer hover:border-[#019f60] hover:bg-green-50 transition-all">
              <span className="text-sm text-gray-600">
                {archivoA3 ? archivoA3.name : "Seleccionar archivo"}
              </span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => setArchivoA3(e.target.files?.[0] || null)}
              />
            </label>

            <Button
              disabled={loading}
              onClick={() => {
                if (!nombreEquipo || !archivoA3) {
                  setError(
                    "Completa los campos correspondientes y adjunta el archivo"
                  )
                  return
                }
                setError("")
                subirArchivo(archivoA3, "actividad3", "actividad3", {
                  equipo: nombreEquipo,
                })
              }}
              className="bg-[#019f60] hover:bg-[#018a54] hover:scale-105 transition-all"
            >
              Enviar Actividad 3
            </Button>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  )
}