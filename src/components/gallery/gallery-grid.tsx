import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/content/photography";

export function GalleryGrid({
  items,
  className,
}: {
  items: GalleryItem[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item, index) => {
        const featured = index % 8 === 0;
        return (
          <Card
            key={`${item.alt}-${index}`}
            className={cn("group overflow-hidden", featured ? "lg:col-span-2" : "")}
          >
            <div className={cn("relative", featured ? "aspect-[16/9] lg:aspect-[21/9]" : "aspect-[4/3]")}>
              <Image src={item.src} alt={item.alt} fill className="object-cover transition duration-700 group-hover:scale-[1.02]" />
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(3,17,13,0.58),transparent_55%)] opacity-70"
                aria-hidden="true"
              />
              {item.tag ? (
                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-surface/25 bg-surface/10 px-3 py-1 text-xs text-surface backdrop-blur">
                    {item.tag}
                  </span>
                </div>
              ) : null}
            </div>
          </Card>
        );
      })}
    </div>
  );
}
