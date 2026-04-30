import Hero from "@/components/Hero.tsx";
import Stats from "@/components/Stats.tsx";
import Projects from "@/components/Projects.tsx";
import About from "@/components/About.tsx";
import Areas from "@/components/Areas.tsx";
import Contact from "@/components/Contact.tsx";
import Resume from "@/components/Resume.tsx";

export const App = () => {
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