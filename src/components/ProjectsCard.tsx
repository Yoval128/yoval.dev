import type { ProjectType } from "@/types";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations.ts";
import { FaGithub } from "react-icons/fa";

const ProjectsCard = ({
                          imgSrc, repositoryLink, tags, title,
                      }: ProjectType) => {
    return (
        <motion.div
            variants={fadeUp}
            className="relative group overflow-hidden rounded-xl border border-border bg-card p-4 hover:border-primary transition-all duration-300 flex flex-col justify-between"
        >
            <div>

                <figure className="relative overflow-hidden rounded-lg mb-2.5 h-36 w-full">
                    <img
                        src={imgSrc}
                        alt={title}
                        className="rounded-lg transition duration-500 group-hover:scale-105 w-full h-full object-cover"
                    />


                    {repositoryLink && (
                        <a
                            href={repositoryLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Repositorio de GitHub para ${title}`}
                            className="absolute top-3 right-3 bg-background/80 hover:bg-primary hover:text-primary-foreground backdrop-blur-md text-foreground p-2 rounded-full border border-border transition-colors duration-300 shadow-md"
                        >
                            <FaGithub className="w-5 h-5" />
                        </a>
                    )}
                </figure>


                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="bg-secondary text-secondary-foreground text-xs sm:text-sm py-1 px-2.5 rounded-md font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {repositoryLink && (
                <a
                    href={repositoryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mt-2"
                >
                    <FaGithub className="w-4 h-4" />
                    <span>Ver Código en GitHub</span>
                </a>
            )}
        </motion.div>
    );
};

export default ProjectsCard;