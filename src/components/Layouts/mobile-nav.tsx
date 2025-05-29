"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderArchive, User2 } from "lucide-react";

import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    {
      title: "Projects",
      icon: FolderArchive,
      href: "/admin",
      variant: "ghost",
    },
    {
      title: "Users",
      icon: User2,
      href: "/admin/users",
      variant: "ghost",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-gray-900 md:hidden z-10">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center py-2 px-3 text-xs",
              pathname === item.href
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
