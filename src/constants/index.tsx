/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
    AreasType,
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

import {FaGithub, FaLinkedin} from 'react-icons/fa';

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
        label: 'Cv',
        link: '#currículum',
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
        imgSrc: '/images/project-ph-1.jpeg',
        title: 'Sistema de control de acceso RFID (IoT)',
        tags: ['Node.js', 'React Native', 'ESP32', 'REST API'],
        projectLink: 'https://tu-link-rfid.com',
    },
    {
        imgSrc: '/images/project-ph-2.jpeg',
        title: 'Sistema de gestión documental',
        tags: ['Laravel', 'MySQL', 'Backend'],
        projectLink: 'https://tu-link-documental.com',
    },
    {
        imgSrc: '/images/project-ph-3.jpeg',
        title: 'Sistema de seguimiento académico',
        tags: ['Laravel', 'MySQL', 'API'],
        projectLink: 'https://tu-link-academico.com',
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
        year: 'Sep 2025 – Actualidad',
        title: 'Desarrollador de Software (Educación Dual)',
        institute: 'Programa de Educación Dual',
        desc: 'Participación en el desarrollo, mantenimiento y mejora de sistemas institucionales. Corrección de errores, optimización de procesos y documentación técnica. Colaboración en la implementación de mejoras para facilitar el uso y funcionamiento de las plataformas.',
    },
    {
        year: 'Ene 2025 – Abr 2025',
        title: 'Desarrollador Fullstack (Proyecto RFID + IoT)',
        institute: 'Proyecto académico',
        desc: 'Desarrollo de aplicación móvil con React Native integrada con un backend en Node.js y dispositivos ESP32. Implementación de autenticación mediante RFID/NFC, así como funcionalidades de gestión de datos, filtros y dashboards por usuario.',
    },
    {
        year: 'Sep 2024 – Dic 2024',
        title: 'Desarrollador Backend (Laravel)',
        institute: 'Proyecto en entorno gubernamental',
        desc: 'Desarrollo de sistema de gestión documental utilizando Laravel y MySQL. Implementación de roles y permisos, diseño de base de datos y lógica backend para la digitalización y organización de documentos institucionales.',
    },
];

const tools: ToolsType[] = [
    {
        label: 'JavaScript',
        imgSrc: '/images/tools/javascript.svg',
    },
    {
        label: 'TypeScript',
        imgSrc: '/images/tools/typescript.svg',
    },
    {
        label: 'React',
        imgSrc: '/images/tools/react.svg',
    },
    {
        label: 'React Native',
        imgSrc: '/images/tools/react.svg', // puedes cambiarlo si tienes icono propio
    },
    {
        label: 'Node.js',
        imgSrc: '/images/tools/nodejs.svg',
    },
    {
        label: 'Express.js',
        imgSrc: '/images/tools/expressjs.svg',
    },
    {
        label: 'Laravel',
        imgSrc: '/images/tools/laravel.svg',
    },
    {
        label: 'PHP',
        imgSrc: '/images/tools/php.svg',
    },
    {
        label: 'MySQL',
        imgSrc: '/images/tools/mysql.svg',
    },
    {
        label: 'SQL Server',
        imgSrc: '/images/tools/sqlserver.svg',
    },
    {
        label: 'MongoDB',
        imgSrc: '/images/tools/mongodb.svg',
    },
    {
        label: 'Tailwind CSS',
        imgSrc: '/images/tools/tailwindcss.svg',
    },
    {
        label: 'Git',
        imgSrc: '/images/tools/git.svg',
    },
    {
        label: 'GitHub',
        imgSrc: '/images/tools/github.svg',
    },
    {
        label: 'Linux',
        imgSrc: '/images/tools/linux.svg',
    },
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
        number: '10+',
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
};