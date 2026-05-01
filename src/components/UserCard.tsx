import { Mail, Target, Hexagon } from "lucide-react";

export default function UserCard() {
  return (
    <div className="bg-card max-w-60 border border-border rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 animate-fadeUp relative before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-accent before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
      <div className="flex flex-col items-start gap-2">
        <p className="uppercase font-display bg-accentDim text-accent w-11 h-11 flex items-center justify-center rounded-lg  ">
          l
        </p>
        <p className="font-display text-white ">Leanne Graham</p>
        <p className="text-accent font-JetBrains tracking-wider text-[11px]">
          @Bret
        </p>
      </div>

      <div className="border solid border-border my-4" />

      <div className="flex flex-col gap-2 text-muted text-sm">
        <p className="flex items-center gap-1">
          <Mail size={13} />
          sincere@april.biz
        </p>
        <p className="flex items-center gap-1">
          <Target size={13} />
          Gwenborough
        </p>
        <p className="flex items-center gap-1">
          <Hexagon size={13} />
          Romaguera-Crona
        </p>
      </div>
    </div>
  );
}
