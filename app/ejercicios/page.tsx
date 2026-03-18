"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { ArrowLeft, Upload, CheckCircle2, AlertCircle, User, Users, FileUp, Loader2 } from "lucide-react"

import { initializeApp } from "firebase/app"
import { getDatabase, ref as dbRef, push } from "firebase/database"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"

// CONFIG FIREBASE
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
  const [currentActivity, setCurrentActivity] = useState<string | null>(null)

  // FUNCION SUBIR
  const subirArchivo = async (
    archivo: File,
    carpeta: string,
    nodoDB: string,
    datosExtra: Record<string, string>,
    activityName: string
  ) => {
    setLoading(true)
    setProgreso(0)
    setCurrentActivity(activityName)

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
        setError("Error al subir el archivo. Intenta de nuevo.")
        setLoading(false)
        setCurrentActivity(null)
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref)

        await push(dbRef(database, nodoDB), {
          ...datosExtra,
          archivoURL: url,
          fecha: new Date().toISOString(),
        })

        setMensaje("Actividad subida correctamente")
        setLoading(false)
        setProgreso(0)
        setCurrentActivity(null)

        // Reset form
        if (activityName === "Actividad 2") {
          setNombreAlumno("")
          setArchivoA2(null)
        } else {
          setNombreEquipo("")
          setArchivoA3(null)
        }

        setTimeout(() => setMensaje(""), 4000)
      }
    )
  }

  return (
    <>
      <Navbar />

      <main className="bg-background min-h-screen py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          {/* BOTON BACK */}
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="group hover:border-primary hover:text-primary transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Volver
          </Button>

          {/* HEADER */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <FileUp className="w-4 h-4" />
              Entrega de Actividades
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Apartado de <span className="text-primary">Ejercicios</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Sube tus actividades completadas para evaluacion. Asegurate de llenar todos los campos correctamente.
            </p>
          </div>

          {/* NOTIFICACIONES */}
          {error && (
            <div className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/20 text-destructive rounded-xl animate-fade-in">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p className="text-sm font-medium">{error}</p>
              <button 
                onClick={() => setError("")}
                className="ml-auto p-1 hover:bg-destructive/10 rounded transition-colors"
              >
                <span className="sr-only">Cerrar</span>
                &times;
              </button>
            </div>
          )}

          {mensaje && (
            <div className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/20 text-primary rounded-xl animate-fade-in">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <p className="text-sm font-medium">{mensaje}</p>
            </div>
          )}

          {/* BARRA DE PROGRESO GLOBAL */}
          {loading && (
            <div className="space-y-3 animate-fade-in">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Subiendo {currentActivity}...
                </span>
                <span className="font-semibold text-primary">{progreso}%</span>
              </div>
              <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 animate-progress"
                  style={{ width: `${progreso}%` }}
                />
              </div>
            </div>
          )}

          {/* ACTIVIDADES */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* ACTIVIDAD 2 */}
            <Card className="p-8 space-y-6 border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Actividad 2</h2>
                  <p className="text-sm text-muted-foreground">Evaluacion del Lider</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nombre del alumno</label>
                  <input
                    type="text"
                    placeholder="Ingresa tu nombre completo"
                    value={nombreAlumno}
                    onChange={(e) => setNombreAlumno(e.target.value)}
                    disabled={loading}
                    className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 disabled:opacity-50 ${
                      error && !nombreAlumno ? "border-destructive ring-destructive/20" : "border-input"
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Archivo de actividad</label>
                  <label className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 cursor-pointer transition-all duration-300 ${
                    archivoA2 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:border-primary/50 hover:bg-primary/5"
                  } ${loading ? "opacity-50 pointer-events-none" : ""}`}>
                    <Upload className={`w-8 h-8 mb-2 ${archivoA2 ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="text-sm text-center">
                      {archivoA2 ? (
                        <span className="text-primary font-medium">{archivoA2.name}</span>
                      ) : (
                        <span className="text-muted-foreground">Arrastra o selecciona tu archivo</span>
                      )}
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      disabled={loading}
                      onChange={(e) => setArchivoA2(e.target.files?.[0] || null)}
                    />
                  </label>
                </div>

                <Button
                  disabled={loading || !nombreAlumno || !archivoA2}
                  onClick={() => {
                    if (!nombreAlumno || !archivoA2) {
                      setError("Completa todos los campos antes de enviar")
                      return
                    }
                    setError("")
                    subirArchivo(archivoA2, "actividad2", "actividad2", {
                      nombre: nombreAlumno,
                    }, "Actividad 2")
                  }}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 disabled:opacity-50"
                >
                  {loading && currentActivity === "Actividad 2" ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Subiendo...
                    </span>
                  ) : (
                    "Enviar Actividad 2"
                  )}
                </Button>
              </div>
            </Card>

            {/* ACTIVIDAD 3 */}
            <Card className="p-8 space-y-6 border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Actividad 3</h2>
                  <p className="text-sm text-muted-foreground">Evaluacion Interequipos</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nombre del equipo</label>
                  <input
                    type="text"
                    placeholder="Ingresa el nombre del equipo"
                    value={nombreEquipo}
                    onChange={(e) => setNombreEquipo(e.target.value)}
                    disabled={loading}
                    className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 disabled:opacity-50 ${
                      error && !nombreEquipo ? "border-destructive ring-destructive/20" : "border-input"
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Archivo de actividad</label>
                  <label className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 cursor-pointer transition-all duration-300 ${
                    archivoA3 
                      ? "border-accent bg-accent/5" 
                      : "border-border hover:border-accent/50 hover:bg-accent/5"
                  } ${loading ? "opacity-50 pointer-events-none" : ""}`}>
                    <Upload className={`w-8 h-8 mb-2 ${archivoA3 ? "text-accent" : "text-muted-foreground"}`} />
                    <span className="text-sm text-center">
                      {archivoA3 ? (
                        <span className="text-accent font-medium">{archivoA3.name}</span>
                      ) : (
                        <span className="text-muted-foreground">Arrastra o selecciona tu archivo</span>
                      )}
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      disabled={loading}
                      onChange={(e) => setArchivoA3(e.target.files?.[0] || null)}
                    />
                  </label>
                </div>

                <Button
                  disabled={loading || !nombreEquipo || !archivoA3}
                  onClick={() => {
                    if (!nombreEquipo || !archivoA3) {
                      setError("Completa todos los campos antes de enviar")
                      return
                    }
                    setError("")
                    subirArchivo(archivoA3, "actividad3", "actividad3", {
                      equipo: nombreEquipo,
                    }, "Actividad 3")
                  }}
                  className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl transition-all duration-300 disabled:opacity-50"
                >
                  {loading && currentActivity === "Actividad 3" ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Subiendo...
                    </span>
                  ) : (
                    "Enviar Actividad 3"
                  )}
                </Button>
              </div>
            </Card>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
