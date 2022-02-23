import Link from "next/link";

const Partnerships = [
  {
    name: "Dashboard",
    image: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    href: "/",
  },
  {
    name: "Dashboard",
    image: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    href: "/",
  },
  {
    name: "Dashboard",
    image: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    href: "/",
  },
  {
    name: "Dashboard",
    image: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    href: "/",
  },
  {
    name: "Dashboard",
    image: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    href: "/",
  },
  {
    name: "Dashboard",
    image: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    href: "/",
  },
  {
    name: "Dashboard",
    image: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    href: "/",
  },
  {
    name: "Dashboard",
    image: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    href: "/",
  },
  {
    name: "Dashboard",
    image: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    href: "/",
  },
  {
    name: "Dashboard",
    image: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    href: "/",
  },
  {
    name: "Dashboard",
    image: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    href: "/",
  },
  {
    name: "Dashboard",
    image: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    href: "/",
  },
  {
    name: "Dashboard",
    image: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    href: "/",
  },
  {
    name: "Dashboard",
    image: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    href: "/",
  },
  {
    name: "Dashboard",
    image: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    href: "/",
  },
  {
    name: "Dashboard",
    image: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    href: "/",
  },
  {
    name: "Dashboard",
    image: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    href: "/",
  },
  {
    name: "Dashboard",
    image: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    href: "/",
  },
];

export default function LogoCloud() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mt-6 grid grid-cols-4 gap-0.5 md:grid-cols-3 lg:mt-8">
          {Partnerships.map((item) => (
            <div className="col-span-1 flex justify-center py-8 px-8">
              <Link href={item.href} key={item.name}>
                <a>
                  <img
                    className="max-h-12"
                    src={item.image}
                    alt={item.name}
                    logo
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
