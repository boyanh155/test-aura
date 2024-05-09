"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const restaurantDetail = {
  name: "gambrinus cherkasskiy",
  rating: 4,
  totalRating: 23,
  closingTime: "11:00 PM",
  address: "Kitay-Gorod, Lubyanka, Ploschad Revolutsii",
  avgCheck: 2000,
  restaurantType: "European,georgian cuisine",
};
const mockID = "randomUUID";
export default function Home() {
  const api = useQuery({
    queryKey: ["restaurant", mockID],
    queryFn: async () => {
      // here can use server action but for now
      // i will use fetch for retrieving data from the server
      const res = await fetch(`/api/restaurant/${mockID}`);
      return res.json();
    },
  });
  return (
    // HOME PAGE
    api.isLoading ? (
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    ) : (
      <div className="bg-neutral-0 w-[95%] mx-auto px-9 py-12 flex-wrap flex gap-16 h-full">
        {/* INFORMATION */}
        <div className="flex flex-col flex-1 gap-8 ">
          {/*  */}
          <div className="flex flex-row justify-between  items-center">
            <div className="flex gap-2">
              <div className="flex">
                {Array(5)
                  .fill(false)
                  .map((_, index) =>
                    index < Math.floor(restaurantDetail.rating) ? true : false
                  )
                  .map((v, index) =>
                    v ? (
                      <svg
                        key={index}
                        className="w-4 h-4 text-primary-100 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ) : (
                      <svg
                        key={index}
                        className="w-4 h-4 ms-1 text-neutral-400 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    )
                  )}
              </div>
              <p className="text-primary-100 font-medium">
                {restaurantDetail.totalRating}
              </p>
            </div>

            <div className="flex gap-4">
              <svg
                className="w-8 h-8 "
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                    stroke="#ff2e4f"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <svg
                className="w-8 h-8 "
                viewBox="-0.5 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M13.47 4.13998C12.74 4.35998 12.28 5.96 12.09 7.91C6.77997 7.91 2 13.4802 2 20.0802C4.19 14.0802 8.99995 12.45 12.14 12.45C12.34 14.21 12.79 15.6202 13.47 15.8202C15.57 16.4302 22 12.4401 22 9.98006C22 7.52006 15.57 3.52998 13.47 4.13998Z"
                    stroke="#ff2e4f"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          <h1 className="text-neutral-800 font-black text-[3rem] capitalize !leading-14">
            {restaurantDetail.name}
          </h1>

          {/* address */}
          <div className="flex flex-col text-neutral-600 gap-3 font-medium">
            <p className="">
              Open until&nbsp;
              {restaurantDetail.closingTime}
            </p>
            <p>{restaurantDetail.address}</p>
            <p>Average check: {restaurantDetail.avgCheck}</p>
            <p>{restaurantDetail.restaurantType}</p>
          </div>
          <div className="mt-8 mx-auto">
            <button className="uppercase text-base font-bold bg-primary-100 px-14 py-5 text-center text-neutral-0 rounded-full cursor-pointer hover:opacity-70 transition-all">
              book a table
            </button>
          </div>
        </div>
        {/* SLIDE */}
        <div
          id="default-carousel"
          className="relative flex-[3]  py-4"
          data-carousel="slide"
        >
          {/* CONTENT */}
          <div className="relative h-full overflow-hidden  ">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <div className="w-full h-full relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <Image
                  priority
                  fill
                  src="https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-1-normal-2253769856506.webp"
                  className="absolute block w-full h-full object-cover"
                  alt="..."
                />
              </div>
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <div className="w-full h-full relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <Image
                  priority
                  fill
                  src="https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-1-normal-2253769856506.webp"
                  className="absolute block w-full h-full object-cover "
                  alt="..."
                />
              </div>
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <div className="w-full h-full relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <Image
                  priority
                  fill
                  src="https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-1-normal-2253769856506.webp"
                  className="absolute block w-full h-full object-cover "
                  alt="..."
                />
              </div>
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <div className="w-full h-full relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <Image
                  priority
                  fill
                  src="https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-1-normal-2253769856506.webp"
                  className="absolute block w-full h-full object-cover "
                  alt="..."
                />
              </div>
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <div className="w-full h-full relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <Image
                  priority
                  fill
                  src="https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-1-normal-2253769856506.webp"
                  className="absolute block w-full h-full object-cover "
                  alt="..."
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
          <div />
        </div>
      </div>
    )
  );
}
