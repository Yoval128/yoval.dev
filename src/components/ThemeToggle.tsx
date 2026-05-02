import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className="bg-white dark:bg-neutral-800
                       text-black dark:text-white
                       border border-neutral-300 dark:border-neutral-600
                       rounded-full"
        >
            {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
    );
};

export default ThemeToggle;