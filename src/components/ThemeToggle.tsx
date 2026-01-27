import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="relative w-10 h-10 rounded-full bg-accent-blue/10 hover:bg-accent-blue/20 transition-all duration-500 overflow-hidden group border border-accent-blue/20"
        >
            <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-700 ${isDark ? 'rotate-0' : 'rotate-90 scale-0 opacity-0'}`}>
                <Moon className="h-5 w-5 text-accent-blue" />
            </div>
            <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-700 ${isDark ? '-rotate-90 scale-0 opacity-0' : 'rotate-0'}`}>
                <Sun className="h-5 w-5 text-accent-blue" />
            </div>

            {/* Ripple effect on click would be nice, but CSS transition is enough for now */}
        </Button>
    );
};

export default ThemeToggle;
