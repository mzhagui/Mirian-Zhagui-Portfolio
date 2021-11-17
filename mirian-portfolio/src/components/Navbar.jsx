export default function Navbar() {
  return (
    <div className= "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <a className=" flex
        title-font
        font-medium
        items-center
        text-gray-900
        mb-4
        md:mb-0"> </a>
        <a href="#about" className="ml-3 text-4xl text-white">
        Mirian Zhagui</a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a href="#projects" className="mr-5 text-white hover:underline text-left">
          Projects
        </a>
        <a href="#skills" className="mr-5 text-white hover:underline">
          Skills
        </a>
        <a href="#contact-me" className="mr-5 text-white hover:underline">
          Contact Me
        </a>
      </nav>
    </div>
  )
}
