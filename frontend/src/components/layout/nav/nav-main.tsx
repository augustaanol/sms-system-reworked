"use client"

import { type LucideIcon } from "lucide-react"


import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    groupName: string
    items?: {
      title: string
      icon?: LucideIcon
      url: string
    }[]
  }[]
}) {
  return (
    <>
    {items.map((item) => (
    <SidebarGroup key={item.groupName}>
      <SidebarGroupLabel>{item.groupName}</SidebarGroupLabel>
      <SidebarMenu>
        {item.items?.map((subItem) => (
          <SidebarMenuItem key={subItem.title}>
              <SidebarMenuButton tooltip={subItem.title}>
                {subItem.icon && <subItem.icon />}
                <span>{subItem.title}</span>
              </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
    ))}
    </>
  )
}
