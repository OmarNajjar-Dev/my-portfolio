import Image from "next/image";
import { Skills } from "@/components/sections/Skills/data";

interface SkillCardProps {
  skill: Skills;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <li className="group" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <div className="mb-3 p-2 rounded-md bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300">
          <Image
            src={skill.src}
            alt={`${skill.name} logo`}
            width={40}
            height={40}
            className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {skill.name}
        </span>
      </div>
    </li>
  );
}
