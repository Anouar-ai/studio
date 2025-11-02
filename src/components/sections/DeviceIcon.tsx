"use client";

import type { IconType } from "react-icons";
import * as siIcons from "react-icons/si";
import * as lucideIcons from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface DeviceIconProps {
  name: string;
  iconName: string;
  href: string;
}

const allIcons: Record<string, IconType | any> = { ...siIcons, ...lucideIcons };

export function DeviceIcon({ name, iconName, href }: DeviceIconProps) {
  const Icon = allIcons[iconName];

  if (!Icon) {
    return null;
  }

  const isInternal = href.startsWith('/');
  const Component = isInternal ? Link : 'a';

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Component href={href} className={cn(
            "group flex h-16 w-16 items-center justify-center rounded-lg bg-muted/50 transition-colors hover:bg-primary/10",
            !isInternal && "cursor-pointer",
            href === '#' && "pointer-events-none opacity-50"
          )}>
            <Icon className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" />
          </Component>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
