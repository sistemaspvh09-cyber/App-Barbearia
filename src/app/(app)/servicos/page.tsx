import { Clock } from "lucide-react";
import Link from "next/link";

const servicos = [
  { id: 1, nome: "Corte", preco: "R$ 40", duracao: "30 min", descricao: "Corte masculino com tesoura ou máquina", emoji: "✂️" },
  { id: 2, nome: "Barba", preco: "R$ 30", duracao: "20 min", descricao: "Acabamento e modelagem de barba", emoji: "🪒" },
  { id: 3, nome: "Corte + Barba", preco: "R$ 65", duracao: "50 min", descricao: "Combo completo com desconto especial", emoji: "💈" },
  { id: 4, nome: "Progressiva", preco: "R$ 80", duracao: "60 min", descricao: "Tratamento alisante para cabelos", emoji: "✨" },
  { id: 5, nome: "Hidratação", preco: "R$ 50", duracao: "40 min", descricao: "Hidratação profunda para cabelo e barba", emoji: "💧" },
  { id: 6, nome: "Sobrancelha", preco: "R$ 20", duracao: "15 min", descricao: "Design e acabamento de sobrancelha", emoji: "👁️" },
];

export default function ServicosPage() {
  return (
    <main className="bg-zinc-900 min-h-screen">
      {/* Header */}
      <div className="px-5 pt-12 pb-6">
        <h1 className="text-xl font-bold text-white">Serviços</h1>
        <p className="text-zinc-500 text-sm mt-1">Escolha o que você precisa</p>
      </div>

      {/* Lista */}
      <div className="px-5 space-y-3">
        {servicos.map((s) => (
          <div key={s.id} className="bg-zinc-800 rounded-2xl p-4 flex items-start gap-4">
            <div className="w-12 h-12 bg-zinc-700 rounded-xl flex items-center justify-center text-2xl shrink-0">
              {s.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-white font-medium">{s.nome}</p>
                <p className="text-amber-500 font-bold text-sm">{s.preco}</p>
              </div>
              <p className="text-zinc-500 text-xs mt-0.5 leading-relaxed">{s.descricao}</p>
              <div className="flex items-center gap-1 mt-2">
                <Clock className="w-3 h-3 text-zinc-600" />
                <span className="text-zinc-600 text-xs">{s.duracao}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-5 mt-6 mb-6">
        <Link
          href="/(app)/agendar"
          className="block w-full bg-amber-600 text-white font-semibold text-center py-4 rounded-2xl"
        >
          Agendar serviço
        </Link>
      </div>
    </main>
  );
}
