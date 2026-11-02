import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Design } from "@/data/designs";

export function DesignCard({ design }: { design: Design }) {
  return (
    <Link href={design.href} className="group block focus-visible:outline-none">
      <Card className="h-full overflow-hidden pt-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="flex h-full flex-col p-0">
          {/* Image — same fixed aspect as the shop cards */}
          <div className="relative aspect-[5/5] w-full overflow-hidden bg-muted">
            <Image
              src={design.imageSrc}
              alt={design.imageAlt}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>

          {/* Info — just the name + a hover-revealed "Use design" button */}
          <div className="flex flex-1 flex-col gap-2 p-4">
            <h3 className="line-clamp-1 text-sm font-medium text-foreground">
              {design.name}
            </h3>

            <span
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                // Visible on touch (no hover); hidden until hover on larger screens
                "pointer-events-none mt-auto w-full select-none opacity-100 transition-all duration-300 sm:translate-y-1 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
              )}
            >
              Use design
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
