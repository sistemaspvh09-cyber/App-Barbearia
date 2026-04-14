import { ChevronRight, LogOut, Bell, Shield, HelpCircle, Star } from "lucide-react";
import Link from "next/link";

const opcoes = [
  { icon: Bell, label: "Notificações", href: "/perfil/notificacoes" },
  { icon: Shield, label: "Privacidade e segurança", href: "/perfil/privacidade" },
  { icon: Star, label: "Avaliar o app", href: "/perfil/avaliar" },
  { icon: HelpCircle, label: "Ajuda e suporte", href: "/perfil/ajuda" },
];

export default function PerfilPage() {
  return (
    <main className="bg-zinc-900 min-h-screen">
      {/* Header */}
      <div className="px-5 pt-12 pb-6">
        <h1 className="text-xl font-bold text-white">Perfil</h1>
      </div>

      {/* Avatar + Info */}
      <div className="flex items-center gap-4 px-5 mb-8">
        <div className="w-16 h-16 rounded-full bg-amber-600/30 flex items-center justify-center text-3xl">
          👤
        </div>
        <div>
          <p className="text-white font-semibold text-lg">João Silva</p>
          <p className="text-zinc-500 text-sm">joao@email.com</p>
          <p className="text-zinc-600 text-xs mt-0.5">(11) 99999-9999</p>
        </div>
        <Link
          href="/perfil/editar"
          className="ml-auto text-amber-500 text-sm font-medium bg-amber-600/10 px-3 py-1.5 rounded-xl"
        >
          Editar
        </Link>
      </div>

      {/* Stats */}
      <div className="flex gap-3 px-5 mb-8">
        <div className="flex-1 bg-zinc-800 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-white">12</p>
          <p className="text-zinc-500 text-xs mt-1">Cortes</p>
        </div>
        <div className="flex-1 bg-zinc-800 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-white">5</p>
          <p className="text-zinc-500 text-xs mt-1">Avaliações</p>
        </div>
        <div className="flex-1 bg-zinc-800 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-amber-500">4.8</p>
          <p className="text-zinc-500 text-xs mt-1">Média</p>
        </div>
      </div>

      {/* Opções */}
      <div className="px-5 space-y-2">
        {opcoes.map(({ icon: Icon, label, href }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-4 bg-zinc-800 rounded-2xl px-4 py-4"
          >
            <div className="w-9 h-9 bg-zinc-700 rounded-xl flex items-center justify-center">
              <Icon className="w-4 h-4 text-zinc-300" />
            </div>
            <span className="text-white text-sm flex-1">{label}</span>
            <ChevronRight className="w-4 h-4 text-zinc-600" />
          </Link>
        ))}
      </div>

      {/* Sair */}
      <div className="px-5 mt-4 mb-8">
        <button className="flex items-center gap-4 w-full bg-zinc-800 rounded-2xl px-4 py-4">
          <div className="w-9 h-9 bg-red-500/10 rounded-xl flex items-center justify-center">
            <LogOut className="w-4 h-4 text-red-400" />
          </div>
          <span className="text-red-400 text-sm">Sair da conta</span>
        </button>
      </div>
    </main>
  );
}
