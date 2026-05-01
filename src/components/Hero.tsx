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
            <motion.h1
                variants={fadeUp}
                className='text-4xl md:text-5xl lg:text-6xl font-semibold mt-2 max-w-3xl md:leading-16 font-heading '>
                Desarrollo sistemas, APIs y soluciones que automatizan procesos y gestionan información multiplataforma
            </motion.h1>

            <motion.p variants={fadeUp} className='mt-4 text-neutral-400 max-w-2xl'>
                Enfocado en Laravel, Node.js y bases de datos, construyendo aplicaciones funcionales y escalables para
                resolver problemas reales.
            </motion.p>
            <motion.div variants={fadeUp} className='mt-5 flex gap-2'>
                <Button>
                    <a href="#projects">Mis proyectos</a>
                </Button>
                <Button variant='outline'>
                    <a href="/docs/CV_OmarYovalAviles.pdf" download>
                        Descargar CV
                    </a>
                </Button>
            </motion.div>
        </motion.section>
    )
};

export default Hero;