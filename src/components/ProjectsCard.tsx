import type { ProjectType } from "@/types";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations.ts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProjectsCard = ({
                          imgSrc,
                          // projectLink,
                          documentationLink,
                          tags,
                          title,
                      }: ProjectType) => {
    return (
        <motion.article
            variants={fadeUp}
            className="relative"
        >

            {/* Imagen */}
            <Link to={documentationLink}>
                <figure className="overflow-hidden rounded-md relative">
                    <img
                        src={imgSrc}
                        alt={title}
                        className="rounded-md transition duration-500 hover:scale-115 w-full"
                    />

                    {/* Tags */}
                    <div className="absolute bottom-0 p-2 flex flex-wrap gap-2 max-w-full">
                        {tags.map((tag, i) => (
                            <span
                                key={i}
                                className="bg-background/90 backdrop-blur-sm
                                hover:bg-primary text-xs sm:text-sm md:text-base
                                py-0.5 px-1.5 sm:py-1 sm:px-2 rounded-sm
                                cursor-pointer hover:text-primary-foreground"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </figure>
            </Link>

            {/* Título */}
            <h3 className="mt-3 text-lg font-semibold">
                {title}
            </h3>

            {/* Botones */}
            <div className="flex gap-2 mt-4">

             {/*   {projectLink && (
                    <Button>
                        <a
                            href={projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver demo
                        </a>
                    </Button>
                )}*/}

                <Button variant="outline">
                    <Link to={documentationLink}>
                        Documentación
                    </Link>
                </Button>

            </div>
        </motion.article>
    );
};

export default ProjectsCard;