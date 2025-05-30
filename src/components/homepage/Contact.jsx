import { Icon } from "@iconify/react";
import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function Contact() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const heading = useRef(null)
  const body = useRef(null)
  const contactSection = useRef(null)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: contactSection.current,
      start:"100px bottom",


      // markers: true,
      animation: gsap
        .timeline()
        .to(heading.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0)
        .to(body.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.2),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();

  }, [contactSection])

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <section
      id="contact"
      className="my-[10%] overflow-hidden"
      aria-label="contact me"
    >
      
      
      <Heading title="Contact" />
      <div ref={contactSection} className="flex flex-col gap-20 mt-10 md:grid md:grid-cols-6 md:px-12">
        <div className="col-span-4">
          <h3 ref={heading} className="max-w-lg font-semibold leading-tight translate-y-10 opacity-0 2xl:max-w-3xl text-heading-3 2xl:text-7xl">
            Have an awesome idea? Let&apos;s bring it to life.
          </h3>
          <p ref={body} className="max-w-md mt-4 translate-y-10 opacity-0 2xl:max-w-2xl text-body-2 2xl:text-4xl text-accent-100">
            I am currently  available for freelance work. 
          </p>
          <form
            name="contact"
            action="/contact"
            autoComplete="off"
            // eslint-disable-next-line react/no-unknown-property
            className="mt-10 font-grotesk"
            method="POST" 
          >
            <input type="hidden" name="form-name" value="contact"/>
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
              <div className="relative z-0">
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                <label
                  htmlFor="name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Your name
                </label>
              </div>
              <div className="relative z-0">
                <input
                  required
                  type="text"
                  name="email"
                  id="email"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Your email
                </label>
              </div>
              <div className="relative z-0 sm:col-span-2">
                <textarea
                  required
                  id="message"
                  name="message"
                  rows="5"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Your message
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="mt-10 duration-200 border button group hover:border-accent-400 hover:bg-transparent"
            >
              <span className="relative">
                <span className="absolute w-0 h-1 duration-300 ease-out bottom-2 bg-secondary-700 opacity-90 "></span>
                <span className="group-hover:text-accent-400">
                  Send Message
                </span>
              </span>
            </button>
          </form>
        </div>
        <div className="grid grid-cols-1 col-span-2 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1">
          <div className="space-y-3 ">
            <h4 className="font-semibold text-body-1 2xl:text-4xl">Contact Details</h4>
            <div className="flex flex-col space-y-3 text-body-2 2xl:text-3xl">
              <a
                href="mailto:hello@huyng.xyz"
                className="relative cursor-pointer group w-fit"
                target="_blank"
                rel="noreferrer"
              >
                <span>Manojlasantha306@gmail.com</span>
                <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
              </a>
             
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="font-semibold text-body-1 2xl:text-4xl">My Digital Spaces</h4>
            <div className="space-y-3 text-body-2 2xl:text-3xl ">
              {/* <a
                href="https://bento.me/huyng"
                className="flex items-center space-x-2 group"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="simple-icons:bento" color="#666" />
                <div className="relative">
                  <span>Bento</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a> */}
              <a
                href="https://github.com/ItsLasa"
                className="flex items-center space-x-2 group"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:github" color="#666" />
                <div className="relative ">
                  <span className="">Github</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/manoj-illangasinghe/"
                className="flex items-center space-x-2 group w-fit"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:linkedin" color="#666" />
                <div className="relative">
                  <span>LinkedIn</span>
                  <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              {/* <a
                href="https://www.youtube.com/channel/UCBOAB9RV647G93GxLhEXleA"
                className="flex items-center space-x-2 group"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:youtube" color="#666" />
                <div className="relative">
                  <span>YouTube</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a> */}
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="font-semibold text-body-1 2xl:text-4xl">Location</h4>
            <div className="space-y-2 text-body-2 2xl:text-3xl">
              <p className="">
                Sri Lanka, Dambulla <br></br>
                <span className="text-2xl font-semibold">{time}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
