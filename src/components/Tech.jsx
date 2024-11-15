import React, { useState } from "react";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

import BallCanvas from "./canvas/Ball";

const TechTabs = () => {
  const [activeTab, setActiveTab] = useState("ProgrammingLanguages");

  const categories = Object.keys(technologies);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap space-x-4 space-y-2 md:space-y-0 mb-6 justify-center md:justify-start">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded text-sm md:text-base ${
              activeTab === category
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-800"
            } transition-colors duration-300 ease-in-out`}
          >
            {category.replace(/([A-Z])/g, " $1").trim()} {/* Format category name */}
          </button>
        ))}
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies[activeTab].map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
            <p className="text-center text-white font-semibold mt-2 text-xs md:text-sm">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Tech = () => {
  return (
    <div className="tech-container">
      <TechTabs />
    </div>
  );
};

export default SectionWrapper(Tech, "");
