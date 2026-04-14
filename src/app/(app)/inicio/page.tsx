import { Bell, Scissors } from "lucide-react";
import Link from "next/link";

const proximosAgendamentos = [
  {
    id: 1,
    servico: "Corte + Barba",
    barbeiro: "Carlos",
    data: "Hoje, 14:30",
    status: "confirmado",
  },
];

const servicos = [
  { id: 1, nome: "Corte", preco: "R$ 40", duracao: "30 min", emoji: "✂️" },
  { id: 2, nome: "Barba", preco: "R$ 30", duracao: "20 min", emoji: "🪒" },
  { id: 3, nome: "Corte + Barba", preco: "R$ 65", duracao: "50 min", emoji: "💈" },
  { id: 4, nome: "Progressiva", preco: "R$ 80", duracao: "60 min", emoji: "✨" },
];

export default function InicioPage() {
  return (
    <main className="bg-zinc-900 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-12 pb-6">
        <div>
          <p className="text-zinc-500 text-sm">Olá,</p>
          <h1 className="text-xl font-bold text-white">João Silva 👋</h1>
        </div>
        <button className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center relative">
          <Bell className="w-5 h-5 text-zinc-300" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full" />
        </button>
      </div>

      {/* Banner */}
      <div className="mx-5 mb-6 bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl p-5">
        <p className="text-amber-100 text-xs font-medium mb-1">PROMOÇÃO DA SEMANA</p>
        <p className="text-white font-bold text-lg leading-tight">
          Corte + Barba com<br />20% de desconto
        </p>
        <Link
          href="/agendar"
          className="inline-block mt-3 bg-white text-amber-600 font-semibold text-sm px-4 py-2 rounded-xl"
        >
          Agendar agora
        </Link>
      </div>

      {/* Próximos agendamentos */}
      <div className="px-5 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white font-semibold">Próximos agendamentos</h2>
          <Link href="/agendamentos" className="text-amber-500 text-sm">Ver todos</Link>
        </div>

        {proximosAgendamentos.length === 0 ? (
          <div className="bg-zinc-800 rounded-2xl p-5 text-center">
            <Scissors className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
            <p className="text-zinc-500 text-sm">Nenhum agendamento</p>
            <Link href="/agendar" className="text-amber-500 text-sm font-medium mt-1 block">
              Agendar agora
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {proximosAgendamentos.map((item) => (
              <div key={item.id} className="bg-zinc-800 rounded-2xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center">
                  <Scissors className="w-6 h-6 text-amber-500" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium text-sm">{item.servico}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{item.barbeiro} · {item.data}</p>
                </div>
                <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-lg">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Serviços */}
      <div className="px-5 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white font-semibold">Serviços</h2>
          <Link href="/servicos" className="text-amber-500 text-sm">Ver todos</Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {servicos.map((s) => (
            <div key={s.id} className="bg-zinc-800 rounded-2xl p-4">
              <span className="text-2xl">{s.emoji}</span>
              <p className="text-white font-medium text-sm mt-2">{s.nome}</p>
              <p className="text-amber-500 font-bold mt-1">{s.preco}</p>
              <p className="text-zinc-600 text-xs mt-0.5">{s.duracao}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
