import { HeroAboutData } from "../../components/hero-about/hero-about.component"
import { HeroProjectsData } from "../../components/hero-projects/hero-projects.component"

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