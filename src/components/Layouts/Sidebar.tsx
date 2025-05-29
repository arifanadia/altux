"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  FolderArchive,
  Home,
  LogOut,
  Settings,
  Star,
  User,
  User2,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { APP_NAME } from "@/lib/constants";
import { useAuth } from "@/context/FindUser";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(true);
  const { user, logOut } = useAuth();

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
    <div
      className={cn(
        "relative flex flex-col h-full px-3 py-4 border-r bg-card",
        className
      )}
    >
      <div className="flex items-center pb-4 border-b mb-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 font-semibold tracking-tight text-xl"
        >
          <FolderArchive className="h-6 w-6 text-primary" />
          {expanded && <span>{APP_NAME}</span>}
        </Link>
        <div className="ml-auto">
          <Button
            variant="outline"
            size="icon"
            className="hidden md:flex"
            onClick={() => setExpanded(!expanded)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d={
                  expanded
                    ? "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    : "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                }
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
      </div>

      <div className="flex gap-2 items-center mb-8 px-2">
        <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
          <User className="h-4 w-4" />
        </div>
        {expanded && (
          <div className="flex flex-col">
            <p className="text-sm font-medium">Altux Admin</p>
            <p className="text-xs text-muted-foreground">{user?.email}</p>
          </div>
        )}
      </div>

      <div className="space-y-1">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            <Button
              variant={pathname === item.href ? "default" : "ghost"}
              className={cn(
                "w-full justify-start",
                !expanded && "justify-center p-2"
              )}
            >
              <item.icon className={cn("h-5 w-5", expanded && "mr-2")} />
              {expanded && <span>{item.title}</span>}
            </Button>
          </Link>
        ))}
      </div>

      <div className=" mt-2">
        <Button onClick={logOut} className="w-full justify-start">
          <LogOut className={cn("h-5 w-5", expanded && "mr-2 ")} />
          {expanded && <span>Log out</span>}
        </Button>
      </div>
    </div>
  );
}
