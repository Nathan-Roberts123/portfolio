import Project from "./components/project";
import SkillsSection from "./components/skills-section";
import { ProjectProps } from "./components/project";

const projects: ProjectProps[] = [
  {
    projectName: "Onlins Store",
    linkToProject: "https://onlinestore-nathancody.vercel.app/store",
    linkToGitRepo: "https://github.com/Nathan-Roberts123/online-store-nextjs",
    imageSrc: "/project images/blue shop.png",
  },
];

export default function Home() {
  return (
    <div className="text-white px-28">
      <div className="flex text-center flex-col mt-8 gap-4">
        <h1 className="text-4xl font-bold">
          Hey there! I&lsquo;m Nathan Roberts.
        </h1>
        <h2 className="text-xl font-medium">
          I love turning ideas into reality with Next.js.
        </h2>
        <h3 className="mt-12">
          Explore my work, learn about my journey, and let&apos;s connect to
          build something great.
        </h3>
        <SkillsSection />
      </div>
      <div className="py-16">
        {projects.map((project) => {
          return <Project key={project.projectName} {...project} />;
        })}
      </div>
    </div>
  );
}
