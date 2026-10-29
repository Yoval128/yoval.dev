/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
    AreasType, CertificateType,
    ExperienceType,
    LinksType,
    ProjectType,
    StatsType,
    TestimonialsType,
    ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
    Briefcase, Cpu, Database,
    FileText,
    Globe,
    Home,
    Mail,
    Server,
    Settings,
    User,
} from 'lucide-react';

import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiLaravel,
    SiMysql,
    SiTailwindcss,
    SiGit,
    SiGithub,
    SiLinux,
    SiPostman,
    SiJira,
    SiNotion,
    SiDotnet,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import {FaGithub, FaLinkedin, FaCuttlefish} from 'react-icons/fa';

const navLinks: LinksType[] = [
    {
        label: 'Index',
        link: '#hero',
        icon: Home
    },
    {
        label: 'Projectos',
        link: '#projects',
        icon: Briefcase,
    },
    {
        label: 'Sobre mí',
        link: '#about',
        icon: User
    },
    {
        label: 'Areas',
        link: '#areas',
        icon: Settings,
    },
    {
        label: 'Resumen',
        link: '#resume',
        icon: FileText
    },

    {
        label: 'Contacto',
        link: '#contact',
        icon: Mail
    },

];

const socialLinks: LinksType[] = [
    {
        icon: FaLinkedin,
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/yoval128/',
    },
    {
        icon: FaGithub,
        label: 'GitHub',
        link: 'https://github.com/Yoval128',
    },
];


const projectsData: ProjectType[] = [
    {
        title: "API RESTful Empresarial con .NET 8 y Azure",
        imgSrc: "/images/project-ph-1.jpeg",
        tags: [
            ".NET 8",
            "C#",
            "SQL Server",
            "Entity Framework",
            "JWT",
            "Mapster",
            "Azure App Service",
            "Azure SQL",
            "Swagger",
            "Postman"
        ],
        projectLink: '',
        repositoryLink: 'https://github.com/Yoval128/app-arycontrolaccess',
    },
    {
        imgSrc: '/images/project-ph-1.jpeg',
        title: 'Sistema de control de acceso RFID (IoT)',
        tags: ['Node.js', 'React Native', 'ESP32', 'REST API'],
        projectLink: '',
        repositoryLink: 'https://github.com/Yoval128/app-arycontrolaccess',
    },
    {
        imgSrc: '/images/project-ph-2.jpeg',
        title: 'Sistema de gestión documental',
        tags: ['Laravel', 'MySQL', 'Backend'],
        projectLink: '',
        repositoryLink: 'https://github.com/Yoval128/SistemaDocumental',
    },
];

const education: ExperienceType[] = [
    {
        year: '2025 – Actualidad',
        title: 'Ingeniería en Desarrollo y Gestión de Software',
        institute: 'Universidad Tecnológica del Valle de Toluca (UTVT)',
        desc: 'Formación en desarrollo de software con enfoque en backend, APIs, bases de datos y arquitectura de sistemas. Participación en proyectos enfocados en la resolución de problemas reales.',
    },
    {
        year: '2023 – 2025',
        title: 'Técnico Superior Universitario en Desarrollo de Software Multiplataforma',
        institute: 'Universidad Tecnológica del Valle de Toluca (UTVT)',
        desc: 'Desarrollo de aplicaciones web y móviles utilizando tecnologías como Laravel, Node.js y React. Implementación de APIs REST, manejo de bases de datos relacionales y no relacionales.',
    },
    {
        year: '2016 – 2019',
        title: 'Técnico en Programación',
        institute: 'Colegio de Estudios Científicos y Tecnológicos del Estado de México',
        desc: 'Fundamentos de programación, desarrollo web, bases de datos y sistemas operativos. Primer acercamiento al desarrollo de software y resolución de problemas lógicos.',
    },
];

const experience: ExperienceType[] = [
    {
        year: 'May 2026 – Ago 2026',
        title: 'Analista de Requerimientos de Software',
        institute: 'Instituto Universitario Franco Inglés de México, S.C.',
        desc: 'Ejecuté el levantamiento de requerimientos y el modelado UML para la migración de 32 procesos críticos** (académicos y administrativos) de un sistema legado al actual. ' +
            'Traduje las necesidades del área de Control Escolar de la institución en reglas de negocio claras, reduciendo la ambigüedad para el equipo de desarrollo. ' +
            'Además, participé en el análisis, diseño y modelado de constancias académicas mediante Crystal Reports, definiendo su estructura, información y reglas de generación.'
    },
    {
        year: 'Sep 2025 – Actualidad',
        title: 'Laravel Developer Jr',
        institute: 'Universidad Tecnológica del Valle de Toluca',
        desc: 'Desarrollé y optimicé módulos en sistemas institucionales utilizando Laravel, logrando reducir los tiempos de ' +
            'carga/procesamiento en un 100%. Resolví más de 50 bugs reportados, mejorando la estabilidad de la ' +
            'plataforma para más de 80 usuarios, y redacté documentación técnica que aceleró el onboarding de nuevos ' +
            'integrantes al equipo',
    },
    {
        year: 'Ene 2025 – Abr 2025',
        title: 'Desarrollador Fullstack',
        institute: 'Proyecto académico',
        desc: 'Desarrollo de aplicación móvil con React Native integrada con un backend en Node.js y dispositivos ESP32. Implementación de autenticación mediante RFID/NFC, así como funcionalidades de gestión de datos, filtros y dashboards por usuario.',
    },
    {
        year: 'Sep 2024 – Dic 2024',
        title: 'Desarrollador Backend (Laravel)',
        institute: 'Proyecto académico',
        desc: 'Lideré el diseño de la base de datos e implementé el backend completo de un sistema de gestión documental ' +
            'gubernamental desde cero con Laravel y MySQL. Esto permitió la digitalización exitosa más de 1000 documentos mensuales, ' +
            'reduciendo el tiempo de búsqueda manual de archivos en un estimado del 90% y asegurando la información mediante un ' +
            'estricto control de roles y permisos.',
    },
];

const tools: ToolsType[] = [
    { label: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    { label: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { label: 'React', Icon: SiReact, color: '#61DAFB' },
    { label: 'React Native', Icon: SiReact, color: '#61DAFB' },
    { label: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
    { label: 'Java', Icon: FaJava, color: '#ED8B00' },
    { label: 'C#', Icon: FaCuttlefish, color: '#239120' },
    { label: '.NET', Icon: SiDotnet, color: '#512BD4' },
    { label: 'Laravel', Icon: SiLaravel, color: '#FF2D20' },
    { label: 'MySQL', Icon: SiMysql, color: '#4479A1' },
    { label: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
    { label: 'Git', Icon: SiGit, color: '#F05032' },
    { label: 'GitHub', Icon: SiGithub, color: '#181717' },
    { label: 'Postman', Icon: SiPostman, color: '#FF6C37' },
    { label: 'Jira', Icon: SiJira, color: '#0052CC' },
    { label: 'Notion', Icon: SiNotion, color: '#000000' },
    { label: 'Linux', Icon: SiLinux, color: '#FCC624' },
];

const areas: AreasType[] = [
    {
        title: 'Desarrollo Backend',
        desc: 'Diseño y desarrollo de APIs, lógica de negocio y sistemas escalables utilizando Laravel y Node.js.',
        icon: <Server className='h-6 w-6 text-blue-500'/>,
    },
    {
        title: 'Diseño de Bases de Datos',
        desc: 'Modelado y gestión de bases de datos relacionales y no relacionales, optimizando el almacenamiento y consulta de información.',
        icon: <Database className='h-6 w-6 text-blue-500'/>,
    },
    {
        title: 'Desarrollo Fullstack',
        desc: 'Construcción de aplicaciones completas integrando frontend con React y backend mediante APIs REST.',
        icon: <Globe className='h-6 w-6 text-blue-500'/>,
    },
    {
        title: 'Integración IoT',
        desc: 'Conexión de dispositivos físicos (ESP32, RFID/NFC) con sistemas backend para automatización y control en tiempo real.',
        icon: <Cpu className='h-6 w-6 text-blue-500'/>,
    },
];
const statsData: StatsType[] = [
    {
        number: '3+',
        label: 'Proyectos desarrollados',
    },
    {
        number: '3+',
        label: 'Tecnologías utilizadas',
    },
    {
        number: '100%',
        label: 'Compromiso con el aprendizaje',
    },
];

const testimonials: TestimonialsType[] = [
    {
        name: '',
        role: '',
        image: '',
        text: '',
        link: '#',
    },
];

const certificates: CertificateType[] = [
    {
        title: "MERN Stack Full Stack Application",
        institution: "Udemy",
        date: "2026",
        credentialUrl: "/docs/certificates/mern-edition.jpg",
        skills: [
            "React Router 6",
            "React Query",
            "MongoDB / Mongoose",
            "Node.js",
            "Express",
            "JWT",
            "Axios",
            "Render / Heroku"
        ]
    },
    {
        title: ".NET Backend: .NET Core 8, SQL Server y JWT",
        institution: "Udemy",
        date: "2026",
        credentialUrl: "/docs/certificates/net-core.jpg",
        skills: [
            ".NET Core 8",
            "C#",
            "SQL Server",
            "Entity Framework",
            "JWT",
            "API RESTful",
            "Patrón Repositorio"
        ]
    },
    {
        title: "Java & Spring Boot: Monolitos, APIs REST, JWT y Docker",
        institution: "Udemy",
        date: "En curso",
        credentialUrl: "",
        skills: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "JWT",
            "Spring Data JPA",
            "Thymeleaf",
            "PostgreSQL",
            "Docker",
            "Testing (Mockito/MockMvc)"
        ]
    },
];

export {
    socialLinks,
    projectsData,
    education,
    experience,
    tools,
    areas,
    navLinks,
    statsData,
    testimonials,
    certificates,
};