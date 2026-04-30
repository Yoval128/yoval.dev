import {motion} from 'motion/react';
import SectionHeader from "@/components/SectionHeader.tsx";
import {fadeUp, staggerContainer} from "@/lib/animations.ts";
import {areas} from "@/constants";
import AreasCard from "@/components/AreasCard.tsx";

const Areas = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.3}}
            className='mt-30 scroll-mt-10 '
            id='areas'>
            <SectionHeader subtitle='Áreas de especialización'
                           title='Desarrollo backend y construcción de sistemas funcionales'/>


            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{once: true, amount: 0.3}}
                variants={staggerContainer(0.5)}
                className='grid md:grid-cols-2 gap-10 mt-10'>
                {areas.map((areas) => (
                    <motion.div
                        key={areas.title}
                        variants={fadeUp}>
                        <AreasCard
                        areas={areas}
                        />
                    </motion.div>
                ))}

            </motion.div>
        </motion.section>
    )
}
export default Areas;