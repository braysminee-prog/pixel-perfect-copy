import { Clapperboard, Home, User, Users, Wallet } from "lucide-react";

const items = [
  { label: "Beranda", icon: Home, active: true },
  { label: "Dompet", icon: Wallet, active: false },
  { label: "Komunitas", icon: Users, active: false },
  { label: "Shorts", icon: Clapperboard, active: false },
  { label: "Profil", icon: User, active: false },
];

export function BottomNav() {
  return (
    <nav
      aria-label="Navigasi utama"
      className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:px-0 md:pb-6"
    >
      <div className="mx-auto flex max-w-md items-center justify-between rounded-full orphic-glass px-2 py-2">
        {items.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            type="button"
            aria-current={active ? "page" : undefined}
            className={`flex min-w-[62px] flex-col items-center gap-1 rounded-full px-2 py-2 transition-colors duration-300 ${
              active ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon className="size-[19px]" strokeWidth={1.5} />
            <span className="text-[10px] tracking-wide">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
