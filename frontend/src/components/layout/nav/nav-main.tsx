"use client"

import { type LucideIcon } from "lucide-react"


import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
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
    {items.map((groupItem) => (
    <SidebarGroup>
      <SidebarGroupLabel>{groupItem.groupName}</SidebarGroupLabel>
      <SidebarMenu>
            <SidebarMenuItem key={item.title}>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
            </SidebarMenuItem>
        
      </SidebarMenu>
    </SidebarGroup>
    ))}
  )
}
