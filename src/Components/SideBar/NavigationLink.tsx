/** @format */

import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  name: string;
  classes: string
}

const NavigationLink = ({ children, name, classes }: Props) => {
  return (
    <Link to="./" className={`flex py-1 items-center ${classes} rounded cursor-pointer  hover:stroke-neutral-100 stroke-neutral-400   place-items-center gap-3   transition-colors duration-100`}>
      {children}
      <p className="text-inherit text-lg overflow-clip whitespace-nowrap tracking-wide text-center">
        {name}
      </p>
    </Link>
  );
};

export default NavigationLink;
