import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaCcStripe } from "react-icons/fa6";
import { IoPrismSharp } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import Project from "./components/project";

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
        <div className="py-6">
          <h3 className="font-semibold text-xl">Skills</h3>
          <div className="flex gap-12 justify-center mt-3">
            <div className="flex flex-col items-center gap-3">
              <IoLogoReact className="text-5xl" />
              <span className="text-xl">React</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <SiNextdotjs className="text-5xl" />
              <span className="text-xl">Next JS</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <RiTailwindCssLine className="text-5xl" />
              <span className="text-xl">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaCcStripe className="text-5xl" />
              <span className="text-xl">Stripe</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <IoPrismSharp className="text-5xl" />
              <span className="text-xl">Prisma</span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16">
        <Project />
      </div>
    </div>
  );
}
