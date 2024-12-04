import ibgroup from "/src/assets/images/image.png";
import memento from "/src/assets/images/web2.png";
import acc from "/src/assets/images/app3.jpg";
import daddy from "/src/assets/images/app2.png";
import sunnyside from "/src/assets/images/app4.png";
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
      <div className="grid grid-cols-1 gap-16 mt-10 gap-y-10 md:grid-cols-12">
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
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://mementostudio.netlify.app/"
            img={memento}
            alt="memento landing page mockup"
            name="memento studio landing page"
            type="Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://realbusinessaccountants.netlify.app"
            img={acc}
            alt="real business accountant project mockup"
            name="real business accountants"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript • Figma"
          />
        </div>
        <div className="col-span-1 pt-0 h-fit md:col-span-8 md:pt-20">
        
          <Projects
            link="https://godaddyuiclone.netlify.app"
            img={daddy}
            
            alt="godaddy clone page mockup"
            name="GODADDY LANDING PAGE CLONE"
            type="Frontend Development"
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
         
        </div>
      </div>
    </section>
  );
}
