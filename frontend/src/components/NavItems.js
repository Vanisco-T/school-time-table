import * as Icons from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "./",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaHome />,
  },
  {
    id: 2,
    title: "Salle",
    path: "./services",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaUniversity />,
  },
  {
    id: 3,
    title: "Niveau",
    path: "./products",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaList />,
  },
  {
    id: 4,
    title: "FIliere",
    path: "./contactus",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaClock />,
  },
  {
    id: 5,
    title: "Enseignant",
    path: "./contactus",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaChalkboardTeacher />,
  },
];
