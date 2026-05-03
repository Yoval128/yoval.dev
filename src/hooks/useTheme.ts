import {useEffect, useState} from "react";

type Theme = "light" | "dark";
type Mode = "auto" | Theme;

export const useTheme = () => {

    const getInitialMode = (): Mode => {
        if (typeof window === "undefined") return "auto";
        const saved = localStorage.getItem("theme-mode") as Mode | null;
        return saved ?? "auto";
    };

    const [mode, setMode] = useState<Mode>(getInitialMode);
    const [theme, setTheme] = useState<Theme>("light");


    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const applyTheme = () => {
            if (mode === "auto") {
                setTheme(mediaQuery.matches ? "dark" : "light");
            } else {
                setTheme(mode);
            }
        };

        applyTheme();

        mediaQuery.addEventListener("change", applyTheme);

        return () => {
            mediaQuery.removeEventListener("change", applyTheme);
        };
    }, [mode]);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme-mode", mode);
    }, [theme, mode]);

    return {
        theme,
        mode,
        setMode,
    };
};