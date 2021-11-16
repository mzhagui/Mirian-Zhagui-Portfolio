import pic from '../assets/pic.png'


export default function About() {
  return (
    <section id="about">
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hi, I'm Mirian Zhagui.
          <br className="hidden lg:inline-block" />I love to build amazing
          apps.
        </h1>
          <p className="mb-8 leading-relaxed">
            
        From working at the epicenter of this pandemic to being crowned as heroes of this pandemic, as a dialysis technician turned software engineer, I only inspire to help others no matter the condition. Being able to problem solve while working under pressure, being a fast learner,  and being considerate of others are just a few perks of the many traits I have to offer. Excited to bring blank canvases to life through programming.
        </p>
        <div className="flex justify-center">
        
          <a
            href="#projects"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
            See My Past Work
            </a>
            <a href="https://www.canva.com/design/DAEucMK9gZ4/dYfMZ1nxVBxwsxGwna0TvQ/view?utm_content=DAEucMK9gZ4&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu" target="_blank"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              View my Resume
            </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src={pic}
        />
      </div>
    </div>
  </section>
  )
}
