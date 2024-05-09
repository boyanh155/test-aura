"use client";

import { Button } from "flowbite-react";
import { useTheme } from "next-themes";
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

type Props = {};

const ToggleTheme = (props: Props) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted)
    return (
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
    );

  if (resolvedTheme === "dark") {
    return (
      <Button color="gray" onClick={() => setTheme("light")}>
        <FiMoon className=" mt-0.5 mr-3 h-4 w-4" />
        Dark
      </Button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Button color="gray" onClick={() => setTheme("dark")}>
        <FiSun className=" mt-0.5 mr-3 h-4 w-4" />
        Light
      </Button>
    );
  }
};

export default ToggleTheme;
