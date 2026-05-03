import type {ProjectType} from "@/types";
import {motion} from "motion/react";
import {fadeUp} from "@/lib/animations.ts";

const ProjectsCard = ({
                          imgSrc, projectLink, tags, title,
                      }: ProjectType) => {
    return (
        <motion.a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            className="relative block"
        >
            <figure className="overflow-hidden rounded-md">
                <img
                    src={imgSrc}
                    alt={title}
                    className="rounded-dm transition duration-500 hover:scale-115 w-full"
                />
            </figure>

            <div className="absolute bottom-0 p-2 flex flex-wrap gap-2 max-w-full">
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        className=' bg-background hover:bg-primary text-xs sm:text-sm md:text-base
                        py-0.5 px-1.5 sm:py-1 sm:px-2 rounded-sm cursor-pointer
                        hover:text-primary-foreground'>
            {tag}
          </span>
                ))}
            </div>
        </motion.a>
    )
};

export default ProjectsCard;