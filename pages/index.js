import Link from "next/link";

import Layout from "/components/layout";
import SearchFilter from "/components/search-filter";
import PolicyList from "/components/policy-list";

export default function Index() {
  return (
    <Layout>
      <div className="">
      header content
      </div>
      <div className="flex">
        <div className="">
        <div className="">HOUTBOUW</div>
          <div className="">Verfijnen</div>
          <SearchFilter
            title="Wettelijk bevoegdheidsniveau"
            data={DemoFilterData}
          />
          <SearchFilter title="Rechtsgebied" data={DemoFilterData} />
          <SearchFilter title="Fase" data={DemoFilterData} />
          <SearchFilter title="R - ladder" data={DemoFilterData} />
        </div>
        
        <div className="">
        <div>Circulaire transitie maatregelen & mogelijkheden</div>
          <div className="">
            <PolicyList data={DemoPostData} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

const DemoFilterData = [
  { id: 1, name: "Annette Black" },
  { id: 2, name: "Cody Fisher" },
  { id: 3, name: "Courtney Henry" },
  { id: 4, name: "Kathryn Murphy" },
  { id: 5, name: "Theresa Webb" },
];

const DemoPostData = [
  {
    id: 1,
    name: "Annette Black",
    description: "this is example copy text",
    Bevoegdheidsniveau: "null",
    Reikwijdte: "null",
    Afbreukrisico: "null",
  },
  {
    id: 2,
    name: "Cody Fisher",
    description: "this is example copy text",
    Bevoegdheidsniveau: "null",
    Reikwijdte: "null",
    Afbreukrisico: "null",
  },
  {
    id: 3,
    name: "Courtney Henry",
    description: "this is example copy text",
    Bevoegdheidsniveau: "null",
    Reikwijdte: "null",
    Afbreukrisico: "null",
  },
  {
    id: 4,
    name: "Kathryn Murphy",
    description: "this is example copy text",
    Bevoegdheidsniveau: "null",
    Reikwijdte: "null",
    Afbreukrisico: "null",
  },
  {
    id: 5,
    name: "Theresa Webb",
    description: "this is example copy text",
    Bevoegdheidsniveau: "null",
    Reikwijdte: "null",
    Afbreukrisico: "null",
  },
];
