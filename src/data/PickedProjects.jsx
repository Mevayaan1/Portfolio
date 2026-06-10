import {
  ViraatIcon,
  UniFormIcon,
  HeerIcon,
  EngravedIcon,
  MevenviroIcon,
  TorrentIcon,
} from "@/components/ui/projectIcons";
import { HardHat, ReceiptText } from "lucide-react";

export const PickedProjects = [
  {
    id: 1,
    icon: <HardHat className="w-5 h-5 text-foreground" />,
    image: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg",
    title: "Viraat Builders Management System",
    subtitle: "Next.js • TypeScript • Express • MongoDB",
    description:
      "Developing a construction management platform covering Sites, Users, Tasks, Orders, Attendance, and Notifications. Built the complete backend architecture including authentication, REST APIs, role-based access control, and notification workflows.",
    tags: ["Fullstack", "Backend", "Admin Panel"],
    status: "In Progress",
    date: "Mar 2026",
    githubUrl: "",
    demoUrl: "",
  },

  {
    id: 2,
    icon: <ReceiptText className="w-5 h-5 text-foreground" />,
    image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",
    title: "UniForm Billing System",
    subtitle: "React • TypeScript • Express • MySQL",
    description:
      "Building a multi-client billing platform for uniform dealers with POS workflows, GST calculations, inventory management, barcode generation, low-stock alerts, and thermal printer support.",
    tags: ["Billing", "POS", "Inventory"],
    status: "In Progress",
    date: "Jan 2026",
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: 3,
    icon: <HeerIcon />,
    image: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg",
    title: "Heer E-commerce Platform",
    subtitle: "React • Supabase • Razorpay",
    description:
      "Built a production-ready full-stack e-commerce platform with authentication, product catalog management, cart functionality, order workflows, and Razorpay payment integration.",
    tags: ["E-commerce", "Payments", "Fullstack"],
    status: "Completed",
    date: "2025",
    githubUrl: "",
    demoUrl: "https://www.heerfragrance.com/",
  },
  {
    id: 4,
    icon: <EngravedIcon />,
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    title: "Engraved by AM Arts",
    subtitle: "React • Node.js • MongoDB",
    description:
      "Developed a MERN-based e-commerce platform for an inlay furniture business featuring product filtering, shopping cart functionality, REST APIs, and an admin dashboard for inventory management.",
    tags: ["MERN", "E-commerce", "Admin"],
    status: "Completed",
    date: "2025",
    githubUrl: "https://github.com/Mevayaan1",
    demoUrl: "",
  },
  {
    id: 5,
    icon: <MevenviroIcon />,
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
    title: "Mevenviro Industrial Platform",
    subtitle: "React • Node.js • Analytics",
    description:
      "Built and deployed a company website and designed backend architecture for telemetry processing, analytics visualization, and operational monitoring systems.",
    tags: ["Industrial", "Analytics", "Dashboard"],
    status: "Completed",
    date: "2025",
    githubUrl: "",
    demoUrl: "https://mevenviro.com",
  },

  {
    id: 6,
    icon: <TorrentIcon />,
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
    title: "Torrent Streaming Backend",
    subtitle: "Node.js • WebTorrent • Distributed Systems",
    description:
      "Built a backend service exploring peer-to-peer movie streaming using chunk-based delivery, stream buffering, and distributed media transfer mechanisms.",
    tags: ["Backend", "Streaming", "Systems"],
    status: "Experiment",
    date: "2024",
    githubUrl: "https://github.com/Mevayaan1/movie-server",
    demoUrl: "",
  },
];