"use client"

import * as React from "react"
import {
  Settings2,
  LayoutDashboard,
  Megaphone,
  Smartphone,
  ContactRound
} from "lucide-react"

import { NavMain } from "@/components/layout/nav/nav-main"
import { NavUser } from "@/components/layout/nav/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?_=20150327203541",
  },
  navMain: [
    {
      groupName: "Dashboard",
      items: [
        {
          title: "Overview",
          url: "#",
          icon: LayoutDashboard,
        },
        {
          title: "Campaigns",
          url: "#",
          icon: Megaphone,
        },
        {
          title: "Subscribers",
          url: "#",
          icon: ContactRound,
        },
      ],
    },
    {
      groupName: "Settings",
      items: [
        {
          title: "General settings",
          url: "#",
          icon: Settings2,
        },
        {
          title: "Device manager",
          url: "#",
          icon: Smartphone,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="group" {...props}>
      <SidebarHeader className="pt-3 pb-0 justify-center items-center">
        <h1 className="group-data-[state=collapsed]:hidden header-heading">SMS Platform</h1>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
