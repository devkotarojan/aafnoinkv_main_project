"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

// Navigation links shared by desktop and mobile
const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/design-lab", label: "Design your own" },
  { href: "/inspiration", label: "Inspiration" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-background px-4 md:px-11">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side — Logo + Desktop Navigation */}
        <div className="flex items-center gap-6 h-full">
          <Link
            className="text-primary hover:text-primary/90"
            href="/"
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden h-full md:flex [&>div]:h-full">
            <NavigationMenuList className="h-full gap-2">
              {navigationLinks.map((link) => (
                <NavigationMenuItem
                  className="h-full"
                  key={link.href}
                >
                  <NavigationMenuLink
                    asChild
                    data-active={
                      pathname === link.href ? "" : undefined
                    }
                    className="h-full justify-center rounded-none border-y-2 border-transparent bg-transparent! py-1.5 font-medium text-sm-foreground hover:border-b-primary hover:bg-transparent hover:text-primary data-[active]:border-b-primary"
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Desktop buttons */}
          <div className="hidden items-center gap-2 md:flex">
            <Button
              asChild
              className="text-sm"
              size="lg"
              variant="outline"
            >
              <Link href="/login">Sign In</Link>
            </Button>

            <Button
              asChild
              className="text-sm font-light"
              size="lg"
              variant="secondary"
            >
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Sheet Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-10"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="flex w-[85vw] max-w-[360px] flex-col p-6"
              >
                {/* Mobile logo */}
                <Link
                  href="/"
                  className="flex w-fit items-center text-primary"
                >
                  <Logo />
                  <p className="ml-3 text-xl font-medium text-card-foreground">
                    AafnoInk
                  </p>
                </Link>

                {/* Mobile links */}
                <nav className="mt-10 flex flex-col gap-1">
                  {navigationLinks.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                          isActive
                            ? "bg-primary/10 text-secondary"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>

                {/* Mobile actions */}
                <div className="mt-auto border-t pt-6">
                  <div className="flex flex-col gap-3">
                    <Button
                      asChild
                      variant="outline"
                      className="h-12 w-full"
                    >
                      <Link href="/login">Sign In</Link>
                    </Button>

                    <Button
                      asChild
                      variant="secondary"
                      className="h-12 w-full"
                    >
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}