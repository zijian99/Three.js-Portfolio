import { meta, shopify, starbucks, tesla, ntu} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    sgsafety,
    medico,
    postgresql,
    java,
    kotlin,
    ionic,
    flutter,
    laravel,
    swiftui
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Language",
    },
    {
        imageUrl: kotlin,
        name: "Kotlin",
        type: "Language",
    },
    {
        imageUrl: ionic,
        name: "Ionic",
        type: "Framework",
    },
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "Framework",
    },
    {
        imageUrl: laravel,
        name: "Laravel",
        type: "Framework",
    },
    {
        imageUrl: swiftui,
        name: "SwiftUI",
        type: "Language",
    },
];

export const experiences = [
    {
        title: "Full Stack iOS Developer",
        company_name: "NTU CHESS",
        icon: ntu,
        iconBg: "#accbe1",
        date: "January 2023 - July 2023",
        points: [
            "Designed and implemented a robust tablet app prototype (iPadOS) to streamline the seamless retrieval of data from wearables for research, significantly enhancing overall efficiency.",
            "Collaborated with the research team and engineers to elevate the user interface (UI) and enhance the user experience (UX) of the tablet app (iPadOS) prototype",
            "Contributed to app usability study in ensuring UI/UX of the app prototype adhere to human-centered design",
        ],
    },
    {
        title: "Ionic & PHP Developer",
        company_name: "NTU ARISE",
        icon: ntu,
        iconBg: "#fbc3bc",
        date: "January 2023 - July 2023",
        points: [
            "Contributed significantly to the ongoing maintenance of the codebase for the mobile app (Ionic with Angular Framework) and API Server (PHP Laravel Lumen)",
            "Played a crucial role in deploying the API Server using Amazon Web Services (AWS) for testing purposes.",
            "Designed an effective Score-based Matching Algorithm to skillfully pair individuals A and B based on their preferences",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/zijian99',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/czj99',
    }
];

export const projects = [
    {
        iconUrl: sgsafety,
        theme: 'btn-back-tiffany',
        name: 'SG Safety',
        description: 'SGSAFETY is a mobile application supplemented by a web application which allows users to search for nearby AED devices and also access details of the AED device’s exact location in Singapore.',
        link: 'https://github.com/zijian99/CZ2006_GroupProject_SGSAFETY_Mobile',
    },
    {
        iconUrl: medico,
        theme: 'btn-back-green',
        name: 'MediCo',
        description: 'MediCo is a remote medical consultation service which allows users to consult a medical professional about their ailments via live chat as well as through a body diagram.',
        link: 'https://github.com/zijian99/CZ3002-MediCo',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'RobotCar Controller App',
        description: 'Designed an Android application (Java) that establishes robust communication between users and robot cars via Raspberry Pi through Bluetooth and integrated a map feature in the app for users to visualize the interactions.',
        link: 'https://github.com/zijian99/CZ3004_AndroidApp',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Database Management System Simulation',
        description: 'School Project: Designed and implemented a database management system (C++) simulating computer storage and incorporating B+ tree indexing for efficient data organization',
        link: '',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Digital Makeup Application',
        description: 'Developed a desktop application that helps to transfer makeup from one person to another in the images',
        link: 'https://github.com/zijian99/FYP_DigitalMakeup',
    },
];