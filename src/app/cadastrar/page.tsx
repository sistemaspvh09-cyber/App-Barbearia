import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function RegisterPage() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-900 px-6 pt-safe-top">
      {/* Header */}
      <div className="flex items-center pt-6 pb-8">
        <Link href="/" className="text-zinc-400 active:text-white transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-semibold text-white ml-3">Criar conta</h1>
      </div>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-zinc-400 font-medium">Nome completo</label>
          <input
            type="text"
            placeholder="João da Silva"
            className="bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3.5 text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-zinc-400 font-medium">Telefone</label>
          <input
            type="tel"
            placeholder="(11) 99999-9999"
            className="bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3.5 text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-zinc-400 font-medium">E-mail</label>
          <input
            type="email"
            placeholder="seu@email.com"
            className="bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3.5 text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-zinc-400 font-medium">Senha</label>
          <input
            type="password"
            placeholder="Mínimo 8 caracteres"
            className="bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3.5 text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-semibold py-4 rounded-2xl mt-2 transition-colors"
        >
          Criar conta
        </button>
      </form>

      <div className="mt-8 text-center">
        <span className="text-zinc-500 text-sm">Já tem uma conta? </span>
        <Link href="/entrar" className="text-amber-500 text-sm font-medium">
          Entrar
        </Link>
      </div>
    </main>
  );
}
