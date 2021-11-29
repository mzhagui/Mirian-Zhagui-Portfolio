
export default function Contact() {
  return (
    <section id="contact-me" className="bg-gray-900 ">
     <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Contact Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
Thanks for visiting my page, for more information or to contact me please do so via:          </p>
        </div>
        <div className="flex justify-between">
<button className="far fa-envelope fa-5x"
          onClick={() => {
          window.location.href = `mailto:mzhagui29@gmail.com?subject=&body= Hello`
          }} > 
        </button>
        <a href="https://github.com/mzhagui" target="_blank" rel="noopener noreferrer" >
<img className="h-20 w-20	" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github"/>
        </a>
        <a href="https://www.linkedin.com/in/mirian-zhagui-79284421a/" target="_blank" rel="noopener noreferrer">
<img className="h-20 w-20" src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png" alt="linkedin"/>
        </a>
        </div>
        
    </div>
    </section>
  )
}
