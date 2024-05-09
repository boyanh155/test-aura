import Link from "next/link";
import React from "react";
import ToggleTheme from "@/components/ToggleTheme";
const Header = () => {
  return (
    <div className="w-full bg-neutral-800 flex flex-row px-6 py-8 justify-between border-none">
      {/* MAIN TEXT */}
      <div className="flex flex-row gap-16">
        <div className="text-neutral-0 text-3xl font-bold">EatOut</div>
        {/* MENU BOX */}

        <div className="flex flex-row gap-6 items-center font-light">
          {/* SEARCH */}
          <form action="" className=" ">
            <div className="relative">
              <div className="absolute inset-y-0 end-0 flex items-center pe-6 pointer-events-none">
                <svg
                  className="w-4 h-4 text-neutral-0 dark:text-neutral-0 font-bold"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                name="search"
                type="search"
                id="default-search"
                className="rounded-full text-neutral-0 block w-full !focus:border-none !focus:outline-none p-2 font-light border-none !bg-[#3b3c43] ps-4 text-sm "
                placeholder="Find a restaurant"
                required
              />
            </div>
          </form>

          {/* Filter */}
          <Link
            href="/filter"
            className="text-base capitalize text-neutral-400"
          >
            filter
          </Link>
          {/* Map */}
          <Link href="/map" className="text-base capitalize text-neutral-400">
            map
          </Link>
        </div>
      </div>
      {/* Information */}
      <div className="flex flex-row gap-12 items-center">
        {/* Toggle theme */}
        <ToggleTheme />
        {/* Phone */}
        <a className="font-bold text-neutral-0" href="tel:">
          8&nbsp;800&nbsp;777-30-19
        </a>
        {/* Sign in */}
        <Link href="/sign-in" className="text-base capitalize text-neutral-400">
          sign in
        </Link>
      </div>
    </div>
  );
};

export default Header;
