import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet.tsx";
import {Button} from "@/components/ui/button.tsx";
import {MenuIcon} from "lucide-react";
import {useState} from "react";
import {navLinks, socialLinks} from "@/constants";

const Sidebar = () => {

    const [active, setActive] = useState('#hero');

    return (
        <>
            <Sheet>
                <SheetTrigger>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="mr-4 fixed top-4 right-4 z-50
border-2
bg-white dark:bg-neutral-800
border-neutral-300 dark:border-neutral-700
hover:border-primary
py-5 rounded-full
text-black dark:text-white
hover:text-primary cursor-pointer  ">
                        <MenuIcon size={30}/>
                    </Button>
                </SheetTrigger>

                <SheetContent
                    side='right'
                    className='w-84 bg-white dark:bg-neutral-900 text-black dark:text-white py-6 pl-10'>
                    <SheetTitle className='text-lg font-semibold'>
                        Menu
                    </SheetTitle>
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => {
                            const Icon = link.icon;

                            return (
                                <a
                                    key={link.link}
                                    href={link.link}
                                    onClick={() => setActive(link.link)}
                                    className={`  text-neutral-600 dark:text-neutral-400 
                                    hover:text-primary transition 
                                    ${active === link.link ? "text-primary" : ""}`}>
                                    <Icon/>
                                    {link.label}
                                </a>
                            );

                        })}
                    </nav>

                    <div className="mt-30">
                        <p className="pb-2">Redes Sociales</p>
                        <div className="flex gap-3 text-neutral-500 dark:text-neutral-400">
                            {socialLinks.map((social, i) => {
                                const Icon = social.icon;
                                return (
                                    <a key={i}
                                       href={social.link}
                                       className='hover:text-primary border-2
border-neutral-300 dark:border-neutral-500
p-2 rounded-full hover:border-primary
transition duration-200'>
                                        <Icon className="size-4"/>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default Sidebar;