import * as LucideIcons from "lucide-react";

type IconComponent = React.ComponentType<{ className?: string }>;

/**
 * Resolve a Lucide icon by name string.
 * Returns the icon component or a fallback circle icon.
 */
export function resolveIcon(name: string): IconComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icons = LucideIcons as any;
  return icons[name] || LucideIcons.Circle;
}
