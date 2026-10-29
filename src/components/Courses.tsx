import { motion } from "motion/react";
import SectionHeader from "@/components/SectionHeader.tsx";
import { fadeUp, staggerContainer } from "@/lib/animations.ts";
import { certificates } from "@/constants";
import CoursesCard from "@/components/CoursesCard.tsx";

const Courses = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-30 scroll-mt-10"
            id="courses"
        >
            <SectionHeader
                subtitle="Formación"
                title="Cursos y certificaciones complementarias"
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer(0.5)}
                className="grid md:grid-cols-2 gap-10 mt-10"
            >
                {certificates.map((certificate) => (
                    <motion.div
                        key={certificate.title}
                        variants={fadeUp}
                    >
                        <CoursesCard certificate={certificate} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Courses;