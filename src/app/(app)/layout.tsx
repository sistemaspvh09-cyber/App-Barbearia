import BottomNav from "@/components/BottomNav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900">
      <div className="flex-1 pb-20">{children}</div>
      <BottomNav />
    </div>
  );
}
