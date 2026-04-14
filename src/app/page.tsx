import Link from "next/link";
import { Scissors } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-900">
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-8">
        <div className="w-20 h-20 rounded-full bg-amber-600 flex items-center justify-center mb-6">
          <Scissors className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Barbearia App
        </h1>
        <p className="text-zinc-400 text-center text-sm leading-relaxed mb-8">
          Agende seu corte com os melhores profissionais da cidade.
          Rápido, fácil e sem filas.
        </p>

        <div className="w-full space-y-3 max-w-xs">
          <Link
            href="/entrar"
            className="block w-full bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-semibold text-center py-4 rounded-2xl transition-colors"
          >
            Entrar
          </Link>
          <Link
            href="/cadastrar"
            className="block w-full bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-zinc-100 font-semibold text-center py-4 rounded-2xl transition-colors border border-zinc-700"
          >
            Criar conta
          </Link>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center text-zinc-600 text-xs pb-8 safe-bottom">
        © 2025 Barbearia App
      </p>
    </main>
  );
}
