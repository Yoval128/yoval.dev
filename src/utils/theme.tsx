export const initTheme = () => {
    const mode = localStorage.getItem("theme-mode");

    if (mode === "dark") {
        document.documentElement.classList.add("dark");
    } else if (mode === "light") {
        document.documentElement.classList.remove("dark");
    } else {
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        document.documentElement.classList.toggle("dark", prefersDark);
    }
};