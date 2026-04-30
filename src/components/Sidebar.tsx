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
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="mr-4 fixed top-4 right-4 z-50
                        border-2 hover:border-primary bg-neutral-800 py-5 rounded-full
                         hover:text-primary cursor-pointer  ">
                        <MenuIcon size={30}/>
                    </Button>
                </SheetTrigger>

                <SheetContent
                    side='right'
                    className='w-84 bg-neutral-900 text-white py-6 pl-10'>
                    <SheetTitle className='text-lg font-semibold'>
                        Menu
                    </SheetTitle>
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => {
                            const Icon = link.icon;

                            return (
                                <a href={link.link}>
                                    <Icon/>
                                    {link.label}
                                </a>
                            );

                        })}
                    </nav>

                    <div className="mt-30">
                        <p className="pb-2">Redes Sociales</p>
                        <div className="flex gap-3 text-neutral-500">
                            {socialLinks.map((social, i) => {
                                const Icon = social.icon;
                                return (
                                    <a key={i}
                                       href={social.link}
                                       className='hover:text-primary border-2
                                       border-neutral-500
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