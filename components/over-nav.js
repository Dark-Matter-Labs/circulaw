const navigation = [
  { name: "Waarom CircuLaw?", href: "/waarom-circulaw", pagename: "waarom" },
  { name: "Wat is CircuLaw?", href: "/wat-is-circulaw", pagename: "wat" },
  {
    name: "Status en ambities",
    href: "/status-en-ambities",
    pagename: "status",
  },
  {
    name: "Wetsanalyse met circulaire blik",
    href: "/wetsanalyse-met-circulaire-blik",
    pagename: "wet",
  },
  { name: "Wie maken CircuLaw?", href: "/wie-maken-circulaw", pagename: "wie" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function OverNav(props) {
  return (
    <nav className="space-y-1" aria-label="Sidebar">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.pagename === props.pagename
              ? "text-black1"
              : "text-greenLink hover:bg-gray-50 hover:text-gray-900",
            "flex items-center px-3 py-2 breadcrumb bg-white1"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          <span className="truncate">
            {">"}
            {item.name}
          </span>
        </a>
      ))}
    </nav>
  );
}
