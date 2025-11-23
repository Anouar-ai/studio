import Link from "next/link";
import { Tv2 } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="IPTV Provider homepage">
      <Tv2 className="h-7 w-7 text-primary" />
      <strong className="text-xl font-bold font-headline tracking-tight">
        IPTV Provider
      </strong>
    </Link>
  );
}
