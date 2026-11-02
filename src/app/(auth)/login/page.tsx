"use client"
//for reload
export const dynamic = "force-dynamic";

import { LoginForm } from "@/components/login-form"
import { GalleryVerticalEndIcon } from "lucide-react"
import { Shield } from "lucide-react"
import Link from "next/link";
import Logo from "@/components/logo";

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="items-center flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex w-fit items-center text-primary"
        >
          <Logo />
          <p className="ml-3 text-lg font-semibold text-card-foreground">
            AafnoInk
          </p>
        </Link>
        <LoginForm />
      </div>
    </div>
  )
}
