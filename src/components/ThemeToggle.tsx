import { Button } from "@/components/ui/button";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
    const { theme, mode, setMode } = useTheme();

    const handleToggle = () => {
        setMode((prev) => {
            if (prev === "auto") return "dark";   // sales de auto
            if (prev === "dark") return "light";
            return "auto"; // vuelves a auto
        });
    };

    return (
        <Button
            onClick={handleToggle}
            variant="ghost"
            size="icon"
            className="bg-card text-foreground
            border border-border
            rounded-full hover:text-primary transition"
        >
            {mode === "auto" ? (
                <Monitor />
            ) : theme === "dark" ? (
                <Sun />
            ) : (
                <Moon />
            )}
        </Button>
    );
};

export default ThemeToggle;