import Link from "next/link";
export default function ActionPanel(props) {
  return (
    <div className="bg-white border-2 border-gray-900 outline-4 shadow sm:rounded-lg ">
      <div className="px-4 py-5 sm:p-6">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <div className="mt-2 max-w-xl text-sm ">{props.paragraph}</div>
          </div>
          <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
            <Link href={props.buttonLink}>
              <a>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-900 hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                >
                  {props.buttonText} →
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
