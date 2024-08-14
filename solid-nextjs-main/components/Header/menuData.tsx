import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "OUR PROCESS",
    newTab: false,
    path: "#hero",  // Matches the Hero component
  },
  {
    id: 2,
    title: "SERVICES",
    newTab: false,
    path: "#brands",  // Matches the FeaturesTab component
  },
  {
    id: 2.1,
    title: "TEAM",
    newTab: false,
    path: "#feature",  // Matches the About component
  },
  {
    id: 2.3,
    title: "CLIENTS",
    newTab: false,
    path: "#integration",  // Matches the Brands component
  },
  {
    id: 3,
    title: "BLOG",
    newTab: false,
    path: "#blog",  // Matches the Blog component
  },
  {
    id: 4,
    title: "CONTACT",
    newTab: false,
    path: "#contact",  // Matches the Contact component
  },
];

export default menuData;
