import {
	ChevronDownIcon,
	CircleCheckIcon,
	CircleXIcon,
	GithubIcon,
	ImageUpIcon,
	Maximize2Icon,
	Minimize2Icon,
	PencilIcon,
	TextSearchIcon,
	Trash2Icon,
	XIcon,
} from "lucide-react";
import { type UseBoopOptions } from "use-boop-simple";

export const ALL_ICONS = {
	"cancel": { boop: {}, icon: CircleXIcon },
	"chevron-down": { boop: { y: 4 }, icon: ChevronDownIcon },
	"close": { boop: { rotate: 15 }, icon: XIcon },
	"confirm": { boop: {}, icon: CircleCheckIcon },
	"delete": { boop: {}, icon: Trash2Icon },
	"edit": { boop: { rotate: 7.5 }, icon: PencilIcon },
	"github": { boop: { rotate: 10 }, icon: GithubIcon },
	"search": { boop: {}, icon: TextSearchIcon },
	"upload": { boop: {}, icon: ImageUpIcon },
	"zoom-in": { boop: {}, icon: Maximize2Icon },
	"zoom-out": { boop: {}, icon: Minimize2Icon },
} as const satisfies Record<string, { boop: UseBoopOptions; icon: React.ComponentType; }>;

export type IconName = keyof typeof ALL_ICONS;
