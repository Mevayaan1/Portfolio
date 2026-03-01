// import { ButtonOutline } from "@/components/Btnone";
import ProjectCards from "@/components/ProjectCards";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const PickedProjects = [
  {
    id: 1,
    icon: "🚀",
    image: "https://images.pexels.com/photos/6151274/pexels-photo-6151274.jpeg",
    title: "Motion Dashboard",
    subtitle: "React • TypeScript",
    description: "Problem: static dashboards lacked clarity and engagement. Solution: motion-driven UI with meaningful state transitions and focus rings. Impact: faster task completion and reduced bounce on critical views.",
    tags: ["Frontend", "Animation", "UI/UX"],
    status: "In Progress",
    date: "Dec 2024",
    githubUrl: "https://github.com/yourusername/motion-dashboard",
    demoUrl: "https://demo.example.com/motion-dashboard",
  },
  {
    id: 2,
    icon: "💡",
    image: "https://images.pexels.com/photos/6151274/pexels-photo-6151274.jpeg",
    title: "AI Chatbot",
    subtitle: "Next.js • AI SDK",
    description: "Problem: slow support response times. Solution: AI chatbot with retrieval and guardrails for accurate answers. Impact: decreased wait times and higher CSAT.",
    tags: ["AI", "Backend", "Fullstack"],
    status: "Completed",
    date: "Nov 2024",
    githubUrl: "https://github.com/yourusername/ai-chatbot",
    demoUrl: "https://demo.example.com/ai-chatbot",
  },
  {
    id: 3,
    icon: "📈",
    image: "https://images.pexels.com/photos/6151274/pexels-photo-6151274.jpeg",
    title: "Analytics Platform",
    subtitle: "DataViz • D3.js",
    description: "Problem: scattered metrics hindered decisions. Solution: unified dashboards with interactive charts and keyboard navigation. Impact: faster insights and fewer reporting errors.",
    tags: ["Data", "Visualization", "Analytics"],
    status: "On Hold",
    date: "Oct 2024",
    githubUrl: "https://github.com/yourusername/analytics-platform",
    demoUrl: "https://demo.example.com/analytics-platform",
  },
  {
    id: 4,
    icon: "🛒",
    image: "https://images.pexels.com/photos/6151274/pexels-photo-6151274.jpeg",
    title: "E-commerce Store",
    subtitle: "Shopify • headless",
    description: "Problem: slow storefront and low conversion. Solution: headless UI with caching and accessible components. Impact: improved TTI and higher checkout completion.",
    tags: ["E-commerce", "Shopify", "Frontend"],
    status: "Completed",
    date: "Sep 2024",
    githubUrl: "https://github.com/yourusername/ecommerce-store",
    demoUrl: "https://demo.example.com/ecommerce-store",
  },
];

function FeatureProjects({ arrange = "grid" }) {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-stretch">
        {projects.map((proj, i) => (
          <ProjectCards key={proj.id} {...proj} index={i} fanned={false} />
        ))}
      </div>
    );
  } else if (arrange === "fanned") {
    cardContainer = (
      <div className="flex justify-center items-center">
        {projects.map((proj, i) => (
          <ProjectCards key={proj.id} {...proj} index={i} fanned={true} />
        ))}
      </div>
    );
  }
  // Add more layouts as needed...

  return (
    <section id="projects" className="py-20 relative flex ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
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
