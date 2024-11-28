import HeadingSVG from "./HeadingSVG";

export default function Heading({ title }) {
  return (
    <>
      <div className="select-none section-heading ">
        <div className="heading flex translate-y-56 items-center justify-center space-x-[3%]">
          {/* <HeadingSVG /> */}
          <h2 className="text-6xl font-medium uppercase font-DotGothic16 w-fit sm:text-heading-2 text-zinc-600">
            {title}
          </h2>
          {/* <HeadingSVG /> */}
        </div>
      </div>
    </>
  );
}
