import {motion} from "motion/react"
import {fadeUp, staggerContainer} from "@/lib/animations.ts";
import {SparkleIcon} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

const Hero = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.3}}
            variants={staggerContainer(0)}
            className='pt-20'
        >
            <motion.p variants={fadeUp}
                      className='flex items-center justify-center
                  py-1 gap-2 border border-neutral-600 rounded-sm w-32'>
                <SparkleIcon size={15}/>
                <span> Introducción </span>
            </motion.p>

            <motion.h1 variants={fadeUp} className='text-4xl md:text-5xl
            lg:text-6xl font-semibold capitalize mt-2 max-w-3x1 md:leading-16'>
                Soy <span className='text-primary'>Omar Yoval Aviles</span>, desarrollador fullstack junior
            </motion.h1>
            <motion.div variants={fadeUp} className='mt-5 flex gap-2'>
                <Button asChild>
                    <a href="#projects">Mis proyectos</a>
                </Button>
                <Button variant='outline'>Descargar CV</Button>
            </motion.div>
        </motion.section>
    )
};

export default Hero;