/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 */

import type { JSX } from 'react';


export type ProjectType = {
    slug: string;

    title: string;

    imgSrc: string;

    tags: string[];

    technologies: string[];

    description: string;

    modules: ModuleType[];

    projectLink?: string;

    githubLink?: string;

    documentationLink: string;

    features?: string[];

    challenges?: string[];

    architectureImage?: string;
};

export type ExperienceType = {
    year: string;
    title: string;
    institute: string;
    desc: string;
};

export type AreasType = {
    title: string;
    desc: string;
    icon: JSX.Element;
};

export type ToolsType = {
    Icon: React.ElementType;
    label: string;
    color?: string;
};

export type StatsType = {
    number: string;
    label: string;
};

export type TestimonialsType = {
    name: string;
    role: string;
    image: string;
    text: string;
    link: string;
};

export type LinksType = {
    label: string;
    link: string;
    icon: React.ElementType;
};

export type ModuleType = {
    title: string;
    description: string;
    image: string;
};


