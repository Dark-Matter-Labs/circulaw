import Link from "next/link";
import Image from "next/image";

import Placeholder from "../public/placeholder.png";

const Partnerships = [
  {
    name: "Dashboard",
    image: " ",
    href: { Placeholder },
  },
  {
    name: "Dashboard",
    image: " ",
    href: { Placeholder },
  },
  {
    name: "Dashboard",
    image: " ",
    href: { Placeholder },
  },
  {
    name: "Dashboard",
    image: " ",
    href: { Placeholder },
  },
  {
    name: "Dashboard",
    image: " ",
    href: { Placeholder },
  },
  {
    name: "Dashboard",
    image: " ",
    href: { Placeholder },
  },
  {
    name: "Dashboard",
    image: " ",
    href: { Placeholder },
  },
  {
    name: "Dashboard",
    image: " ",
    href: { Placeholder },
  },
  {
    name: "Dashboard",
    image: " ",
    href: { Placeholder },
  },
  {
    name: "Dashboard",
    image: " ",
    href: { Placeholder },
  },
  {
    name: "Dashboard",
    image: " ",
    href: { Placeholder },
  },
  {
    name: "Dashboard",
    image: " ",
    href: { Placeholder },
  },
  {
    name: "Dashboard",
    image: " ",
    href: { Placeholder },
  },
  {
    name: "Dashboard",
    image: " ",
    href: { Placeholder },
  },
  {
    name: "Dashboard",
    image: " ",
    href: { Placeholder },
  },
  {
    name: "Dashboard",
    image: " ",
    href: { Placeholder },
  },
  {
    name: "Dashboard",
    image: " ",
    href: { Placeholder },
  },
  {
    name: "Dashboard",
    image: " ",
    href: { Placeholder },
  },
];

export default function LogoCloud() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mt-6 grid grid-cols-4 gap-0.5 md:grid-cols-3 lg:mt-8">
          {Partnerships.map((item, i) => (
            <div className="col-span-1 flex justify-center py-8 px-8" key={i}>
              <Link href={item.href} key={item.name}>
                <a>
                  <div className="max-h-12">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={500}
                      height={500}
                    />
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
