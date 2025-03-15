import Link from "next/link";

import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export function InteractiveHoverButtonDemo() {
  return (
    <Link href="/industry">
      <InteractiveHoverButton>View Industry Trends</InteractiveHoverButton>
    </Link>
  );
}
