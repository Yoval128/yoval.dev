import {motion} from 'motion/react'
import SectionHeader from "@/components/SectionHeader.tsx";
import {fadeUp} from "@/lib/animations.ts";

const About = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView='visible'
            viewport={{once: true, amount: 0.3}}
            className='mt-30 scroll-mt-10'
            id='about'
        >
            <SectionHeader
                subtitle='Sobre mí'
                title='Construyendo soluciones backend para problemas reales'
            />

            <motion.p variants={fadeUp} className='text-muted-foreground mb-2 mt-5'>
                Soy desarrollador Fullstack Jr con enfoque en backend, especializado en la construcción de APIs, manejo
                de bases de datos y lógica de negocio. Disfruto diseñar sistemas que sean funcionales, escalables y
                fáciles de mantener.
                He trabajado en el desarrollo de soluciones como sistemas de gestión documental, plataformas de
                seguimiento académico e integraciones IoT con RFID, enfocándome en resolver problemas reales y mejorar
                procesos.
                Me interesa crecer como desarrollador backend, participar en proyectos desafiantes y seguir
                fortaleciendo mis habilidades en tecnologías como Laravel, Node.js y bases de datos.
            </motion.p>
            <motion.div
                variants={fadeUp}
                transition={{delay: 0.2}}>
            </motion.div>
        </motion.section>
    )
}

export default About;