import Hero from "@/components/Hero.tsx";
import Stats from "@/components/Stats.tsx";
import Projects from "@/components/Projects.tsx";
import About from "@/components/About.tsx";
import Areas from "@/components/Areas.tsx";
import Contact from "@/components/Contact.tsx";
import Resume from "@/components/Resume.tsx";
import 'lenis/dist/lenis.css'
import {useLenis} from "lenis/react";
import {useEffect} from "react";

export const App = () => {

    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;

        let frame: number;
        const raf = (time: number) => {
            lenis.raf(time);
            frame = requestAnimationFrame(raf);
        };

        frame = requestAnimationFrame(raf);

        return () => cancelAnimationFrame(frame);
    }, [lenis]);


    return (
        <main className='flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10
        lg:pl-0 lg:max-w-6xl'>
            <Hero/>
            <Stats/>
            <Projects/>
            <About/>
            <Areas/>
            <Resume/>
            <Contact/>
        </main>
    )
}