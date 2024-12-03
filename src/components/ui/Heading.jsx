import HeadingSVG from "./HeadingSVG";

export default function Heading({ title }) {
  return (
    <>
      <div className="select-none section-heading ">
        <div className="heading flex translate-y-56 items-center justify-center space-x-[3%]">
          {/* <HeadingSVG /> */}
          <h2 className="mb-8 text-5xl font-medium lowercase text-sky-950 w-fit sm:text-heading-2">
            {title}
          </h2>
          {/* <HeadingSVG /> */}
        </div>
      </div>
    </>
  );
}
