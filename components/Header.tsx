import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href={"/"} className="flex items-center space-x-2">
        <div className="bg-[#1060FE] w-fit">
          <Image
            src="https://imgs.search.brave.com/HVVyOQw0SkgNFDQrC_J9bsgeacs9V3KPIgklvRyZtd0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9Ecm9wYm94/XyhzZXJ2aWNlKS9E/cm9wYm94XyhzZXJ2/aWNlKS1JY29uLUJs/YWNrLUxvZ28ud2lu/ZS5zdmc.svg"
            alt="logo"
            className="invert"
            height={50}
            width={50}
          />
        </div>
        <h1 className="font-bold text-xl">Dropbox</h1>
      </Link>
      <div className="flex space-x-2 px-5 items-center">
        <ThemeToggler />
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}
