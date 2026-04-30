import {useState} from "react";
import {navLinks} from "@/constants";
import {cn} from "@/lib/utils.ts";

const FloatingMenu = () => {

    const [active, setActive] = useState('#hero');
    return (
        <div className="fixed right-10 top-1/2
        -translate-y-1/2 bg-black border border-neutral-600
        pt-4 rounded-full z-10 hidden lg:block">
            {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                    <a
                        key={link.link}
                        href={link.link}
                        className={cn('text-neutral-400 flex items-center gap-2 hover:text-primary transition-colors duration-200 mb-6 px-4',
                            active === link.link && 'text-primary')}
                        onClick={() => setActive(link.link)}>
                        <Icon clasName='size-5'/>
                    </a>
                )
            })}
        </div>
    )
};

export default FloatingMenu;