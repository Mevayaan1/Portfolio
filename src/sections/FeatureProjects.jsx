// import { ButtonOutline } from "@/components/Btnone";
import ProjectCards from "@/components/ProjectCards";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { PickedProjects } from "@/data/pickedprojects";

console.log(PickedProjects)

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
