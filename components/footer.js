import Image from "next/image";
import amsLogo from "../public/logo_partners/gasd_sponsor_cmyk_wit.svg";
import climateKICLogo from "../public/EIT-CKIC-Logo_White_Standard.png";
import provinceNord from "../public/logo_partners/PNH_RGB_wit_trans.png";
import provinceFlevLogo from "../public/logo_partners/Provincie-Flevoland_wit.png";
import nlLogo from "../public/logo_partners/logo-nl-nowhitespace.svg";
import dmLogo from "../public/logo_partners/DML_Logo_white@2000x.png";

const navigation = {
  WAARDEKETENS: [
    {
      name: "Gebouwde omgeving",
      href: "",
      className: "font-bold text-green3",
    },
    { name: "Houtbouw", href: "/houtbouw", className: "pl-4 text-white1" },
    {
      name: "Circulaire turbines",
      href: "/circulaire-windmolens",
      className: "pl-4 text-white1",
    },
  ],
  OVER: [
    { name: "Waarom CircuLaw?", href: "/", className: "text-white1" },
    { name: "Wat willen we bereiken?", href: "/", className: "text-white1" },
    { name: "Hoever zijn we?", href: "/", className: "text-white1" },
    { name: "Wie maken het?", href: "/", className: "text-white1" },
    { name: "Meedoen?", href: "/", className: "text-white1" },
  ],

  other: [
    { name: "Veel gestelde vragen", href: "/hoe-het-werkt", className: "" },
    { name: "Contact", href: "/contact", className: "" },
    { name: "Disclaimer/Alpha", href: "/", className: "" },
    { name: "Privacy", href: "/", className: "" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-green1" aria-labelledby="footer-heading">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8">
          <div className="grid grid-cols-1 gap-8 sm:col-span-3">
            <div className="sm:grid sm:grid-cols-4 md:gap-8">
              <div className="">
                <p className="text-sm text-green3 font-publicSans font-bold tracking-wider uppercase">
                  THEMA’S
                </p>
                <div className="grid grid-cols-1 gap-8">
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.WAARDEKETENS.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={`text-base hover:text-[#4099DA] ${item.className}`}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="">
                <p className="text-sm text-green3 font-publicSans font-bold tracking-wider uppercase">
                  OVER CIRCULAW
                </p>
                <div className="grid grid-cols-1 gap-8">
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.OVER.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={`text-base hover:text-[#4099DA] ${item.className}`}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-5">
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
      <div className="mx-10">
        <div className=" py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-2 md:grid-cols-6 lg:grid-cols-6">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <Image
                layout="fixed"
                height={57}
                width={182}
                src={amsLogo}
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <Image
                layout="fixed"
                height={75}
                width={135}
                src={climateKICLogo}
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <Image
                layout="fixed"
                height={39}
                width={200}
                src={provinceNord}
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <Image
                layout="fixed"
                height={100}
                width={200}
                src={provinceFlevLogo}
                alt="Transistor"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <Image
                layout="fixed"
                height={100}
                width={200}
                src={nlLogo}
                alt="Workcation"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <Image
                layout="fixed"
                height={85}
                width={85}
                src={dmLogo}
                alt="Workcation"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
