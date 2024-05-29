import Image from "next/image";
import Link from "next/link";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaCcStripe } from "react-icons/fa6";
import { IoPrismSharp } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";

export interface ProjectProps {
  linkToProject: string;
  linkToGitRepo: string;
  imageSrc: string;
  projectName: string;
}

const Project = ({
  linkToGitRepo,
  linkToProject,
  imageSrc,
  projectName,
}: ProjectProps) => {
  return (
    <div className="text-white flex flex-col md:flex-row gap-4 border-t pt-8">
      <div className="">
        <Image
          src={imageSrc}
          width={700}
          height={400}
          alt="blue shop project"
        />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Link href={linkToProject} className="text-3xl font-extrabold">
            {projectName}
          </Link>
          <Link className="text-blue-400 mr-3" href={linkToProject}>
            Link To The Project
          </Link>
          <Link className="text-blue-400 mr-3" href={linkToGitRepo}>
            Link To GitHub Repository
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            Next JS <SiNextdotjs className="text-4xl" />
          </div>
          <div className="flex gap-2 items-center">
            Tailwind CSS <RiTailwindCssLine className="text-4xl" />
          </div>
          <div className="flex gap-2 items-center">
            Stripe <FaCcStripe className="text-4xl" />
          </div>
          <div className="flex gap-2 items-center">
            Prisma <IoPrismSharp className="text-4xl" />
          </div>
          <div className="flex gap-2 items-center">
            Postgres <BiLogoPostgresql className="text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
