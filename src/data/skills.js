import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiShadcnui,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiPrisma,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiFigma,
  SiPostman,
  SiLinux,
  SiNginx,
  SiRailway,
  SiStripe,
  SiNestjs,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Globe } from "lucide-react";

// color: null → adaptive (dark in light mode, light in dark mode)
export const skillGroups = [
  {
    label: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: null },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", icon: SiFramer, color: "#BB4CDB" },
      { name: "HTML / CSS", icon: SiHtml5, color: "#E34F26" },
      { name: "shadcn/ui", icon: SiShadcnui, color: null },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: null },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
      { name: "REST APIs", icon: Globe, color: "#FF6C37" },
      { name: "Prisma", icon: SiPrisma, color: null },
      { name: "NestJS", icon: SiNestjs, color: "#EA2845" },
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: null },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Vercel", icon: SiVercel, color: null },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "Railway", icon: SiRailway, color: null },
      { name: "Stripe", icon: SiStripe, color: "#635BFF" },
    ],
  },
];

export const skillByName = Object.fromEntries(
  skillGroups.flatMap((g) => g.items).map((s) => [s.name, s])
);
