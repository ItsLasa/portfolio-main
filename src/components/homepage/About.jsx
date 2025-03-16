import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/me.png";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";
import { AnimatedTooltipPreview } from "../AnimatedTooltipPreview";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    // Try using max width to contain the size of the container
    <section ref={aboutSection} aria-label="about me">
      <Heading title="about me" />
      
      <div className="flex flex-col items-start gap-8 mt-10 md:flex-row lg:gap-10 ">
        <div className="overflow-hidden rounded-md top-28 md:sticky md:w-1/2">
          <img
            ref={profile}
            loading="lazy"
            className="object-cover object-center w-full h-auto rounded-2xl aspect-square md:aspect-auto"
            src={profileImg}
            width="600"
            height="800"
            alt="portrait image of Huy standing in front of a tree and foliage"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="font-semibold leading-tight translate-y-10 opacity-0 text-heading-3 2xl:text-7xl"
            >
              A brief intro, who am I?
            </h3>
            <p ref={body} className="translate-y-10 opacity-0 text-body-1 2xl:text-4xl">
            I am an IT undergraduate at the University of Jaffna, pursuing a Bachelor’s degree in Information Communication & Technology with a specialization in Software Engineering. I am passionate about technology and committed to making a positive impact in the world. I thrive on learning new things and taking on challenges that push me to grow. With a strong foundation in IT and a drive to succeed, I am confident in my ability to contribute meaningfully to the tech industry and bring innovative ideas to life.
              <br></br>
              {/* <br></br>I specialize in crafting elevated, intuitive, and
              minimalistic designs for startups and small businesses to help
              them stand out in the digital landscape with a powerful impact. 😎
              <br></br>
              <br></br>
              When I am not developing or designing, I enjoy creating videos
              that talk about frontend development, productivity and design on{" "}
              <a
                className="underline duration-300 ease-in-out hover:text-secondary-700"
                href="https://www.youtube.com/channel/UCBOAB9RV647G93GxLhEXleA"
              >
                YouTube 📸
              </a> */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
