import { skills} from "../skills";


export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <div className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white"> My Skills
        </div>
        </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
          <div className="  grid-template-cols-2" >
            <img src={skill?.link} className=" h-20 w-20"/>
                <span className="title-font font-medium text-white">
                  {skill?.name}
                </span>
              </div>
            </div>
          ))}
      </div>
      </section>
  )
}
