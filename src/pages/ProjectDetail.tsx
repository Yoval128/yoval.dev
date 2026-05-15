// src/pages/ProjectDetail.tsx

import { useParams, Link } from "react-router-dom";

import { projectsData } from "@/constants/projects";

import { Button } from "@/components/ui/button";

const ProjectDetail = () => {

    const { slug } = useParams();

    const project = projectsData.find(
        (p) => p.slug === slug
    );

    if (!project) {
        return (
            <main className="container mx-auto py-20 px-5">

                <h1 className="text-4xl font-bold">
                    Proyecto no encontrado
                </h1>

                <Button
                    asChild
                    className="mt-5"
                >
                    <Link to="/">
                        Volver al inicio
                    </Link>
                </Button>

            </main>
        );
    }

    return (
        <main
            className="
            container
            mx-auto
            py-20
            px-5
            max-w-6xl
            "
        >

            {/* Hero */}
            <section
                className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-10
                items-center
                "
            >

                {/* Info */}
                <div>

                    <Link
                        to="/"
                        className="
                        text-sm
                        text-muted-foreground
                        hover:text-foreground
                        transition
                        "
                    >
                        ← Volver
                    </Link>

                    <h1
                        className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        mt-5
                        "
                    >
                        {project.title}
                    </h1>

                    <p
                        className="
                        mt-5
                        text-muted-foreground
                        leading-7
                        "
                    >
                        {project.description}
                    </p>

                    {/* Tecnologías */}
                    <div
                        className="
                        flex
                        flex-wrap
                        gap-3
                        mt-8
                        "
                    >

                        {project.technologies.map((tech) => (

                            <span
                                key={tech}
                                className="
                                border
                                px-3
                                py-1
                                rounded-md
                                text-sm
                                bg-muted/40
                                "
                            >
                                {tech}
                            </span>

                        ))}

                    </div>

                    {/* Botones */}
                    <div className="flex gap-3 mt-10">

                        {project.projectLink && (
                            <Button asChild>

                                <a
                                    href={project.projectLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ver demo
                                </a>

                            </Button>
                        )}

                    </div>

                </div>

                {/* Imagen principal */}
                <div>

                    <img
                        src={project.imgSrc}
                        alt={project.title}
                        className="
                        rounded-2xl
                        border
                        shadow-sm
                        w-full
                        "
                    />

                </div>

            </section>

            {/* Módulos */}
            <section className="mt-30">

                <div>

                    <p
                        className="
                        text-primary
                        font-medium
                        "
                    >
                        Sistema
                    </p>

                    <h2
                        className="
                        text-3xl
                        md:text-4xl
                        font-bold
                        mt-2
                        "
                    >
                        Módulos del sistema
                    </h2>

                </div>

                <div className="space-y-32 mt-15">

                    {project.modules.map((module, index) => (

                        <article
                            key={module.title}
                            className={`
                                grid
                                grid-cols-1
                                lg:grid-cols-2
                                gap-10
                                items-center
                                
                                ${
                                index % 2 !== 0
                                    ? "lg:[&>*:first-child]:order-2"
                                    : ""
                            }
                            `}
                        >

                            {/* Imagen */}
                            <div>

                                <img
                                    src={module.image}
                                    alt={module.title}
                                    className="
                                    rounded-2xl
                                    border
                                    shadow-sm
                                    w-full
                                    "
                                />

                            </div>

                            {/* Texto */}
                            <div>

                                <span
                                    className="
                                    text-sm
                                    text-primary
                                    font-medium
                                    "
                                >
                                    Módulo
                                </span>

                                <h3
                                    className="
                                    text-2xl
                                    md:text-3xl
                                    font-bold
                                    mt-2
                                    "
                                >
                                    {module.title}
                                </h3>

                                <p
                                    className="
                                    mt-5
                                    text-muted-foreground
                                    leading-7
                                    "
                                >
                                    {module.description}
                                </p>

                            </div>

                        </article>

                    ))}

                </div>

            </section>

        </main>
    );
};

export default ProjectDetail;