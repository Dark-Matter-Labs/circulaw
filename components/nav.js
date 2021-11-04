import Link from "next/link";

export default function Nav() {
  return (
    <div className="">
      <div>Digitale tool Juridisch Landschap</div>
      <div className="bg-black text-white">
        <div>
          <Link href="/">
            <a>Maatregelen</a>
          </Link>
          <Link href="/">
            <a>Voorbeelprojecten </a>
          </Link>
          <Link href="/">
            <a>Juridische kaart</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>Over ons</a>
          </Link>
          <Link href="/">
            <a>Contact </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
