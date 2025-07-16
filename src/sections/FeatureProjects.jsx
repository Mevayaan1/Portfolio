// import { ButtonOutline } from "@/components/Btnone";
import ProjectCards from "@/components/ProjectCards";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";

const PickedProjects = [
  {
    id: 1,
    icon: "🚀",
    image: "https://images.pexels.com/photos/6151274/pexels-photo-6151274.jpeg",
    title: "Motion Dashboard",
    subtitle: "React • TypeScript",
    description: "A modern dashboard built with Framer Motion for smooth animations and interactions.",
    tags: ["Frontend", "Animation", "UI/UX"],
    status: "In Progress",
    date: "Dec 2024",
  },
  {
    id: 2,
    icon: "💡",
    image: "https://images.pexels.com/photos/6151274/pexels-photo-6151274.jpeg",
    title: "AI Chatbot",
    subtitle: "Next.js • AI SDK",
    description: "An intelligent chatbot powered by Vercel AI SDK for natural language conversations.",
    tags: ["AI", "Backend", "Fullstack"],
    status: "Completed",
    date: "Nov 2024",
  },
  {
    id: 3,
    icon: "📈",
    image: "https://images.pexels.com/photos/6151274/pexels-photo-6151274.jpeg",
    title: "Analytics Platform",
    subtitle: "DataViz • D3.js",
    description: "Interactive data visualization platform for business insights and reporting.",
    tags: ["Data", "Visualization", "Analytics"],
    status: "On Hold",
    date: "Oct 2024",
  },
  {
    id: 4,
    icon: "🛒",
    image: "https://images.pexels.com/photos/6151274/pexels-photo-6151274.jpeg",
    title: "E-commerce Store",
    subtitle: "Shopify • headless",
    description: "A high-performance e-commerce store with a custom frontend and headless Shopify.",
    tags: ["E-commerce", "Shopify", "Frontend"],
    status: "Completed",
    date: "Sep 2024",
  },
];

function FeatureProjects({ arrange = "grid" }) {
  const constraintsRef = useRef(null);
  const [projects, setProjects] = useState(PickedProjects);

  function shuffleProjects() {
    setProjects(proj => [...proj].sort(() => Math.random() - 0.5));
  }
  function reverseProjects() {
    setProjects(proj => [...proj].reverse());
  }

  

  let cardContainer;
    if (arrange === "grid") {
      cardContainer = (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {projects.map((proj, i) => (
          <ProjectCards key={proj.id} {...proj} index={i} constraintsRef={constraintsRef} fanned={false} />
        ))}
      </div>
      );
      } else if (arrange === "fanned") {
    cardContainer = (
      <div className="flex justify-center items-center">
        {projects.map((proj, i) => (
          <ProjectCards key={proj.id} {...proj} index={i} constraintsRef={constraintsRef} fanned={true} />
        ))}
      </div>
    );
  }
  // Add more layouts as needed...

  return (
    <section ref={constraintsRef} id="projects" className="py-20 relative flex ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">
          My Projects
        </h2>
        <div className="flex gap-4 mb-8 justify-center">
          <Button variant="outline" onClick={reverseProjects}>reverse</Button>
          <Button variant="outline" onClick={shuffleProjects} >Shuffle</Button>
          {/* <Button variant="secondary">Secondary</Button> */}
  
        </div>
        {cardContainer}
      </div>
    </section>
  );
}

export default FeatureProjects;
