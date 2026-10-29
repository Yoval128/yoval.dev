import type { ProjectType } from "@/types";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations.ts";

const ProjectsCard = ({
                          imgSrc, repositoryLink, tags, title,
                      }: ProjectType) => {
    return (
        <motion.a
            href={repositoryLink}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            className="relative block group overflow-hidden rounded-xl border border-border bg-card p-4 hover:border-primary transition-all duration-300"
        >
            <figure className="overflow-hidden rounded-md mb-4">
                <img
                    src={imgSrc}
                    alt={title}
                    className="rounded-md transition duration-500 group-hover:scale-105 w-full object-cover"
                />
            </figure>

            <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {title}
            </h3>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        className="bg-secondary text-secondary-foreground text-xs sm:text-sm py-1 px-2.5 rounded-md font-medium"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.a>
    );
};

export default ProjectsCard;