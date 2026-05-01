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
            <figure className="overflow-hidden rounded-dm">
                <img
                    src={imgSrc}
                    alt={title}
                    className="rounded-dm transition duration-500 hover:scale-115 w-full"
                />
            </figure>

            <div className="absolute bottom-0 p-2 flex gap-2">
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        className="bg-background hover:bg-primary hover:text-black py-1 px-2 rounded-sm text-sm cursor-pointer"
                    >
            {tag}
          </span>
                ))}
            </div>
        </motion.a>
    )
};

export default ProjectsCard;