"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({
  href,
  children,
  className = "",
  newTab = false,
}) {
  const pathname = usePathname();
  const isExternal = href.startsWith("http");
  const isActive = pathname === href;

  // Common props for both internal and external links
  const commonProps = {
    className: `${className} ${
      isActive ? "text-primary font-medium" : ""
    } transition-all duration-300`,
    ...(isExternal || newTab
      ? {
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {}),
  };

  if (isExternal) {
    return (
      <a href={href} {...commonProps}>
        {children}
        <span className="inline-block ml-1">↗</span>
      </a>
    );
  }

  return (
    <Link href={href} {...commonProps}>
      {children}
      {newTab && <span className="inline-block ml-1">↗</span>}
    </Link>
  );
}
