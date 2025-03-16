import ibgroup from "/src/assets/images/image.png";
import profile1 from "/src/assets/images/3.png";
import profile2 from "/src/assets/images/3.1.png";
import profile3 from "/src/assets/images/4.png";
import todo from "/src/assets/images/todo.png";
// import daddy from "/src/assets/images/app2.png";
// // import sunnyside from "/src/assets/images/app4.png";
// import godaddy from "/src/assets/images/godaddy-desktop.webp";
import zero from "/src/assets/images/project-2.png";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading className="font-Nabla"  title="Projects" />
      <div className="grid grid-cols-1 mt-5 md:grid-cols-12">
        {/* Project #1 */}
        <div className="col-span-1 md:col-span-12">
          <Projects
            link="https://github.com/ItsLasa/app_farm"
            img={ibgroup} //if you need image un comment this and remove video part 
            alt="Farm To Market Food Web"
            name="Farm To Market Food Web"
            type="Web Design • FullStack Development • AI Powered "
            year="2023"
            tools="NextJs • TailwindCSS • Figma • Stripe • Sanity"
            // video="https://cdn.dribbble.com/userupload/17818157/file/original-7726b4b3d6d821dde34f2247f65ae35d.mp4"

          />
        </div>
        {/* Project #2 */}
        <div className="flex flex-row col-span-1 gap-4 md:col-span-12 md:pt-16">
        <div className="col-span-1 pt-0 md:col-span-8 md:pt-16">
          <Projects
            link="https://github.com/ItsLasa/zero-waste"
            img={zero}
            alt="AI-powered Waste Management Platform"
            name="Zero-to-Hero Waste Management"
            type="Web Design • FullStack Development "
            year="2024"
            tools="Next.js • Web3 • Postgres • TailwindCSS •"
          />
        </div>

        <div className="col-span-1 pt-0 md:col-span-8 md:pt-16">
          <Projects
            link="https://github.com/ItsLasa/profile"
            img={profile1}
            alt="Portfolio Site 1"
            name="Portfolio Site-1"
            type="Web Design • Frontend Development "
            year="2024"
            tools="Next.js  • TailwindCSS • Material UI"
          />
        </div>
        </div>

        <div className="flex flex-row col-span-1 gap-4 md:col-span-12 md:pt-16">
        <div className="col-span-2 pt-0 pl-4 md:col-span-10 md:pt-6">
          <Projects
            link="https://github.com/ItsLasa/new_profileSite"
            img={profile3}
            alt="Portfolio Site 1"
            name="Portfolio Site 2"
            type="Web Design • Frontend Development "
            year="2023"
            tools="Next.js• JavaScript • Figma • TailwindCSS • ShadCn"
          />
        </div> 

        <div className="col-span-1 pt-0 md:col-span-8 md:pt-16">
          <Projects
            link="https://github.com/ItsLasa/ToDo.git"
            img={todo}
            alt="Todo List"
            name="Todo App"
            type="Web Design • Frontend Development "
            year="2024"
            tools="Next.js  • TailwindCSS • Toast"
          />
        </div>
        </div>
         

  

        
        {/* <div className="col-span-1 pt-0 h-fit md:col-span-8 md:pt-20">
        
          <Projects
            link="#"
            img={daddy}
            
            alt="godaddy clone page mockup"
            name="GODADDY LANDING PAGE CLONE"
            type="Frontend Development Ongoing Project"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://sunnysidechallenge.netlify.app"
            img={sunnyside}
            alt="sunnyside project mockup"
            name="SUNNYSIDE LANDING PAGE"
            type="Frontend Development"
            year="2022"
            tools="HTML • TailwindCSS • JavaScript"
          />
         
        </div> */}
      </div>
    </section>
  );
}
