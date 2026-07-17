import { createSignal } from "solid-js";

export type Theme = "light" | "dark";

const media = window.matchMedia("(prefers-color-scheme: dark)");
const stored = localStorage.getItem("theme") as Theme | null;

export const [theme, setThemeSignal] = createSignal<Theme>(
    stored ?? (media.matches ? "dark" : "light")
);

// Follow the OS setting until the user picks a theme themselves
media.addEventListener("change", e => {
    if (localStorage.getItem("theme") == null)
        setThemeSignal(e.matches ? "dark" : "light");
});

export const setTheme = (t: Theme) => {
    localStorage.setItem("theme", t);
    setThemeSignal(t);
};

export const isDark = () => theme() === "dark";
