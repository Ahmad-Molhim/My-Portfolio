import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Menu } from "lucide-react";

const NavItems = [
    { name: "Home", href: "#hero" },
    { name: "Experience", href: "#experience" },
    // { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10); //
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled
                    ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
                    : "py-5"
            )}
        >
            <div className="container flex items-center justify-between px-4">
                <a
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">AhmadMolhim's</span>
                        Portfolio
                    </span>
                </a>

                {/* desktop nav */}
                <div className="hidden md:flex space-x-8 font-medium">
                    {NavItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* mobile nav */}

                <button onClick={() => setIsMenuOpen((prev) => !prev)} className="md:hidden p-2 text-forground z-50"> {isMenuOpen ? <X size={24}/> : <Menu size={24}/>} </button>


                <div className={cn(
                    "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
                    "transitin-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"

                    )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {NavItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};
