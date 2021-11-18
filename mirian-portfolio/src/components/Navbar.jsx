export default function Navbar() {
  return (
    <div className= "font-montserrat bg-gray-800 container mx-auto flex md:sticky top-0 z-10 flex-wrap p-9 flex-col md:flex-row items-center "
    >
        <a href="#about" className="ml-3  bg-gray-800 text-4xl text-white">
        Mirian Zhagui</a>
      <nav className="md:mr-auto md:ml-4 bg-gray-800 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
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
