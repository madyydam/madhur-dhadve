import { useEffect, useState } from "react";

const codeLines = [
    "const neuralLink = new AI.Network({ depth: 8, weights: optimized });",
    "import { quantum } from '@futoragroup/core';",
    "await supabase.auth.signInWithOtp({ email: 'founder@futora.com' });",
    "export const buildFuture = async (vision) => {",
    "  const product = await creativity.merge(technology, business);",
    "  return product.launch();",
    "};",
    "// Initializing FutoraFlow AI Engine...",
    "Status: 🟢 Neural Uplink Connected",
    "Optimization: 98.4% Efficiency reached",
    "deploying to edge... Done (24ms)",
    "const [growth, setGrowth] = useState(infinity);",
    "while (isAlive()) { learn(); build(); scale(); }",
    "npm install @creativity/limitless ---save",
    "git commit -m 'revolutionizing digital systems'",
    "// 3:00 AM - Founder Mode: Active",
    "const stacks = ['React', 'Next.js', 'Postgres', 'AI'];",
    "analyzer.detectMarketGaps({ sector: 'high-tech' });",
    "Success: Impact scaled to 1M users",
    "running test_suite... [OK] [OK] [OK]",
];

const TerminalBackground = () => {
    const [lines, setLines] = useState<string[]>([]);

    useEffect(() => {
        // Fill background with lines
        const combinedLines = [...codeLines, ...codeLines, ...codeLines];
        setLines(combinedLines);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.15] dark:opacity-[0.25]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent z-10"></div>
            <div className="flex flex-col gap-2 font-mono text-[10px] md:text-sm animate-scroll-code py-10">
                {lines.map((line, i) => (
                    <div key={i} className="whitespace-nowrap flex gap-4">
                        <span className="text-accent-blue opacity-50">{i + 1}</span>
                        <span className="text-foreground/80">{line}</span>
                    </div>
                ))}
            </div>
            {/* Blur Overlay */}
            <div className="absolute inset-0 backdrop-blur-[2px] z-20"></div>
        </div>
    );
};

export default TerminalBackground;
