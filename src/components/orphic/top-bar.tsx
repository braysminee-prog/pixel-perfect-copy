import { Link } from "@tanstack/react-router";
import { Bell, Menu, Search, ShoppingBag } from "lucide-react";

export function TopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-6">
        <button
          type="button"
          aria-label="Buka menu"
          className="flex size-10 items-center justify-center rounded-full orphic-glass text-foreground/85 transition-colors duration-300 hover:text-foreground"
        >
          <Menu className="size-[18px]" strokeWidth={1.5} />
        </button>

        <span className="orphic-display select-none text-[15px] tracking-[0.34em] text-foreground/90">
          ORPHIC
        </span>

        <div className="flex items-center gap-2">
          <Link
            to="/search"
            aria-label="Cari di Orphic"
            className="flex size-10 items-center justify-center rounded-full orphic-glass text-foreground/85 transition-colors duration-300 hover:text-foreground"
          >
            <Search className="size-[18px]" strokeWidth={1.5} />
          </Link>
          <button
            type="button"
            aria-label="Keranjang"
            className="flex size-10 items-center justify-center rounded-full orphic-glass text-foreground/85 transition-colors duration-300 hover:text-foreground"
          >
            <ShoppingBag className="size-[18px]" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Notifikasi, 3 belum dibaca"
            className="relative flex size-10 items-center justify-center rounded-full orphic-glass text-foreground/85 transition-colors duration-300 hover:text-foreground"
          >
            <Bell className="size-[18px]" strokeWidth={1.5} />
            <span className="absolute -right-0.5 -top-0.5 flex size-[17px] items-center justify-center rounded-full bg-destructive text-[10px] font-semibold text-destructive-foreground">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
