"use client";

// import { useModal } from "connectkit";
import { useAccount } from "wagmi";
import { disconnect } from "@wagmi/core";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import { ModeToggle } from "@/components/dropdown";
import { ChevronRight, Droplets, LogOut } from "lucide-react";
import * as React from "react";
// import { Slot } from "@radix-ui/react-slot";
// import { cva, type VariantProps } from "class-variance-authority";

// import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = React.useState(false);
  //   const { setOpen } = useModal();
  const { address } = useAccount();
  const pathname = usePathname();

  const { ready, authenticated, login } = usePrivy();
  // Disable login when Privy is not ready or the user is already authenticated
  const disableLogin = !ready || (ready && authenticated);

  return (
    <nav
      className="
    flex flex-col
    items-start border-b
    sm:flex-row sm:items-center
    sm:pr-10
    "
    >
      <div className="p flex flex-1 items-center px-8 py-3">
        <Link href="/" className="mr-5 flex items-center">
          <Droplets className="opacity-85" size={19} />
          <p className={`ml-2 mr-4 text-lg font-semibold`}>lenscn</p>
        </Link>
        <Link
          href="/"
          className={`mr-5 text-sm ${pathname !== "/" && "opacity-50"}`}
        >
          <p>Home</p>
        </Link>
        <Link
          href="/search"
          className={`mr-5 text-sm ${pathname !== "/search" && "opacity-60"}`}
        >
          <p>Search</p>
        </Link>
        {address && (
          <Link
            href="/profile"
            className={`mr-5 text-sm ${pathname !== "/search" && "opacity-60"}`}
          >
            <p>Profile</p>
          </Link>
        )}
      </div>
      <div
        className="
        flex
        pb-3
        pl-8 sm:items-center sm:p-0
      "
      >
        {!address && (
          <button
            onClick={() => setOpen(true)}
            variant="secondary"
            className="mr-4"
          >
            Connect Wallet
            <ChevronRight className="h-4 w-4" />
          </button>
        )}

        <button disabled={disableLogin} onClick={login}>
          Log in
        </button>
        {address && (
          <button onClick={disconnect} variant="secondary" className="mr-4">
            Disconnect
            <LogOut className="ml-3 h-4 w-4" />
          </button>
        )}
        {/* <ModeToggle /> */}
      </div>
    </nav>
  );
}
function usePrivy(): { ready: any; authenticated: any; login: any } {
  throw new Error("Function not implemented.");
}
