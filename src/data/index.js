export const items = [
  {
    id: 1,
    title: "About Me",
    about: [
      "🎓 Undergraduate B.Tech student in Computer Science & Engineering.",
      "💻 Passionate about web development and growing in cybersecurity.",
      "🔭 Exploring new technologies to build secure, scalable apps.",
    ],
    description: "",
    extraClasses: "lg:col-span-3 md:col-span-6 md:row-span-2",
    imgClassName: "w-full h-full",
    img: "",
  },
  {
    id: 2,
    title: "GitHub Stats",
    description: "",
    extraClasses: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "w-full object-contain border-1 border-white",
    img: "",
    imgList: [
      "https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=harshit-8723&theme=tokyonight",
      "https://github-readme-stats.vercel.app/api?username=harshit-8723&show_icons=true&theme=tokyonight"
    ]
  },
  {
    id: 3,
    title: "LeetCode Stats",
    extraClasses: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    img: "https://leetcard.jacoblin.cool/harshit-8723?theme=dark&&ext=contest",
  },
  {
    id: 4,
    title: "My Tech Stack",
    description: "Languages, Frameworks & Tools I use regularly",
    heading1: "Languages",
    heading2: "Frameworks & Libraries",
    heading3: "Tools & Platforms",
    badges: {
      languages: [
        "https://img.shields.io/badge/C-00599C?style=flat&logo=c&logoColor=white",
        "https://img.shields.io/badge/C++-00599C?style=flat&logo=c%2b%2b&logoColor=white",
        "https://img.shields.io/badge/Java-007396?style=flat&logo=java&logoColor=white",
        "https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white",
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black",
      ],
      frameworks: [
        "https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white",
        "https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white",
        "https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white",
      ],
      tools: [
        "https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white",
        "https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black",
        "https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white",
        "https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white",
        "https://img.shields.io/badge/Appwrite-F02E65?style=flat&logo=appwrite&logoColor=white",
      ]
    },
    extraClasses: "lg:col-span-3 md:col-span-6 md:row-span-2",
    imgClassName: "",
    img: "",
  }
];


export const projects = [
  {
    title: "Vulnera Scan",
    description: "A simple vulnerability web scanner for checking common vulnerabilities.",
    image: "./others/preview_vulneraScan.png",
    githubLink: "https://github.com/harshit-8723/vulnera_scan",
    liveSiteLink: "#",
  },
  {
    title: "Edu Ai",
    description: "This web application leverages AI to generate multiple-choice questions (MCQs) and flashcards, making studying more efficient and effective.",
    image: "./others/preview_eduAi.png",
    githubLink: "https://github.com/harshit-8723/edu-ai",
    liveSiteLink: "#",
  },
  {
    title: "Chat App",
    description: "A full-stack chat app, built using MERN stack.",
    image: "./others/preview_chatApp.png",
    githubLink: "https://github.com/harshit-8723/chat-app",
    liveSiteLink: "#",
  },
];
