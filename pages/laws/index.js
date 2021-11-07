import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

import Layout from "/components/layout";
import SearchFilter from "/components/search-filter";
import PolicyList from "/components/policy-list";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Laws() {
  const { query } = useRouter();
  const { data, error } = useSWR(() => `/api/laws/`, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="">header content</div>
      <div className="flex">
        <div className="p-3 mt-14">
          <h2 className="text-lg">HOUTBOUW</h2>
          <div className="">Verfijnen</div>
          Paste Filters Here
        </div>

        <div className="p-3 mt-14">
          <h1 className=" block text-4xl">
            Circulaire transitie maatregelen & mogelijkheden
          </h1>
          <div className="block">
            <span className="">165</span> maatregelen gevonden
          </div>
          <div>
            <input type="checkbox" />
            <span className="pl-3">
              Maatregelen met voorbeelden van succesvolle toepassingen
            </span>
          </div>
          <div>
            <input type="checkbox" />
            <span className="pl-3">
              Alleen maatregelen in HUIDIGE wet- en regelgeving
            </span>
          </div>
          <div className="">
            <PolicyList data={data} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
