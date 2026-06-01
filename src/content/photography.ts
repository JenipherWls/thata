export const photographyTypes = [
  "Feminino",
  "Infantil",
  "Casais",
  "Corporativo",
  "Eventos",
] as const;

export type GalleryItem = {
  src: string;
  alt: string;
  tag?: string;
};

export const photographyGallery: GalleryItem[] = Array.from({ length: 18 }).map((_, index) => {
  const n = String(index + 1).padStart(2, "0");
  return {
    src: "/images/photo-placeholder.svg",
    alt: `Foto placeholder ${n} (substitua por imagens reais)`,
    tag: index % 3 === 0 ? "Editorial" : index % 3 === 1 ? "Retrato" : "Lifestyle",
  };
});

export const behindTheScenes: GalleryItem[] = Array.from({ length: 6 }).map((_, index) => {
  const n = String(index + 1).padStart(2, "0");
  return {
    src: "/images/photo-placeholder.svg",
    alt: `Bastidores placeholder ${n} (substitua por imagens/vídeos reais)`,
    tag: "Bastidores",
  };
});
