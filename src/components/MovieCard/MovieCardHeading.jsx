import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

const MovieCardHeading = () => {
  return (
      <section>
        <div className="bg-white w-full md:mt-20 lg:mt-16">
          <div className="flex justify-between mt-0 container mx-auto lg:px-6">
            <p className="xs:text-2xl font-semibold lg:text-3xl">
              Featured Movies
            </p>
            <p className="text-primary flex items-center space-x-2 xs:text-md lg:text-lg">
              See More{" "}
              <span>
                <IoIosArrowForward />
              </span>
            </p>
          </div>
        </div>
      </section>
  );
}

export default MovieCardHeading