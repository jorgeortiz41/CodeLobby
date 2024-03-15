import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-30 flex items-center justify-between border-b-[1px] border-slate-400/10 bg-transparent p-4 backdrop-blur-xl">
      <h1>CodeLobby</h1>
      <div className="flex items-center space-x-4">
        <UserButton />
        <ModeToggle />
      </div>
    </nav>
  );
}
