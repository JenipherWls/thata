export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function absoluteUrl(pathname: string) {
  const base = "https://thamyresqueiroz.com";
  return new URL(pathname, base).toString();
}
