import {motion} from "motion/react"
import SectionHeader from "@/components/SectionHeader.tsx";
import {staggerContainer} from "@/lib/animations.ts";
import ProjectsCard from "@/components/ProjectsCard.tsx";
import {projectsData} from "@/constants";

const Projects = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.3}}
            variants={staggerContainer(0)}
            className='mt-30 scroll-mt-10'
            id='projects'>
            <SectionHeader
                subtitle = 'Proyectos'
                title='Mis proyectos destacados'
                />
            < motion.div
            className='grid grid-cols-2 gap-10 mt-10'
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.3}}
            variants={staggerContainer(0.5)}>
                {projectsData.map((project, i) => (
                    <ProjectsCard
                    key={i}
                    imgSrc={project.imgSrc}
                    projectLink={project.projectLink}
                    tags={project.tags}
                    title={project.title}
                    />
                ))}

            </motion.div>
        </motion.section>
    )
};

export default Projects;