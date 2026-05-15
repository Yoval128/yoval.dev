// src/constants/projects.ts

import type { ProjectType } from "@/types";

export const projectsData: ProjectType[] = [
    {
        slug: "sistema-control-acceso-rfid",

        title:
            "Almacén Inteligente para Gestión de Contratos con Tecnología RFID",

        imgSrc: "/images/projects/rfid/cover.png",

        tags: [
            "Node.js",
            "React Native",
            "ESP32",
            "RFID",
            "MySQL",
            "REST API",
        ],

        technologies: [
            "Node.js",
            "Express.js",
            "React Native",
            "Expo",
            "NativeBase",
            "MySQL",
            "ESP32",
            "RFID RC522",
            "JWT",
        ],

        description:
            "Sistema multiplataforma desarrollado para optimizar la gestión documental y el control de accesos mediante tecnología RFID. La solución integra una aplicación móvil, una API REST desarrollada con Node.js y un microcontrolador ESP32 encargado de leer tarjetas RFID y enviar eventos en tiempo real al backend.",

        projectLink:
            "https://github.com/Yoval128/app-arycontrolaccess",

        documentationLink:
            "/projects/sistema-control-acceso-rfid",

        modules: [

            {
                title: "Autenticación y control de acceso",

                description:
                    "El sistema incorpora autenticación mediante JWT para proteger las rutas privadas de la aplicación. Los usuarios pueden iniciar sesión desde la aplicación móvil y acceder únicamente a las funcionalidades permitidas según su rol.",

                image:
                    "/images/projects/rfid/login.png",
            },

            {
                title: "Gestión de usuarios",

                description:
                    "Módulo encargado de administrar usuarios, roles y permisos dentro del sistema. Permite crear, editar y visualizar usuarios según el nivel de acceso asignado.",

                image:
                    "/images/projects/rfid/users.png",
            },

            {
                title: "Gestión documental",

                description:
                    "Permite subir, organizar y visualizar documentos digitales relacionados con contratos y movimientos internos. Los archivos son almacenados y gestionados desde el backend.",

                image:
                    "/images/projects/rfid/documents.png",
            },

            {
                title: "Integración RFID con ESP32",

                description:
                    "El sistema utiliza un ESP32 junto con un módulo RFID RC522 para detectar tarjetas RFID y enviar eventos al backend mediante solicitudes HTTP vía Wi-Fi.",

                image:
                    "/images/projects/rfid/rfid-module.png",
            },

            {
                title: "Dashboard y estadísticas",

                description:
                    "Panel administrativo donde se muestran estadísticas, movimientos registrados, accesos y métricas relevantes para el monitoreo del sistema.",

                image:
                    "/images/projects/rfid/dashboard.png",
            },

            {
                title: "Gestión de movimientos",

                description:
                    "Registro y monitoreo de eventos generados dentro del sistema, incluyendo accesos RFID, movimientos documentales y actividad de usuarios.",

                image:
                    "/images/projects/rfid/movements.png",
            },

            {
                title: "Roles y permisos",

                description:
                    "El sistema implementa distintos niveles de acceso como administrador, empleado e invitado, cada uno con permisos específicos sobre módulos y operaciones.",

                image:
                    "/images/projects/rfid/roles.png",
            },

        ],

        features: [
            "Autenticación con JWT",
            "Aplicación móvil multiplataforma",
            "API REST con Node.js",
            "Integración con ESP32",
            "Lectura RFID en tiempo real",
            "Dashboard administrativo",
            "Gestión documental",
            "Sistema de roles y permisos",
            "Registro de movimientos",
            "Comunicación HTTP entre dispositivos",
        ],

        challenges: [
            "Integración entre hardware RFID y backend",
            "Comunicación en tiempo real mediante Wi-Fi",
            "Control de permisos y autenticación segura",
            "Gestión de documentos desde dispositivos móviles",
            "Sincronización de eventos RFID con la base de datos",
        ],

        architectureImage:
            "/images/projects/rfid/architecture.png",
    },
];