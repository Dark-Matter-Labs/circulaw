import Link from "next/link";

export default function Button({ text, href }) {
  return (
    <>
      <div className="mt-6">
        <div className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
          <Link href="/blog/hello-world">
            <a href={href}>{text} →</a>
          </Link>
        </div>
      </div>
    </>
  );
}
