import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const servicos = ["Corte", "Barba", "Corte + Barba", "Progressiva", "Hidratação", "Sobrancelha"];
const barbeiros = ["Carlos", "Lucas", "Felipe"];
const horarios = ["09:00", "09:30", "10:00", "10:30", "11:00", "14:00", "14:30", "15:00", "15:30", "16:00"];

export default function AgendarPage() {
  return (
    <main className="bg-zinc-900 min-h-screen">
      {/* Header */}
      <div className="flex items-center px-5 pt-12 pb-6">
        <Link href="/(app)/inicio" className="text-zinc-400 active:text-white mr-3">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-xl font-bold text-white">Agendar</h1>
          <p className="text-zinc-500 text-xs mt-0.5">Escolha seu horário</p>
        </div>
      </div>

      <form className="px-5 space-y-6">
        {/* Serviço */}
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-2">Serviço</label>
          <div className="grid grid-cols-2 gap-2">
            {servicos.map((s) => (
              <label key={s} className="flex items-center gap-2 bg-zinc-800 rounded-xl px-3 py-3 cursor-pointer has-[:checked]:border has-[:checked]:border-amber-500 has-[:checked]:bg-amber-600/10 border border-transparent">
                <input type="radio" name="servico" value={s} className="accent-amber-500" />
                <span className="text-white text-sm">{s}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Barbeiro */}
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-2">Barbeiro</label>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
            {barbeiros.map((b) => (
              <label key={b} className="flex flex-col items-center gap-2 cursor-pointer shrink-0">
                <div className="w-14 h-14 rounded-full bg-zinc-700 flex items-center justify-center text-xl">
                  👤
                </div>
                <div className="flex items-center gap-1">
                  <input type="radio" name="barbeiro" value={b} className="accent-amber-500 w-3 h-3" />
                  <span className="text-zinc-300 text-xs">{b}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Data */}
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-2">Data</label>
          <input
            type="date"
            className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
          />
        </div>

        {/* Horário */}
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-2">Horário</label>
          <div className="grid grid-cols-4 gap-2">
            {horarios.map((h) => (
              <label key={h} className="flex items-center justify-center bg-zinc-800 rounded-xl py-2.5 cursor-pointer has-[:checked]:bg-amber-600 has-[:checked]:text-white border border-transparent has-[:checked]:border-amber-500">
                <input type="radio" name="horario" value={h} className="sr-only" />
                <span className="text-zinc-300 text-sm has-[:checked]:text-white">{h}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Observações */}
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-2">Observações (opcional)</label>
          <textarea
            placeholder="Ex: Quero o corte mais curto nas laterais..."
            rows={3}
            className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3.5 text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-none transition-colors"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-semibold py-4 rounded-2xl transition-colors"
        >
          Confirmar agendamento
        </button>
      </form>

      <div className="h-6" />
    </main>
  );
}
