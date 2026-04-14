import { ChevronRight, Scissors } from "lucide-react";
import Link from "next/link";

const agendamentos = [
  {
    id: 1,
    servico: "Corte + Barba",
    barbeiro: "Carlos",
    data: "Hoje, 14:30",
    status: "confirmado",
    preco: "R$ 65",
  },
  {
    id: 2,
    servico: "Corte",
    barbeiro: "Lucas",
    data: "12 Jan, 10:00",
    status: "concluido",
    preco: "R$ 40",
  },
  {
    id: 3,
    servico: "Barba",
    barbeiro: "Carlos",
    data: "05 Jan, 16:00",
    status: "cancelado",
    preco: "R$ 30",
  },
];

const statusConfig: Record<string, { label: string; color: string }> = {
  confirmado: { label: "Confirmado", color: "text-emerald-400 bg-emerald-400/10" },
  concluido: { label: "Concluído", color: "text-zinc-400 bg-zinc-700" },
  cancelado: { label: "Cancelado", color: "text-red-400 bg-red-400/10" },
};

export default function AgendamentosPage() {
  return (
    <main className="bg-zinc-900 min-h-screen">
      {/* Header */}
      <div className="px-5 pt-12 pb-6">
        <h1 className="text-xl font-bold text-white">Agendamentos</h1>
        <p className="text-zinc-500 text-sm mt-1">Histórico e próximos horários</p>
      </div>

      {/* Lista */}
      <div className="px-5 space-y-3">
        {agendamentos.map((item) => {
          const s = statusConfig[item.status];
          return (
            <div key={item.id} className="bg-zinc-800 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center shrink-0">
                <Scissors className="w-6 h-6 text-amber-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium text-sm truncate">{item.servico}</p>
                <p className="text-zinc-500 text-xs mt-0.5">{item.barbeiro} · {item.data}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-lg ${s.color}`}>
                    {s.label}
                  </span>
                  <span className="text-amber-500 font-semibold text-xs">{item.preco}</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-600 shrink-0" />
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="px-5 mt-6">
        <Link
          href="/agendar"
          className="block w-full bg-amber-600 text-white font-semibold text-center py-4 rounded-2xl"
        >
          Novo agendamento
        </Link>
      </div>
    </main>
  );
}
