import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaCcStripe } from "react-icons/fa6";
import { IoPrismSharp } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";

const SkillsSection = () => {
  return (
    <div className="py-6">
      <h3 className="font-semibold text-xl">Skills</h3>
      <div className="flex gap-12 justify-center mt-3 flex-wrap">
        <div className="flex flex-col items-center align-middle justify-center gap-3">
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
  );
};

export default SkillsSection;
