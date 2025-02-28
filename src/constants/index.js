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
    typescript
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
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
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
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];