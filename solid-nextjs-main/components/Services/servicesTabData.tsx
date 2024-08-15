import { FeatureTab } from "@/types/featureTab";

const servicesTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "LLM Strategy and Policy",
    desc1: `LLM’s have now democratized AI so anyone with some basic software engineering, data engineering can get started. `,
    desc2: `Not only that, NoCode app platforms can help those without a programming background get started too. `,
    image: "/images/services/llmstrategy.jpg",
    imageDark: "/images/features/features-dark-01.jpg",
  },
  {
    id: "tabTwo",
    title: "Prototype Development",
    desc1: `Within 6 weeks, we can have a working prototype with LLM's integrated into your platform. `,
    desc2: `If you are on Azure, we can use Azure OpenAI, or Amazon Bedrock on AWS if you don't want to use the publicly available LLMs.`,
    image: "/images/services/prototypedev.svg",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabThree",
    title: "LLM / Data Strategy & Architecture",
    desc1: `For most organizations that aren't already using LLM's in production, you may want to consider the different ways you can employ LLM's as part of your existing DataOps/DevOps`,
    desc2: `We have years of experience designing global scale real-time data platforms. LLM's are another layer on the current stack.`,
    image: "/images/services/llm.svg",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabFour",
    title: "Bootcamps & Workshops",
    desc1: `We conduct weekly webinars, and have monthly workshops in person. We can customize our workshops and bootcamps for your infrastructure and for your employees.`,
    desc2: ``,
    image: "/images/services/bootcamps.svg",
    imageDark: "/images/features/features-dark-01.svg",
  },
];

export default servicesTabData;
