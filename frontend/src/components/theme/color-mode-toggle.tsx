"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function ColorModeToggle() {
  const { theme, setTheme } = useTheme()

  const isDark = theme === "dark"

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="dark-mode-switch"
        checked={isDark}
        onCheckedChange={(checked) =>
          setTheme(checked ? "dark" : "light")
        }
      />

      <Label htmlFor="dark-mode-switch" className="relative">
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </Label>
    </div>
  )
}