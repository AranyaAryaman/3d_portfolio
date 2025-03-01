import { micro1, oracle, qualcomm } from "../assets/images";
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
    python,
    elasticsearch,
    docker,
    linux,
    firebase,
    golang
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
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
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Backend",
    },
    {
        imageUrl: linux,
        name: "Linux",
        type: "OS",
    },
    {
        imageUrl: golang,
        name: "GoLang",
        type: "Backend",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Database",
    },
    {
        imageUrl: elasticsearch,
        name: "Elasticsearch",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
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
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "Oracle",
        icon: oracle,
        iconBg: "#fbc3bc",
        date: "July 2021 - Aug 2024",
        points: [
            "Promoted within two years at Oracle, contributing to Procurement Cloud and CRM CX Sales Cloud teams. Designed and optimized scalable RESTful APIs, frontend solutions, and system architectures to enhance performance, efficiency, and distributed storage.",
            "Engineered new REST services using Java EE & SpringBoot to fetch & modify existing healthcare data of Cerner from the Oracle CRM Opportunities UI.",
            "Collaborated with a cross-functional team of 5 engineers to design re-usable UX components called fragments leading to a 20% decrease in the size of existing code block on Oracle Cloud by leveraging ReactJS.",
            "Optimized a distributed SpringBoot service for forecasting win probability by refining Elasticsearch queries and load balancing strategies, improving response time by 15% and enhancing system scalability.",
            "Designed a Java & PL/SQL RESTful API microservice for bulk updates of requester attributes across multiple distributions, accelerating update speed by 10x and optimizing workflows.",
            "Built a high-performance PL/SQL-based RESTful API for purchase order summaries, integrating CTEs and intelligent common value detection to achieve a 7x reduction in response time while ensuring scalability.",
            "Developed a comprehensive frontend solution using ReactJS, Helidon Microprofile, and Oracle Cloud, introducing asynchronous action chains that reduced page load times by 80%.",

        ],
    },
    {
        title: "Software Engineering Intern",
        company_name: "Qualcomm",
        icon: qualcomm,
        iconBg: "#accbe1",
        date: "May 2020 - Aug 2020",
        points: [
            "Worked as a Software Engineering Intern in the WLAN Firmware team, contributing to state-of-the-art technologies like Wi-Fi 6. Worked on low-level firmware and optimizations, earning a pre-placement offer based on performance.",
            "Created low-level C programs to enable parallel data transmission over 2.4 GHz and 5 GHz bands, validating performance through emulation to improve WLAN efficiency.",
            "Architected a Python-based command-line utility to expedite non-critical code merges, bypassing CI/CD pipelines and reducing processing time by over 30%.",
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
        link: 'https://github.com/AranyaAryaman',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/aranya289',
    }
];

export const projects = [
    {
        iconUrl: estate,
        theme: 'btn-back-red',
        name: 'AWS Dining Recommender',
        description: 'Engineered an AI-driven conversational bot with AWS Lex & AWS Lambda, capturing user preferences, processing data via SQS, and delivering restaurant recommendations through SES, AWS OpenSearch, and CloudWatch triggers.',
        link: 'https://github.com/AranyaAryaman/AWS-Dining-Recommender',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Real Time Messaging System',
        description: 'Built a full-stack real-time chat application utilizing the MERN stack, Socket.io, and JWT authentication, integrating live messaging, online user tracking, global state management with Zustand, and a robust error-handling system.',
        link: 'https://webchat-j21z.onrender.com/login',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-blue',
        name: 'Shell',
        description: 'Designed a custom flow graph interpreter to manage chained processes using pipes, concatenations, and file redirections, replicating shell functionality. Engineered process execution with dynamic command parsing, handling of standard/error outputs, and interpretation of structured flow files.',
        link: 'https://github.com/AranyaAryaman/nodeLanguage',
    },
    {
        iconUrl: car,
        theme: 'btn-back-pink',
        name: 'Room Delivery Service',
        description: 'Developed an online food and grocery ordering system serving 500+ daily users in IIT Guwahati, featuring secure login, real-time stock management with automated tracking, and instant delivery estimation, reducing stock shortages by 20% and increasing sales by 18% through enhanced efficiency.',
        link: 'https://github.com/AranyaAryaman/RoomDeliveryService',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'strace',
        description: 'Implemented strace in xv6 to trace over 22 system calls with features like command-specific tracing, persistent tracking, and circular buffer logging for precise debugging. Diagnosed memory leaks by analyzing sbrk system calls, identifying allocation failures, and evaluating program break increments for dynamic memory management issues.',
        link: 'https://github.com/AranyaAryaman/strace-xv6',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-yellow',
        name: 'Blended Learning Platform',
        description: 'Android blended learning platform, integrating multiple modules including assignments, in-class attendance, and student attention visualization screens enhanced with Emotion AI models to depict user states accurately. Orchestrated server-side storage and real-time (≤ 0.1s lag) synchronization between the teacher and student screens on theplatform. Formulated a visualization algorithm to map students sitting in a circular classroom onto the mobile screen',
        link: 'https://github.com/AranyaAryaman/Vedinkaksa',
    }
];
