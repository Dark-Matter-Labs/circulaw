const navigation = {
  WAARDEKETENS: [
    { name: "Gebouwde omgeving", href: "#", className: "" },
    { name: "Houtbouw", href: "#", className: "pl-4" },
    { name: "Circuulaire windmolens", href: "#", className: "pl-4" },
    { name: "Overige maatregelen", href: "#", className: "pl-4" },
    { name: "Consumptiegoederen", href: "#", className: "pl-4" },
    { name: "Biomassa en voedsel", href: "#", className: "pl-4" },
    { name: "Maakindustrie", href: "#", className: "pl-4" },
    { name: "Kunststoffen", href: "#", className: "pl-4" },
  ],

  JURIDISCHE: [
    { name: "Fysieke leefomgeving", href: "#", className: "" },
    { name: "Aanbestedingen", href: "#", className: "" },
    { name: "Bouwen", href: "#", className: "" },
    { name: "Gronduitgifte", href: "#", className: "" },
  ],
  other: [
    { name: "OVER ONS", href: "#", className: "" },
    { name: "BLOG", href: "#", className: "" },
    { name: "CONTACT", href: "#", className: "" },
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
<<<<<<< HEAD
                <h3 className="text-sm text-white tracking-wider uppercase">
                  JURIDISCHE THEMAS
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.JURIDISCHE.map((item) => (
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
              <div className="mt-12 md:mt-0">
=======
>>>>>>> 58940a4 (linting errors)
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
