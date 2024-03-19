import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs";

export default function Nav() {
  const { userId } = auth();

  return (
    <nav className="sticky top-0 z-30 flex items-center justify-between border-b-4 border-black bg-transparent p-4 backdrop-blur-md">
      <Link href="/" className="text-4xl">
        CodeLobby
      </Link>
      <div className="flex items-center space-x-4">
        {!userId ? (
          <Link
            href="/sign-in"
            className={buttonVariants({ variant: "outlineNeo" })}
          >
            Sign In
          </Link>
        ) : (
          <UserButton afterSignOutUrl="/" />
        )}
        <ModeToggle />
      </div>
    </nav>
  );
}
