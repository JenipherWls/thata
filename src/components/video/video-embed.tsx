import Image from "next/image";
import { Card } from "@/components/ui/card";

export function VideoEmbed({
  title,
  embedUrl,
}: {
  title: string;
  embedUrl: string;
}) {
  if (!embedUrl) {
    return (
      <Card className="overflow-hidden">
        <div className="relative aspect-video">
          <Image
            src="/images/video-placeholder.svg"
            alt={`${title} (placeholder de vídeo — substitua pelo embed)`}
            fill
            className="object-cover"
          />
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </Card>
  );
}
