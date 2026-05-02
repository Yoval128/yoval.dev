import {useEffect, useState} from "react";

type Theme = "light" | "dark";

export const useTheme = () => {

    const [theme, setTheme] =  useState<Theme>("light");

    useEffect(() => {
        const saveTheme = localStorage.getItem("theme") as Theme | null;

        if (saveTheme) {
            setTheme(saveTheme);
        } else {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setTheme(prefersDark ? 'dark' : 'light');
        }
    },[]);

    useEffect(()=>{
       const rootTheme = document.documentElement;

       rootTheme.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    },[theme]);

    const toggleTheme  = () => {
        setTheme((prev)=>(prev === 'dark' ? 'light' : 'dark'));
    }

    return {theme, toggleTheme};
};