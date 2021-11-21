import Link from "next/link";

export default function PolicyList(props) {
  return (
    <fieldset>
      <div className=''>
        {props.data.map((data, dataIdx) => (
          <div key={dataIdx} className='block py-5'>
            <div className='block my-1'>
              <Link href={"/laws/" + data.id} key={data.id}>
                <a className='underline text-lg font-semibold'>
                  {data.lawTitel}
                </a>
              </Link>
            </div>
            <div className='block'>
              {data.Rechtsgebied} - {data.officieleTitel}
            </div>

            <div className='flex space-x-8'>
              <div className='flex-2 mr-5 text-normal text-base text-gray-400'>
                Bevoegdheidsniveau:{" "}
                <span className='block-inline font-semibold text-base text-gray-900'>
                  {data.Bevoegdheidsniveau}
                </span>
              </div>
              <div className='flex-2 mr-5 text-normal text-base text-gray-400'>
                Invloed:{" "}
                <span className='block-inline font-semibold text-base text-gray-900'>
                  {data.Reikwijdte}
                </span>
              </div>
              <div className='flex-2 mr-5 text-normal text-base text-gray-400'>
                Afbreukrisico:{" "}
                <span className='block-inline font-semibold text-base text-gray-900'>
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
