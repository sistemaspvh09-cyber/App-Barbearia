"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, Scissors, User } from "lucide-react";

const navItems = [
  { href: "/(app)/inicio", icon: Home, label: "Início" },
  { href: "/(app)/agendamentos", icon: Calendar, label: "Agenda" },
  { href: "/(app)/servicos", icon: Scissors, label: "Serviços" },
  { href: "/(app)/perfil", icon: User, label: "Perfil" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 safe-bottom z-50">
      <div className="flex items-center">
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className="flex-1 flex flex-col items-center gap-1 py-3 transition-colors"
            >
              <Icon
                className={`w-5 h-5 transition-colors ${
                  active ? "text-amber-500" : "text-zinc-500"
                }`}
                strokeWidth={active ? 2.5 : 1.8}
              />
              <span
                className={`text-xs font-medium transition-colors ${
                  active ? "text-amber-500" : "text-zinc-500"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
