
import Murphy from "@assets/team/Murphy.png";
import Aishling from "@assets/team/Aishling.png";
import Thomas from "@assets/team/Thomas.png";
import Riti from "@assets/team/Riti.png";
import Conor from "@assets/team/Conor.png";
import Yaya from "@assets/team/Yaya.png";
import Sami from "@assets/team/Sami.png"

import forge from "@assets/courses/forge.png";
import beginner_python from "@assets/courses/beginner_python.png";
import python from "@assets/courses/python_artwork.png";
import ai_agents from "@assets/courses/ai_agents.png";



export const COURSES_CATEGORY = [
  {
    title: "AI Agent Fundamentals & Development",
    id: 1,
    description: "Unlock the power of AI Agents! This program\n" +
      "introduces you to the core concepts of AI Agents and provides hands-on\n" +
      "experience applying them within real-world development environments. Learn\n" +
      "how to build and integrate agents to automate tasks and solve complex\n" +
      "problems.",
    img: ai_agents,
    tags: ["Beginner", "Python", "Entry-level"],
    demoURL: "#",
    githubUrl: "#"
  },
  {
    title: "AI Project Forge",
    id: 2,
    description: "Ready to move beyond the basics? The AI Project \n" +
      "Forge provides a space for students to build upon their AI foundations. \n" +
      "Design, develop, and deploy your own AI systems, gaining hands-on \n" +
      "experience in the full project lifecycle.",
    img: forge,
    tags: ["TypeScript", "HTML"],
    demoURL: "#",
    githubUrl: "#"
  },
  {
    title: "Beginner's Python",
    id: 3,
    description: "Learn the fundamentals of programming, by using the Python programming language to learn through mini projects (quiz, password generator, dice rolling calculator).",
    img: beginner_python,
    tags: ["Beginner", "Python", "Entry-level"],
    demoURL: "#",
    githubUrl: "#"
  },
  {
    title: "Intermediate Programming",
    id: 4,
    description: "Learn some more advanced programming concepts and delve deeper into how software developers write code.",
    img: python,
    tags: ["Python", "Programming", "Intermediate"],
    demoURL: "#",
    githubUrl: "#"
  }
];

export const TeamData = [
    {
      imageUrl: Aishling,
      name: "Aishling Atkinson",
      position: "Q/A Engineer",
      description: "Aishling has been in IBM for five years working as a QA Engineer. This is her second term volunteering for the Code Club. This term Aishling will be assisting Chris Murphy running the AI Projects course.",
      socialNetworks: [
        {
          name: "Linkedin",
          url: "http://www.linkedin.com/in/aishling-atkinson-926757125",
        },
      ],
    },
    {
    imageUrl: Murphy,
    name: "Chris Murphy",
    description: "Chris Murphy is a highly experienced Senior Architect at IBM, with over \n" +
      "10 years.He specializes in Cybersecurity and AI, \n" +
      "his also has a passion for Robotics. A dedicated member of \n" +
      "Code Club since 2017, Chris is currently leading the AI projects course and \n" +
      "brings practical knowledge and expertise.",
    position: "Senior Architect",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/chris-murphy6/",
      },
      {
        name: "Github",
        url: "https://github.com/SentinelMurphy/AI-Development",
      },
    ],
  },
  {
    imageUrl: Conor,
    name: "Conor Shipsey",
    position: "Software Developer",
    description: "Conor Shipsey is a software developer at IBM, Conor graduate with a BSc in Computer Science from UCC, with strong experience in Python, web development, and artificial intelligence. Conor has previously mentored kids through coaching sports teams and is excited to bring this experience to Code Club. This is Conor’s first semester with the code club.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "http://www.linkedin.com/in/conor-shipsey-907065228",
      }
    ],
  },
  {
    imageUrl: Riti,
    name: "Riti Chakraborty",
    position: "Software Developer",
    description: "DevOps Engineer with an M.Sc. in Computer Science, skilled in automation, infrastructure, and CI/CD pipelines. Passionate about building scalable, secure systems and delivering efficient, automated workflows.  This is Riti's first semester with the code club.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/ritichakraborty/",
      }
    ],
  },
  {
    imageUrl: Sami,
    name: "Sami Habtemeriam",
    position: "Software Developer",
    description: "Software Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/sami-habtemariam-3975b819",
      },

    ],
  },
  {
    imageUrl: Thomas,
    name: "Thomas Galligan",
    position: "Software Developer",
    description: "Thomas Galligan joined an older version of the club 7 years ago as a volunteer mentor, and is now the current code club leader.\n" +
      "They have been with IBM for two years, working on software products and building AI integrations.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/gal1/",
      },
      {
        name: "Portfolio",
        url: "https://galligan.dev/",
      },
    ],
  },

  {
    imageUrl: Yaya,
    name: "Yaya Sivakumar",
    position: "Software Developer",
    description: "Yaya is a graduate software developer for IBM with a BSc in Computer Science. Her final year project specialised in researching GANs for the purpose of white light virtual blood smear staining. She has previous mentoring experience as a lab assistant in UCC and this is her first year in the Code Club team.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/yachitra-sivakumar-a897491a2/",
      },
    ],
  },

]
