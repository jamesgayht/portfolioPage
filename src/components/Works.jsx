import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import {
  githubRepoNames,
  Tag,
  tagColors,
  Project,
  projectImages,
} from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useEffect, useState } from "react";
// import { Octokit } from "octokit";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* project card tilting animation */}
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* project card image */}
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          {/* project card github icon */}
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>

          {/* project card deployment url icon if needed */}
          {/* <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div> */}
        </div>

        {/* name and description of project */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* tech stacks used for projects */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const username = "jamesgayht";
  const [ghProjects, setGhProjects] = useState([]);

  useEffect(() => {
    let tempProjects = [];
    const makeApiCall = () => {
      githubRepoNames.map(async (repoName, index) => {
        const githubApiUrl = `https://api.github.com/repos/${username}/${repoName}`;

        try {
          const res = await fetch(githubApiUrl);
          const json = await res.json();

          const tags = [];
          if (json.topics) {
            json.topics.map((topic, index) => {
              tags.push(new Tag(topic, tagColors[index]));
            });
          }

          const descriptionArr = json.description.split(":");
          const name = descriptionArr[0].trim();
          const description = descriptionArr[1].trim();

          tempProjects.push(
            new Project(name, description, tags, projectImages[index], json.html_url)
          );
          console.info(">>> tempProjects: ", tempProjects);
          setGhProjects(tempProjects);
          console.info(">>> ghProjects: ", ghProjects);
        } catch (error) {
          console.log(">>>> error making api request: ", error);
        }
      });
    };

    makeApiCall();

  }, []);

  return (
    <>
      {/* works header */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My works</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      {/* animated cards for projects */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcases some of my skills and experience I&apos;ve acquired. Each project is briefly described with
          links to the source code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and
          manage projects effectively.
        </motion.p>
      </div>

      {/* container for project cards */}
      <div className="mt-20 flex flex-wrap gap-7">
        {ghProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
