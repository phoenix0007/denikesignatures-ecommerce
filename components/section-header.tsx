import type { LucideIcon } from "lucide-react"

interface SectionHeaderProps {
  title: string
  description?: string
  icon?: LucideIcon
}

export default function SectionHeader({ title, description, icon: Icon }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center mb-8">
      {Icon && (
        <div className="mb-4 relative">
          <div className="absolute -inset-3 rounded-full bg-primary/5"></div>
          <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      )}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight relative inline-block">
          {title}
          <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-primary rounded-full"></span>
        </h2>
        {description && <p className="text-muted-foreground max-w-2xl">{description}</p>}
      </div>
    </div>
  )
}

