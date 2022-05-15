const navigation = {
  WAARDEKETENS: [
    { name: "Gebouwde omgeving", href: "/gebouwde-omgeving", className: "" },
    { name: "Houtbouw", href: "/houtbouw", className: "pl-4" },
    {
      name: "Circulaire windmolens",
      href: "/circulaire-windmolens",
      className: "pl-4",
    },
    {
      name: "Overige maatregelen",
      href: "overige maatregelen",
      className: "pl-4",
    },
    {
      name: "Consumptiegoederen",
      href: "consumptiegoederen",
      className: "pl-4",
    },
    {
      name: "Biomassa en voedsel",
      href: "/biomassa-en-voedsel",
      className: "pl-4",
    },
    { name: "Maakindustrie", href: "/maakindustrie", className: "pl-4" },
    { name: "Kunststoffen", href: "/kunststoffen", className: "pl-4" },
  ],

  other: [
    { name: "OVER ONS", href: "/over-ons", className: "" },
    { name: "BLOG", href: "/blog", className: "" },
    { name: "CONTACT", href: "/contact", className: "" },
  ],
};

export default function Example() {
  return (
    <footer className="bg-[#707A85] mt-20" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8">
          <div className="grid grid-cols-1 gap-8 sm:col-span-3">
            <div className="sm:grid sm:grid-cols-4 md:gap-8">
              <div className="col-span-2">
                <h3 className="text-sm text-white tracking-wider uppercase">
                  WAARDEKETENS
                </h3>
                <div className="grid grid-cols-1 gap-8">
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.WAARDEKETENS.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={`text-base text-white hover:text-[#4099DA] ${item.className}`}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.other.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-white hover:text-[#4099DA]"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
