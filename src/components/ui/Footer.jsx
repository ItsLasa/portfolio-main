export default function Footer() {
  function toTop() {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="flex items-end justify-between px-5 py-4 mt-14 sm:flex text-body-4 md:text-body-3">
      <div className="flex flex-col md:flex-row md:w-[62.5vw] lg:w-[57.5vw] justify-between">
        <div className="flex space-x-1" >
          
          <span>&copy;</span>
          <span>2023</span>
          <span className="font-extrabold uppercase 2xl:text-body-1">Manoj Lasantha</span>
        </div>
        <div>
          
          <span className=" text-body-4 2xl:text-body-1">Site Build and coded with NextJs/Vs-Code❤️‍🔥</span>
        </div>
      </div>
      <button onClick={toTop} className="flex items-center col-span-2 space-x-2 w-fit group 2xl:text-body-1">
        <span className="font-extrabold uppercase duration-200 hover:font-black">BACK TO TOP</span>
        <span className="duration-300 ease-in-out group-hover:-translate-y-3">
          <svg
            className="-rotate-90"
            width="24"
            height="24"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <g clipPath="url(#clip0_238_1313)">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.37114e-06 2.76541e-06L7.54022e-06 50L100 100L2.18557e-06 150L0 200L100 150L100 200L200 150V100V50L100 0V50L4.37114e-06 2.76541e-06ZM100 50L100 100L100 150L200 100L100 50Z"
                fill="url(#paint0_linear_238_1313)"
              />{" "}
            </g>{" "}
            <defs>
              {" "}
              <linearGradient
                id="paint0_linear_238_1313"
                x1="14"
                y1="26"
                x2="179"
                y2="179.5"
                gradientUnits="userSpaceOnUse"
              >
                {" "}
                <stop stopColor="#D1D1C7" />{" "}
              </linearGradient>{" "}
            </defs>{" "}
          </svg>
        </span>
      </button>
    </footer>
  );
}
