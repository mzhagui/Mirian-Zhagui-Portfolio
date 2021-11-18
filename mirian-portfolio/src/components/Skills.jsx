import { skills } from "../skills";
import {BadgeCheckIcon} from  "@heroicons/react/solid";


export default function Skills() {
  return (
    <section id="skills" className="p-10% my-32 ">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <div className="sm:text-4xl  text-3xl font-medium title-font mb-4 text-black"> My Skills
        </div>
        </div>
      <div className="flex flex-wrap lg:w-4/5  sm:mx-auto sm:mb-2 -mx-2">
      {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-montserrat font-medium text-white">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
      </div>
      </section>
  )
}
