const navigation = {
  WAARDEKETENS: [
    { name: "Gebouwde omgeving", href: "#" },
    { name: "Houtbouw", href: "#" },
    { name: "Circuulaire windmolens", href: "#" },
    { name: "Overige maatregelen", href: "#" },
    { name: "Consumptiegoederen", href: "#" },
    { name: "Biomassa en voedsel", href: "#" },
    { name: "Maakindustrie", href: "#" },
    { name: "Kunststoffen", href: "#" },
  ],

  JURIDISCHE: [
    { name: "Fysieke leefomgeving", href: "#" },
    { name: "Aanbestedingen", href: "#" },
    { name: "Bouwen", href: "#" },
    { name: "Gronduitgifte", href: "#" },
  ],
  other: [
    { name: "OVER ONS", href: "#" },
    { name: "BLOG", href: "#" },
    { name: "CONTACT", href: "#" },
  ],
};

export default function Example() {
  return (
    <footer className="bg-[#707A85]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm  text-white tracking-wider uppercase">
                  WAARDEKETENS
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.WAARDEKETENS.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm text-white tracking-wider uppercase">
                  JURIDISCHE THEMA'S
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.JURIDISCHE.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.other.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
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
