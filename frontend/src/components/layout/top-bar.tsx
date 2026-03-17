import { SidebarTrigger } from "@/components/ui/sidebar"
import { ColorModeToggle } from "@/components/theme/color-mode-toggle";

export function TopBar() {
    return (
        <div className="w-full h-12 p-3 flex flex-row justify-between items-center border-b border-border-1">
            <SidebarTrigger />
            <ColorModeToggle />
        </div>
    )
}