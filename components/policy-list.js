import Link from "next/link";

export default function PolicyList(props) {
  return (
    <fieldset>
      <div className="">
        {props.data.map((data, dataIdx) => (
          <div key={dataIdx} className="block py-7">
            <div className="block">
              <Link href={"/laws/" + data.id} key={data.id}>
                <a className="underline text-lg font-semibold ">
                  {data.lawTitel}
                </a>
              </Link>
            </div>
            <div className="block">{data.officieleTitel}</div>

            <div className="flex space-x-3">
              <div className="flex-2 text-normal text-gray-400">
                Bevoegdheidsniveau:{" "}
                <span className="block-inline font-semibold text-gray-900">
                  {data.Bevoegdheidsniveau}
                </span>
              </div>
              <div className="flex-1 text-normal text-gray-400">
                Reikwijdte:{" "}
                <span className="block-inline font-semibold text-gray-900">
                  {data.Reikwijdte}
                </span>
              </div>
              <div className="flex-1 text-normal text-gray-400">
                Afbreukrisico:{" "}
                <span className="block-inline font-semibold text-gray-900">
                  {data.Afbreukrisico}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
