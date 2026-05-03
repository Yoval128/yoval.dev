import {motion} from 'motion/react';
import SectionHeader from "@/components/SectionHeader.tsx";
import {fadeUp, staggerContainer} from "@/lib/animations.ts";
import {education, experience, tools} from "@/constants";
import ExpCard from "@/components/ExpCard.tsx";
import ToolsCard from "@/components/ToolsCard.tsx";

const Resume = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: (0.1)}}
            className='mt-30 scroll-mt-10 px-4 md:px-0'
            id='resume'>

            <SectionHeader
                subtitle='Resumen'
                title='Formación y experiencia en desarrollo de software'
            />

            <motion.p variants={fadeUp} className='mt-4 text-muted-foreground'>
                Cuento con formación en desarrollo de software y experiencia práctica en la construcción de sistemas backend, APIs y manejo de bases de datos. He participado en el desarrollo de soluciones como plataformas de gestión documental, seguimiento académico e integraciones con dispositivos IoT.
            </motion.p>

            <motion.p variants={fadeUp} className='mt-3 text-muted-foreground'>
                Mi enfoque está en diseñar sistemas funcionales, estructurados y escalables, priorizando la correcta organización de la información y la lógica de negocio. Cada proyecto ha fortalecido mis habilidades para resolver problemas reales mediante soluciones tecnológicas.
            </motion.p>

            <div className="grid gap-x-10 my-16 md:grid-cols-2">

                <motion.div
                    variants={fadeUp}
                    className='mb-16 md:mb-0'>
                    <h2 className="text-3xl font-semibold mt-8 text-foreground font-heading">Educación</h2>
                    <div className="space-y-0 border border-border pl-6 mt-4">
                        {education.map((item, i) => (
                            <ExpCard
                                key={i}
                                item={item}/>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeUp}>
                    <h2 className="text-3xl font-semibold mt-8 text-foreground font-heading">Experencia Profecional</h2>
                    <div className="space-y-0 border border-border pl-6 mt-4">
                        {experience.map((item, i) => (
                            <ExpCard
                                key={i}
                                item={item}/>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="my-16">
                <motion.h2
                    variants={fadeUp}
                    className="text-3xl font-semibold mb-8 capitalize text-foreground font-heading">
                    Mis Harraientas favoritas
                </motion.h2>

                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: (0.1)}}
                    variants={staggerContainer(0.3)}
                    className='grid grid-cols-2 gap-5
                    sm:grid-cols-3 md:grid-cols-5'>
                    {tools.map((tool, i) => (
                        <ToolsCard
                            key={i}
                            tool={tool}
                        />
                    ))}
                </motion.div>

            </div>
        </motion.section>
    )
}
export default Resume;