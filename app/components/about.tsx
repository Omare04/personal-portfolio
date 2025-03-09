import React from "react";
import {
  IconBrandDocker,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandPython,
  IconBrandAmazon,
  IconBrandGolang,
  IconSql,
  IconBrandMysql,
  IconBrandMongodb,
  IconBrandGithub,
  IconBrandJavascript,
  IconCode,
} from "@tabler/icons-react";
import { LinkPreview } from "./ui/link-preview";

// Define interfaces for component props
interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

interface TechIconProps {
  Icon: any; // Using any to avoid complex type issues
  color: string;
  name?: string; // Adding an optional name prop for the tooltip
}

const About = () => {
  return (
    <section
      className="z-50 flex min-h-screen w-full p-6 md:p-10 lg:px-14 snap-center snap-mandatory justify-center items-center bg-gradient-to-b from-black/20 to-transparent"
      id="about"
    >
      <div className="max-w-7xl w-full flex gap-3 lg:gap-5">
        <Description />
        <Skills />
      </div>
    </section>
  );
};

const Description = () => {
  return (
    <div className="w-full lg:w-3/4 text-base md:text-lg flex flex-col gap-6 md:gap-8 snap-center">
      <div className="space-y-4 text-base">
        <p>
          Hi, I'm{" "}
          <span className="font-bold text-blue-400">Omar El Masaoudi</span>, a
          full-stack software engineer with a passion for building{" "}
          <span className="font-semibold">
            scalable, cloud-native applications
          </span>{" "}
          and leveraging AI to solve complex problems.
        </p>

        <p>
          I'm pursuing a Bachelor's in{" "}
          <strong>
            <em>Software Engineering at Concordia University</em>
          </strong>{" "}
          with expertise spanning both front-end and back-end development
          technologies. My recent work includes developing a portfolio management
          tool using AI (<a href="https://github.com/Omare04/StockPulse" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">StockPulse</a>), designing microservice architectures, and
          implementing secure authentication systems.
        </p>

        <p>
          With hands-on experience in{" "}
          <span className="text-blue-400 font-medium">
            React, TypeScript, and Python
          </span>
          , complemented by specialized training in{" "}
          <span className="text-blue-400 font-medium">
            Machine Learning, NLP, and CNNs
          </span>{" "}
          through DeepLearning.AI certifications, I bring a unique blend of
          software engineering fundamentals and cutting-edge AI knowledge to
          every project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">


          <div className=" p-3 rounded-lg shadow-sm">
            <h3 className="text-blue-500 font-medium mb-2 border-b border-gray-200 pb-1">
              AI Expertise
            </h3>
            <ul className="list-disc pl-4 space-y-1">
              <li>Machine Learning & NLP</li>
              <li>TensorFlow, Neural Networks</li>
              <li>Convolutional Neural Networks</li>
              <li>Sentiment Analysis & LSTMs</li>
            </ul>
          </div>

        <div className="p-3 rounded-lg shadow-sm mt-2">
          <h3 className="text-blue-600 font-medium mb-2 border-b border-blue-100 pb-1">
            Current Highlights
          </h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              <strong>Education:</strong> Software Engineering at Concordia
              University (2022-2026)
            </li>
            <li>
              <strong>Project:</strong> Developing a Stock Analysis Tool using
              NLP and graph databases
            </li>
        
            <li>
              <strong>Focus:</strong> Creating systems where AI augments
              software architecture for real-world impact
            </li>
          </ul>
        </div>
        </div>
      </div>

      
    </div>
  );
};

const Skills = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-2 pt-6 lg:pt-0 lg:pl-10">
      <div className="space-y-6">
        {/* <h2 className="text-xl md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Skills
        </h2> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <SkillCategory
            title="Languages"
            skills={[
              "Java",
              "Go",
              "Python",
              "TypeScript",
              "JavaScript",
              "Kotlin",
            ]}
            icon={<IconCode size={28} />}
          />

          <SkillCategory
            title="Databases"
            skills={["Postgres", "MySQL", "Neo4j", "MongoDB", "Redis"]}
            icon={<IconBrandMysql size={28} />}
          />

          <SkillCategory
            title="Developer Tools"
            skills={["Git", "AWS", "Docker", "Kubernetes"]}
            icon={<IconBrandDocker size={28} />}
          />

          <SkillCategory
            title="Frameworks"
            skills={["React", "Next.js", "Express", "Spring Boot"]}
            icon={<IconBrandReact size={28} />}
          />
        </div>
      </div>

      <div className="mt-6">
        {/* <h3 className="text-2xl font-semibold text-blue-500 mb-4">
          Technologies
        </h3> */}
        {/* <ProgrammingIcons /> */}
        <div className="space-y-4">
        <h3 className="text-xl md:text-xl font-semibold text-blue-500">
          Areas of Interest
        </h3>
        <p className="flex flex-wrap gap-2">
          <span className="px-2.5 py-1 bg-blue-900/50 rounded-full text-blue-300 text-sm">
            Machine Learning
          </span>
          <span className="px-2.5 py-1 bg-blue-900/50 rounded-full text-blue-300 text-sm">
            Deep Learning
          </span>
          <span className="px-2.5 py-1 bg-blue-900/50 rounded-full text-blue-300 text-sm">
            Natural Language Processing
          </span>
          <span className="px-2.5 py-1 bg-blue-900/50 rounded-full text-blue-300 text-sm">
            CNNs
          </span>
          <span className="px-2.5 py-1 bg-blue-900/50 rounded-full text-blue-300 text-sm">
            Reinforcement Learning
          </span>
          <span className="px-2.5 py-1 bg-blue-900/50 rounded-full text-blue-300 text-sm">
            Full-stack Development
          </span>
          <span className="px-2.5 py-1 bg-blue-900/50 rounded-full text-blue-300 text-sm">
            Databases
          </span>
          <span className="px-2.5 py-1 bg-blue-900/50 rounded-full text-blue-300 text-sm">
            Software Architecture and Design
          </span>
          <span className="px-2.5 py-1 bg-blue-900/50 rounded-full text-blue-300 text-sm">
            Mobile Development
          </span>
        </p>
      </div>
      </div>
    </div>
  );
};

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
  icon,
}) => {
  return (
    <div className="p-4 rounded-lg border border-blue-800 bg-blue-900/20 hover:bg-blue-900/30 transition-all">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-blue-400">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill: string, index: number) => (
          <span
            key={index}
            className="px-2 py-1 bg-blue-800/40 rounded text-blue-300 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProgrammingIcons = () => {
  return (
    <ul className="flex gap-5 flex-wrap pt-2">
      <TechIcon Icon={IconBrandDocker} color="#2496ED" name="Docker" />
      <TechIcon Icon={IconBrandTypescript} color="#007ACC" name="TypeScript" />
      <TechIcon Icon={IconBrandReact} color="#61DAFB" name="React" />
      <TechIcon Icon={IconBrandPython} color="#3776AB" name="Python" />
      <TechIcon Icon={IconBrandGolang} color="#00ADD8" name="Go" />
      <TechIcon Icon={IconSql} color="white" name="SQL" />
      <TechIcon Icon={IconBrandMysql} color="#00758F" name="MySQL" />
      <TechIcon Icon={IconBrandMongodb} color="#039e05" name="MongoDB" />
      <TechIcon Icon={IconBrandGithub} color="white" name="GitHub" />
      <TechIcon Icon={IconBrandJavascript} color="#F7DF1E" name="JavaScript" />

      {/* Java Icon */}
      <li className="group">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-900/30 hover:bg-blue-800/40 transition-all cursor-pointer transform hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 32 32"
          >
            <path
              d="M11.622 24.74s-1.23.748.855.962c2.51.32 3.847.267 6.625-.267a10.02 10.02 0 0 0 1.763.855c-6.25 2.672-14.16-.16-9.244-1.55zm-.8-3.473s-1.336 1.015.748 1.23c2.725.267 4.862.32 8.55-.427a3.26 3.26 0 0 0 1.282.801c-7.534 2.244-15.976.214-10.58-1.603zm14.747 6.09s.908.748-1.015 1.336c-3.58 1.07-15.014 1.39-18.22 0-1.122-.48 1.015-1.175 1.7-1.282.695-.16 1.07-.16 1.07-.16-1.23-.855-8.175 1.763-3.526 2.51 12.77 2.084 23.296-.908 19.983-2.404zM12.2 17.633s-5.824 1.39-2.084 1.87c1.603.214 4.755.16 7.694-.053 2.404-.214 4.81-.64 4.81-.64s-.855.374-1.443.748c-5.93 1.55-17.312.855-14.052-.748 2.778-1.336 5.076-1.175 5.076-1.175zm10.42 5.824c5.984-3.1 3.206-6.09 1.282-5.717-.48.107-.695.214-.695.214s.16-.32.534-.427c3.794-1.336 6.786 4.007-1.23 6.09 0 0 .053-.053.107-.16zm-9.83 8.442c5.77.374 14.587-.214 14.8-2.94 0 0-.427 1.07-4.755 1.87-4.916.908-11.007.8-14.587.214 0 0 .748.64 4.542.855z"
              fill="#4e7896"
            />
            <path
              d="M18.996.001s3.313 3.366-3.152 8.442c-5.183 4.114-1.175 6.465 0 9.137-3.046-2.725-5.236-5.13-3.74-7.373C14.294 6.893 20.332 5.3 18.996.001zm-1.7 15.335c1.55 1.763-.427 3.366-.427 3.366s3.954-2.03 2.137-4.542c-1.656-2.404-2.94-3.58 4.007-7.587 0 0-10.953 2.725-5.717 8.763z"
              fill="#f58219"
            />
          </svg>
        </div>
        <span className="absolute mt-1 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
          Java
        </span>
      </li>

      {/* PostgreSQL Icon */}
      <li className="group">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-900/30 hover:bg-blue-800/40 transition-all cursor-pointer transform hover:scale-110">
          <svg
            width="38"
            height="38"
            viewBox="-4 0 255 255"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
          >
            <path
              d="M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934 31.4-46.593 44.527-105.736 33.2-120.211-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067-13.456-.22-23.664 3.528-31.41 9.402 0 0-95.43-39.314-90.991 49.444.944 18.882 27.064 142.873 58.218 105.422 11.387-13.695 22.39-25.274 22.39-25.274 5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332-8.026 8.967-5.667 10.541-21.711 13.844-16.235 3.346-6.698 9.302-.471 10.86 7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952-.37 12.568-.617 21.197 1.86 27.937 2.479 6.74 4.948 21.905 26.04 17.386 17.623-3.777 26.756-13.564 28.027-29.89.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139 13.218-6.134 21.058-16.377 8.024-13.686h.002"
              fill="#336791"
            />
          </svg>
        </div>
        <span className="absolute mt-1 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
          PostgreSQL
        </span>
      </li>
    </ul>
  );
};

const TechIcon: React.FC<TechIconProps> = ({ Icon, color, name }) => {
  // Use the provided name or fall back to a cleaned up version of the displayName
  const displayName =
    name || Icon.displayName?.replace(/^Icon(Brand)?/, "") || "Technology";

  return (
    <li className="group">
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-900/30 hover:bg-blue-800/40 transition-all cursor-pointer transform hover:scale-110">
        <Icon size={38} style={{ color: color }} />
      </div>
      <span className="absolute mt-1 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
        {displayName}
      </span>
    </li>
  );
};

export default About;
