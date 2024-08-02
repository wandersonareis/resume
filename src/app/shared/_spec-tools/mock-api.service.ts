import { HeroAboutData } from "../../components/hero-about/hero-about.component"
import { HeroProjectsData } from "../../components/hero-projects/hero-projects.component"
import { HeroSkillsData } from "../../components/hero-skills/hero-skills.component";
import { HeroCardData } from "../../components/hero/hero.component";

export const mocked_profile: HeroCardData = {
  title: "Hi, I'm Wanderson 👋",
  descriptions: [
    "lorem ipsum",
    "loremId labore excepteur non sit cillum sunt duis officia esse incididunt aliquip. Do nisi nulla tempor in velit. Laborum esse in commodo anim voluptate minim. Enim labore dolore magna ea irure adipisicing ut officia occaecat cupidatat.",
    "Consequat sit cillum dolore enim eiusmod pariatur laboris sint pariatur. Dolor id Lorem mollit enim consequat do do incididunt aliquip do. Fugiat aute est ea in veniam enim. Minim voluptate id sit mollit occaecat Lorem veniam nisi ea ea id amet."
  ],
  image: {
    url: "assets/images/myprofile.png",
    alt: "My perfil picture"
  },
  location: {
    text: "Fimuza - MG, Lorem",
    icon: "ph:map-pin"
  },
  social: {
    links: [
      {
        text: "GitHub",
        url: "http://pus.ad/welu",
        icon: "simple-icons:github"
      },
      {
        text: "LinkedIn",
        url: "http://odem.ms/soh",
        icon: "simple-icons:linkedin"
      }
    ]
  }
} as const;
export const mocked_skills: HeroSkillsData = {
  title: "Skills",
  description: "The skills, tools and technologies I am really good at:",
  skills: [
    {
      name: "Node.js",
      icon: "devicon:nodejs"
    },
    {
      name: "JavaScript",
      icon: "devicon:javascript"
    },
    {
      name: "TypeScript",
      icon: "devicon:typescript"
    },
    {
      name: "C#",
      icon: "devicon:csharp"
    }
  ]
} as const;
export const mocked_projects: HeroProjectsData = {
  "title": "Projects Test",
  "description": "Some of the noteworthy projects I have built:",
  "imageIcon": "assets/icons/external-link.svg",
  "projectsList": [
    {
      "isImportant": true,
      "title": "Project A",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      "imageUrl": "assets/images/project-a.png",
      "technologies": [
        "React",
        "Next.js",
        "TypeScript",
        "Nest.js",
        "PostgreSQL",
        "Tailwind CSS",
        "Figma",
        "Cypress",
        "Storybook",
        "Git"
      ],
      "link": "http://b.io/ext_47-",
      "linkIcon": "assets/icons/external-link.svg"
    },
    {
      "isImportant": false,
      "title": "Project B",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      "imageUrl": "assets/images/project-a.png",
      "technologies": [
        "Angular",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "Git"
      ],
      "link": "http://b.io/ext_48-",
      "linkIcon": "assets/icons/external-link.svg"
    },
    {
      "isImportant": false,
      "title": "Project C",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      "imageUrl": "assets/images/project-a.png",
      "technologies": [
        "React",
        "Next.js",
        "TypeScript",
        "Nest.js",
        "PostgreSQL",
        "Tailwind CSS",
        "Figma",
        "Cypress",
        "Storybook",
        "Git"
      ],
      "link": "http://b.io/ext_47-",
      "linkIcon": "assets/icons/external-link.svg"
    }
  ]
} as const

export const mocked_about_me: HeroAboutData = {
  title: "Sobre mim:",
  image: {
    url: "assets/images/work.png",
    alt: "Profile Image"
  },
  description: {
    title: "Curioso sobre mim? Aqui está:",
    descriptions: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
    ]
  },
  quickFacts: {
    title: "lorem ipsum dolor sit amet",
    facts: [
      "E. Ciência da Computação",
      "Desenvolvedor Full Stack",
      "Aprendiz ávido",
      "Resiliente"
    ]
  },
  thanks: "Obrigado por ler!"
} as const