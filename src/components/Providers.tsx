"use client";
import { useAppStore } from "@/lib/store";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
    const darkMode = useAppStore((s) => s.darkMode);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            document.documentElement.classList.toggle("dark", darkMode);
        }
    }, [darkMode, mounted]);

    if (!mounted) {
        // We still render children to allow SEO, but suppress any client-side specific rendering inside components
        // However, if we render children here, and those children use local storage state immediately, we get hydration mismatch.
        // The children components MUST handle their own mounted state for user-specific data.
    }

    return <>{children}</>;

    return <>{children}</>;
}
