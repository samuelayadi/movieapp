/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    colors: {
      primary: "#BE123C",
      secondary: "#f8e7eb",
      grey: "#D1D5DB",
      grey2: "#F3F4F6",
      grey3: "#9CA3AF",
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
    },

    screens: {
      xxs: "250px",
      // => @media (min-width: 360px) { ... }

      xs: "350px",
      // => @media (min-width: 360px) { ... }

      sm: "500px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};

      {
        /* <div className=" relative w-full h-full">
        <img
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt=""
          className="z-20 w-full object-cover top-0 absolute h-full fil lg:brightness-50"
        />

        <div className="w-full -mt-[90vh] bg-transparent flex items-center justify-start h-full mix-blend-overlay  top-0 z-30 relative poster-container lg:-mt-[100vh]">
          <div className="container-fluid xs:container mx-auto mt-5 lg:px-6 lg:mt-0">
            <div className="lg:w-6/12 xl:w-5/12">
              <p className="text-xl xs:text-3xl font-semibold lg:text-5xl">{title}</p>
              <p className="text-sm mt-6">{overview}</p>
              <button className="mt-6 px-5 py-2 bg-primary flex items-center rounded-lg">
                <span>
                  <BsFillPlayCircleFill className="mr-3" />
                </span>
                WATCH TRAILER
              </button>
            </div>
          </div>
        </div>
      </div> */
      }
